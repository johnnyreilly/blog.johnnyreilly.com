---
slug: a-nicer-net-api-for-bloombergs-open-api
title: "Getting up to speed with Bloomberg's Open API..."
authors: johnnyreilly
tags: [asp.net, c#]
hide_table_of_contents: false
description: 'John documents his experience investigating Bloombergs Open API. He includes a simple C# console application wrapper for the API.'
---

A good portion of any devs life is usually spent playing with APIs. If you need to integrate some other system into the system you're working on (and it's rare to come upon a situation where this doesn't happen at some point) then it's API time.

<!--truncate-->

Some APIs are well documented and nice to use. Some aren't. I recently spent a goodly period of time investigating [Bloomberg's Open API](http://www.openbloomberg.com/open-api/) and it was a slightly painful experience. So much so that I thought it best to write up my own experiences and maybe I can save others time and a bit of pain.

Also, as I investigated the Bloomberg Open API I found myself coming up with my own little mini-C#-API. (It's generally a sure sign you've found an API you don't love if you end up writing your own wrapper.) This mini API did the heavy lifting for me and just handed back nicely structured data to deal with. I have included this wrapper here as well.

## Research

The initial plan was to, through code, extract Libor and Euribor rates from Bloomberg. I had access to a Bloomberg terminal and I had access to the internet - what could stop me? After digging around for a little while I found some useful resources that could be accessed from the Bloomberg terminal:

1. Typing “`WAPI&lt;GO&gt;`” into Bloomberg lead me to the Bloomberg API documentation.
2. Typing “`DOCS 2055451&lt;GO&gt;`” into Bloomberg (I know - it's a bit cryptic) provided me with samples of how to use the Bloomberg API in VBA

To go with this I found some useful documentation of the Bloomberg Open API [here](http://www.openbloomberg.com/files/2012/10/blpapi-developers-guide.pdf) and I found the .NET Bloomberg Open API itself [here](http://www.openbloomberg.com/open-api/).

## Hello World?

The first goal when getting up to speed with an API is getting it to do something. Anything. Just stick a fork into it and see if it croaks. Sticking a fork into Open API was achieved by taking the 30-odd example apps included in the Bloomberg Open API and running each in turn on the Bloomberg box until I had my "he's alive!!" moment. (I did find it surprising that not all of the examples worked - I don't know if there's a good reason for this...)

However, when I tried to write my own C# console application to interrogate the Open API it wasn't as plain sailing as I'd hoped. I'd write something that looked correct, compiled successfully and deploy it onto the Bloomberg terminal only to have it die a sad death whenever I tried to fire it off.

I generally find the fastest way to get up and running with an API is to debug it. To make calls to the API and then examine, field by field and method by method, what is actually there. This wasn't really an option with my console app though. I was using a shared Bloomberg terminal with very limited access. No Visual Studio on the box and no remote debugging enabled.

It was then that I had something of a eureka moment. I realised that the code in the VBA samples I'd downloaded from Bloomberg looked quite similar to the C# code samples that shipped with Open API. Hmmmm.... Shortly after this I found myself sat at the Bloomberg machine debugging the Bloomberg API using the VBA IDE in Excel. (For the record, these debugging tools are aren't too bad at all - they're nowhere near as slick as their VS counterparts but they do the job.) This was my [Rosetta Stone](http://en.wikipedia.org/wiki/Rosetta_Stone) \- I could take what I'd learned from the VBA samples and translate that into equivalent C# / .NET code (bearing in mind what I'd learned from debugging in Excel and in fact sometimes bringing along the VBA comments themselves if they provided some useful insight).

## He's the Bloomberg, I'm the Wrapper

So I'm off and romping... I have something that works. Hallelujah! Now that that hurdle had been crossed I found myself examining the actual Bloomberg API code itself. It functioned just fine but it did a couple of things that I wasn't too keen on:

1. The Bloomberg API came with custom data types. I didn't want to use these unless it was absolutely necessary - I just wanted to stick to the standard .NET types. This way if I needed to hand data onto another application I wouldn't be making each of these applications dependant on the Bloomberg Open API.
2. To get the data out of the Bloomberg API there was an awful lot of boilerplate. Code which handled the possibilities of very large responses that might be split into several packages. Code which walked the element tree returned from Bloomberg parsing out the data. It wasn't a beacon of simplicity.

I wanted an API that I could simply invoke with security codes and required fields. And in return I wanted to be passed nicely structured data. As I've already mentioned a desire to not introduce unnecessary dependencies I thought it might well suit to make use of nested Dictionaries. I came up with a simple C# Console project / application which had a reference to the Bloomberg Open API. It contained the following class; essentially my wrapper for Open API operations: (please note this is deliberately a very "bare-bones" implementation)

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Bloomberglp.Blpapi;

namespace BloombergConsole
{
    class BloombergApi
    {
        #region Members / Contructors

        private Session _session = null;
        private Service _refDataService = null;

        private readonly string _serverHost;
        private readonly int _serverPort;

        public BloombergApi(string serverHost = "localhost", int serverPort = 8194)
        {
            _serverHost = serverHost;
            _serverPort = serverPort;
        }

        /// <summary>
        /// Initialise the Session and the Service
        /// </summary>
        internal void InitialiseSessionAndService()
        {
            if (_session == null)
            {
                var sessionOptions = new SessionOptions
                {
                    ServerHost = _serverHost,
                    ServerPort = _serverPort
                };

                //Console.WriteLine("Connecting to {0}:{1}", sessionOptions.ServerHost, sessionOptions.ServerPort);

                _session = new Session(sessionOptions);

                if (!_session.Start())
                    throw new Exception("Failed to connect!");

                if (!_session.OpenService("//blp/refdata"))
                {
                    _session.Stop();
                    _session = null;

                    throw new Exception("Failed to open //blp/refdata");
                }

                _refDataService = _session.GetService("//blp/refdata");
            }
        }

        /// <summary>
        /// Dispose the Session and the Service
        /// </summary>
        internal void DisposeSessionAndService()
        {
            _refDataService = null;

            //Stop the session
            if (_session != null)
            {
                _session.Stop();
                _session = null;
            }
        }

        #endregion

        #region Methods

        internal Dictionary<string,    //Security
            Dictionary<string, object> //Fields and values
            > GetSecuritiesFields(string[] securities, string[] fields)
        {
            var securitiesFields = new Dictionary<string, Dictionary<string, object>>();

            //Create request
            var referenceDataRequest = _refDataService.CreateRequest("ReferenceDataRequest");

            //Securities
            var securitiesElement = referenceDataRequest.GetElement("securities");
            foreach (var security in securities)
                securitiesElement.AppendValue(security);

            //Fields
            var fieldsElement = referenceDataRequest.GetElement("fields");
            foreach (var field in fields)
                fieldsElement.AppendValue(field);

            //   Send off request
            _session.SendRequest(referenceDataRequest, null);

            //   Start with our flag set to False for not done
            var done = false;

            //   Continue as long as we are not done
            while (!done)
            {
                //   Retrieve next event from the server
                var eventObj = _session.NextEvent();

                //   As long as we have a partial or final response, start to process data
                if (eventObj.Type == Event.EventType.RESPONSE ||
                    eventObj.Type == Event.EventType.PARTIAL_RESPONSE)
                {
                    //  Loop through messages
                    foreach (Message msg in eventObj)
                    {
                        //   Error handler in case of problem which throws meaningful exception
                        if (msg.AsElement.HasElement("responseError"))
                            throw new Exception("Response error:  " + msg.GetElement("responseError").GetElement("message"));

                        //   Extract the securityData top layer and the field data
                        //   History comes back on a single security basis so no looping there
                        var securityDataArray = msg.GetElement("securityData");

                        //   Loop through each security
                        for (var i = 0; i < securityDataArray.NumValues; i++)
                        {
                            //   First take out the security object...
                            var security = securityDataArray.GetValueAsElement(i);

                            var securityName = security.GetElementAsString("security");

                            //   ... then extract the fieldData object
                            var fieldData = security.GetElement("fieldData");

                            //If we need to add a new security to the securitiesFields dictionary then do so
                            Dictionary<string, object> results = null;
                            if (!securitiesFields.ContainsKey(securityName))
                                securitiesFields.Add(securityName, new Dictionary<string, object>());

                            //Get the fieldsByDate dictionary from the securitiesFields dictionary
                            results = securitiesFields[securityName];

                            //Extract results and store in results dictionary
                            foreach (var dataElement in fieldData.Elements)
                            {
                                var dataElementName = dataElement.Name.ToString();

                                //Not using this at present - just demonstrating that we can
                                switch (dataElement.Datatype)
                                {
                                    //Special handling to co-erce bloomberg datetimes back to standard .NET datetimes
                                    case Schema.Datatype.DATE:
                                        results.Add(dataElementName, dataElement.GetValueAsDate().ToSystemDateTime());
                                        break;
                                    case Schema.Datatype.DATETIME:
                                        results.Add(dataElementName, dataElement.GetValueAsDatetime().ToSystemDateTime());
                                        break;
                                    case Schema.Datatype.TIME:
                                        results.Add(dataElementName, dataElement.GetValueAsDatetime().ToSystemDateTime());
                                        break;

                                    //Standard handling
                                    default:
                                        results.Add(dataElementName, dataElement.GetValue());
                                        break;
                                }
                            }
                        }
                    }

                    //   Once we have a response we are done
                    if (eventObj.Type == Event.EventType.RESPONSE) done = true;
                }
            }

            return securitiesFields;
        }

        internal Dictionary<string,     //Security
            Dictionary<DateTime,        //DateTime of security
            Dictionary<string, object>> //Fields and values
            > GetSecuritiesFieldsByDate(string[] securities, string[] fields, DateTime startDate, DateTime endDate)
        {
            var securitiesFieldsByDate = new Dictionary<string, Dictionary<DateTime, Dictionary<string, object>>>();

            //Create request
            var historyDataRequest = _refDataService.CreateRequest("HistoricalDataRequest");

            //Securities
            var securitiesElement = historyDataRequest.GetElement("securities");
            foreach (var security in securities)
                securitiesElement.AppendValue(security);

            //Fields
            var fieldsElement = historyDataRequest.GetElement("fields");
            foreach (var field in fields)
                fieldsElement.AppendValue(field);

            //   Set the start date and end date as YYYYMMDD strings
            historyDataRequest.Set("startDate", startDate.ToString("yyyyMMdd"));
            historyDataRequest.Set("endDate", endDate.ToString("yyyyMMdd"));

            //   Send off request
            _session.SendRequest(historyDataRequest, null);

            //   Start with our flag set to False for not done
            var done = false;

            //   Continue as long as we are not done
            while (!done)
            {
                //   Retrieve next event from the server
                var eventObj = _session.NextEvent();

                //   As long as we have a partial or final response, start to process data
                if (eventObj.Type == Event.EventType.RESPONSE ||
                    eventObj.Type == Event.EventType.PARTIAL_RESPONSE)
                {
                    //  Loop through messages
                    foreach (Message msg in eventObj)
                    {
                        //   Error handler in case of problem which throws meaningful exception
                        if (msg.AsElement.HasElement("responseError"))
                            throw new Exception("Response error:  " + msg.GetElement("responseError").GetElement("message"));

                        //   Extract the securityData top layer and the field data
                        //   History comes back on a single security basis so no looping there
                        var security = msg.GetElement("securityData");
                        var securityName = security.GetElementAsString("security");
                        var fieldData = security.GetElement("fieldData");

                        //   Extract the data for each requested field
                        for (var i = 0; i < fieldData.NumValues; i++)
                        {
                            var data = fieldData.GetValueAsElement(i);

                            //   First get the date - this is our key
                            var date = data.GetElementAsDate("date").ToSystemDateTime();

                            //If we need to add a new security to the securitiesFieldsByDate dictionary then do so
                            Dictionary<DateTime, Dictionary<string, object>> fieldsByDate = null;
                            if (!securitiesFieldsByDate.ContainsKey(securityName))
                                securitiesFieldsByDate.Add(securityName, new Dictionary<DateTime, Dictionary<string, object>>());

                            //Get the fieldsByDate dictionary from the securitiesFieldsByDate dictionary
                            fieldsByDate = securitiesFieldsByDate[securityName];

                            //Extract results and store in results dictionary
                            var results = new Dictionary<string, object>();
                            foreach (var dataElement in data.Elements)
                            {
                                var dataElementName = dataElement.Name.ToString();

                                //Not using this at present - just demonstrating that we can
                                switch (dataElement.Datatype)
                                {
                                    //Special handling to co-erce bloomberg datetimes back to standard .NET datetimes
                                    case Schema.Datatype.DATE:
                                        results.Add(dataElementName, dataElement.GetValueAsDate().ToSystemDateTime());
                                        break;
                                    case Schema.Datatype.DATETIME:
                                        results.Add(dataElementName, dataElement.GetValueAsDatetime().ToSystemDateTime());
                                        break;
                                    case Schema.Datatype.TIME:
                                        results.Add(dataElementName, dataElement.GetValueAsDatetime().ToSystemDateTime());
                                        break;

                                    //Standard handling
                                    default:
                                        results.Add(dataElementName, dataElement.GetValue());
                                        break;
                                }
                            }

                            //Save results dictionary to fieldsByDate dictionary
                            fieldsByDate.Add(date, results);
                        }
                    }

                    //   Once we have a response we are done
                    if (eventObj.Type == Event.EventType.RESPONSE) done = true;
                }
            }

            return securitiesFieldsByDate;
        }

        #endregion
    }
}
```

The project also contained this class which demonstrates how I made use of my wrapper:

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;


namespace BloombergConsole
{
    class NicerBloombergApiDemo
    {
        internal const string PX_LAST = "PX_LAST";
        internal const string PREV_CLOSE_VALUE_REALTIME = "PREV_CLOSE_VALUE_REALTIME";
        internal const string CHG_NET_1D = "CHG_NET_1D";
        internal const string CHG_PCT_1D = "CHG_PCT_1D";
        internal const string CHG_PCT_YTD = "CHG_PCT_YTD";

        internal const string LIBOR_1_MONTH = "BP0001M Index";
        internal const string LIBOR_3_MONTH = "BP0003M Index";
        internal const string LIBOR_6_MONTH = "BP0006M Index";
        internal const string EURIBOR_1_MONTH = "EUR001M Index";
        internal const string EURIBOR_3_MONTH = "EUR003M Index";
        internal const string EURIBOR_6_MONTH = "EUR006M Index";

        /// <summary>
        /// A demo of the nicer client
        /// </summary>
        /// <param name="args"></param>
        public static void Main(String[] args)
        {
            System.Console.WriteLine("Bloomberg console demo...");

            var startDateTime = DateTime.Today.AddDays(-3);
            var endDateTime = DateTime.Today;

            var nicerApi = new BloombergApi();
            nicerApi.InitialiseSessionAndService();
            try
            {
                //Get fields for given dates
                var securitiesFieldsByDate = nicerApi.GetSecuritiesFieldsByDate(
                    new string[] { LIBOR_1_MONTH, LIBOR_3_MONTH, LIBOR_6_MONTH, EURIBOR_1_MONTH, EURIBOR_3_MONTH, EURIBOR_6_MONTH
                    },
                    new string[] { PREV_CLOSE_VALUE_REALTIME, PX_LAST, CHG_NET_1D, CHG_PCT_1D, CHG_PCT_YTD
                    },
                    startDateTime, endDateTime);
                Console.WriteLine("\r\nGetSecuritiesFieldsByDate");

                //Loop by security
                foreach (var security in securitiesFieldsByDate)
                {
                    Console.WriteLine("Security: {0}", security.Key);

                    //Loop by date
                    foreach (var dateAndFields in security.Value.OrderBy(d => d.Key))
                    {
                        Console.WriteLine(dateAndFields.Key.ToString("yyyy-MM-dd"));

                        //Loop by field
                        foreach (var keyValue in dateAndFields.Value)
                        {
                            Console.WriteLine("{0}: {1} ({2})", keyValue.Key, keyValue.Value, keyValue.Value.GetType());
                        }
                    }
                }
                Console.WriteLine();

                //Get current rates
                var flashRates = nicerApi.GetSecuritiesFields(
                    new string[] { LIBOR_1_MONTH, LIBOR_3_MONTH, LIBOR_6_MONTH, EURIBOR_1_MONTH, EURIBOR_3_MONTH, EURIBOR_6_MONTH
                    },
                    new string[] { PREV_CLOSE_VALUE_REALTIME, PX_LAST, CHG_NET_1D, CHG_PCT_1D, CHG_PCT_YTD
                    });
                foreach (var securityAndFields in flashRates.OrderBy(d => d.Key))
                {
                    Console.WriteLine(securityAndFields.Key);
                    foreach (var keyValue in securityAndFields.Value)
                        Console.WriteLine("{0}: {1} ({2})", keyValue.Key, keyValue.Value, keyValue.Value.GetType());
                }
                Console.WriteLine();
            }
            catch (Exception e)
            {
                System.Console.WriteLine(e.ToString());
            }

            System.Console.WriteLine("Press ENTER to quit");
            try
            {
                System.Console.Read();
            }
            catch (System.IO.IOException)
            {
            }
        }
    }
}
```

This covered my bases. It was simple, it was easy to consume and it didn't require any custom types. My mini-API is only really catering for my own needs (unsurprisingly). However, there's lots more to the Bloomberg Open API and I may end up taking this further in the future if I encounter use cases that my current API doesn't cover.

## Updated (07/12/2012)

Finally, a PS. I found in the [Open API FAQs](http://www.openbloomberg.com/faq/) that _"Testing any of that functionality currently requires a valid Bloomberg Desktop API (DAPI), Server API (SAPI) or Managed B-Pipe subscription. Bloomberg is planning on releasing a stand-alone simulator which will not require a subscription."_ There isn't any word yet on this stand-alone simulator. I emailed Bloomberg at [open-tech@bloomberg.net](mailto:open-tech@bloomberg.net) to ask about this. They kindly replied that _"Unfortunately it is not yet available. We understand that this makes testing API applications somewhat impractical, so we're continuing to work on this tool."_ Fingers crossed for something we can test soon!

## Note to self (because I keep forgetting)

If you're looking to investigate what data is available about a security in Bloomberg it's worth typing “`FLDS&lt;GO&gt;`” into Bloomberg. This is the Bloomberg Fields Finder. Likewise, if you're trying to find a security you could try typing “`SECF&lt;GO&gt;`” into Bloomberg as this is the Security Finder.

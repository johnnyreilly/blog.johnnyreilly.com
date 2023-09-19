---
slug: potted-history-of-using-ajax-on
title: 'A Potted History of using Ajax (on the Microsoft Stack of Love)'
authors: johnnyreilly
tags: [jquery, javascript]
hide_table_of_contents: false
description: 'Discovering Ajax and JSON transformed Johns approach to programming by lifting limitations and improving performance.'
---

This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I've now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help ".Net-ify" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I \***promise**\*.) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done "on-the-fly". Now if you asked me at the time I'd have said "can't be done". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's [webservice.htc](http://msdn.microsoft.com/en-us/library/ie/ms531033%28v=vs.85%29.aspx) library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely [Ajax](<http://en.wikipedia.org/wiki/Ajax_(programming)>)\-y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could [split](<http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split>) and unpackage as your first step on the server.

<!--truncate-->

- The only valid return type was a single string. And so if you wanted to return a number of numeric values (as we did) the only way to do this was to package up return values into a very long string with delimiters in and (you guessed it!) [split](<http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split>) and unpackage as your first step on the client.
- The only thing that you could (or would want to) send back and forth between client and server was XML

So to recap, I'm now aware that it's possible for JavaScript to interact with the server through the use of web services. It's possible, but ugly, not that quick and requires an awful lot of manual serialization / deserialization operations. It's clearly powerful but not much fun at all. And that's where I left it for a number of years. Let's fade to black... It's now 2007 and Microsoft have released ASP.NET Ajax, the details of which are well explained in this [article](http://msdn.microsoft.com/en-us/magazine/cc163499.aspx) (which I have only recently discovered). Now I'm always interested in "the new" and so I was naturally interested in this. Just to be completely upfront about this I should confess that when I first discovered ASP.NET Ajax I didn't clock the power of it at all. Initially I just switched over from using webservice.htc to ASP.NET Ajax. This alone gave us a \***massive**\* performance improvement (I know it was massive since we actually received a "well done" email from our users which is testament to the difference it was making to their experience of the system). But we were still performing our manual serialisation / deserialisation of values on the client and the server. ie. Using Ajax was now much faster but still not too much fun. Let's jump forward in time again to around 2010 to the point in time when I was discovering jQuery and that JavaScript wasn't actually evil. It's not unusual for me to play around with "what if" scenarios in my code, just to see what might might be possible. Sometimes I discover things. So it was with JSON. We had a web service in the system that allowed us to look up a counterparty (ie a bank account) with an identifier. Once we looked it up we packaged up the counterparty details (eg name, location etc) into a big long string with delimiters and sent it back to client. One day I decided to change the return type on the web service from a string to the actual counterparty class. So we went from something like this:

```cs
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
[ScriptService]
public class CounterpartyWebService : System.Web.Services.WebService
{
  [WebMethod]
  public string GetCounterparty(string parameters)
  {
    string[] aParameters = parameters.Split("|");
    int counterpartyId = int.Parse(aParameters[0]);
    bool includeLocation = (aParameters[1] == "1");
    Counterparty counterparty = \_counterpartyDb
    .GetCounterparty(counterpartyId);

        string returnValue = counterparty.Id +
                          "|" + counterparty.Name +
                          (includeLocation
                            ? "|" + counterparty.Location
                            : "");

        return returnValue;
  }
}
```

To something like this:

```cs
[WebMethod]
public Counterparty GetCounterparty(string parameters)
{
  string[] aParameters = parameters.Split("|");
  int counterpartyId = int.Parse(aParameters[0]);
  bool includeLocation = (aParameters[1] == "1");
  Counterparty counterparty = _counterpartyDb
    .GetCounterparty(counterpartyId);

  return counterparty;
}
```

I genuinely expected that this was just going to break. It didn't. Suddenly on the client I'm sat there with a full blown object that looks just like the object I had on the server.

**WHAT STRANGE MAGIC COULD THIS BE??????????** Certain that I'd discovered witchcraft I decided to try something else. What would happen if I changed the signature on the method so it received individual parameters and passed my individual parameters to the web service instead of packaging them up into a string? I tried this:

```cs
[WebMethod]
public Counterparty GetCounterparty(int counterpartyId, bool includeLocation)
{
  Counterparty counterparty = \_counterpartyDb
  .GetCounterparty(counterpartyId);

  return counterparty;
}
```

And it worked! **[IT WORKED!!!!!!!!!!!!!!!!!!!!!](http://www.youtube.com/watch?v=N_dWpCy8rdc&feature=related)** (And yes I know I wasn't actually using the includeLocation parameter - but the point was it was being passed to the server and I could have used it if I'd wanted to.) I couldn't believe it. For **years** I'd been using Ajax and without **any** idea of the power available to me. The ignorance! The stupidity of the man! To my complete surprise it turned out that: - Ajax could be quick! ASP.NET Ajax was lightening fast when compared to webservice.htc

- You could send multiple arguments to a web service without all that packaging nonsense
- You could return complex objects without the need for packaging it all up yourself.

Essentially the source of all this goodness was the magic of JSON. I wouldn't really come to comprehend this until I moved away from using the ASP.NET Ajax client libraries in favour of using the [jQuery.ajax](http://api.jquery.com/jQuery.ajax/) functionality. (Yes, having mostly rattled on about using webservice.htc and ASP.NET Ajax I should clarify that I have now forsaken both for jQuery as I find it more powerful and more configurable - but it's the journey that counts I guess!) It's abysmal that I didn't discover the power of Ajax sooner but the difference this discovery made to me was immense. Approaches that I would have dismissed or shied away from previously because of the amount of "plumbing" involved now became easy. This massively contributed to my [programmer joy](http://www.hanselman.com/blog/HanselminutesPodcast260NETAPIDesignThatOptimizesForProgrammerJoyWithJonathanCarter.aspx)! Next time I promise I'll aim to actually get onto JSON.

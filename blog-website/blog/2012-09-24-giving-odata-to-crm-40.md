---
title: "Giving OData to CRM 4.0"
authors: johnnyreilly
tags: [OData, WCF Data Services, CRM 4.0, LINQ]
hide_table_of_contents: false
---
Just recently I was tasked with seeing if we could provide a way to access our Dynamics CRM instance via OData. My initial investigations made it seem like there was nothing for me to do; [CRM 2011 provides OData support out of the box](http://msdn.microsoft.com/en-us/library/gg309461.aspx). Small problem. We were running CRM 4.0.

 It could well have ended there apart from the fact that Microsoft makes it astonishingly easy to to create your own OData service using WCF Data Services. Because it's so straightforward I was able to get an OData solution for CRM 4.0 up and running with very little heavy lifting at all. Want to know how it's done?

## LINQ to CRM

To start with you're going to need the [CRM SDK 4.0](http://www.microsoft.com/en-us/download/details.aspx?id=38). This contains a "vanilla" LINQ to CRM client which is used in each of the example applications that can be found in `microsoft.xrm\samples`. We want this client (or something very like it) to use as the basis for our OData service.

In order to get a LINQ to CRM provider that caters for your own customised CRM instance you need to use the `crmsvcutil` utility from the CRM SDK (found in the `microsoft.xrm\tools\` directory). Detailed instructions on how to use this can be found in this Word document: `microsoft.xrm\advanced_developer_extensions_-_developers_guide.docx`. Extra information around the topic can be found using these links:

- [MSDN docs on xRM](http://msdn.microsoft.com/en-us/library/ff681559)
- [MSDN examples of LINQ queries](http://msdn.microsoft.com/en-us/library/ff681573)
- [CRM blog site](http://www.dynamicscrmtrickbag.com/)
- [Another site listing examples of LINQ to CRM](http://community.adxstudio.com/products/adxstudio-portals/developers-guide/archive/linq-to-crm-22/)



You should end up with custom generated data context classes which look not dissimilar to similar classes that you may already have in place for Entity Framework etc. With your `Xrm.DataContext` in hand (a subclass of `Microsoft.Xrm.Client.Data.Services.CrmDataContext`) you'll be ready to move forwards.

## Make me an OData Service

As I said, Microsoft makes it fantastically easy to get an OData service up and running. [In this example](http://msdn.microsoft.com/en-US/library/dd728275) an entity context model is created from the Northwind database and then exposed as an OData service. To create my CRM OData service I followed a similar process. But rather than creating an entity context model using a database I plugged in the `Xrm.DataContext` instance of CRM that we created a moment ago. These are the steps I followed to make my service:

1. Create a new ASP.NET Web Application called "CrmOData" (in case it's relevant I was using Visual Studio 2010 to do this).
2. Remove all ASPXs / JavaScript / CSS files etc leaving you with an essentially empty project.
3. Add references to the following DLLs that come with the SDK: - microsoft.crm.sdk.dll
    - microsoft.crm.sdktypeproxy.dll
    - microsoft.crm.sdktypeproxy.xmlserializers.dll
    - microsoft.xrm.client.dll
    - microsoft.xrm.portal.dll
    - microsoft.xrm.portal.files.dll

    

4. Add the `&lt;microsoft.xrm.client&gt;` config section to your web.config (not forgetting the associated Xrm connection string)
5. Add this new file below to the root of the project:



<script src="https://gist.github.com/3765280.js?file=Crm.svc.cs"></script>

And that's it - done. When you run this web application you will find an OData service exposed at http://localhost:12345/Crm.svc. You could have it even simpler if you wanted - you could pull out the logging that's in place and leave only the `InitializeService` there. That's all you need. (The `GetEntityById` method is a helper method of my own for identifying the GUIDs of CRM.)

You may have noticed that I have made use of caching for my OData service following the steps I found [here](https://blogs.msdn.com/b/peter_qian/archive/2010/11/17/using-asp-net-output-caching-with-wcf-data-services.aspx). Again you may or may not want to use this.

## Now, a warning...

Okay - not so much a warning as a limitation. Whilst most aspects of the OData service work as you would hope there is no support for the $select operator. I had a frustrating time trying to discover why and then came upon this explanation:

*"$select statements are not supported. This problem is being discussed here [http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678](http://social.msdn.microsoft.com/Forums/en/adodotnetdataservices/thread/366086ee-dcef-496a-ad15-f461788ae678) and is caused by the fact that CrmDataContext implements the IExpandProvider interface which in turn causes the DataService to lose support for $select projections"*

You can also see [here](http://social.microsoft.com/Forums/en/crmdevelopment/thread/31daedb4-3d75-483a-8d7f-269af3375d74) for the original post discussing this.

## Finishing off

In the example I set out here I used the version of WCF Data Services that shipped with Visual Studio 2010. WCF Data Services now ships separately from the .NET Framework and you can [pick up the latest and greatest from Nuget](http://nuget.org/packages?q=wcf+data+services). I understand that you could easily switch over to using the latest versions but since I didn't see any feature that I needed on this occasion I haven't.

I hope you find this useful.



---
slug: wcf-transport-windows-authentication
title: 'WCF Transport Windows authentication using NetTcpBinding in an Intranet environment'
authors: johnnyreilly
tags: [auth]
hide_table_of_contents: false
description: 'John explains authentication issues when migrating from .NET Remoting to WCF. The post highlights a security feature and suggests solutions.'
---

## Update

<!--truncate-->

Since I wrote this initial post I've taken thinks on a bit further. [Take a look at this post to see what I mean.](../2012-03-22-wcf-moving-from-config-to-code-simple/index.md) I know I said I'd write about JSON this time. I will get to that but not this time. This time WCF authentication quirks. I've been working on a project that uses .NET Remoting to have a single central point to which web applications and Windows services can call into. This is used in an intranet environment and all the websites and Windows services were hosted on the same single server along with our .NET Remoting Windows service. (They could quite easily have been on different servers but there was no need in this case.) It was decided to "embrace the new" by migrating this .NET Remoting project over to WCF. The plan wasn't to do anything revolutionary, just to move from one approach to the other as easily as possible. I found the following useful article on MSDN: [http://msdn.microsoft.com/en-us/library/aa730857%28v=vs.80%29.aspx](http://msdn.microsoft.com/en-us/library/aa730857%28v=vs.80%29.aspx) This particular article was helpful and following the steps enclosed I was quickly up and running with a basic WCF service hosted in a Windows service. It was at this point I started thinking about security. The existing .NET Remoting approach had no security in place. This wasn't ideal but also probably wasn't the worry you might think. It was hosted in an intranet environment and hence not so exposed to the rigours of the Wild Wild Web. However, since I was looking at WCF I thought it would be a good opportunity to get some basic security in place. This generally pleases auditors. I opted to use [Windows Transport authentication](http://msdn.microsoft.com/en-us/library/ms733089.aspx) as this seemed pretty appropriate for an intranet environment. The idea being that we'd authenticate with Windows for an account in our domain. After headbutting Windows for some time I managed to get a successful client call going from the website running on my development machine to the (separate) development server that was hosting our WCF Window service using Transport Windows authentication. However, when deploying the website to the development server I discovered we would experience the following error when the website attempted to call the WCF service (on the same server).

```
Event Type: Failure Audit
Event Source: Security
Event Category: Logon/Logoff
Event ID: 537
Date: 15/02/2012
Time: 16:32:04
User: NT AUTHORITY\SYSTEM
Computer: MINE999
Description:
Logon Failure:
Reason: An error occurred during logon
Logon Type: 3
Logon Process: ^
Authentication Package: NTLM
Status code: 0xC000006D
```

Not terribly helpful. At the end of the day it seemed we were suffering from a security "feature" introduced by Microsoft to prevent services calling services on the same box with a fully qualified name. An explanation of this can be found here: [http://developers.de/blogs/damir_dobric/archive/2009/08/28/authentication-problems-by-using-of-ntlm.aspx](http://developers.de/blogs/damir_dobric/archive/2009/08/28/authentication-problems-by-using-of-ntlm.aspx) Using method 1 in the enclosed link I initially worked round this by amending the registry and rebooting the server: [http://support.microsoft.com/kb/887993](http://support.microsoft.com/kb/887993) This was not a fantastic solution. Fortunately I subsequently found a better one but since the resources on the web are \***ATROCIOUS**\* on this point I thought I should take the time to note down the full explanation since otherwise it'll be lost in the mists of time. Here we go: The equivalent security to the previous .NET Remoting solution in WCF was to use this config setting on client and service:

```xml
<security mode="None" />
```

As I've said, this is an intranet environment and so having this "none" security setting in place is made less worrying by the fact that the network itself is secured. But obviously this is not ideal and unlikely to be audit compliant. To use Windows security you need this netTcpBinding config setting on client and service:

```xml
<security mode="Transport">
<transport clientCredentialType="Windows" />
</security>
```

To call the service with this setting in place you will need to be an authenticated Windows user. (Or at the very least impersonating one - but you knew that.) **NOW FOR THE MOST IMPORTANT BIT.....** The endpoint addresses \***must**\* be "localhost" for _both_ client and service when both are deployed to the same server. If this is not the case then you will suffer from the aforementioned security "feature" which will provide you with unhelpful "the server has rejected the client credentials" messages and \***nothing**\* else. **OK FINISHED - MOVE ALONG NOW... NOTHING MORE TO SEE HERE** With WCF Windows Transport authentication in place you can interrogate the calling user id within the service methods by simply evaluating ServiceSecurityContext.Current.PrimaryIdentity.Name (which will be something like "myDomain\myUserName"). So we you wanted to, we could have a simple step which evaluated if the calling user is on the "approved" / "authorised" list. I'm sure this could be made more sophisticated by using groups etc I guess - though I haven't investigated it further as yet. In fact, I suspect Microsoft may have something even more sophisticated still available for use which I'm unaware of - if anyone knows a simple explanation of this then please do let me know! In closing, I do think Microsoft could work on providing more helpful error messages than "the server has rejected the client credentials". Going by what I read as I researched this error many people seem to have struggled much as I did before eventually bailing out and ended up chancing it by turning security off in their applications. Clearly it is not desirable to have people so confused by errors that they give up and settle for a less secure solution.

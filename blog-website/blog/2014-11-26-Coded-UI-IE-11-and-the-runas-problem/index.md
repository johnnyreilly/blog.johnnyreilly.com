---
slug: Coded-UI-IE-11-and-the-runas-problem
title: "Pretending to be someone you're not and the dark pit of despair"
authors: johnnyreilly
tags: [automated testing]
hide_table_of_contents: false
description: 'Workaround for issues with Coded UI impersonation feature. Tests can be unreliable, but the fix works well.'
---

## Coded UI, IE 11 and the "runas" problem

<!--truncate-->

"I'm not angry, I'm just disappointed."

That's kind of how I feel about Coded UI tests. It may well be that you've never heard of them - in my experience very few people seem to be aware of them. What are they? Well, I've never used [Selenium](http://www.seleniumhq.org/) but as best I understand Coded UI is Microsoft's own version of that. Namely it's a way to automate testing, in my case browser-based testing. You can write a suite of tests that will spin up your application and test it out, going from screen to screen, URL to URL and asserting all is as you would expect.

The project that I'm currently working on has a pretty comprehensive set of tests covering the use of the application. Each night as the clock strikes midnight a lonely computer in the West End of London whirrs into life and runs the full suite. It takes about 8 hours and at the end a report slips into your inbox letting you know of any failures.

## Sounds brilliant right? How could someone not love this?

Well a number of reasons. First of all, _it takes 8 hours_!!!! That's a long time; I'd rather learn what I broke today rather than tomorrow.

Also, and this is probably more significant, Coded UI tests are pretty flaky. Let me qualify that. For a test to be particularly useful it has to be quick, repeatable and reliable. As I've said, Coded UI tests are not quick.

By their very nature integration tests (of which Coded UI tests are a type) can never be entirely reliably repeatable. They test your app in it's entirety. So, for example, if a 3rd party service goes down for 5 minutes then you will get failed tests. You'll burn time investigating these false positives.

Further to that, Coded UI tests are repeatable, except when they're not. I've seen colleagues reduced to near tears by incredible sensitivity of Coded UI tests. Out of the box Coded UI tests appear to ship with the ["Works on my machine"](http://blog.codinghorror.com/the-works-on-my-machine-certification-program/) guarantee. It requires far more effort that you'd expect to come up with tests that can be reliably expected to pass. They will fail for surprising reasons. For instance, did you know that using the 2.x branch of jQuery won't work with Coded UI? [Neither did I.](https://connect.microsoft.com/VisualStudio/Feedback/Details/794841) I've lost track of the time that has been wasted running the same test in multiple different environments trying to identify what exactly is upsetting Coded UI about the environment this time.

It is sad but true that with Coded UI tests you can spend an _enormous_ amount of time maintaining the test pack on a day to day basis. As infrastructure and project dependencies are upgraded you will sadly discover Coded UI has once again gone into the foetal position and has to tempted back to normal functioning by whispering sweet nothings in it's ear. (_"It's not true that they've ended support for Windows XP" / "IE 6 will live forever"_ and so on)

Coded UI also appears to be badly supported by Microsoft. Documentation is pretty sparse and, as we'll come back to in a minute, Coded UI is sometimes broken or damaged by other products shipped by Microsoft. This makes it hard to have faith in Coded UI. Indeed, if you're thinking of automating your QA testing my advice would be "look into Selenium". Not because I've used it (I haven't) but those I've met who have used Selenium and Coded UI say Selenium wins hands down.

## And yet, and yet...

All of the above said, if you have a Coded UI test suite it can still pay dividends. Significant dividends. As I mentioned, my current project has a significant coverage of Coded UI tests. We've crawled over a lot of broken glass to put these together. But now they're there it is undeniably useful.

Every now and then we'll do a significant refactor of part of the application. For instance, we've entirely changed our persistence strategy in the app but been able to check the code in with a high degree of confidence gleaned from running our test suite using the refactored codebase.

Let me be clear: Coded UI tests can be useful.

## The "runas" Problem

Long preamble over, this post is about how to work around the latest issue Coded UI has thrown in our direction. I call it the "runas" problem. Our application is a Knockout / ASP.Net MVC web app built to be used in an intranet environment. By that I mean that identity is handled by Active Directory / [Windows Authentication](http://en.wikipedia.org/wiki/Integrated_Windows_Authentication). When someone logs into our app we know who they are without them having to directly supply us with a username and password. No, by logging into their computer they have announced just who they are and Internet Explorer (for it is he) will pass along the credentials. (The app can be used with pretty much any browser but we're only mandated to support IE 9+.)

In order that we can test the app we have a number of test accounts set up in Active Directory. These test accounts have been assigned various roles (viewer / editor / administrator etc). Our tests are designed to run using these accounts in order that all scenarios can be adequately tested.

To achieve this lofty goal the following code (or something very like it) is executed as the first step in any Coded UI test:

```cs
string browserLocation = "C:\\Program Files\\Internet Explorer\\iexplore.exe";
string url = "http://localhost:12345/";
string username = "test.editor";
string domain = "theDomain";
var password = new SecureString();
foreach (char c in "test.editor.password")
{
    password.AppendChar(c);
}

ApplicationUnderTest.Launch(browserLocation, null, url, username, password, domain);
```

What this does is fire up Internet Explorer as the supplied user of theDomain\test.editor, and navigate to the home page. With that as our starting place we could dependably then run a test as this test user. This was a solution not without quirks (on occasion Coded UI tests would "stutter" - repeating each keypress 3 times with calamitous effects). But generally, this worked.

Until that is either Visual Studio 2013 Update 3 or Internet Explorer 11 was installed. One of these (and it appears to be hotly contested) broke the ability to run the above code successfully. After these were installed running the above code resulted in the following error message:

> "The application cannot be started. This could be due to one of the following reasons:
>
> 1.  Another instance of the application is already running and only one instance can be running at a time.
> 2.  The application started another process and has now stopped. You may need to launch the process directly.
> 3.  You do not have sufficient privileges for this application." File: C:\Program Files\Internet Explorer\iexplore.exe."

Lamentably, this was pretty much unresolvable and [logging it with Microsoft yielded nothing helpful](https://connect.microsoft.com/VisualStudio/feedbackdetail/view/949049/coded-ui-cannot-run-as-a-different-user-with-visual-studio-2013-update-3). This is what I mean about Coded UI being badly supported by Microsoft. Despite my best efforts to report this issue both to Connect and [elsewhere](http://social.msdn.microsoft.com/Forums/vstudio/en-US/f48665e4-569a-4b67-9bdb-5522b2adffb2/cannot-run-coded-ui-tests-as-different-user-on-windows-81?forum=vsmantest#28c9decb-b579-4848-a7a9-f41c57584d59) and in the end nothing useful happened.

So what to do? I still have Coded UI tests, I still need to be able to run them. And crucially I need to be able to run them impersonating a different user. What to do indeed....

## The <strike>hack</strike>

workaround

After IE 11 / Visual Studio Update 3 / whatev's was installed I was left with a setup that allowed me to run Coded UI tests, <u>but only</u>

as the current user. On that basis I started looking into a little MVC jiggery pokery. All my controllers inherit from a single base controller. Inside there I placed the following extra override:

```cs
public abstract class BaseController : System.Web.Mvc.Controller
{
  //...

  protected override void OnAuthorization(AuthorizationContext filterContext)
  {
#if DEBUG
    if (filterContext.HttpContext.IsDebuggingEnabled)// Is compilation debug="true" set in the web.config?
    {
      var userToImpersonate = Session["UserToImpersonate"] as string;
      if (!string.IsNullOrEmpty(userToImpersonate))
      {
        // userToImpersonate example: "test.editor@theDomain.com"
        filterContext.HttpContext.User = new RolePrincipal(new WindowsIdentity(userToImpersonate));
      }
    }
#endif
      base.OnAuthorization(filterContext);
  }

  //...
}
```

Each request will trigger this method as one of the first steps in the MVC pipeline. What it does is checks the `Session` for a user to impersonate. (Yes I'm as wary of Session as the next chap - but in this case it's the right tool for the job.) If a user has been specified then it replaces the current user with the `Session` user. From this point forwards the app is effectively running as that user. That's great!

In order that Coded UI can make use of this mechanism we need to introduce a "hook". This is going to look a bit hacky - bear with me. Inside `Global.asax.cs` we're going to add a `Session_Start` method:

```cs
protected void Session_Start(object sender, EventArgs eventArgs)
{
#if DEBUG
    // If a user to impersonate has been supplied then add this user to the session
    // Impersonation will happen in the OnAuthorization method of our base MVC controller
    // Note, this is only allowed in debug mode - not in release mode
    // This exists purely to support coded ui tests
    if (Context.IsDebuggingEnabled)  // Is compilation debug="true" set in the web.config?
    {
        var userToImpersonate = Request.QueryString["UserToImpersonate"] as string;
        if (!string.IsNullOrEmpty(userToImpersonate))
        {
            Session.Add("UserToImpersonate", userToImpersonate);
        }
    }
#endif
}
```

For the first Request in a Session this checks the `QueryString` for a parameter called `UserToImpersonate`. If it's found then it's placed into `Session`. With this hook exposed we can now amend the first step that all our Coded UI tests follow:

```cs
// Various lines commented out as doesn't work with IE 11 - left as an example of how it could be done in the past
//string browserLocation = "C:\\Program Files\\Internet Explorer\\iexplore.exe";
string url = "http://localhost:12345/";
string username = "test.editor";
string domain = "theDomain.com";
//var password = new SecureString();
//foreach (char c in "test.editor.password")
//{
//    password.AppendChar(c);
//}

//ApplicationUnderTest.Launch(browserLocation, null, url, username, password, domain);

// Suffixing url with UrlToImpersonate which will be picked up in Session_Start and used to impersonate
// in OnAuthorization in BaseController.  Also no longer using ApplicationUnderTest.Launch; switched to
// BrowserWindow.Launch
// No longer used parameters: browserLocation, password
var userToImpersonate = username + "@" + domain; // eg "test.editor@theDomain.com"
var urlWithUser = url + "?UserToImpersonate=" + HttpUtility.UrlEncode(userToImpersonate);
var browser = BrowserWindow.Launch(urlWithUser, "-nomerge"); // "-nomerge" flag forces a new session
```

As you can see we actually need less when we're using this approach. We no longer need to directly specify the password or the browser location. And the user to impersonate is now passed in as the part of the initial URL used to launch the test.

Pay careful attention to the "-nomerge" flag that is passed in. This ensures that when another browser instance is opened a new session will be started. This is essential for "multi-user" tests that run tests for _different_ users as part of the same test. It ensures that "test.editor" and "test.different.editor" can co-exist happily.

## What do I think of the workaround?

This approach works reliably and dependably. More so than the original approach which on occasion wouldn't work or would "stutter" keypresses. That's the good news.

The not so good news is that this approach is, in my view, a bit of hack. I want you to know that this isn't my ideal.

I _really_ don't like having to change the actual system code to facilitate the impersonation requirement. Naturally we only ship the release and not the debug builds to Production so the "back door" that this approach provides will not exist in our Production builds. It will only be accessible in our development environments and on our Coded UI test server. But it feels oh so wrong that there is an effective potential back door in the system now. Well, only if the stars were to align in a really terrible (and admittedly rather unlikely) way. But still, you take my point. Caveat emptor and all that. This is something of a cutdown example to illustrate the point. If anyone else intends to use this then I'd suggest doing more to safeguard your approach. Implementing impersonation allowlists so "any" user cannot be impersonated would be a sensible precaution to start with.

Perhaps this is just one more reason that I'm not that enamoured of Coded UI. Once again it is useful but I've had to compromise more than I'd like to keep it's use. If anyone out there has a better solution I would _love_ to hear from you.

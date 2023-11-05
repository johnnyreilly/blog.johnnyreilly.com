---
slug: a-tale-of-angular-html5mode-aspnet-mvc
title: 'A tale of Angular, html5mode, ASP.Net MVC and ASP.Net Web API'
authors: johnnyreilly
tags: [angularjs, asp.net]
hide_table_of_contents: false
description: 'This article offers tips on how to preserve specific routes while redirecting non-specified URLs to the root angular app page for ASP.Net MVC and Web API.'
---

So. You want to kick hash based routing to the kerb. You want _real_ URLs. You've read the HTML5 mode section of the [Angular $location docs](https://docs.angularjs.org/guide/$location) and you're good to go. It's just a matter of dropping `$locationProvider.html5Mode(true)` into your app initialisation right?

Wrong.

<!--truncate-->

You want your URLs to be shareable. If, when you copy the URL out of your browser and send it someone else, they do not get taken to the same position in the application as you do then I've got news for you: THAT'S NOT REALLY A URL. And just using `$locationProvider.html5Mode(true)` has done nothing useful for you. You want to ensure that, if the URL entered in the browser does not relate to a specific server-side end-point, the self-same HTML root page is _always_ served up. Then Angular can load the correct resources for the URL you have entered and get you to the required state.

There are tips to be found in Angular UI's [How to: Configure your server to work with html5Mode](https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions#how-to-configure-your-server-to-work-with-html5mode) doc. However they required a little extra fiddling to get my ASP.Net back end working quite as I wanted. To save you pain, here are my cultural learnings.

## ASP.Net MVC

I had an ASP.Net MVC app which I wanted to use `html5mode` with. To do this is simply a matter of tweaking your `RouteConfig.cs` like so:

```cs
public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            // Here go the routes that you still want to be able to hit
            routes.MapRoute(
                name: "IAmARouteThatYouStillWantToHit",
                url: "ThatsWhyIAmRegisteredFirst",
                defaults: new { controller = "Hittable", action = "Index" }
            );

            // Everything else will hit Home/Index which serves up the root angular app page
            routes.MapRoute(
                name: "Default",
                url: "{*anything}", // THIS IS THE MAGIC!!!!
                defaults: new { controller = "Home", action = "Index" }
            );
        }
```

With this in place my existing routes work just as I would hope. Any route that doesn't fit that registered can be assumed to be `html5mode` related and will serve up the root angular app page as I'd hope.

## ASP.Net Web API

Later I realised that the app in question was mostly static content. Certainly the root angular app page was and so it seemed wasteful to require an ASP.Net MVC controller to serve up that static content. So I stripped out MVC from the app entirely, choosing to serve raw HTML instead. For the dynamic parts I switched to using Web API. This was "hittable" as long as I had my `WebApiConfig.cs` and my `system.webServer` section in my `web.config` lined up correctly, viz:

```cs
public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // other stuff
        }
    }
```

```xml
<configuration>

    <system.webServer>

        <defaultDocument>
            <files>
                <clear />
                <add value="build/index.html" /> <!-- This is the root document for the Angular app -->
            </files>
        </defaultDocument>

        <rewrite>
            <rules>
                <rule name="Main Rule" stopProcessing="true">
                    <match url=".*" />
                    <conditions logicalGrouping="MatchAll">
                        <!-- Allows "api/" prefixed URLs to still hit Web API controllers
                             as defined in WebApiConfig -->
                        <add input="{REQUEST_URI}" pattern="api/" ignoreCase="true" negate="true" />

                        <!-- Static files and directories can be served so partials etc can be loaded -->
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                    </conditions>
                    <action type="Rewrite" url="/" />
                </rule>
            </rules>
        </rewrite>

    </system.webServer>

</configuration>
```

With this in place I can happily hit "api" prefixed URLs and still land on my Web API controllers whilst other URLs will serve up the root angular app page. Lovely.

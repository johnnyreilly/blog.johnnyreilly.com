---
slug: using-web-optimization-with-mvc-3
title: 'Using Web Optimization with MVC 3'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Optimize JavaScript/CSS in MVC 3 through Microsofts NuGet package, bundling jQuery, jQuery UI, jQuery Validate and Modernizr.'
---

A while ago I [wrote](http://icanmakethiswork.blogspot.com/2012/06/how-im-structuring-my-javascript-in-web.html#WebOptimization) about optimally serving up JavaScript in web applications. I mentioned that Microsoft had come up with a NuGet package called [Microsoft ASP.NET Web Optimization](http://nuget.org/packages/Microsoft.AspNet.Web.Optimization) which could help with that by minifying and bundling CSS and JavaScript. At the time I was wondering if I would be able to to use this package with pre-existing MVC 3 projects (given that the package had been released together with MVC 4). Happily it turns out you can. But it's not quite as straightforward as I might have liked so I've documented how to get going with this here...

<!--truncate-->

## Getting the Basics in Place

To keep it simple I'm going to go through taking a "vanilla" MVC 3 app and enhancing it to work with Web Optimization. To start, follow these basic steps:

1. Open Visual Studio (bet you didn't see that coming!)
2. Create a new MVC 3 application (I called mine "WebOptimizationWithMvc3" to demonstrate my imaginative flair). It doesn't really matter which sort of MVC 3 project you create - I chose an Intranet application but really that's by the by.
3. Update pre-existing NuGet packages
4. At the NuGet console type: "`Install-Package Microsoft.AspNet.Web.Optimization`"

Whilst the NuGet package adds the necessary references to your MVC 3 project it doesn't add the corresponding namespaces to the web.configs. To fix this manually add the following child XML element to the `&lt;namespaces&gt;` element in your root and Views web.config files:

`&lt;add namespace="System.Web.Optimization" /&gt;`

This gives you access to `Scripts` and `Styles` in your views without needing the fully qualified namespace. For reasons best known to Microsoft I had to close down and restart Visual Studio before intellisense started working. You may need to do likewise.

Next up we want to get some JavaScript / CSS bundles in place. To do this, create a folder in the root of your project called "App_Start". There's nothing magical about this to my knowledge; this is just a convention that's been adopted to store all the bits of startup in one place and avoid clutterage. (I think this grew out of Nuget; see [David Ebbo talking about this here](http://blog.davidebbo.com/2011/02/appstart-folder-convention-for-nuget.html).) Inside your new folder you should add a new class called `BundleConfig.cs` which looks like this:

```cs
using System.Web;
using System.Web.Optimization;

namespace WebOptimizationWithMvc3.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}
```

The above is what you get when you create a new MVC 4 project (as it includes Web Optimization out of the box). All it does is create some JavaScript and CSS bundles relating to jQuery, jQuery UI, jQuery Validate, Modernizr and the standard site CSS. Nothing radical here but this example should give you an idea of how bundling can be configured and used. To make use of `BundleConfig.cs` you should modify your `Global.asax.cs` so it looks like this:

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using WebOptimizationWithMvc3.App_Start; //NEW MAGIC GOODNESS
using System.Web.Optimization;           //NEW MAGIC GOODNESS

namespace WebOptimizationWithMvc3
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode,
    // visit http://go.microsoft.com/?LinkId=9394801

    public class MvcApplication : System.Web.HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default", // Route name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional } // Parameter defaults
            );

        }

        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

            //NEW MAGIC GOODNESS START
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            //NEW MAGIC GOODNESS END
        }
    }
}
```

Once you've done this you're ready to start using Web Optimization in your MVC 3 application.

## Switching over \_Layout.cshtml to use Web Optimization

With a "vanilla" MVC 3 app the only use of CSS and JavaScript files is found in `_Layout.cshtml`. To switch over to using Web Optimization you should replace the existing `_Layout.cshtml` with this: (you'll see that the few differences that there are between the 2 are solely around the replacement of link / script tags with references to `Scripts` and `Styles` instead)

```html
<!doctype html>
<html>
  <head>
    <title>@ViewBag.Title</title>
    @Styles.Render("~/Content/css", "~/Content/themes/base/css")
    @Scripts.Render("~/bundles/modernizr")
  </head>
  <body>
    <div class="page">
      <div id="header">
        <div id="title">
          <h1>My MVC Application</h1>
        </div>
        <div id="logindisplay">
          Welcome <strong>@User.Identity.Name</strong>!
        </div>
        <div id="menucontainer">
          <ul id="menu">
            <li>@Html.ActionLink("Home", "Index", "Home")</li>
            <li>@Html.ActionLink("About", "About", "Home")</li>
          </ul>
        </div>
      </div>
      <div id="main">@RenderBody()</div>
      <div id="footer"></div>
    </div>
    @Scripts.Render("~/bundles/jquery", "~/bundles/jqueryui",
    "~/bundles/jqueryval") @RenderSection("scripts", required: false)
  </body>
</html>
```

Do note that in the above `Scripts.Render` call we're rendering out 3 bundles; jQuery, jQuery UI and jQuery Validate. We're not using any of these in `_Layout.cshtml` but rendering these (and their associated link tags) gives us a chance to demonstrate that everything is working as expected.

In your root web.config file make sure that the following tag is in place: `&lt;compilation debug="<b>true</b>" targetFramework="4.0"&gt;`. Then run, the generated HTML should look something like this:

```html
<!doctype html>
<html>
  <head>
    <title>Home Page</title>
    <link href="/Content/site.css" rel="stylesheet" />
    <link href="/Content/themes/base/jquery.ui.core.css" rel="stylesheet" />
    <link
      href="/Content/themes/base/jquery.ui.resizable.css"
      rel="stylesheet"
    />
    <link
      href="/Content/themes/base/jquery.ui.selectable.css"
      rel="stylesheet"
    />
    <link
      href="/Content/themes/base/jquery.ui.accordion.css"
      rel="stylesheet"
    />
    <link
      href="/Content/themes/base/jquery.ui.autocomplete.css"
      rel="stylesheet"
    />
    <link href="/Content/themes/base/jquery.ui.button.css" rel="stylesheet" />
    <link href="/Content/themes/base/jquery.ui.dialog.css" rel="stylesheet" />
    <link href="/Content/themes/base/jquery.ui.slider.css" rel="stylesheet" />
    <link href="/Content/themes/base/jquery.ui.tabs.css" rel="stylesheet" />
    <link
      href="/Content/themes/base/jquery.ui.datepicker.css"
      rel="stylesheet"
    />
    <link
      href="/Content/themes/base/jquery.ui.progressbar.css"
      rel="stylesheet"
    />
    <link href="/Content/themes/base/jquery.ui.theme.css" rel="stylesheet" />

    <script src="/Scripts/modernizr-2.6.2.js"></script>
  </head>
  <body>
    <div class="page">
      <div id="header">
        <div id="title">
          <h1>My MVC Application</h1>
        </div>
        <div id="logindisplay">Welcome <strong>LNR\jreilly</strong>!</div>
        <div id="menucontainer">
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/Home/About">About</a></li>
          </ul>
        </div>
      </div>
      <div id="main">
        <h2>Welcome to ASP.NET MVC!</h2>
        <p>
          To learn more about ASP.NET MVC visit
          <a href="http://asp.net/mvc" title="ASP.NET MVC Website"
            >http://asp.net/mvc</a
          >.
        </p>
      </div>
      <div id="footer"></div>
    </div>
    <script src="/Scripts/jquery-1.8.2.js"></script>
    <script src="/Scripts/jquery-ui-1.8.24.js"></script>
    <script src="/Scripts/jquery.unobtrusive-ajax.js"></script>
    <script src="/Scripts/jquery.validate.js"></script>
    <script src="/Scripts/jquery.validate.unobtrusive.js"></script>
  </body>
</html>
```

This demonstrates that when the application has debug set to true you see the full scripts / links being rendered out as you would hope (to make your debugging less painful).

Now go back to your root `web.config` file and chance the debug tag to false: `&lt;compilation debug="<b>false</b>" targetFramework="4.0"&gt;`. This time when you run, the generated HTML should look something like this:

```html
<!doctype html>
<html>
  <head>
    <title>Home Page</title>
    <link
      href="/Content/css?v=zA21MEZPkFOTy3OUxWWonyifZGPNxI-SSbBOWkDhsHk1"
      rel="stylesheet"
    />
    <link
      href="/Content/themes/base/css?v=myqT7npwmF2ABsuSaHqt8SCvK8UFWpRv7T4M8r3kiK01"
      rel="stylesheet"
    />

    <script src="/bundles/modernizr?v=QZTpgFA-zRi28FHInjPOp9lXJl6mFGrWHlv3QhMpqSw1"></script>
  </head>
  <body>
    <div class="page">
      <div id="header">
        <div id="title">
          <h1>My MVC Application</h1>
        </div>
        <div id="logindisplay">Welcome <strong>LNR\jreilly</strong>!</div>
        <div id="menucontainer">
          <ul id="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/Home/About">About</a></li>
          </ul>
        </div>
      </div>
      <div id="main">
        <h2>Welcome to ASP.NET MVC!</h2>
        <p>
          To learn more about ASP.NET MVC visit
          <a href="http://asp.net/mvc" title="ASP.NET MVC Website"
            >http://asp.net/mvc</a
          >.
        </p>
      </div>
      <div id="footer"></div>
    </div>
    <script src="/bundles/jquery?v=-3plyJYF8LQ0YVYbKtEZnEbkML7BIL0Iul_dNlwGXq41"></script>
    <script src="/bundles/jqueryui?v=RuyxWjtbiK02VYPQGF4OyBZcxNB-W9FsvN6HJTZj4NA1"></script>
    <script src="/bundles/jqueryval?v=E3jxQivD8ilGcNEk6JrH6Jx2wDop7sWW2YKDc6Kq8gY1"></script>
  </body>
</html>
```

This time you can see that in non-debug mode (ie how it would run in Production) minified bundles of scripts and css files are being served up instead of the raw files. And that's it; done.

---
slug: how-im-using-cassette
title: "How I'm Using Cassette part 1:Getting Up and Running"
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'Learn how to serve JavaScript assets efficiently in ASP.Net MVC with Cassette to avoid duplicate scripts and ensure speedy loading.'
---

## Backing into the light

<!--truncate-->

For a while now, I've been seeking a bulletproof way to handle the following scenarios... all at the same time in the context of an ASP.Net MVC application:

1. How to serve full-fat JavaScript in debug mode and minified in release mode
2. When debugging, ensure that the full-fat JS being served is definitely the latest version; and \***not**\* from the cache. (The time I've wasted due to [304's](http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#304)...)
3. How to add Javascript assets that need to be served up from any point in an ASP.Net MVC application (including views, layouts, partial views... even controllers if so desired) whilst preventing duplicate scripts from being served.
4. How to ensure that Javascript files are served up last to any web page to ensure a speedy feel to users (don't want JS blocking rendering).
5. And last but certainly not least the need to load Javascript files in dependency order. If `myView.js` depends on jQuery then clearly `jQuery-latest.js` needs to be served before `myView.js`.

Now the best, most comprehensive and solid looking solution to this problem has for some time seemed to me to be [Andrew Davey's](http://aboutcode.net/)[Cassette](http://getcassette.net/). This addresses all my issues in one way or another, as well as bringing in a raft of other features (support for Coffeescript etc).

However, up until now I've slightly shied away from using Cassette as I was under the impression it had a large number of dependencies. That doesn't appear to be the case at all. I also had some vague notion that I could quite simply build my own solution to these problems making use of Microsoft's [Web Optimization](http://nuget.org/packages/Microsoft.AspNet.Web.Optimization/1.0.0) which nicely handles my #1 problem above. However, looking again at the documentation Cassette was promising to handle scenarios #1 - #5 without breaking sweat. How could I ignore that? I figured I should do the sensible thing and take another look at it. And, lo and behold, when I started evaluating it again it seemed to be just what I needed.

With the minumum of fuss I was able to get an ASP.Net MVC 4 solution up and running, integrated with Cassette, which dealt with all my scenarios very nicely indeed. I thought it might be good to write this up over a short series of posts and share what my finished code looks like. If you follow the steps I go through below it'll get you started using Cassette. Or you could skip to the end of this post and look at the repo on GitHub. Here we go...

## Adding Cassette to a raw MVC 4 project

Fire up Visual Studio and create a new MVC 4 project (I used the internet template to have some content in place).

Go to the Package Manager Console and key in "`Install-Package Cassette.Aspnet`". Cassette will install itself.

Now you've got Cassette in place you may as well pull out usage of Web Optimization as you're not going to need it any more.Be ruthless, delete App_Start/BundleConfig.cs and delete the line of code that references it in Global.asax.cs. If you take the time to run the app now you'll see you've miraculously lost your CSS and your JavaScript. The code referencing it is still in place but there's nothing for it to serve up. Don't worry about that - we're going to come back and Cassette-ify things later on...

You'll also notice you now have a CassetteConfiguration.cs file in your project. Open it. Replace the contents with this (I've just commented out the default code and implemented my own CSS and Script bundles based on what is available in the default template of an MVC 4 app):

```cs
using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace CassetteDemo
{
    /// <summary>
    /// Configures the Cassette asset bundles for the web application.
    /// </summary>
    public class CassetteBundleConfiguration : IConfiguration<BundleCollection>
    {
        public void Configure(BundleCollection bundles)
        {
            // TODO: Configure your bundles here...
            // Please read http://getcassette.net/documentation/configuration

            // This default configuration treats each file as a separate 'bundle'.
            // In production the content will be minified, but the files are not combined.
            // So you probably want to tweak these defaults!
            //bundles.AddPerIndividualFile<StylesheetBundle>("Content");
            //bundles.AddPerIndividualFile<ScriptBundle>("Scripts");

            // To combine files, try something like this instead:
            //   bundles.Add<StylesheetBundle>("Content");
            // In production mode, all of ~/Content will be combined into a single bundle.

            // If you want a bundle per folder, try this:
            //   bundles.AddPerSubDirectory<ScriptBundle>("Scripts");
            // Each immediate sub-directory of ~/Scripts will be combined into its own bundle.
            // This is useful when there are lots of scripts for different areas of the website.

            AddStylesheetBundles(bundles);
            AddScriptBundles(bundles);
        }

        private static void AddStylesheetBundles(BundleCollection bundles)
        {
            bundles.Add<StylesheetBundle>("~/bundles/css",
                                          "~/Content/Site.css",
                                          "~/Content/themes/base/jquery-ui.css"
                );
        }

        private static void AddScriptBundles(BundleCollection bundles)
        {
            // A bundle of the scripts that will need to be added to the head (likely only ever to be Modernizr but you never know)
            bundles.Add<ScriptBundle>("~/bundles/head",
                                      new[] {"~/Scripts/modernizr-2.6.2.js"},
                                      bundle => bundle.PageLocation = "head"
                );

            // A bundle of the core scripts that will likely be used on every page of the app
            bundles.Add<ScriptBundle>("~/bundles/core",
                                      new[]
                                          {
                                              "~/Scripts/jquery-1.8.2.js",
                                              "~/Scripts/jquery-ui-1.8.24.js"
                                          });

            // Validation scripts; only likely necessary on date entry screens
            bundles.Add<ScriptBundle>("~/bundles/validate",
                                      new[]
                                          {
                                              "~/Scripts/jquery.validate.js",
                                              "~/Scripts/jquery.validate.unobtrusive.js"
                                          },
                                      bundle => bundle.AddReference("~/bundles/core")
                );

            // Create a per file bundle for all areas / views
            //bundles.AddPerIndividualFile<ScriptBundle>("~/Scripts/Views");
        }
    }
}
```

In the script above I've created 4 bundles, 1 stylesheet bundle and 3 JavaScript bundles - each of these is roughly equivalent to Web Optimization bundles that are part of the MVC 4 template:

#### `~/bundles/css`

Our site CSS - this includes both our own CSS and the jQuery UI CSS as well. This is the rough equivalent of the Web Optimization bundles `~/Content/css` and `~/Content/themes/base/css` brought together.

#### `~/bundles/head`

What scripts we want served in the head tag - Modernizr basically. Do note the setting of the `PageLocation` property - the purpose of this will become apparent later. This is the direct equivalent of the Web Optimization bundle: `~/bundles/modernizr`.

#### `~/bundles/core`

The scripts we want served on every page. For this example project I've picked jQuery and jQuery UI. This is the rough equivalent of the Web Optimization bundles `~/bundles/jquery` and `~/bundles/jqueryui` brought together.

#### `~/bundles/validate`

The validation scripts (that are dependent on the core scripts). This is the rough equivalent of the Web Optimization bundle: `~/bundles/jqueryval`.

At this point we've set up Cassette in our project - although we're not making use of it yet. If you want to double check that everything is working properly then you can fire up your project and browse to "Cassette.axd" in the root.

## How Web Optimization and Cassette Differ

If you're more familiar with the workings of Web Optimization than Cassette then it's probably worth taking a moment to appreciate an important distinction between the slightly different ways each works.

**Web Optimization**

1. Create bundles as desired.
2. Serve up bundles and / or straight JavaScript files as you like within your MVC views / partial views / layouts.

**Cassette**

1. Create bundles for \***all**\* JavaScript files you wish to serve up. You may wish to create some bundles which consist of a number of a number of JavaScript files pushed together. But for each individual file you wish to serve you also need to create an individual bundle. (Failure to do so may mean you fall prey to the "_Cannot find an asset bundle containing the path "\~/Scripts/somePath.js"._")
2. Reference bundles and / or individual JavaScript files in their individual bundles as you like within your MVC views / partial views / layouts / controllers / HTML helpers... the list goes on!
3. Render the referenced scripts to the page (typically just before the closing `body` tag)

## Making use of our Bundles

Now we've created our bundles let's get the project serving up CSS and JavaScript using Cassette. First the layout file. Take the `_Layout.cshtml` file from this:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>@ViewBag.Title - My ASP.NET MVC Application</title>
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width" />
    @Styles.Render("~/Content/css") @Scripts.Render("~/bundles/modernizr")
  </head>
  <body>
    <header>
      <div class="content-wrapper">
        <div class="float-left">
          <p class="site-title">
            @Html.ActionLink("your logo here", "Index", "Home")
          </p>
        </div>
        <div class="float-right">
          <section id="login">@Html.Partial("_LoginPartial")</section>
          <nav>
            <ul id="menu">
              <li>@Html.ActionLink("Home", "Index", "Home")</li>
              <li>@Html.ActionLink("About", "About", "Home")</li>
              <li>@Html.ActionLink("Contact", "Contact", "Home")</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div id="body">
      @RenderSection("featured", required: false)
      <section class="content-wrapper main-content clear-fix">
        @RenderBody()
      </section>
    </div>
    <footer>
      <div class="content-wrapper">
        <div class="float-left">
          <p>&copy; @DateTime.Now.Year - My ASP.NET MVC Application</p>
        </div>
      </div>
    </footer>

    @Scripts.Render("~/bundles/jquery") @RenderSection("scripts", required:
    false)
  </body>
</html>
```

To this:

```html
@{ Bundles.Reference("~/bundles/css"); Bundles.Reference("~/bundles/head");
Bundles.Reference("~/bundles/core"); }
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>@ViewBag.Title - My ASP.NET MVC Application</title>
    <link href="~/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <meta name="viewport" content="width=device-width" />
    @Bundles.RenderStylesheets() @Bundles.RenderScripts("head")
  </head>
  <body>
    <header>
      <div class="content-wrapper">
        <div class="float-left">
          <p class="site-title">
            @Html.ActionLink("your logo here", "Index", "Home")
          </p>
        </div>
        <div class="float-right">
          <section id="login">@Html.Partial("_LoginPartial")</section>
          <nav>
            <ul id="menu">
              <li>@Html.ActionLink("Home", "Index", "Home")</li>
              <li>@Html.ActionLink("About", "About", "Home")</li>
              <li>@Html.ActionLink("Contact", "Contact", "Home")</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div id="body">
      @RenderSection("featured", required: false)
      <section class="content-wrapper main-content clear-fix">
        @RenderBody()
      </section>
    </div>
    <footer>
      <div class="content-wrapper">
        <div class="float-left">
          <p>&copy; @DateTime.Now.Year - My ASP.NET MVC Application</p>
        </div>
      </div>
    </footer>

    @Bundles.RenderScripts()
  </body>
</html>
```

And now let's take one of the views, `Login.cshtml` and take it from this:

```html
@model CassetteDemo.Models.LoginModel @{ ViewBag.Title = "Log in"; }

<hgroup class="title">
  <h1>@ViewBag.Title.</h1>
</hgroup>

<section id="loginForm">
  <h2>Use a local account to log in.</h2>
  @using (Html.BeginForm(new { ReturnUrl = ViewBag.ReturnUrl })) {
  @Html.AntiForgeryToken() @Html.ValidationSummary(true)

  <fieldset>
    <legend>Log in Form</legend>
    <ol>
      <li>
        @Html.LabelFor(m => m.UserName) @Html.TextBoxFor(m => m.UserName)
        @Html.ValidationMessageFor(m => m.UserName)
      </li>
      <li>
        @Html.LabelFor(m => m.Password) @Html.PasswordFor(m => m.Password)
        @Html.ValidationMessageFor(m => m.Password)
      </li>
      <li>
        @Html.CheckBoxFor(m => m.RememberMe) @Html.LabelFor(m => m.RememberMe,
        new { @class = "checkbox" })
      </li>
    </ol>
    <input type="submit" value="Log in" />
  </fieldset>
  <p>@Html.ActionLink("Register", "Register") if you don't have an account.</p>
  }
</section>

<section class="social" id="socialLoginForm">
  <h2>Use another service to log in.</h2>
  @Html.Action("ExternalLoginsList", new { ReturnUrl = ViewBag.ReturnUrl })
</section>

@section Scripts { @Scripts.Render("~/bundles/jqueryval") }
```

To this:

```html
@model CassetteDemo.Models.LoginModel @{ ViewBag.Title = "Log in";
Bundles.Reference("~/bundles/validate"); }

<hgroup class="title">
  <h1>@ViewBag.Title.</h1>
</hgroup>

<section id="loginForm">
  <h2>Use a local account to log in.</h2>
  @using (Html.BeginForm(new { ReturnUrl = ViewBag.ReturnUrl })) {
  @Html.AntiForgeryToken() @Html.ValidationSummary(true)

  <fieldset>
    <legend>Log in Form</legend>
    <ol>
      <li>
        @Html.LabelFor(m => m.UserName) @Html.TextBoxFor(m => m.UserName)
        @Html.ValidationMessageFor(m => m.UserName)
      </li>
      <li>
        @Html.LabelFor(m => m.Password) @Html.PasswordFor(m => m.Password)
        @Html.ValidationMessageFor(m => m.Password)
      </li>
      <li>
        @Html.CheckBoxFor(m => m.RememberMe) @Html.LabelFor(m => m.RememberMe,
        new { @class = "checkbox" })
      </li>
    </ol>
    <input type="submit" value="Log in" />
  </fieldset>
  <p>@Html.ActionLink("Register", "Register") if you don't have an account.</p>
  }
</section>

<section class="social" id="socialLoginForm">
  <h2>Use another service to log in.</h2>
  @Html.Action("ExternalLoginsList", new { ReturnUrl = ViewBag.ReturnUrl })
</section>
```

So now you should be up and running with Cassette. If you want the code behind this then take I've put it on GitHub [here](https://github.com/johnnyreilly/CassetteDemo).

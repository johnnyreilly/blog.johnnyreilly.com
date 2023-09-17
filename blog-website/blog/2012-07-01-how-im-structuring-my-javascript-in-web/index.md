---
slug: how-im-structuring-my-javascript-in-web
title: 'Optimally Serving Up JavaScript'
authors: johnnyreilly
tags: [asp.net, javascript]
hide_table_of_contents: false
description: 'John describes his "JS second" approach to structuring JavaScript and using HtmlHelper to control the order of scripts in web apps for internal use.'
---

I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.

<!--truncate-->

Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel.

## What are you up to?

Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions).

Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC.

## "Render first. JS second."

I took 2 things away from [Steve Souder's article](http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/):

1. Async script loading is better than synchronous script loading
2. Get your screen rendered and \***then**\* execute your JavaScript

I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason).

However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as [Microsoft are baking in script bundling to .NET 4.5](http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx).

Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...

## I want to serve you...

I have been making sure that scripts are the last thing served to the screen by using a customised version of [Michael J. Ryan's HtmlHelper](http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx). This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order.

Then as a final step before rendering the `&lt;/body&gt;` tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable.

If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Text;

namespace DummyMvc.Helpers
{
    /// <summary>
    /// This helper makes creation of script tags within a view straightforward.
    /// If the specified file is missing an error is raised at runtime.  A v= suffix
    /// is added to URLs using the VersionHelper to make caching behave as desired
    /// both during development (where we don't want to cache as we make changes to code)
    /// and during production (where we do want to cache to improve the user loading experience)
    ///
    /// There are 2 approaches available using this helper.
    ///
    /// 1. Straight script tag creation using the Script method.
    ///
    /// A usage of:
    ///
    /// @Html.Script("~/Scripts/jquery.js")
    ///
    /// Would immediatedly render a tag as below: (please note the v= suffix to the URL)
    ///
    /// <script src="/Scripts/jquery.tools.min.js?v=634765611410213405" type="text/javascript"></script>
    ///
    /// 2. Script bundling
    ///
    /// This approach allows you to build up the scripts to be rendered across multiple
    /// views / partial views / layout etc and then have them rendered in one hit (ideally
    /// just prior to the body tag being rendered as at this point the screen will be visually
    /// set up for the user and any script loading that causes blocking should not be a presentational
    /// issue). This is heavily based on Michael Ryans work; see links below.
    ///
    /// [Links]
    /// http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx
    /// http://stackoverflow.com/questions/5598167/mvc3-need-help-with-html-helper
    ///
    /// [Usage]
    /// --- From each view / partial view ---
    /// @Html.AddClientScript("~/Scripts/jquery.js")
    /// @Html.AddClientScript("~/Scripts/jquery-ui.js", dependancies: new string[] {"~/Scripts/jquery.js"})
    /// @Html.AddClientScript("~/Scripts/site.js", dependancies: new string[] {"~/Scripts/jquery.js"})
    /// @Html.AddClientScript("~/Scripts/views/myview.js", dependancies: new string[] {"~/Scripts/jquery.js"})
    ///
    /// --- From the main Master/View (just before last Body tag so all "registered" scripts are included) ---
    /// @Html.ClientScripts()
    /// </summary>
    public static class ScriptExtensions
    {
        #region Public

        /// <summary>
        /// Render a Script element given a URL
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="url">URL of script to render</param>
        /// <returns></returns>
        public static MvcHtmlString Script(
          this HtmlHelper helper,
          string url)
        {
            return MvcHtmlString.Create(MakeScriptTag(helper, url));
        }

        /// <summary>
        /// Add client script files to list of script files that will eventually be added to the view
        /// </summary>
        /// <param name="scriptPath">path to script file</param>
        /// <param name="dependancies">OPTIONAL: a string array of any script dependancies</param>
        /// <returns>always MvcHtmlString.Empty</returns>
        public static MvcHtmlString AddClientScript(this HtmlHelper helper, string scriptPath, string[] dependancies = null)
        {
            //If script list does not already exist then initialise
            if (!helper.ViewContext.HttpContext.Items.Contains("client-script-list"))
                helper.ViewContext.HttpContext.Items["client-script-list"] = new Dictionary<string, KeyValuePair<string, string[]>>();

            var scripts = helper.ViewContext.HttpContext.Items["client-script-list"] as Dictionary<string, KeyValuePair<string, string[]>>;

            //Ensure scripts are not added twice
            var scriptFilePath = helper.ViewContext.HttpContext.Server.MapPath(DetermineScriptToRender(helper, scriptPath));
            if (!scripts.ContainsKey(scriptFilePath))
                scripts.Add(scriptFilePath, new KeyValuePair<string, string[]>(scriptPath, dependancies));

            return MvcHtmlString.Empty;
        }

        /// <summary>
        /// Add a script tag for each "registered" script associated with the current view.
        /// Output script tags with order depending on script dependancies
        /// </summary>
        /// <returns>MvcHtmlString</returns>
        public static MvcHtmlString ClientScripts(this HtmlHelper helper)
        {
            var url = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection);
            var scripts = helper.ViewContext.HttpContext.Items["client-script-list"] as Dictionary<string, KeyValuePair<string, string[]>> ?? new Dictionary<string, KeyValuePair<string, string[]>>();

            //Build script tag block
            var scriptList = new List<string>();
            if (scripts.Count > 0)
            {
                //Check all script dependancies exist and throw an exception if any do not
                var distinctDependancies = scripts.Where(s => s.Value.Value != null)
                                                  .SelectMany(s => s.Value.Value)
                                                  .Distinct()
                                                  .Select(s => GetScriptFilePath(helper, s)) //Exception will be thrown here if file does not exist
                                                  .ToList();

                var missingDependancies = distinctDependancies.Except(scripts.Select(s => s.Key)).ToList();
                if (missingDependancies.Count > 0)
                {
                    throw new KeyNotFoundException("The following dependancies are missing: " + Environment.NewLine +
                        Environment.NewLine +
                        string.Join(Environment.NewLine, missingDependancies));
                }

                //Serve scripts without dependancies first
                scriptList.AddRange(scripts.Where(s => s.Value.Value == null).Select(s => s.Value.Key));

                //Get all scripts which have dependancies
                var scriptsAndDependancies = scripts.Where(s => s.Value.Value != null)
                                                    .OrderBy(s => s.Value.Value.Length)
                                                    .Select(s => s.Value)
                                                    .ToList();

                //Loop round adding scripts to the scriptList until all are done
                do
                {
                    //Loop backwards through list so items can be removed mid loop
                    for (var i = scriptsAndDependancies.Count - 1; i >= 0; i--)
                    {
                        var script = scriptsAndDependancies[i].Key;
                        var dependancies = scriptsAndDependancies[i].Value;

                        //Check if all the dependancies have been added to scriptList yet
                        bool currentScriptDependanciesAdded = !dependancies.Except(scriptList).Any();
                        if (currentScriptDependanciesAdded)
                        {
                            //Move script to scriptList
                            scriptList.Add(script);
                            scriptsAndDependancies.RemoveAt(i);
                        }
                    }
                } while (scriptsAndDependancies.Count > 0);
            }

            //Generate a script tag for each script
            var scriptsToRender = scriptList.Select(s => MakeScriptTag(helper, s)).ToList();
#if DEBUG
            scriptsToRender.Insert(0, "<!-- BEGIN - HtmlHelperScriptExtensions.ClientScripts() -->");
            scriptsToRender.Insert(scriptsToRender.Count, "<!-- END - HtmlHelperScriptExtensions.ClientScripts() -->");
#endif

            //Output script tag block at point in view where method is called (by returning an MvcHtmlString)
            return (scriptsToRender.Count > 0
                ? MvcHtmlString.Create(string.Join(Environment.NewLine, scriptsToRender))
                : MvcHtmlString.Empty);
        }

        /// <summary>
        /// Add client script block to list of script blocks that will eventually be added to the view
        /// </summary>
        /// <param name="key">unique identifier for script block</param>
        /// <param name="scriptBlock">script block</param>
        /// <param name="dependancies">OPTIONAL: a string array of any script block dependancies</param>
        /// <returns>always MvcHtmlString.Empty</returns>
        public static MvcHtmlString AddClientScriptBlock(this HtmlHelper helper, string key, string scriptBlock, string[] dependancies = null)
        {
            //If script list does not already exist then initialise
            if (!helper.ViewContext.HttpContext.Items.Contains("client-script-block-list"))
                helper.ViewContext.HttpContext.Items["client-script-block-list"] = new Dictionary<string, KeyValuePair<string, string[]>>();

            var scriptBlocks = helper.ViewContext.HttpContext.Items["client-script-block-list"] as Dictionary<string, KeyValuePair<string, string[]>>;

            //Prevent duplication
            if (scriptBlocks.ContainsKey(key)) return MvcHtmlString.Empty;

            scriptBlocks.Add(key, new KeyValuePair<string, string[]>(scriptBlock, dependancies));

            return MvcHtmlString.Empty;
        }

        /// <summary>
        /// Output all "registered" script blocks associated with the current view.
        /// Output script tags with order depending on script dependancies
        /// </summary>
        /// <returns>MvcHtmlString</returns>
        public static MvcHtmlString ClientScriptBlocks(this HtmlHelper helper)
        {
            var scriptBlocks = helper.ViewContext.HttpContext.Items["client-script-block-list"] as Dictionary<string, KeyValuePair<string, string[]>> ?? new Dictionary<string, KeyValuePair<string, string[]>>();

            //Build script tag block
            var scriptBlockList = new List<string>();
            if (scriptBlocks.Count > 0)
            {
                //Check all script dependancies exist and throw an exception if any do not
                var distinctDependancies = scriptBlocks.Where(s => s.Value.Value != null)
                                                       .SelectMany(s => s.Value.Value)
                                                       .Distinct()
                                                       .ToList();

                var missingDependancies = distinctDependancies.Except(scriptBlocks.Select(s => s.Key)).ToList();
                if (missingDependancies.Count > 0)
                {
                    throw new KeyNotFoundException("The following dependancies are missing: " + Environment.NewLine +
                        Environment.NewLine +
                        string.Join(Environment.NewLine, missingDependancies));
                }

                //Serve script blocks without dependancies first
                scriptBlockList.AddRange(scriptBlocks.Where(s => s.Value.Value == null).Select(s => s.Value.Key));

                //Get all script blocks which have dependancies
                var scriptBlocksAndDependancies = scriptBlocks.Where(s => s.Value.Value != null)
                                                              .OrderBy(s => s.Value.Value.Length)
                                                              .Select(s => s.Value)
                                                              .ToList();

                //Loop round adding scripts to the scriptList until all are done
                do
                {
                    //Loop backwards through list so items can be removed mid loop
                    for (var i = scriptBlocksAndDependancies.Count - 1; i >= 0; i--)
                    {
                        var scriptBlock = scriptBlocksAndDependancies[i].Key;
                        var dependancies = scriptBlocksAndDependancies[i].Value;

                        //Check if all the dependancies have been added to scriptList yet
                        bool currentScriptBlockDependanciesAdded = !dependancies.Except(scriptBlockList).Any();
                        if (currentScriptBlockDependanciesAdded)
                        {
                            //Move script to scriptList
                            scriptBlockList.Add(scriptBlock);
                            scriptBlocksAndDependancies.RemoveAt(i);
                        }
                    }
                } while (scriptBlocksAndDependancies.Count > 0);
            }

            //Generate a script tag for each script
            var scriptBlocksToRender = scriptBlockList.Select(s => string.Format("<script type=\"text/javascript\">{0}{1}</script>", Environment.NewLine, s)).ToList();
#if DEBUG
            scriptBlocksToRender.Insert(0, "<!-- BEGIN - HtmlHelperScriptExtensions.ClientScriptBlocks() -->");
            scriptBlocksToRender.Insert(scriptBlocksToRender.Count, "<!-- END - HtmlHelperScriptExtensions.ClientScriptBlocks() -->");
#endif

            //Output script tag block at point in view where method is called (by returning an MvcHtmlString)
            return (scriptBlocksToRender.Count > 0
                ? MvcHtmlString.Create(string.Join(Environment.NewLine, scriptBlocksToRender))
                : MvcHtmlString.Empty);
        }

        #endregion

        #region Private

        /// <summary>
        /// Take a URL, resolve it and a version suffix.  In Debug this will be based on DateTime.Now to prevent caching
        /// on a development machine.  In Production this will be based on the version number of the appplication.
        /// This means when the version number is incremented in subsequent releases script files should be recached automatically.
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="url">URL to resolve and add suffix to</param>
        /// <returns></returns>
        private static string ResolveUrlWithVersion(HtmlHelper helper, string url)
        {
#if DEBUG
            var suffix = DateTime.Now.Ticks.ToString();
#else
            var suffix = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
#endif

            var urlWithVersionSuffix = string.Format("{0}?v={1}", url, suffix);
            var urlResolved = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection).Content(urlWithVersionSuffix);

            return urlResolved;
        }

        /// <summary>
        /// Create the string that represents a script tag
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="url"></param>
        /// <returns></returns>
        private static string MakeScriptTag(HtmlHelper helper, string url)
        {
            var scriptToRender = DetermineScriptToRender(helper, url);

            //Render script tag
            var scriptTag = new TagBuilder("script");
            scriptTag.Attributes["type"] = "text/javascript"; //This isn't really required with HTML 5 as this is the default.  As it does no real harm so I have left it for now. http://stackoverflow.com/a/9659074/761388
            scriptTag.Attributes["src"] = SharedExtensions.ResolveUrlWithVersion(helper, scriptToRender);

            var scriptTagString = scriptTag.ToString();
            return scriptTagString;
        }

        /// <summary>
        /// Author      : John Reilly
        /// Description : Get the script that should be served to the user - throw an exception if it doesn't exist and minify if in release mode
        /// </summary>
        /// <param name="helper"></param>
        /// <param name="url"></param>
        /// <param name="minifiedSuffix">OPTIONAL - this allows you to directly specify the minified suffix if it differs from the standard
        /// of "min.js" - unlikely this will ever be used but possible</param>
        /// <returns></returns>
        private static string DetermineScriptToRender(HtmlHelper helper, string url, string minifiedSuffix = "min.js")
        {
            //Initialise a list that will contain potential scripts to render
            var possibleScriptsToRender = new List<string>() { url };

#if DEBUG
            //Don't add minified scripts in debug mode
#else
            //Add minified path of script to list
            possibleScriptsToRender.Insert(0, Path.ChangeExtension(url, minifiedSuffix));
#endif

            var validScriptsToRender = possibleScriptsToRender.Where(s => File.Exists(helper.ViewContext.HttpContext.Server.MapPath(s)));
            if (!validScriptsToRender.Any())
                throw new FileNotFoundException("Unable to render " + url + " as none of the following scripts exist:" +
                    string.Join(Environment.NewLine, possibleScriptsToRender));
            else
                return validScriptsToRender.First(); //Return first existing file in list (minified file in release mode)
        }

        #endregion
    }
}
```

## Minification - I want to serve you less...

Another tweak I made to the script helper meant that when compiling either the debug or production (minified) versions of common JS files will be included if available. This means in a production environment the users get minified JS files so faster loading. And in a development environment we get the full JS files which make debugging more straightforward.

What I haven't started doing is minifying my own JS files as yet. I know I'm being somewhat inconsistent here by sometimes serving minified files and sometimes not. I'm not proud. Part of my rationale for this that since most of my users use my apps on a daily basis they will for the most part be using cached JS files. Obviously there'll be slightly slower load times the first time they go to a page but nothing that significant I hope.

I have thought of starting to do my own minification as a build step but have held off for now. Again this is something being baked into .NET 4.5; another reason why I have held off doing this a different way for now.

Update

It now looks like this Microsofts optimisations have become [this Nuget package](http://nuget.org/packages/Microsoft.AspNet.Web.Optimization). It's early days (well it was released on 15th August 2012 and I'm writing this on the 16th) but I think this looks not to be tied to MVC 4 or .NET 4.5 in which case I could use it in my current MVC 3 projects. I hope so...

By the way there's a [nice rundown of how to use this by K. Scott Allen of Pluralsight](http://www.pluralsight.com/training/Courses/TableOfContents/mvc4#mvc4-m3-optimization). It's fantastic. Recommended.

Update 2

Having done a little asking around I now understand that this \***can**\* be used with MVC 3 / .NET 4.0. Excellent!

One rather nice alternative script serving mechanism I've seen (but not yet used) is Andrew Davey's [Cassette](http://getcassette.net) which I mean to take for a test drive soon. This looks fantastic (and is available as a [Nuget package](http://nuget.org/packages/Cassette) \- 10 points!).

## CDNs (they want to serve you)

I've never professionally made use of CDNs at all. There are [clearly good reasons why you should](http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/) but most of those good reasons relate most to public facing web apps.

As I've said, the applications I tend to work on sit behind firewalls and it's not always guaranteed what my users can see from the grand old world of web beyond. (Indeed what they see can change on hour by hour basis sometimes...) Combined with that, because my apps are only accessible by a select few I don't face the pressure to reduce load on the server that public web apps can face.

So while CDN's are clearly a good thing. I don't use them at present. And that's unlikely to change in the short term.

## TL:DR

1. I don't use CDNs - they're clearly useful but they don't suit my particular needs
2. I serve each JavaScript file individually just before the body tag. I don't bundle.
3. I don't minify my own scripts (though clearly it wouldn't be hard) but I do serve the minified versions of 3rd party libraries (eg jQuery) in a Production environment.
4. I don't use async script loaders at present. I may in future; we shall see.

I expect some of the above may change (well, possibly not point #1) but this general approach is working well for me at present.

I haven't touched at all on how I'm structuring my JavaScript code itself. Perhaps next time.

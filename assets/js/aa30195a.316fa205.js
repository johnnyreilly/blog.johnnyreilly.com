"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[97312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,a[1]=o;for(var c=2;c<s;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},53583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});n(67294);var i=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const a={title:"Optimally Serving Up JavaScript",authors:"johnnyreilly",tags:["asp.net mvc","html helper","javascript","cassette"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2012/07/01/how-im-structuring-my-javascript-in-web",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-07-01-how-im-structuring-my-javascript-in-web/index.md",source:"@site/blog/2012-07-01-how-im-structuring-my-javascript-in-web/index.md",title:"Optimally Serving Up JavaScript",description:"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context.",date:"2012-07-01T00:00:00.000Z",formattedDate:"July 1, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"html helper",permalink:"/tags/html-helper"},{label:"javascript",permalink:"/tags/javascript"},{label:"cassette",permalink:"/tags/cassette"}],readingTime:13.475,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Optimally Serving Up JavaScript",authors:"johnnyreilly",tags:["asp.net mvc","html helper","javascript","cassette"],hide_table_of_contents:!1},prevItem:{title:"Rendering Partial View to a String",permalink:"/2012/07/16/rendering-partial-view-to-string"},nextItem:{title:"Reasons to be Cheerful (why now is a good time to be a dev)",permalink:"/2012/06/04/reasons-to-be-cheerful-why-now-is-good"}},c={authorsImageUrls:[void 0]},p=[{value:"What are you up to?",id:"what-are-you-up-to",level:2},{value:"&quot;Render first. JS second.&quot;",id:"render-first-js-second",level:2},{value:"I want to serve you...",id:"i-want-to-serve-you",level:2},{value:"Minification - I want to serve you less...",id:"minification---i-want-to-serve-you-less",level:2},{value:"CDNs (they want to serve you)",id:"cdns-they-want-to-serve-you",level:2},{value:"TL:DR",id:"tldr",level:2}],d={toc:p};function u(e){var{components:t}=e,n=s(e,["components"]);return(0,i.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"I have occasionally done some server-side JavaScript with Rhino and Node.js but this is the exception rather than the rule. Like most folk at the moment, almost all the JavaScript I write is in a web context."),(0,i.kt)("p",null,"Over time I've come to adopt a roughly standard approach to how I structure my JavaScript; both the JavaScript itself and how it is placed / rendered in the an HTML document. I wanted to write about the approach I'm using. Partly just to document the approach but also because I often find writing about something crystalises my feelings on the subject in one way or another. I think that most of what I'm doing is sensible and rational but maybe as I write about this I'll come to some firmer conclusions about my direction of travel."),(0,i.kt)("h2",r({},{id:"what-are-you-up-to"}),"What are you up to?"),(0,i.kt)("p",null,"Before I get started it's probably worth mentioning the sort of web development I'm generally called to do (as this has obviously influenced my decisions)."),(0,i.kt)("p",null,"Most of my work tends to be on web applications used internally within a company. That is to say, web applications accessible on a Company intranet. Consequently, the user base for my applications tends to be smaller than the Amazons and Googles of this world. It almost invariably sits on the ASP.NET stack in some way. Either classic WebForms or MVC."),(0,i.kt)("h2",r({},{id:"render-first-js-second"}),'"Render first. JS second."'),(0,i.kt)("p",null,"I took 2 things away from ",(0,i.kt)("a",r({parentName:"p"},{href:"http://www.stevesouders.com/blog/2010/09/30/render-first-js-second/"}),"Steve Souder's article"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Async script loading is better than synchronous script loading"),(0,i.kt)("li",{parentName:"ol"},"Get your screen rendered and ","*",(0,i.kt)("strong",{parentName:"li"},"then"),"*"," execute your JavaScript")),(0,i.kt)("p",null,"I'm not doing any async script loading as yet; although I am thinking of giving it a try at some point. In terms of choosing a loader I'll probably give RequireJS first crack of the whip (purely as it looks like most people are tending it's direction and that can't be without reason)."),(0,i.kt)("p",null,"However - it seems that the concept of async script loading is kind of conflict with one of the other tenets of web wisdom: script bundling. Script bundling, if you're not already aware, is the idea that you should combine all your scripts into a single file and then just serve that. This prevents multiple HTTP requests as each script loads in. Async script loading is obviously okay with multiple HTTP requests, presumably because of the asynchronous non-blocking pattern of loading. So. 2 different ideas. And there's further movement on this front right now as ",(0,i.kt)("a",r({parentName:"p"},{href:"http://www.hanselman.com/blog/VisualStudio2012RCIsReleasedTheBigWebRollup.aspx"}),"Microsoft are baking in script bundling to .NET 4.5"),"."),(0,i.kt)("p",null,'Rather than divide myself between these 2 horses I have at the moment tried to follow the "JS second" part of this advice in my own (perhaps slightly old fashioned) way...'),(0,i.kt)("h2",r({},{id:"i-want-to-serve-you"}),"I want to serve you..."),(0,i.kt)("p",null,"I have been making sure that scripts are the last thing served to the screen by using a customised version of ",(0,i.kt)("a",r({parentName:"p"},{href:"http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx"}),"Michael J. Ryan's HtmlHelper"),". This lovely helper allows you to add script references as required from a number of different sources (layout page, view, partial view etc - even the controller if you so desired). It's simple to control the ordering of scripts by allowing you to set a priority for each script which determines the render order."),(0,i.kt)("p",null,"Then as a final step before rendering the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;/body&gt;")," tag the scripts can be rendered in one block. By this point the web page is rendered visually and a marginal amount of blocking is, in my view, acceptable."),(0,i.kt)("p",null,"If anyone is curious - the class below is my own version of Michael's helper. My contribution is the go faster stripes relating to the caching suffix and the ability to specify dependancies using script references rather than using numeric priority mechanism):"),(0,i.kt)("pre",null,(0,i.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Web;\nusing System.Web.Mvc;\nusing System.IO;\nusing System.Text;\n\nnamespace DummyMvc.Helpers\n{\n    /// <summary>\n    /// This helper makes creation of script tags within a view straightforward.\n    /// If the specified file is missing an error is raised at runtime.  A v= suffix\n    /// is added to URLs using the VersionHelper to make caching behave as desired\n    /// both during development (where we don\'t want to cache as we make changes to code)\n    /// and during production (where we do want to cache to improve the user loading experience)\n    ///\n    /// There are 2 approaches available using this helper.\n    ///\n    /// 1. Straight script tag creation using the Script method.\n    ///\n    /// A usage of:\n    ///\n    /// @Html.Script("~/Scripts/jquery.js")\n    ///\n    /// Would immediatedly render a tag as below: (please note the v= suffix to the URL)\n    ///\n    /// <script src="/Scripts/jquery.tools.min.js?v=634765611410213405" type="text/javascript"><\/script>\n    ///\n    /// 2. Script bundling\n    ///\n    /// This approach allows you to build up the scripts to be rendered across multiple\n    /// views / partial views / layout etc and then have them rendered in one hit (ideally\n    /// just prior to the body tag being rendered as at this point the screen will be visually\n    /// set up for the user and any script loading that causes blocking should not be a presentational\n    /// issue). This is heavily based on Michael Ryans work; see links below.\n    ///\n    /// [Links]\n    /// http://frugalcoder.us/post/2009/06/29/Handling-Scripts-in-ASPNet-MVC.aspx\n    /// http://stackoverflow.com/questions/5598167/mvc3-need-help-with-html-helper\n    ///\n    /// [Usage]\n    /// --- From each view / partial view ---\n    /// @Html.AddClientScript("~/Scripts/jquery.js")\n    /// @Html.AddClientScript("~/Scripts/jquery-ui.js", dependancies: new string[] {"~/Scripts/jquery.js"})\n    /// @Html.AddClientScript("~/Scripts/site.js", dependancies: new string[] {"~/Scripts/jquery.js"})\n    /// @Html.AddClientScript("~/Scripts/views/myview.js", dependancies: new string[] {"~/Scripts/jquery.js"})\n    ///\n    /// --- From the main Master/View (just before last Body tag so all "registered" scripts are included) ---\n    /// @Html.ClientScripts()\n    /// </summary>\n    public static class ScriptExtensions\n    {\n        #region Public\n\n        /// <summary>\n        /// Render a Script element given a URL\n        /// </summary>\n        /// <param name="helper"></param>\n        /// <param name="url">URL of script to render</param>\n        /// <returns></returns>\n        public static MvcHtmlString Script(\n          this HtmlHelper helper,\n          string url)\n        {\n            return MvcHtmlString.Create(MakeScriptTag(helper, url));\n        }\n\n        /// <summary>\n        /// Add client script files to list of script files that will eventually be added to the view\n        /// </summary>\n        /// <param name="scriptPath">path to script file</param>\n        /// <param name="dependancies">OPTIONAL: a string array of any script dependancies</param>\n        /// <returns>always MvcHtmlString.Empty</returns>\n        public static MvcHtmlString AddClientScript(this HtmlHelper helper, string scriptPath, string[] dependancies = null)\n        {\n            //If script list does not already exist then initialise\n            if (!helper.ViewContext.HttpContext.Items.Contains("client-script-list"))\n                helper.ViewContext.HttpContext.Items["client-script-list"] = new Dictionary<string, KeyValuePair<string, string[]>>();\n\n            var scripts = helper.ViewContext.HttpContext.Items["client-script-list"] as Dictionary<string, KeyValuePair<string, string[]>>;\n\n            //Ensure scripts are not added twice\n            var scriptFilePath = helper.ViewContext.HttpContext.Server.MapPath(DetermineScriptToRender(helper, scriptPath));\n            if (!scripts.ContainsKey(scriptFilePath))\n                scripts.Add(scriptFilePath, new KeyValuePair<string, string[]>(scriptPath, dependancies));\n\n            return MvcHtmlString.Empty;\n        }\n\n        /// <summary>\n        /// Add a script tag for each "registered" script associated with the current view.\n        /// Output script tags with order depending on script dependancies\n        /// </summary>\n        /// <returns>MvcHtmlString</returns>\n        public static MvcHtmlString ClientScripts(this HtmlHelper helper)\n        {\n            var url = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection);\n            var scripts = helper.ViewContext.HttpContext.Items["client-script-list"] as Dictionary<string, KeyValuePair<string, string[]>> ?? new Dictionary<string, KeyValuePair<string, string[]>>();\n\n            //Build script tag block\n            var scriptList = new List<string>();\n            if (scripts.Count > 0)\n            {\n                //Check all script dependancies exist and throw an exception if any do not\n                var distinctDependancies = scripts.Where(s => s.Value.Value != null)\n                                                  .SelectMany(s => s.Value.Value)\n                                                  .Distinct()\n                                                  .Select(s => GetScriptFilePath(helper, s)) //Exception will be thrown here if file does not exist\n                                                  .ToList();\n\n                var missingDependancies = distinctDependancies.Except(scripts.Select(s => s.Key)).ToList();\n                if (missingDependancies.Count > 0)\n                {\n                    throw new KeyNotFoundException("The following dependancies are missing: " + Environment.NewLine +\n                        Environment.NewLine +\n                        string.Join(Environment.NewLine, missingDependancies));\n                }\n\n                //Serve scripts without dependancies first\n                scriptList.AddRange(scripts.Where(s => s.Value.Value == null).Select(s => s.Value.Key));\n\n                //Get all scripts which have dependancies\n                var scriptsAndDependancies = scripts.Where(s => s.Value.Value != null)\n                                                    .OrderBy(s => s.Value.Value.Length)\n                                                    .Select(s => s.Value)\n                                                    .ToList();\n\n                //Loop round adding scripts to the scriptList until all are done\n                do\n                {\n                    //Loop backwards through list so items can be removed mid loop\n                    for (var i = scriptsAndDependancies.Count - 1; i >= 0; i--)\n                    {\n                        var script = scriptsAndDependancies[i].Key;\n                        var dependancies = scriptsAndDependancies[i].Value;\n\n                        //Check if all the dependancies have been added to scriptList yet\n                        bool currentScriptDependanciesAdded = !dependancies.Except(scriptList).Any();\n                        if (currentScriptDependanciesAdded)\n                        {\n                            //Move script to scriptList\n                            scriptList.Add(script);\n                            scriptsAndDependancies.RemoveAt(i);\n                        }\n                    }\n                } while (scriptsAndDependancies.Count > 0);\n            }\n\n            //Generate a script tag for each script\n            var scriptsToRender = scriptList.Select(s => MakeScriptTag(helper, s)).ToList();\n#if DEBUG\n            scriptsToRender.Insert(0, "\x3c!-- BEGIN - HtmlHelperScriptExtensions.ClientScripts() --\x3e");\n            scriptsToRender.Insert(scriptsToRender.Count, "\x3c!-- END - HtmlHelperScriptExtensions.ClientScripts() --\x3e");\n#endif\n\n            //Output script tag block at point in view where method is called (by returning an MvcHtmlString)\n            return (scriptsToRender.Count > 0\n                ? MvcHtmlString.Create(string.Join(Environment.NewLine, scriptsToRender))\n                : MvcHtmlString.Empty);\n        }\n\n        /// <summary>\n        /// Add client script block to list of script blocks that will eventually be added to the view\n        /// </summary>\n        /// <param name="key">unique identifier for script block</param>\n        /// <param name="scriptBlock">script block</param>\n        /// <param name="dependancies">OPTIONAL: a string array of any script block dependancies</param>\n        /// <returns>always MvcHtmlString.Empty</returns>\n        public static MvcHtmlString AddClientScriptBlock(this HtmlHelper helper, string key, string scriptBlock, string[] dependancies = null)\n        {\n            //If script list does not already exist then initialise\n            if (!helper.ViewContext.HttpContext.Items.Contains("client-script-block-list"))\n                helper.ViewContext.HttpContext.Items["client-script-block-list"] = new Dictionary<string, KeyValuePair<string, string[]>>();\n\n            var scriptBlocks = helper.ViewContext.HttpContext.Items["client-script-block-list"] as Dictionary<string, KeyValuePair<string, string[]>>;\n\n            //Prevent duplication\n            if (scriptBlocks.ContainsKey(key)) return MvcHtmlString.Empty;\n\n            scriptBlocks.Add(key, new KeyValuePair<string, string[]>(scriptBlock, dependancies));\n\n            return MvcHtmlString.Empty;\n        }\n\n        /// <summary>\n        /// Output all "registered" script blocks associated with the current view.\n        /// Output script tags with order depending on script dependancies\n        /// </summary>\n        /// <returns>MvcHtmlString</returns>\n        public static MvcHtmlString ClientScriptBlocks(this HtmlHelper helper)\n        {\n            var scriptBlocks = helper.ViewContext.HttpContext.Items["client-script-block-list"] as Dictionary<string, KeyValuePair<string, string[]>> ?? new Dictionary<string, KeyValuePair<string, string[]>>();\n\n            //Build script tag block\n            var scriptBlockList = new List<string>();\n            if (scriptBlocks.Count > 0)\n            {\n                //Check all script dependancies exist and throw an exception if any do not\n                var distinctDependancies = scriptBlocks.Where(s => s.Value.Value != null)\n                                                       .SelectMany(s => s.Value.Value)\n                                                       .Distinct()\n                                                       .ToList();\n\n                var missingDependancies = distinctDependancies.Except(scriptBlocks.Select(s => s.Key)).ToList();\n                if (missingDependancies.Count > 0)\n                {\n                    throw new KeyNotFoundException("The following dependancies are missing: " + Environment.NewLine +\n                        Environment.NewLine +\n                        string.Join(Environment.NewLine, missingDependancies));\n                }\n\n                //Serve script blocks without dependancies first\n                scriptBlockList.AddRange(scriptBlocks.Where(s => s.Value.Value == null).Select(s => s.Value.Key));\n\n                //Get all script blocks which have dependancies\n                var scriptBlocksAndDependancies = scriptBlocks.Where(s => s.Value.Value != null)\n                                                              .OrderBy(s => s.Value.Value.Length)\n                                                              .Select(s => s.Value)\n                                                              .ToList();\n\n                //Loop round adding scripts to the scriptList until all are done\n                do\n                {\n                    //Loop backwards through list so items can be removed mid loop\n                    for (var i = scriptBlocksAndDependancies.Count - 1; i >= 0; i--)\n                    {\n                        var scriptBlock = scriptBlocksAndDependancies[i].Key;\n                        var dependancies = scriptBlocksAndDependancies[i].Value;\n\n                        //Check if all the dependancies have been added to scriptList yet\n                        bool currentScriptBlockDependanciesAdded = !dependancies.Except(scriptBlockList).Any();\n                        if (currentScriptBlockDependanciesAdded)\n                        {\n                            //Move script to scriptList\n                            scriptBlockList.Add(scriptBlock);\n                            scriptBlocksAndDependancies.RemoveAt(i);\n                        }\n                    }\n                } while (scriptBlocksAndDependancies.Count > 0);\n            }\n\n            //Generate a script tag for each script\n            var scriptBlocksToRender = scriptBlockList.Select(s => string.Format("<script type=\\"text/javascript\\">{0}{1}<\/script>", Environment.NewLine, s)).ToList();\n#if DEBUG\n            scriptBlocksToRender.Insert(0, "\x3c!-- BEGIN - HtmlHelperScriptExtensions.ClientScriptBlocks() --\x3e");\n            scriptBlocksToRender.Insert(scriptBlocksToRender.Count, "\x3c!-- END - HtmlHelperScriptExtensions.ClientScriptBlocks() --\x3e");\n#endif\n\n            //Output script tag block at point in view where method is called (by returning an MvcHtmlString)\n            return (scriptBlocksToRender.Count > 0\n                ? MvcHtmlString.Create(string.Join(Environment.NewLine, scriptBlocksToRender))\n                : MvcHtmlString.Empty);\n        }\n\n        #endregion\n\n        #region Private\n\n        /// <summary>\n        /// Take a URL, resolve it and a version suffix.  In Debug this will be based on DateTime.Now to prevent caching\n        /// on a development machine.  In Production this will be based on the version number of the appplication.\n        /// This means when the version number is incremented in subsequent releases script files should be recached automatically.\n        /// </summary>\n        /// <param name="helper"></param>\n        /// <param name="url">URL to resolve and add suffix to</param>\n        /// <returns></returns>\n        private static string ResolveUrlWithVersion(HtmlHelper helper, string url)\n        {\n#if DEBUG\n            var suffix = DateTime.Now.Ticks.ToString();\n#else\n            var suffix = System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();\n#endif\n\n            var urlWithVersionSuffix = string.Format("{0}?v={1}", url, suffix);\n            var urlResolved = new UrlHelper(helper.ViewContext.RequestContext, helper.RouteCollection).Content(urlWithVersionSuffix);\n\n            return urlResolved;\n        }\n\n        /// <summary>\n        /// Create the string that represents a script tag\n        /// </summary>\n        /// <param name="helper"></param>\n        /// <param name="url"></param>\n        /// <returns></returns>\n        private static string MakeScriptTag(HtmlHelper helper, string url)\n        {\n            var scriptToRender = DetermineScriptToRender(helper, url);\n\n            //Render script tag\n            var scriptTag = new TagBuilder("script");\n            scriptTag.Attributes["type"] = "text/javascript"; //This isn\'t really required with HTML 5 as this is the default.  As it does no real harm so I have left it for now. http://stackoverflow.com/a/9659074/761388\n            scriptTag.Attributes["src"] = SharedExtensions.ResolveUrlWithVersion(helper, scriptToRender);\n\n            var scriptTagString = scriptTag.ToString();\n            return scriptTagString;\n        }\n\n        /// <summary>\n        /// Author      : John Reilly\n        /// Description : Get the script that should be served to the user - throw an exception if it doesn\'t exist and minify if in release mode\n        /// </summary>\n        /// <param name="helper"></param>\n        /// <param name="url"></param>\n        /// <param name="minifiedSuffix">OPTIONAL - this allows you to directly specify the minified suffix if it differs from the standard\n        /// of "min.js" - unlikely this will ever be used but possible</param>\n        /// <returns></returns>\n        private static string DetermineScriptToRender(HtmlHelper helper, string url, string minifiedSuffix = "min.js")\n        {\n            //Initialise a list that will contain potential scripts to render\n            var possibleScriptsToRender = new List<string>() { url };\n\n#if DEBUG\n            //Don\'t add minified scripts in debug mode\n#else\n            //Add minified path of script to list\n            possibleScriptsToRender.Insert(0, Path.ChangeExtension(url, minifiedSuffix));\n#endif\n\n            var validScriptsToRender = possibleScriptsToRender.Where(s => File.Exists(helper.ViewContext.HttpContext.Server.MapPath(s)));\n            if (!validScriptsToRender.Any())\n                throw new FileNotFoundException("Unable to render " + url + " as none of the following scripts exist:" +\n                    string.Join(Environment.NewLine, possibleScriptsToRender));\n            else\n                return validScriptsToRender.First(); //Return first existing file in list (minified file in release mode)\n        }\n\n        #endregion\n    }\n}\n')),(0,i.kt)("h2",r({},{id:"minification---i-want-to-serve-you-less"}),"Minification - I want to serve you less..."),(0,i.kt)("p",null,"Another tweak I made to the script helper meant that when compiling either the debug or production (minified) versions of common JS files will be included if available. This means in a production environment the users get minified JS files so faster loading. And in a development environment we get the full JS files which make debugging more straightforward."),(0,i.kt)("p",null,"What I haven't started doing is minifying my own JS files as yet. I know I'm being somewhat inconsistent here by sometimes serving minified files and sometimes not. I'm not proud. Part of my rationale for this that since most of my users use my apps on a daily basis they will for the most part be using cached JS files. Obviously there'll be slightly slower load times the first time they go to a page but nothing that significant I hope."),(0,i.kt)("p",null,"I have thought of starting to do my own minification as a build step but have held off for now. Again this is something being baked into .NET 4.5; another reason why I have held off doing this a different way for now."),(0,i.kt)("p",null,"Update"),(0,i.kt)("p",null,"It now looks like this Microsofts optimisations have become ",(0,i.kt)("a",r({parentName:"p"},{href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization"}),"this Nuget package"),". It's early days (well it was released on 15th August 2012 and I'm writing this on the 16th) but I think this looks not to be tied to MVC 4 or .NET 4.5 in which case I could use it in my current MVC 3 projects. I hope so..."),(0,i.kt)("p",null,"By the way there's a ",(0,i.kt)("a",r({parentName:"p"},{href:"http://www.pluralsight.com/training/Courses/TableOfContents/mvc4#mvc4-m3-optimization"}),"nice rundown of how to use this by K. Scott Allen of Pluralsight"),". It's fantastic. Recommended."),(0,i.kt)("p",null,"Update 2"),(0,i.kt)("p",null,"Having done a little asking around I now understand that this ","*",(0,i.kt)("strong",{parentName:"p"},"can"),"*"," be used with MVC 3 / .NET 4.0. Excellent!"),(0,i.kt)("p",null,"One rather nice alternative script serving mechanism I've seen (but not yet used) is Andrew Davey's ",(0,i.kt)("a",r({parentName:"p"},{href:"http://getcassette.net"}),"Cassette")," which I mean to take for a test drive soon. This looks fantastic (and is available as a ",(0,i.kt)("a",r({parentName:"p"},{href:"http://nuget.org/packages/Cassette"}),"Nuget package")," ","-"," 10 points!)."),(0,i.kt)("h2",r({},{id:"cdns-they-want-to-serve-you"}),"CDNs (they want to serve you)"),(0,i.kt)("p",null,"I've never professionally made use of CDNs at all. There are ",(0,i.kt)("a",r({parentName:"p"},{href:"http://encosia.com/3-reasons-why-you-should-let-google-host-jquery-for-you/"}),"clearly good reasons why you should")," but most of those good reasons relate most to public facing web apps."),(0,i.kt)("p",null,"As I've said, the applications I tend to work on sit behind firewalls and it's not always guaranteed what my users can see from the grand old world of web beyond. (Indeed what they see can change on hour by hour basis sometimes...) Combined with that, because my apps are only accessible by a select few I don't face the pressure to reduce load on the server that public web apps can face."),(0,i.kt)("p",null,"So while CDN's are clearly a good thing. I don't use them at present. And that's unlikely to change in the short term."),(0,i.kt)("h2",r({},{id:"tldr"}),"TL:DR"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I don't use CDNs - they're clearly useful but they don't suit my particular needs"),(0,i.kt)("li",{parentName:"ol"},"I serve each JavaScript file individually just before the body tag. I don't bundle."),(0,i.kt)("li",{parentName:"ol"},"I don't minify my own scripts (though clearly it wouldn't be hard) but I do serve the minified versions of 3rd party libraries (eg jQuery) in a Production environment."),(0,i.kt)("li",{parentName:"ol"},"I don't use async script loaders at present. I may in future; we shall see.")),(0,i.kt)("p",null,"I expect some of the above may change (well, possibly not point #1) but this general approach is working well for me at present."),(0,i.kt)("p",null,"I haven't touched at all on how I'm structuring my JavaScript code itself. Perhaps next time."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[89779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},25770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Globalization","Bootstrap"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",source:"@site/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",description:"Last time I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.",date:"2013-01-14T00:00:00.000Z",formattedDate:"January 14, 2013",tags:[{label:"Globalization",permalink:"/tags/globalization"},{label:"Bootstrap",permalink:"/tags/bootstrap"}],readingTime:5.565,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Globalization","Bootstrap"],hide_table_of_contents:!1},prevItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}},u={authorsImageUrls:[void 0]},c=[{value:"Going global down in Acapulco",id:"going-global-down-in-acapulco",level:2},{value:"Culture-specific script bundles",id:"culture-specific-script-bundles",level:2},{value:"Where have we got to?",id:"where-have-we-got-to",level:2},{value:"International Bootstrap Datepicker",id:"international-bootstrap-datepicker",level:2},{value:"Summary",id:"summary",level:2}],p={toc:c};function d(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}),"Last time")," I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation."),(0,a.kt)("p",null,"I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/eternicode/bootstrap-datepicker"}),"here"),". Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures."),(0,a.kt)("p",null,"Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/BootstrapMvcSample"}),"here"),"."),(0,a.kt)("h2",r({},{id:"going-global-down-in-acapulco"}),"Going global down in Acapulco"),(0,a.kt)("p",null,"First step in internationalising any ASP.Net web app is adding the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8"?>\n<configuration>\n  <system.web>\n\n    \x3c!-- Other stuff here... --\x3e\n\n    <globalization\n      culture="auto"\n      uiCulture="auto"\n      enableClientBasedCulture="true" />\n  </system.web>\n\n  \x3c!-- ...and here --\x3e\n\n</configuration>\n')),(0,a.kt)("p",null,"Then I pulled ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/jquery/globalize"}),"Globalize")," and the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/eternicode/bootstrap-datepicker"}),"Andrew Rowls fork of Bootstrap Datepicker")," into the project (replacing Stefan's original assets). As well as this I pulled in the ",(0,a.kt)("inlineCode",{parentName:"p"},"jQuery.validate.globalize.js")," extension ",(0,a.kt)("a",r({parentName:"p"},{href:"/2012/09/06/globalize-and-jquery-validate"}),"I wrote about here"),". (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.IO;\nusing System.Globalization;\nusing System.Linq;\nusing System.Web;\n\nnamespace System.Web.Mvc\n{\n    public static class GlobalizationHelpers\n    {\n        /// <summary>\n        /// Taken from Scott Hanselman\'s blog post: http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx\n        /// </summary>\n        /// <typeparam name="t"></typeparam>\n        /// <param name="htmlHelper"></param>\n        /// <returns></returns>\n        public static IHtmlString MetaAcceptLanguage<t>(this HtmlHelper<t> htmlHelper)\n        {\n            var acceptLanguage = HttpUtility.HtmlAttributeEncode(CultureInfo.CurrentUICulture.ToString());\n            return new HtmlString(string.Format("<meta name=\\"accept-language\\" content=\\"{0}\\" />", acceptLanguage));\n        }\n\n        /// <summary>\n        /// Return the JavaScript bundle for this users culture\n        /// </summary>\n        /// <typeparam name="t"></typeparam>\n        /// <param name="htmlHelper"></param>\n        /// <returns>a culture bundle that looks something like this: "~/js-culture.en-GB"</returns>\n        public static string JsCultureBundle<t>(this HtmlHelper<t> htmlHelper)\n        {\n            return "~/js-culture." + CultureInfo.CurrentUICulture.ToString();\n        }\n    }\n}\n')),(0,a.kt)("h2",r({},{id:"culture-specific-script-bundles"}),"Culture-specific script bundles"),(0,a.kt)("p",null,"With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Web;\nusing System.Web.Mvc;\nusing System.Web.Optimization;\nusing System.Globalization;\nusing System.IO;\nusing System.Linq;\n\nnamespace BootstrapSupport\n{\n    public class BootstrapBundleConfig\n    {\n        public static void RegisterBundles(BundleCollection bundles)\n        {\n            bundles.Add(new ScriptBundle("~/js").Include(\n                "~/Scripts/jquery-*",\n                "~/Scripts/globalize.js", //The Globalize library\n                "~/Scripts/bootstrap.js",\n                "~/Scripts/bootstrap-datepicker.js", //This is the brand new internationalised Bootstrap Datepicker\n                "~/Scripts/jquery.validate.js",\n                "~/Scripts/jquery.validate.unobtrusive.js",\n                "~/Scripts/jquery.validate.unobtrusive-custom-for-bootstrap.js",\n                "~/Scripts/jquery.validate.globalize.js" //My jQuery Validate extension which depends on Globalize\n                ));\n\n            //Create culture specific bundles which contain the JavaScript files that should be served for each culture\n            foreach (var culture in CultureInfo.GetCultures(CultureTypes.AllCultures))\n            {\n                bundles.Add(new ScriptBundle("~/js-culture." + culture.Name).Include( //example bundle name would be "~/js-culture.en-GB"\n                    DetermineCultureFile(culture, "~/Scripts/globalize-cultures/globalize.culture.{0}.js"),             //The Globalize locale-specific JavaScript file\n                    DetermineCultureFile(culture, "~/Scripts/bootstrap-datepicker-locales/bootstrap-datepicker.{0}.js") //The Bootstrap Datepicker locale-specific JavaScript file\n                ));\n            }\n\n            bundles.Add(new StyleBundle("~/content/css").Include(\n                "~/Content/bootstrap.css",\n                "~/Content/bootstrap-datepicker.css"\n                ));\n\n            bundles.Add(new StyleBundle("~/content/css-responsive").Include(\n                "~/Content/bootstrap-responsive.css"\n                ));\n        }\n\n        /// <summary>\n        /// Given the supplied culture, determine the most appropriate Globalize culture script file that should be served up\n        /// </summary>\n        /// <param name="culture"></param>\n        /// <param name="filePattern">a file pattern, eg "~/Scripts/globalize-cultures/globalize.culture.{0}.js"</param>\n        /// <param name="defaultCulture">Default culture string to use (eg "en-GB") if one cannot be found for the supplied culture</param>\n        /// <returns></returns>\n        private static string DetermineCultureFile(CultureInfo culture,\n            string filePattern,\n            string defaultCulture = "en-GB" // I\'m a Brit and this is my default\n            )\n        {\n            //Determine culture - GUI culture for preference, user selected culture as fallback\n            var regionalisedFileToUse = string.Format(filePattern, defaultCulture);\n\n            //Try to pick a more appropriate regionalisation if there is one\n            if (File.Exists(HttpContext.Current.Server.MapPath(string.Format(filePattern, culture.Name)))) //First try for a globalize.culture.en-GB.js style file\n                regionalisedFileToUse = string.Format(filePattern, culture.Name);\n            else if (File.Exists(HttpContext.Current.Server.MapPath(string.Format(filePattern, culture.TwoLetterISOLanguageName)))) //That failed; now try for a globalize.culture.en.js style file\n                regionalisedFileToUse = string.Format(filePattern, culture.TwoLetterISOLanguageName);\n\n            return regionalisedFileToUse;\n        }\n\n    }\n}\n')),(0,a.kt)("p",null,"The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"_BootstrapLayout.basic.cshtml")," has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    \x3c!-- Existing head content goes here --\x3e\n\n    \x3c!-- Added to the head to serve a meta tag like this: <meta name="accept-language" content="en-GB" /> --\x3e\n    @Html.MetaAcceptLanguage()\n\n    \x3c!-- Existing head content continues here --\x3e\n  </head>\n  <body>\n    \x3c!-- Existing body content goes here --\x3e\n\n    \x3c!-- Replaces the existing @Scripts.Render --\x3e\n    @Scripts.Render( "~/js", Html.JsCultureBundle() //Serves up the\n    "~/js-culture.de-DE" bundle for example )\n\n    \x3c!-- Existing body content continues here --\x3e\n  </body>\n</html>\n')),(0,a.kt)("p",null,"To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"globalize.culture.de-DE.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap-datepicker.de.js"))),(0,a.kt)("h2",r({},{id:"where-have-we-got-to"}),"Where have we got to?"),(0,a.kt)("p",null,"With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions."),(0,a.kt)("p",null,"Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next..."),(0,a.kt)("h2",r({},{id:"international-bootstrap-datepicker"}),"International Bootstrap Datepicker"),(0,a.kt)("p",null,"The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create.cshtml")," file. The existing (and very simple) section should be replaced with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'@section Scripts {\n<script type="text/javascript">\n    var currentCulture = $("meta[name=\'accept-language\']").prop("content"),\n        language;\n    // Set Globalize to the current culture driven by the meta tag (if any)\n    if (currentCulture) {\n        language = (currentCulture in $.fn.datepicker.dates)\n            ? currentCulture //a language exists which looks like "zh-CN" so we\'ll use it\n            : currentCulture.split("-")[0]; //we\'ll try for a language that looks like "de" and use it if it exists (otherwise it will fall back to the default)\n    }\n    //Initialise any date pickers\n    $(\'.datepicker\').datepicker({ language: language });\n<\/script>\n}\n')),(0,a.kt)("p",null,'The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.'),(0,a.kt)("h2",r({},{id:"summary"}),"Summary"),(0,a.kt)("p",null,"In this post we:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker"),(0,a.kt)("li",{parentName:"ol"},"switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.")))}d.isMDXComponent=!0}}]);
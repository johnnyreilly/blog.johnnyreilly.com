"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[23810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),h=l,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},38052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});a(67294);var n=a(3905);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}const r={title:"Globalize and jQuery Validation",authors:"johnnyreilly",tags:["asp.net mvc","Internationalisation","Globalization","Globalize JS","Localisation","jQuery Validation","jQuery.validate.js"],hide_table_of_contents:!1},o=void 0,s={permalink:"/2012/09/06/globalize-and-jquery-validate",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-09-06-globalize-and-jquery-validate/index.md",source:"@site/blog/2012-09-06-globalize-and-jquery-validate/index.md",title:"Globalize and jQuery Validation",description:"Updated 05/10/2015",date:"2012-09-06T00:00:00.000Z",formattedDate:"September 6, 2012",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Internationalisation",permalink:"/tags/internationalisation"},{label:"Globalization",permalink:"/tags/globalization"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Localisation",permalink:"/tags/localisation"},{label:"jQuery Validation",permalink:"/tags/j-query-validation"},{label:"jQuery.validate.js",permalink:"/tags/j-query-validate-js"}],readingTime:5.485,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Globalize and jQuery Validation",authors:"johnnyreilly",tags:["asp.net mvc","Internationalisation","Globalization","Globalize JS","Localisation","jQuery Validation","jQuery.validate.js"],hide_table_of_contents:!1},prevItem:{title:"Giving OData to CRM 4.0",permalink:"/2012/09/24/giving-odata-to-crm-40"},nextItem:{title:"How to attribute encode a PartialView in MVC (Razor)",permalink:"/2012/08/24/how-to-attribute-encode-partialview-in"}},u={authorsImageUrls:[void 0]},p=[{value:"Updated 05/10/2015",id:"updated-05102015",level:2},{value:"Updated 27/08/2013",id:"updated-27082013",level:2},{value:"Background",id:"background",level:2},{value:"jQuery Global is dead... Long live Globalize!",id:"jquery-global-is-dead-long-live-globalize",level:2},{value:"Wait, where&#39;s <code>html lang</code> getting set?",id:"wait-wheres-html-lang-getting-set",level:2},{value:"Serving up the right Globalize culture files",id:"serving-up-the-right-globalize-culture-files",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],c={toc:p};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",l({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",l({},{id:"updated-05102015"}),"Updated 05/10/2015"),(0,n.kt)("p",null,"If you're after a version of this that works with Globalize 1.x then take a look ",(0,n.kt)("a",l({parentName:"p"},{href:"/2015/10/05/jquery-validation-globalize-hits-10"}),"here"),"."),(0,n.kt)("h2",l({},{id:"updated-27082013"}),"Updated 27/08/2013"),(0,n.kt)("p",null,"To make it easier for people to use the approach detailed in this post I have created a repository for ",(0,n.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," on GitHub ",(0,n.kt)("a",l({parentName:"p"},{href:"https://github.com/johnnyreilly/jquery-validation-globalize"}),"here"),"."),(0,n.kt)("p",null,"This is also available as a nuget package ",(0,n.kt)("a",l({parentName:"p"},{href:"https://www.nuget.org/packages/jQuery.Validation.Globalize/"}),"here"),"."),(0,n.kt)("p",null,"To see a good demo take a look ",(0,n.kt)("a",l({parentName:"p"},{href:"http://jqueryvalidationunobtrusivenative.azurewebsites.net/AdvancedDemo/Globalize"}),"here"),"."),(0,n.kt)("h2",l({},{id:"background"}),"Background"),(0,n.kt)("p",null,(0,n.kt)("a",l({parentName:"p"},{href:"/2012/05/07/globalizejs-number-and-date"}),"I've written before about a great little library called Globalize")," which makes locale specific number / date formatting simple within JavaScript. And I've just stumbled upon an ",(0,n.kt)("a",l({parentName:"p"},{href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"}),"old post written by Scott Hanselman about the business of Globalisation / Internationalisation / Localisation within ASP.NET"),". It's a great post and I recommend reading it (I'm using many of the approaches he discusses)."),(0,n.kt)("h2",l({},{id:"jquery-global-is-dead-long-live-globalize"}),"jQuery Global is dead... Long live Globalize!"),(0,n.kt)("p",null,"However, there's one tweak I would make to Scotts suggestions and that's to use Globalize in place of the jQuery Global plugin. The jQuery Global plugin has now effectively been reborn as Globalize (with no dependancy on jQuery). As far as I can tell jQuery Global is now disappearing from the web - certainly the link in Scotts post is dead now at least. I've ",(0,n.kt)("del",{parentName:"p"},"ripped off"),' been inspired by the "Globalized jQuery Unobtrusive Validation" section of Scotts article and made ',(0,n.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js"),"."),(0,n.kt)("p",null,"And for what it's worth ",(0,n.kt)("inlineCode",{parentName:"p"},"jquery.validate.globalize.js")," applies equally to standard jQuery Validation as well as to jQuery Unobtrusive Validation. I say that as the above JavaScript is effectively a monkey patch to the number / date / range / min / max methods of jQuery.validate.js which forces these methods to use Globalize's parsing support instead."),(0,n.kt)("p",null,"Here's the JavaScript:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-js"}),"(function ($, Globalize) {\n  // Clone original methods we want to call into\n  var originalMethods = {\n    min: $.validator.methods.min,\n    max: $.validator.methods.max,\n    range: $.validator.methods.range,\n  };\n\n  // Tell the validator that we want numbers parsed using Globalize\n\n  $.validator.methods.number = function (value, element) {\n    var val = Globalize.parseFloat(value);\n    return this.optional(element) || $.isNumeric(val);\n  };\n\n  // Tell the validator that we want dates parsed using Globalize\n\n  $.validator.methods.date = function (value, element) {\n    var val = Globalize.parseDate(value);\n    return this.optional(element) || val;\n  };\n\n  // Tell the validator that we want numbers parsed using Globalize,\n  // then call into original implementation with parsed value\n\n  $.validator.methods.min = function (value, element, param) {\n    var val = Globalize.parseFloat(value);\n    return originalMethods.min.call(this, val, element, param);\n  };\n\n  $.validator.methods.max = function (value, element, param) {\n    var val = Globalize.parseFloat(value);\n    return originalMethods.max.call(this, val, element, param);\n  };\n\n  $.validator.methods.range = function (value, element, param) {\n    var val = Globalize.parseFloat(value);\n    return originalMethods.range.call(this, val, element, param);\n  };\n})(jQuery, Globalize);\n\n$(document).ready(function () {\n  // Set Globalize to the current culture driven by the html lang property\n  var currentCulture = $('html').prop('lang');\n  if (currentCulture) {\n    Globalize.culture(currentCulture);\n  }\n});\n")),(0,n.kt)("p",null,"The above script does 2 things. Firstly it monkey patches jquery.validate.js to make use of Globalize.js number and date parsing in place of the defaults. Secondly it initialises Globalize to relevant current culture driven by the ",(0,n.kt)("inlineCode",{parentName:"p"},"html lang")," property. So if the html tag looked like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<html lang="de-DE">\n  ...\n</html>\n')),(0,n.kt)("p",null,'Then Globalize would be initialised with the "de-DE" culture assuming that culture was available and had been served up to the client. (By the way, the Globalize initialisation logic has only been placed in the code above to demonstrate that Globalize needs to be initialised to the culture. It\'s more likely that this initialisation step would sit elsewhere in a "proper" app.)'),(0,n.kt)("h2",l({},{id:"wait-wheres-html-lang-getting-set"}),"Wait, where's ",(0,n.kt)("inlineCode",{parentName:"h2"},"html lang")," getting set?"),(0,n.kt)("p",null,"In Scott's article he created a ",(0,n.kt)("inlineCode",{parentName:"p"},"MetaAcceptLanguage")," helper to generate a META tag like this: ",(0,n.kt)("inlineCode",{parentName:"p"},'&lt;meta name="accept-language" content="en-GB" /&gt;')," which he used to drive Globalizes specified culture."),(0,n.kt)("p",null,"Rather than generating a meta tag I've chosen to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"lang")," attribute of the ",(0,n.kt)("inlineCode",{parentName:"p"},"html")," tag to specify the culture. I've chosen to do this as it's more in line with the ",(0,n.kt)("a",l({parentName:"p"},{href:"http://www.w3.org/TR/i18n-html-tech-lang/#ri20030510.102829377"}),"W3C spec"),". But it should be noted this is just a different way of achieving exactly the same end."),(0,n.kt)("p",null,"So how's it getting set? Well, it's no great shakes; in my ",(0,n.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file my html tag looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<html lang="@System.Globalization.CultureInfo.CurrentUICulture.Name"></html>\n')),(0,n.kt)("p",null,"And in my ",(0,n.kt)("inlineCode",{parentName:"p"},"web.config")," I have following setting set:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-xml"}),'<configuration>\n  <system.web>\n    <globalization culture="auto" uiCulture="auto" />\n    \x3c!--- Other stuff.... --\x3e\n  </system.web>\n</configuration>\n')),(0,n.kt)("p",null,"With both of these set this means I get ",(0,n.kt)("inlineCode",{parentName:"p"},'&lt;html lang="de-DE"&gt;')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'&lt;html lang="en-GB"&gt;')," etc. depending on a users culture."),(0,n.kt)("h2",l({},{id:"serving-up-the-right-globalize-culture-files"}),"Serving up the right Globalize culture files"),(0,n.kt)("p",null,"In order that I send the correct Globalize culture to the client I've come up with this static class which provides the user with the relevant culture URL (falling back to the en-GB culture if it can't find one based your culture):"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Web;\nusing System.Web.Hosting;\nusing System.IO;\nusing System.Globalization;\n\nnamespace My.Helpers\n{\n    /// <summary>\n    /// Static class that is a store for commonly used filenames\n    /// (so if the files are updated they only need to be amended in a single place)\n    /// </summary>\n    public static class GlobalizeUrls\n    {\n\n        /// <summary>\n        /// URL for Globalize: https://github.com/jquery/globalize\n        /// </summary>\n        public static string Globalize { get { return "~/Scripts/globalize.js"; } }\n\n        /// <summary>\n        /// URL for the specific Globalize culture\n        /// </summary>\n        public static string GlobalizeCulture\n        {\n            get\n            {\n                //Determine culture - GUI culture for preference, user selected culture as fallback\n                var currentCulture = CultureInfo.CurrentCulture;\n                var filePattern = "~/scripts/globalize/globalize.culture.{0}.js";\n                var regionalisedFileToUse = string.Format(filePattern, "en-GB"); //Default localisation to use\n\n                //Try to pick a more appropriate regionalisation\n                if (File.Exists(HostingEnvironment.MapPath(string.Format(filePattern, currentCulture.Name)))) //First try for a globalize.culture.en-GB.js style file\n                    regionalisedFileToUse = string.Format(filePattern, currentCulture.Name);\n                else if (File.Exists(HostingEnvironment.MapPath(string.Format(filePattern, currentCulture.TwoLetterISOLanguageName)))) //That failed; now try for a globalize.culture.en.js style file\n                    regionalisedFileToUse = string.Format(filePattern, currentCulture.TwoLetterISOLanguageName);\n\n                return regionalisedFileToUse;\n            }\n        }\n    }\n}\n')),(0,n.kt)("h2",l({},{id:"putting-it-all-together"}),"Putting it all together"),(0,n.kt)("p",null,"To make use of all of this together you'll need to have the ",(0,n.kt)("inlineCode",{parentName:"p"},"html lang")," attribute set as described earlier and some scripts output in your layout page like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<script src="@Url.Content("~/Scripts/jquery.js")" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.Globalize)" type="text/javascript"><\/script>\n<script src="@Url.Content(GlobalizeUrls.GlobalizeCulture)" type="text/javascript"><\/script>\n<script src="@Url.Content("~/Scripts/jquery.validate.js")" type="text/javascript"><\/script>\n<script src="@Url.Content("~/scripts/jquery.validate.globalize.js")" type="text/javascript"><\/script>\n\n@* Only serve the following script if you need it: *@\n<script src="@Url.Content("~/scripts/jquery.validate.unobtrusive.js")" type="text/javascript"><\/script>\n')),(0,n.kt)("p",null,"Which will render something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<script src="/Scripts/jquery.js" type="text/javascript"><\/script>\n<script src="/Scripts/globalize.js" type="text/javascript"><\/script>\n<script\n  src="/scripts/globalize/globalize.culture.en-GB.js"\n  type="text/javascript"\n><\/script>\n<script src="/Scripts/jquery.validate.js" type="text/javascript"><\/script>\n<script\n  src="/Scripts/jquery.validate.globalize.js"\n  type="text/javascript"\n><\/script>\n<script\n  src="/Scripts/jquery.validate.unobtrusive.js"\n  type="text/javascript"\n><\/script>\n')),(0,n.kt)("p",null,"This will load up jQuery, Globalize, your Globalize culture, jQuery Validate, jQuery Validates unobtrusive extensions (which you don't need if you're not using them) and the jQuery Validate Globalize script which will set up culture aware validation."),(0,n.kt)("p",null,"Finally and just to re-iterate, it's highly worthwhile to give ",(0,n.kt)("a",l({parentName:"p"},{href:"http://www.hanselman.com/blog/GlobalizationInternationalizationAndLocalizationInASPNETMVC3JavaScriptAndJQueryPart1.aspx"}),"Scott Hanselman's original article a look"),". Most all the ideas in here were taken wholesale from him!"))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[3051],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return d}});var a=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,a,i=function(t,e){if(null==t)return{};var o,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)o=n[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var o=t.components,i=t.mdxType,n=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=p(o),d=i,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||n;return o?a.createElement(m,r(r({ref:e},c),{},{components:o})):a.createElement(m,r({ref:e},c))}));function d(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=o.length,r=new Array(n);r[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,r[1]=l;for(var p=2;p<n;p++)r[p]=o[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},18514:function(t,e,o){o.r(e),o.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=o(83117),i=o(80102),n=(o(67294),o(3905)),r=["components"],l={title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Internationalization","Twitter.Bootstrap.MVC4","Globalize JS","Twitter Bootstrap"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2013/01/14/twitterbootstrapmvc4-meet-bootstrap_14",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",source:"@site/blog/2013-01-14-twitterbootstrapmvc4-meet-bootstrap_14/index.md",title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",description:"Last time I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation.",date:"2013-01-14T00:00:00.000Z",formattedDate:"January 14, 2013",tags:[{label:"Internationalization",permalink:"/tags/internationalization"},{label:"Twitter.Bootstrap.MVC4",permalink:"/tags/twitter-bootstrap-mvc-4"},{label:"Globalize JS",permalink:"/tags/globalize-js"},{label:"Twitter Bootstrap",permalink:"/tags/twitter-bootstrap"}],readingTime:2.91,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker *and* get your Internationalization on...",authors:"johnnyreilly",tags:["Internationalization","Twitter.Bootstrap.MVC4","Globalize JS","Twitter Bootstrap"],hide_table_of_contents:!1},prevItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"},nextItem:{title:"Twitter.Bootstrap.MVC4 meet Bootstrap Datepicker",permalink:"/2013/01/09/twitterbootstrapmvc4-meet-bootstrap"}},c={authorsImageUrls:[void 0]},u=[{value:"Going global down in Acapulco",id:"going-global-down-in-acapulco",level:2},{value:"Culture-specific script bundles",id:"culture-specific-script-bundles",level:2},{value:"Where have we got to?",id:"where-have-we-got-to",level:2},{value:"International Bootstrap Datepicker",id:"international-bootstrap-datepicker",level:2},{value:"Summary",id:"summary",level:2}],h={toc:u};function d(t){var e=t.components,o=(0,i.Z)(t,r);return(0,n.kt)("wrapper",(0,a.Z)({},h,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2013/01/twitterbootstrapmvc4-meet-bootstrap.html"},"Last time")," I wrote about marrying up Twitter.Bootstrap.MVC4 and Bootstrap Datepicker. It came together quite nicely but when I took a more in depth look at what I'd done I discovered a problem. The brief work on regionalisation / internationalisation / localisation / globalisation / whatever it's called this week... wasn't really working. We had problems with the validation."),(0,n.kt)("p",null,"I also discovered that Stefan Petre's Bootstrap Datepicker appears to have been abandoned. Andrew Rowls has taken it on and created a GitHub repository for it ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eternicode/bootstrap-datepicker"},"here"),". Besides bug fixes he's also introduced the ability for the Bootstrap Datepicker to customised for different cultures."),(0,n.kt)("p",null,"Since these 2 subjects are linked I tackled them together and thought it might be worth writing up here. You can find the conclusion of my work in a GitHub repository I created ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/BootstrapMvcSample"},"here"),"."),(0,n.kt)("h2",{id:"going-global-down-in-acapulco"},"Going global down in Acapulco"),(0,n.kt)("p",null,"First step in internationalising any ASP.Net web app is adding the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"web.config"),":"),(0,n.kt)("script",{src:"https://gist.github.com/4528994.js?file=web.config"}),(0,n.kt)("p",null,"Then I pulled ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jquery/globalize"},"Globalize")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eternicode/bootstrap-datepicker"},"Andrew Rowls fork of Bootstrap Datepicker")," into the project (replacing Stefan's original assets). As well as this I pulled in the ",(0,n.kt)("inlineCode",{parentName:"p"},"jQuery.validate.globalize.js")," extension ",(0,n.kt)("a",{parentName:"p",href:"http://icanmakethiswork.blogspot.co.uk/2012/09/globalize-and-jquery-validate.html"},"I wrote about here"),". (This replaces some of the default jQuery Validate functionality for culture-specific functionality based on Globalize.) This extension depends on a meta tag that is generated using the following file (which also handles the serving up of the relevant JavaScript culture bundles, more of which shortly):"),(0,n.kt)("script",{src:"https://gist.github.com/4528994.js?file=GlobalizationHelpers.cs"}),(0,n.kt)("h2",{id:"culture-specific-script-bundles"},"Culture-specific script bundles"),(0,n.kt)("p",null,"With all of my dependancies in place I was now ready to press on. Since both Globalize and the new Bootstrap Datepicker come with their own culture-specific JavaScript files it seemed a good idea to make use of ASP.Nets new bundling functionality. This I did here:"),(0,n.kt)("script",{src:"https://gist.github.com/4528994.js?file=BootstrapBundleConfig.cs"}),(0,n.kt)("p",null,"The code above creates a script bundle for each culture when the application starts up. This script bundle contains the culture-specific Globalize and Bootstrap Datepicker JavaScript files. If further culture-specific components were added to the application it would make sense to include these here as well."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"_BootstrapLayout.basic.cshtml")," has been amended to make use of the new bundles and also to include a meta tag that will used to drive regionalisation:"),(0,n.kt)("script",{src:"https://gist.github.com/4528994.js?file=_BootstrapLayout.basic.cshtml"}),(0,n.kt)("p",null,"To illustrate how this works, a German user running a machine with the de-DE culture would be served up the following 2 files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"globalize.culture.de-DE.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bootstrap-datepicker.de.js"))),(0,n.kt)("h2",{id:"where-have-we-got-to"},"Where have we got to?"),(0,n.kt)("p",null,"With all this done we have now fixed the validation issues we were experiencing previously. This was done by including the Globalize library, the accept-language meta tag and the jQuery Validate Globalize extensions."),(0,n.kt)("p",null,"Besides this we've laid the groundwork for introducing internationalised datepickers by introducing Andrew Rowls fork of the Bootstrap Datepicker. That's what we'll do next..."),(0,n.kt)("h2",{id:"international-bootstrap-datepicker"},"International Bootstrap Datepicker"),(0,n.kt)("p",null,"The final steps of switching over to using a culture-specific date picker are achieved by making a change to the Scripts section in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create.cshtml")," file. The existing (and very simple) section should be replaced with this:"),(0,n.kt)("script",{src:"https://gist.github.com/4528994.js?file=Create.cshtml"}),(0,n.kt)("p",null,'The script above takes the region from the accept-language meta tag and attempts to look up an associated "language" for the Bootstrap Datepicker. If it finds one it uses it, if not then the default language of "en" / English will be used.'),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"In this post we:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"fixed the validation issues we'd introduced by marrying up Twitter.Bootstrap.MVC4 and the Bootstrap Datepicker"),(0,n.kt)("li",{parentName:"ol"},"switched over to using the Andrew Rowls fork of Bootstrap Datepicker and made use of the internationalisation functionality it exposes.")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[78132],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(n),c=o,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},84387:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"How I'm Using Cassette part 1:Getting Up and Running",authors:"johnnyreilly",tags:["asp.net mvc","Andrew Davey","cassette"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2013/05/04/how-im-using-cassette",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-05-04-how-im-using-cassette/index.md",source:"@site/blog/2013-05-04-how-im-using-cassette/index.md",title:"How I'm Using Cassette part 1:Getting Up and Running",description:"Backing into the light",date:"2013-05-04T00:00:00.000Z",formattedDate:"May 4, 2013",tags:[{label:"asp.net mvc",permalink:"/tags/asp-net-mvc"},{label:"Andrew Davey",permalink:"/tags/andrew-davey"},{label:"cassette",permalink:"/tags/cassette"}],readingTime:5.395,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"How I'm Using Cassette part 1:Getting Up and Running",authors:"johnnyreilly",tags:["asp.net mvc","Andrew Davey","cassette"],hide_table_of_contents:!1},prevItem:{title:"How I'm Using Cassette part 2:Get Cassette to Serve Scripts in Dependency Order",permalink:"/2013/06/06/how-im-using-cassette-part-2"},nextItem:{title:"A navigation animation (for your users delectation)",permalink:"/2013/04/26/a-navigation-animation-for-your-users"}},p={authorsImageUrls:[void 0]},d=[{value:"Backing into the light",id:"backing-into-the-light",level:2},{value:"Adding Cassette to a raw MVC 4 project",id:"adding-cassette-to-a-raw-mvc-4-project",level:2},{value:"How Web Optimization and Cassette Differ",id:"how-web-optimization-and-cassette-differ",level:2},{value:"Making use of our Bundles",id:"making-use-of-our-bundles",level:2}],h={toc:d};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"backing-into-the-light"},"Backing into the light"),(0,i.kt)("p",null,"For a while now, I've been seeking a bulletproof way to handle the following scenarios... all at the same time in the context of an ASP.Net MVC application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How to serve full-fat JavaScript in debug mode and minified in release mode"),(0,i.kt)("li",{parentName:"ol"},"When debugging, ensure that the full-fat JS being served is definitely the latest version; and ","*",(0,i.kt)("strong",{parentName:"li"},"not"),"*"," from the cache. (The time I've wasted due to ",(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/List_of_HTTP_status_codes#304"},"304's"),"...)"),(0,i.kt)("li",{parentName:"ol"},"How to add Javascript assets that need to be served up from any point in an ASP.Net MVC application (including views, layouts, partial views... even controllers if so desired) whilst preventing duplicate scripts from being served."),(0,i.kt)("li",{parentName:"ol"},"How to ensure that Javascript files are served up last to any web page to ensure a speedy feel to users (don't want JS blocking rendering)."),(0,i.kt)("li",{parentName:"ol"},"And last but certainly not least the need to load Javascript files in dependency order. If ",(0,i.kt)("inlineCode",{parentName:"li"},"myView.js")," depends on jQuery then clearly ",(0,i.kt)("inlineCode",{parentName:"li"},"jQuery-latest.js")," needs to be served before ",(0,i.kt)("inlineCode",{parentName:"li"},"myView.js"),".")),(0,i.kt)("p",null,"Now the best, most comprehensive and solid looking solution to this problem has for some time seemed to me to be ",(0,i.kt)("a",{parentName:"p",href:"http://aboutcode.net/"},"Andrew Davey's"),(0,i.kt)("a",{parentName:"p",href:"http://getcassette.net/"},"Cassette"),". This addresses all my issues in one way or another, as well as bringing in a raft of other features (support for Coffeescript etc)."),(0,i.kt)("p",null,"However, up until now I've slightly shied away from using Cassette as I was under the impression it had a large number of dependencies. That doesn't appear to be the case at all. I also had some vague notion that I could quite simply build my own solution to these problems making use of Microsoft's ",(0,i.kt)("a",{parentName:"p",href:"http://nuget.org/packages/Microsoft.AspNet.Web.Optimization/1.0.0"},"Web Optimization")," which nicely handles my #1 problem above. However, looking again at the documentation Cassette was promising to handle scenarios #1 - #5 without breaking sweat. How could I ignore that? I figured I should do the sensible thing and take another look at it. And, lo and behold, when I started evaluating it again it seemed to be just what I needed."),(0,i.kt)("p",null,"With the minumum of fuss I was able to get an ASP.Net MVC 4 solution up and running, integrated with Cassette, which dealt with all my scenarios very nicely indeed. I thought it might be good to write this up over a short series of posts and share what my finished code looks like. If you follow the steps I go through below it'll get you started using Cassette. Or you could skip to the end of this post and look at the repo on GitHub. Here we go..."),(0,i.kt)("h2",{id:"adding-cassette-to-a-raw-mvc-4-project"},"Adding Cassette to a raw MVC 4 project"),(0,i.kt)("p",null,"Fire up Visual Studio and create a new MVC 4 project (I used the internet template to have some content in place)."),(0,i.kt)("p",null,'Go to the Package Manager Console and key in "',(0,i.kt)("inlineCode",{parentName:"p"},"Install-Package Cassette.Aspnet"),'". Cassette will install itself.'),(0,i.kt)("p",null,"Now you've got Cassette in place you may as well pull out usage of Web Optimization as you're not going to need it any more.Be ruthless, delete App_Start/BundleConfig.cs and delete the line of code that references it in Global.asax.cs. If you take the time to run the app now you'll see you've miraculously lost your CSS and your JavaScript. The code referencing it is still in place but there's nothing for it to serve up. Don't worry about that - we're going to come back and Cassette-ify things later on..."),(0,i.kt)("p",null,"You'll also notice you now have a CassetteConfiguration.cs file in your project. Open it. Replace the contents with this (I've just commented out the default code and implemented my own CSS and Script bundles based on what is available in the default template of an MVC 4 app):"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=CassetteConfiguration.cs"}),(0,i.kt)("p",null,"In the script above I've created 4 bundles, 1 stylesheet bundle and 3 JavaScript bundles - each of these is roughly equivalent to Web Optimization bundles that are part of the MVC 4 template:"),(0,i.kt)("dl",null,(0,i.kt)("dt",null,"~/bundles/css"),(0,i.kt)("dd",null,"Our site CSS - this includes both our own CSS and the jQuery UI CSS as well. This is the rough equivalent of the Web Optimization bundles ",(0,i.kt)("em",null,"~/Content/css")," and ",(0,i.kt)("em",null,"~/Content/themes/base/css")," brought together."),(0,i.kt)("dt",null,"~/bundles/head"),(0,i.kt)("dd",null,"What scripts we want served in the head tag - Modernizr basically. Do note the setting of the ",(0,i.kt)("em",null,"PageLocation")," property - the purpose of this will become apparent later. This is the direct equivalent of the Web Optimization bundle: ",(0,i.kt)("em",null,"~/bundles/modernizr"),"."),(0,i.kt)("dt",null,"~/bundles/core"),(0,i.kt)("dd",null,"The scripts we want served on every page. For this example project I've picked jQuery and jQuery UI. This is the rough equivalent of the Web Optimization bundles ",(0,i.kt)("em",null,"~/bundles/jquery")," and ",(0,i.kt)("em",null,"~/bundles/jqueryui")," brought together."),(0,i.kt)("dt",null,"~/bundles/validate"),(0,i.kt)("dd",null,"The validation scripts (that are dependent on the core scripts). This is the rough equivalent of the Web Optimization bundle: ",(0,i.kt)("em",null,"~/bundles/jqueryval"),".")),(0,i.kt)("p",null,"At this point we've set up Cassette in our project - although we're not making use of it yet. If you want to double check that everything is working properly then you can fire up your project and browse to \"Cassette.axd\" in the root."),(0,i.kt)("h2",{id:"how-web-optimization-and-cassette-differ"},"How Web Optimization and Cassette Differ"),(0,i.kt)("p",null,"If you're more familiar with the workings of Web Optimization than Cassette then it's probably worth taking a moment to appreciate an important distinction between the slightly different ways each works."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Web Optimization")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create bundles as desired."),(0,i.kt)("li",{parentName:"ol"},"Serve up bundles and / or straight JavaScript files as you like within your MVC views / partial views / layouts.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cassette")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create bundles for ","*",(0,i.kt)("strong",{parentName:"li"},"all"),"*",' JavaScript files you wish to serve up. You may wish to create some bundles which consist of a number of a number of JavaScript files pushed together. But for each individual file you wish to serve you also need to create an individual bundle. (Failure to do so may mean you fall prey to the "',(0,i.kt)("em",{parentName:"li"},'Cannot find an asset bundle containing the path "',"~",'/Scripts/somePath.js".'),'")'),(0,i.kt)("li",{parentName:"ol"},"Reference bundles and / or individual JavaScript files in their individual bundles as you like within your MVC views / partial views / layouts / controllers / HTML helpers... the list goes on!"),(0,i.kt)("li",{parentName:"ol"},"Render the referenced scripts to the page (typically just before the closing ",(0,i.kt)("inlineCode",{parentName:"li"},"body")," tag)")),(0,i.kt)("h2",{id:"making-use-of-our-bundles"},"Making use of our Bundles"),(0,i.kt)("p",null,"Now we've created our bundles let's get the project serving up CSS and JavaScript using Cassette. First the layout file. Take the ",(0,i.kt)("inlineCode",{parentName:"p"},"_Layout.cshtml")," file from this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutBefore.cshtml"}),(0,i.kt)("p",null,"To this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=_LayoutAfter.cshtml"}),(0,i.kt)("p",null,"And now let's take one of the views, ",(0,i.kt)("inlineCode",{parentName:"p"},"Login.cshtml")," and take it from this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=LoginBefore.cshtml"}),(0,i.kt)("p",null,"To this:"),(0,i.kt)("script",{src:"https://gist.github.com/johnnyreilly/5393608.js?file=LoginAfter.cshtml"}),(0,i.kt)("p",null,"So now you should be up and running with Cassette. If you want the code behind this then take I've put it on GitHub ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/CassetteDemo"},"here"),"."))}c.isMDXComponent=!0}}]);
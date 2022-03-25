"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[77506],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return p}});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||n;return a?o.createElement(m,i(i({ref:t},h),{},{components:a})):o.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<n;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},10149:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=a(83117),r=a(80102),n=(a(67294),a(3905)),i=["components"],s={title:"jqGrid - it's just a far better grid",authors:"johnnyreilly",tags:["jqgrid","ajax","jquery","datagrid","Dave Ward","json","no postback","Encosia","tony tomov"],hide_table_of_contents:!1},l=void 0,d={permalink:"/2012/01/14/jqgrid-its-just-far-better-grid",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-01-14-jqgrid-its-just-far-better-grid/index.md",source:"@site/blog/2012-01-14-jqgrid-its-just-far-better-grid/index.md",title:"jqGrid - it's just a far better grid",description:'The year was 2010 (not really that long ago I know) and the project that I was working on was sorely in need of a new grid component. It was an ASP.NET WebForms project and for some time we\'d been using what was essentially a glorified datagrid which had a few extra features implemented to allow us to change column order / columns displayed / copy contents to clipboard etc. Our grid worked perfectly fine - it gave us the functionality we needed. However, it looked pretty terrible, and had some "quirky" approaches in place for supporting IE and Firefox side by side. Also, at the time we were attempting to make our app seem new and exciting again for the users. The surprising truth is that users seem to be more impressed with a visual revamp than with new or amended functionality. So I was looking for something which would make them sit up and say "oooh - isn\'t it pretty!". Unfortunately the nature of the organisation I was working for was not one that lended itself to paying for components. They were occasionally willing to do that but the hoops that would have to be jumped through first, the forms that would need to be signed in triplicate by people that had nearly nothing to do with the project made that an unattractive prospect. So I began my search initially looking at the various open source offerings that were around. As a minimum I was looking for something that would do what our home-grown component did already (change column order / columns displayed / copy contents to clipboard etc) but hopefully in a "nicer" way. Also, I had long been unhappy with the fact that to get our current grid to render results we did a \\*full postback\\* to the server and re-rendered the whole page. Pointless! Why should you need to do all this each time when you only wanted to refresh the data? Instead I was thinking about using an Ajax approach; a grid that could just get the data that it needed and render it to the client. This seemed to me a vastly "cleaner" solution - why update a whole screen when you only want to update a small part of it? Why not save yourself the trouble of having to ensure that all other screen controls are persisted just as you\'d like them after the postback? I also thought it was probably something that would scale better as it would massively reduce the amount of data moving backwards and forwards between client and server. No need for a full page life cycle on the server each time the grid refreshes. Just simple data travelling down the pipes of web. With the above criteria in mind I set out on my Google quest for a grid. Quite soon I found that there was a component out there which seemed to do all that I wanted and far more besides. It was called jqGrid:',date:"2012-01-14T00:00:00.000Z",formattedDate:"January 14, 2012",tags:[{label:"jqgrid",permalink:"/tags/jqgrid"},{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"datagrid",permalink:"/tags/datagrid"},{label:"Dave Ward",permalink:"/tags/dave-ward"},{label:"json",permalink:"/tags/json"},{label:"no postback",permalink:"/tags/no-postback"},{label:"Encosia",permalink:"/tags/encosia"},{label:"tony tomov",permalink:"/tags/tony-tomov"}],readingTime:5.405,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"jqGrid - it's just a far better grid",authors:"johnnyreilly",tags:["jqgrid","ajax","jquery","datagrid","Dave Ward","json","no postback","Encosia","tony tomov"],hide_table_of_contents:!1},prevItem:{title:"What on earth is jQuery?  And why should I care?",permalink:"/2012/01/24/what-on-earth-is-jquery-and-why-should"},nextItem:{title:"Standing on the Shoulders of Giants...",permalink:"/2012/01/07/standing-on-shoulders-of-giants"}},h={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The year was 2010 (not really that long ago I know) and the project that I was working on was sorely in need of a new grid component. It was an ",(0,n.kt)("a",{parentName:"p",href:"http://www.asp.net/web-forms"},"ASP.NET WebForms")," project and for some time we'd been using what was essentially a glorified ",(0,n.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.datagrid.aspx"},"datagrid"),' which had a few extra features implemented to allow us to change column order / columns displayed / copy contents to clipboard etc. Our grid worked perfectly fine - it gave us the functionality we needed. However, it looked pretty terrible, and had some "quirky" approaches in place for supporting IE and Firefox side by side. Also, at the time we were attempting to make our app seem new and exciting again for the users. The surprising truth is that users seem to be more impressed with a visual revamp than with new or amended functionality. So I was looking for something which would make them sit up and say "oooh - isn\'t it pretty!". Unfortunately the nature of the organisation I was working for was not one that lended itself to paying for components. They were occasionally willing to do that but the hoops that would have to be jumped through first, the forms that would need to be signed in triplicate by people that had nearly nothing to do with the project made that an unattractive prospect. So I began my search initially looking at the various open source offerings that were around. As a minimum I was looking for something that would do what our home-grown component did already (change column order / columns displayed / copy contents to clipboard etc) but hopefully in a "nicer" way. Also, I had long been unhappy with the fact that to get our current grid to render results we did a ',"*",(0,n.kt)("strong",{parentName:"p"},"full postback"),"*"," to the server and re-rendered the whole page. Pointless! Why should you need to do all this each time when you only wanted to refresh the data? Instead I was thinking about using an ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Ajax_%28programming%29"},"Ajax"),' approach; a grid that could just get the data that it needed and render it to the client. This seemed to me a vastly "cleaner" solution - why update a whole screen when you only want to update a small part of it? Why not save yourself the trouble of having to ensure that all other screen controls are persisted just as you\'d like them after the postback? I also thought it was probably something that would scale better as it would massively reduce the amount of data moving backwards and forwards between client and server. No need for a full page life cycle on the server each time the grid refreshes. Just simple data travelling down the pipes of web. With the above criteria in mind I set out on my Google quest for a grid. Quite soon I found that there was a component out there which seemed to do all that I wanted and far more besides. It was called ',(0,n.kt)("a",{parentName:"p",href:"http://www.trirand.com/blog/"},"jqGrid"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(41278).Z,width:"320",height:"224"})),(0,n.kt)("p",null,"Oooh look at the goodness! It had both column re-ordering and column choosing built in!: This was a ","*",(0,n.kt)("strong",{parentName:"p"},"very promising sign"),"*","! Now it's time for me to demonstrate my ignorance. According to the website this grid component was a \"jQuery plugin\". At the time I read this I had no idea what jQuery was at all - let alone what a plugin for it was. Anyway, I don't want to get diverted so let's just say that reading this lead to me getting an urgent education about some of the client side aspects of the modern web that I had been previously unaware of. I digress. This component did exactly what I wanted in terms of just sending data down the pipe. jqGrid worked with a whole number of possible data sources; XML, Array but the most exciting for me was obviously ",(0,n.kt)("a",{parentName:"p",href:"http://www.json.org/"},"JSON"),". Take a look a the grid rendered below and the JSON that powered it (all from a simple ",(0,n.kt)("a",{parentName:"p",href:"http://www.trirand.com/blog/jqgrid/server.php?q=2&_search=false&nd=1326531357333&rows=10&page=1&sidx=id&sord=desc"},"GET")," request):"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(83458).Z,width:"320",height:"264"})),(0,n.kt)("p",null,"As you can see from the above screenshot, the grid has populated itself using the results of a web request. The only information that has gone to the server are the relevant criteria to drive the search results. The only information that has come back from the server is the data needed to drive the grid. Simple. Beautiful. I loved it and I wanted to use it. So I did! I had to take a few steps that most people thinking about using a grid component probably wont need to. First of all I had to write an ASP.Net WebForms wrapper for jqGrid which could be implemented in a similar way to our current custom datagrid. This was because, until the users were convinced that the new grid was better than the old both had to co-exist in the project and the user would have the option to switch between the two. This WebForms wrapper plugged into our old school XML column definition files and translated them into JSON for the grid. It also took ",(0,n.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.data.dataset.aspx"},"datasets")," (which drove our old grid) and translated them into jqGrid-friendly JSON. I wanted to power the jqGrid using WebMethods on ASPX's. After a little digging I found ",(0,n.kt)("a",{parentName:"p",href:"http://encosia.com/using-jquery-to-directly-call-aspnet-ajax-page-methods/"},"Dave Ward of Encosia's post")," which made it very simple (and in line with this I switched over from ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/GET_%28HTTP%29#Request_methods"},"GET")," requests to ",(0,n.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/POST_%28HTTP%29"},"POSTs"),"). Finally I wrote some custom javascript which added a button to jqGrid which, if clicked, would copy the contents of the jqGrid to the clipboard (this was the only bit of functionality that didn't appear to be implemented out of the box with jqGrid). I think I'm going to leave it there for now but I just wanted to say that I think jqGrid is a fantastic component and it's certainly made my life better! It's: - well supported, there is lots on ",(0,n.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/tagged/jqgrid"},"StackOverflow")," and the like about it"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"there are regular ",(0,n.kt)("a",{parentName:"li",href:"http://www.trirand.com/blog/"},"releases / upgrades")),(0,n.kt)("li",{parentName:"ul"},"there are good online ",(0,n.kt)("a",{parentName:"li",href:"http://trirand.com/blog/jqgrid/jqgrid.html"},"demonstrations")," and ",(0,n.kt)("a",{parentName:"li",href:"http://www.trirand.com/jqgridwiki/doku.php"},"documentation"))),(0,n.kt)("p",null,"I think Tony Tomov (the man behind jqGrid) has come up with something truly brilliant. It's worth saying that the equally brilliant jQueryUI team are in the process of writing an official ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.jqueryui.com/w/page/34246941/Grid"},"jQuery UI grid component"),' which uses jqGrid as one of its inspirations. However, this is still a long way from even a "zero feature" release. In the meantime jqGrid is continuing to go from strength to strength and as such I heartily recommend it. Finally, you can take a look at jqGrid\'s source on ',(0,n.kt)("a",{parentName:"p",href:"https://github.com/tonytomov/jqGrid"},"GitHub"),"."))}p.isMDXComponent=!0},83458:function(e,t,a){t.Z=a.p+"assets/images/Check-out-the-JSON-6201ccc0f9ac863c4a96a4019cb49dd1.png"},41278:function(e,t,a){t.Z=a.p+"assets/images/jqgrid-in-all-its-glory-4ccd6cb98d13382fdb0ea6cd4582685b.png"}}]);
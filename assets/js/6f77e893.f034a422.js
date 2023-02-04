"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[1531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var h=n.createContext({}),l=function(e){var t=n.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(h.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),p=o,w=u["".concat(h,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(w,r(r({ref:t},c),{},{components:a})):n.createElement(w,r({ref:t},c))}));function w(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=p;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9511:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>h,toc:()=>c});a(67294);var n=a(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}const r={slug:"potted-history-of-using-ajax-on",title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",authors:"johnnyreilly",tags:["ajax","jquery","json","microsoft"],hide_table_of_contents:!1},s=void 0,h={permalink:"/potted-history-of-using-ajax-on",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-02-05-potted-history-of-using-ajax-on/index.md",source:"@site/blog/2012-02-05-potted-history-of-using-ajax-on/index.md",title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",description:"This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I've now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help \".Net-ify\" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I \\*promise\\*.) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's webservice.htc library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely Ajax\\-y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could split and unpackage as your first step on the server.",date:"2012-02-05T00:00:00.000Z",formattedDate:"February 5, 2012",tags:[{label:"ajax",permalink:"/tags/ajax"},{label:"jquery",permalink:"/tags/jquery"},{label:"json",permalink:"/tags/json"},{label:"microsoft",permalink:"/tags/microsoft"}],readingTime:7.24,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"potted-history-of-using-ajax-on",title:"A Potted History of using Ajax (on the Microsoft Stack of Love)",authors:"johnnyreilly",tags:["ajax","jquery","json","microsoft"],hide_table_of_contents:!1},prevItem:{title:"WCF Transport Windows authentication using NetTcpBinding in an Intranet environment",permalink:"/wcf-transport-windows-authentication"},nextItem:{title:"JavaScript - getting to know the beast...",permalink:"/javascript-getting-to-know-beast"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'This post originally started out as an explanation of JSON. However as I wrote this quickly got abandoned in favour of writing about how I came to use JSON in the first place - which was through the use of Ajax. Having written a goodly amount I\'ve now decided to move the actual JSON stuff into another post since I think Ajax is probably worth thinking about by itself rather than as an aside. So let me start at the beginning and explain how I came to use Ajax in the first place (this may take some time so please bear with me). In late 2004 I first started working on a project which I was to remain involved with (on and off) for a very long time indeed. The project was part financial reporting system and part sales incentivisation tool; it was used internally in the investment bank in which I was working. The project had been in existence for a number of years and had a web front end which at that point would been built in a combination of HTML, JavaScript, classic ASP and with a Visual Basic 6.0 back end. One of the reasons I had been brought on to the project was to help ".Net-ify" the thing and migrate it to ASP.NET and C#. I digress. The interesting thing about this app was that there were actually some quite advanced things being done with it (despite the classic ASP / VB). The users could enter trades into the system which represented actual trades that had been entered into a trading system elsewhere in the organisation. These trades would be assigned a reporting value which would be based on their various attributes. (Stay with me people this will get more interesting I ',"*",(0,n.kt)("strong",{parentName:"p"},"promise"),"*",".) The calculation of the reporting value was quite an in depth process and needed to be performed server-side. However, the users had decreed that it wasn't acceptable to do a full postback to the server to perform this calculation; they wanted it done \"on-the-fly\". Now if you asked me at the time I'd have said \"can't be done\". Fortunately the other people working on the project then weren't nearly so defeatist. Instead they went away and found Microsoft's ",(0,n.kt)("a",o({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/ie/ms531033%28v=vs.85%29.aspx"}),"webservice.htc")," library. For those of you that don't know this was a JavaScript library that Microsoft came up with to enable the access of Web Services on the client. Given that it was designed to work with IE 5 I suspect it was created between 1999-2001 (but I'm not certain about that). Now it came as a revelation to me but this was a JavaScript library that talked to our web services through the medium of XML. In short it was my first encounter with anything remotely ",(0,n.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Ajax_(programming)"}),"Ajax"),"-","y. It was exciting! However, the possibilities of what we could do didn't actually become apparent to me for some years. It's worth saying that the way we were using webservice.htc was exceedingly simplistic and rather than investigating further I took the limited ways we were using it as indications of the limitations of Ajax and / or webservice.htc. So for a long time I thought the following: - The only way to pass multiple arguments to a web service was to package up arguments into a single string with delimiters which you could ",(0,n.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Comparison_of_programming_languages_(string_functions)#split"}),"split")," and unpackage as your first step on the server."))}d.isMDXComponent=!0}}]);
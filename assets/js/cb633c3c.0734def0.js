"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[30315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||h[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const o={title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",authors:"johnnyreilly",tags:["Visual Studio 2012","JavaScript debugging","IE 10"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2013/04/17/ie-10-install-torches-javascript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-04-17-ie-10-install-torches-javascript/index.md",source:"@site/blog/2013-04-17-ie-10-install-torches-javascript/index.md",title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",description:"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on...",date:"2013-04-17T00:00:00.000Z",formattedDate:"April 17, 2013",tags:[{label:"Visual Studio 2012",permalink:"/tags/visual-studio-2012"},{label:"JavaScript debugging",permalink:"/tags/java-script-debugging"},{label:"IE 10",permalink:"/tags/ie-10"}],readingTime:1.175,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"IE 10 Install Torches JavaScript Debugging in Visual Studio 2012 Through Auto Update (Probably)",authors:"johnnyreilly",tags:["Visual Studio 2012","JavaScript debugging","IE 10"],hide_table_of_contents:!1},prevItem:{title:"A navigation animation (for your users delectation)",permalink:"/2013/04/26/a-navigation-animation-for-your-users"},nextItem:{title:"Making IE 10's clear field (X) button and jQuery UI autocomplete play nice",permalink:"/2013/04/09/making-ie-10s-clear-field-x-button-and"}},u={authorsImageUrls:[void 0]},p=[{value:"The Symptoms",id:"the-symptoms",level:2},{value:"The Cure",id:"the-cure",level:2},{value:"The Probable Cause",id:"the-probable-cause",level:2}],c={toc:p};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",a({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OK the title of this post is a little verbose. I've just wasted a morning of my life trying to discover what happened to my ability to debug JavaScript in Visual Studio 2012. If you don't want to experience the same pain then read on..."),(0,r.kt)("h2",a({},{id:"the-symptoms"}),"The Symptoms"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"I'm not hitting my JavaScript breakpoints when I hit F5 in Visual Studio."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",a({parentName:"li"},{href:"http://msdn.microsoft.com/en-us/library/bb385621.aspx"}),"Script Documents")," is missing from the Solution Explorer when I'm debugging in Visual Studio.")),(0,r.kt)("h2",a({},{id:"the-cure"}),"The Cure"),(0,r.kt)("p",null,"In the end, after a great deal of frustration, I happened upon ",(0,r.kt)("a",a({parentName:"p"},{href:"http://stackoverflow.com/a/15908391/761388"}),"this answer")," on Stack Overflow. It set me in the right direction."),(0,r.kt)("p",null,"I was seeing exactly the same as this list but with ",(0,r.kt)("strong",{parentName:"p"},"TWO")," instances of Internet Explorer in the list instead of one. Odd, I know."),(0,r.kt)("p",null,"I fixed this up by selecting Google Chrome as my target instead of IE, running it and then setting it back to IE. And interestingly, when I went to set it back to IE there was only one instance of Internet Explorer in the list again."),(0,r.kt)("h2",a({},{id:"the-probable-cause"}),"The Probable Cause"),(0,r.kt)("p",null,"My machine was auto updated from IE 9 to IE 10 just the other day. I ","*",(0,r.kt)("strong",{parentName:"p"},"think"),"*",' my JavaScript debugging issue appeared at the same time. This would explain to me why I had two instances of "Internet Explorer" in my list. Not certain but I\'d say the evidence is fairly compelling.'),(0,r.kt)("p",null,"Painful Microsoft. Painful"))}h.isMDXComponent=!0}}]);
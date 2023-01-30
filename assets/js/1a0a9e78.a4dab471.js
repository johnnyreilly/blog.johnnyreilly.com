"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[59806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),y=o,f=p["".concat(c,".").concat(y)]||p[y]||m[y]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const l={title:"Getting more RESTful with Web API and IHttpActionResult",authors:"johnnyreilly",tags:["Web API 2","IHttpActionResult"],hide_table_of_contents:!1},i=void 0,c={permalink:"/2014/08/08/getting-more-RESTful-with-Web-API",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-08-08-getting-more-RESTful-with-Web-API/index.md",source:"@site/blog/2014-08-08-getting-more-RESTful-with-Web-API/index.md",title:"Getting more RESTful with Web API and IHttpActionResult",description:"Up until, well yesterday really, I tended to have my Web API action methods all returning 200's no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message.",date:"2014-08-08T00:00:00.000Z",formattedDate:"August 8, 2014",tags:[{label:"Web API 2",permalink:"/tags/web-api-2"},{label:"IHttpActionResult",permalink:"/tags/i-http-action-result"}],readingTime:2.685,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Getting more RESTful with Web API and IHttpActionResult",authors:"johnnyreilly",tags:["Web API 2","IHttpActionResult"],hide_table_of_contents:!1},prevItem:{title:"My Unrequited Love for Isolate Scope",permalink:"/2014/08/12/my-unrequited-love-for-isolate-scope"},nextItem:{title:"AngularJS meet ASP.Net Server Validation",permalink:"/2014/08/01/angularjs-meet-aspnet-server-validation"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Up until, well yesterday really, I tended to have my Web API action methods all returning ",(0,n.kt)("a",o({parentName:"p"},{href:"http://en.wikipedia.org/wiki/HTTP_200#2xx_Success"}),"200"),"'s no matter what. Successful request? 200 for you sir! Some validation error in the model? 200 for you too ma'am - but I'll wrap up the validation errors and send them back too. Database error? 200 and and an error message."))}m.isMDXComponent=!0}}]);
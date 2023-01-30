"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[90786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=p(r),f=o,m=y["".concat(s,".").concat(f)]||y[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},17590:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",authors:"johnnyreilly",tags:["asp net core","proxy","http requests","allowlist"],image:"./hang-on-lads-ive-got-a-great-idea.webp",hide_table_of_contents:!1},l=void 0,s={permalink:"/2019/02/22/aspnet-core-allowlist-proxying-http-requests",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-02-22-aspnet-core-allowlist-proxying-http-requests/index.md",source:"@site/blog/2019-02-22-aspnet-core-allowlist-proxying-http-requests/index.md",title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",description:"This post demonstrates a mechanism for proxying HTTP requests in ASP.NET Core. It doesn't proxy all requests; it only proxies requests that match entries on an \"allowlist\" - so we only proxy the traffic that we've actively decided is acceptable as determined by taking the form of an expected URL and HTTP verb (GET / POST etc).",date:"2019-02-22T00:00:00.000Z",formattedDate:"February 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"proxy",permalink:"/tags/proxy"},{label:"http requests",permalink:"/tags/http-requests"},{label:"allowlist",permalink:"/tags/allowlist"}],readingTime:6.49,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",authors:"johnnyreilly",tags:["asp net core","proxy","http requests","allowlist"],image:"./hang-on-lads-ive-got-a-great-idea.webp",hide_table_of_contents:!1},prevItem:{title:"fork-ts-checker-webpack-plugin v1.0",permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1"},nextItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"}},p={image:r(64251).Z,authorsImageUrls:[void 0]},c=[],y={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This post demonstrates a mechanism for proxying HTTP requests in ASP.NET Core. It doesn't proxy all requests; it only proxies requests that match entries on an \"allowlist\" - so we only proxy the traffic that we've actively decided is acceptable as determined by taking the form of an expected URL and HTTP verb (GET / POST etc)."))}u.isMDXComponent=!0},64251:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hang-on-lads-ive-got-a-great-idea-1f149b8af4aa7df5f8b7f66965781ceb.webp"}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[50785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=o,m=y["".concat(u,".").concat(d)]||y[d]||p[d]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[y]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29854:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={title:"jQuery Unobtrusive Remote Validation",authors:"johnnyreilly",tags:["jquery","jquery remote validation","jquery unobtrusive validation"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2012/03/03/jquery-unobtrusive-remote-validation",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-03-03-jquery-unobtrusive-remote-validation/index.md",source:"@site/blog/2012-03-03-jquery-unobtrusive-remote-validation/index.md",title:"jQuery Unobtrusive Remote Validation",description:"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:",date:"2012-03-03T00:00:00.000Z",formattedDate:"March 3, 2012",tags:[{label:"jquery",permalink:"/tags/jquery"},{label:"jquery remote validation",permalink:"/tags/jquery-remote-validation"},{label:"jquery unobtrusive validation",permalink:"/tags/jquery-unobtrusive-validation"}],readingTime:9,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"jQuery Unobtrusive Remote Validation",authors:"johnnyreilly",tags:["jquery","jquery remote validation","jquery unobtrusive validation"],hide_table_of_contents:!1},prevItem:{title:"Striving for (JavaScript) Convention",permalink:"/2012/03/12/striving-for-javascript-convention"},nextItem:{title:"The Joy of JSON",permalink:"/2012/02/23/joy-of-json"}},s={authorsImageUrls:[void 0]},c=[],y={toc:c};function p(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)("wrapper",o({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Just recently I have been particularly needing to make use of remote / server-side validation in my ASP.NET MVC application and found that the unobtrusive way of using this seemed to be rather inadequately documented (of course it's possible that it's well documented and I just didn't find the resources). Anyway I've rambled on much longer than I intended to in this post so here's the TL;DR:"))}p.isMDXComponent=!0}}]);
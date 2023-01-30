"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[91744],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,y=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"C# 9 in-process Azure Functions",authors:"johnnyreilly",tags:["C#","Azure Functions",".NET"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/2021/07/01/c-sharp-9-azure-functions-in-process",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-07-01-c-sharp-9-azure-functions-in-process/index.md",source:"@site/blog/2021-07-01-c-sharp-9-azure-functions-in-process/index.md",title:"C# 9 in-process Azure Functions",description:"C# 9 has some amazing features. Azure Functions are have two modes: isolated and in-process. Whilst isolated supports .NET 5 (and hence C# 9), in-process supports .NET Core 3.1 (C# 8). This post shows how we can use C# 9 with in-process Azure Functions running on .NET Core 3.1.",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"C#",permalink:"/tags/c"},{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET",permalink:"/tags/net"}],readingTime:4.57,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"C# 9 in-process Azure Functions",authors:"johnnyreilly",tags:["C#","Azure Functions",".NET"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Output connection strings and keys from Azure Bicep",permalink:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep"},nextItem:{title:"React 18 and TypeScript",permalink:"/2021/06/30/react-18-and-typescript"}},l={image:n(63830).Z,authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){var{components:t}=e,a=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"C# 9 has some amazing features. Azure Functions are have two modes: isolated and in-process. Whilst isolated supports .NET 5 (and hence C# 9), in-process supports .NET Core 3.1 (C# 8). This post shows how we can use C# 9 with in-process Azure Functions running on .NET Core 3.1."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image showing name of post and the Azure Functions logo",src:n(63830).Z,width:"880",height:"412"})))}m.isMDXComponent=!0},63830:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-b8b84348dde4a80d4de091c908ecc77d.png"}}]);
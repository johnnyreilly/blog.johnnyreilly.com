"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[79965],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),y=o,m=s["".concat(p,".").concat(y)]||s[y]||f[y]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},94429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>l});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},c=void 0,p={permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",source:"@site/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",date:"2021-06-11T00:00:00.000Z",formattedDate:"June 11, 2021",tags:[{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET",permalink:"/tags/net"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:3.385,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},prevItem:{title:"React 18 and TypeScript",permalink:"/2021/06/30/react-18-and-typescript"},nextItem:{title:"Azurite and Table Storage in a dev container",permalink:"/2021/05/15/azurite-and-table-storage-dev-container"}},u={image:n(28061).Z,authorsImageUrls:[void 0]},l=[],s={toc:l};function f(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. There's an excellent ",(0,r.kt)("a",o({parentName:"p"},{href:"https://codetraveler.io/2021/05/28/creating-azure-functions-using-net-5/"}),"guide")," for the general steps required to perform the upgrade. However there's a number of (unrelated) items which are not covered by that post:"))}f.isMDXComponent=!0},28061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-8c454e88184cf532ac81230927060f90.png"}}]);
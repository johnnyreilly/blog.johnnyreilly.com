"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[57529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=i,f=u["".concat(o,".").concat(b)]||u[b]||m[b]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=b;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},47521:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const l={slug:"bicep-meet-azure-pipelines",title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.webp",hide_table_of_contents:!1},p=void 0,o={permalink:"/bicep-meet-azure-pipelines",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",source:"@site/blog/2021-03-20-bicep-meet-azure-pipelines/index.md",title:"Bicep meet Azure Pipelines",description:"Bicep is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available.",date:"2021-03-20T00:00:00.000Z",formattedDate:"March 20, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure CLI",permalink:"/tags/azure-cli"}],readingTime:4.905,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"bicep-meet-azure-pipelines",title:"Bicep meet Azure Pipelines",authors:"johnnyreilly",tags:["Bicep","ARM templates","Azure Pipelines","Azure CLI"],image:"./bicep-meet-azure-pipelines.webp",hide_table_of_contents:!1},prevItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/bicep-meet-azure-pipelines-2"},nextItem:{title:"RSS update; we moved to Docusaurus",permalink:"/rss-update-we-moved-to-docusaurus"}},s={image:r(81474).Z,authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){var{components:t}=e,l=a(e,["components"]);return(0,n.kt)("wrapper",i({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/Azure/bicep"}),"Bicep")," is a terser and more readable alternative language to ARM templates. Running ARM templates in Azure Pipelines is straightforward. However, there isn't yet a first class experience for running Bicep in Azure Pipelines. This post demonstrates an approach that can be used until a Bicep task is available."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"Bicep meet Azure Pipelines",src:r(81474).Z,width:"504",height:"252"})))}m.isMDXComponent=!0},81474:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/bicep-meet-azure-pipelines-395092edba2730e38d21373a36d96e28.webp"}}]);
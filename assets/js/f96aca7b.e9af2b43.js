"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[44842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),y=o,b=c["".concat(p,".").concat(y)]||c[y]||d[y]||i;return r?n.createElement(b,a(a({ref:t},u),{},{components:r})):n.createElement(b,a({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},72105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const a={slug:"azure-static-web-apps-node-16-oryx",title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",description:"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, here is how.",hide_table_of_contents:!1},s=void 0,p={permalink:"/azure-static-web-apps-node-16-oryx",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",source:"@site/blog/2022-05-28-azure-static-web-apps-node-16-oryx/index.md",title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",description:"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, here is how.",date:"2022-05-28T00:00:00.000Z",formattedDate:"May 28, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"Node.js",permalink:"/tags/node-js"},{label:"Oryx",permalink:"/tags/oryx"}],readingTime:2.065,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"azure-static-web-apps-node-16-oryx",title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus","Node.js","Oryx"],image:"./title-image.png",description:"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, here is how.",hide_table_of_contents:!1},prevItem:{title:"TypeScript 4.7 and ECMAScript Module Support",permalink:"/typescript-4-7-and-ecmascript-module-support"},nextItem:{title:"Azure Static Web Apps: named preview environments with Azure DevOps",permalink:"/static-web-apps-azure-devops-named-preview-environments"}},l={image:r(90764).Z,authorsImageUrls:[void 0]},u=[],c={toc:u};function d(e){var{components:t}=e,a=i(e,["components"]);return(0,n.kt)("wrapper",o({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Azure Static Web Apps presently fixes to Node.js 14 when building. If you require a different version of Node to build, this can be a problem. This post outlines a workaround."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Static Web Apps: Node.js 16 and Oryx&quot; with Azure and Node.js logos",src:r(90764).Z,width:"1600",height:"900"})))}d.isMDXComponent=!0},90764:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/title-image-b683e623552cedc511247615df08535b.png"}}]);
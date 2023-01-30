"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[83725],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),l=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,y=u["".concat(a,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(y,s(s({ref:t},c),{},{components:n})):r.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p[u]="string"==typeof e?e:i,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",authors:"johnnyreilly",tags:["Azure Pipelines","Node.js","typescript"],image:"./title-image.png",description:"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate.",hide_table_of_contents:!1},p=void 0,a={permalink:"/2023/01/05/azure-pipelines-custom-pipelines-task-extension-node-16",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-05-azure-pipelines-custom-pipelines-task-extension-node-16/index.md",source:"@site/blog/2023-01-05-azure-pipelines-custom-pipelines-task-extension-node-16/index.md",title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",description:"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate.",date:"2023-01-05T00:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Node.js",permalink:"/tags/node-js"},{label:"typescript",permalink:"/tags/typescript"}],readingTime:3.44,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",authors:"johnnyreilly",tags:["Azure Pipelines","Node.js","typescript"],image:"./title-image.png",description:"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate.",hide_table_of_contents:!1},prevItem:{title:"How I ruined my SEO",permalink:"/2023/01/15/how-i-ruined-my-seo"},nextItem:{title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",permalink:"/2023/01/01/application-insights-bicep-azure-static-web-apps"}},l={image:n(3913).Z,authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate from a Node.js 10 custom task to one that runs on Node 16 using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://www.npmjs.com/package/azure-pipelines-task-lib"}),(0,r.kt)("inlineCode",{parentName:"a"},"azure-pipelines-task-lib")),"."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Pipelines - Node.js 16 and custom pipelines task extensions&quot; with Azure Pipelines, Node.js and TypeScript logos",src:n(3913).Z,width:"800",height:"450"})))}m.isMDXComponent=!0},3913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-f76c725f0d8f48c86123fca4b5f0b2e6.png"}}]);
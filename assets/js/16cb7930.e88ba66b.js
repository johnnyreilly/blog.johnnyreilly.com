"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[8674],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),f=i,y=c["".concat(s,".").concat(f)]||c[f]||m[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},19432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={title:"azure-pipelines-task-lib and isOutput setVariable",authors:"johnnyreilly",tags:["Azure Pipelines"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2020/12/09/azure-pipelines-task-lib-and-isoutput-setvariable",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable/index.md",source:"@site/blog/2020-12-09-azure-pipelines-task-lib-and-isoutput-setvariable/index.md",title:"azure-pipelines-task-lib and isOutput setVariable",description:'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.',date:"2020-12-09T00:00:00.000Z",formattedDate:"December 9, 2020",tags:[{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"}],readingTime:1.62,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"azure-pipelines-task-lib and isOutput setVariable",authors:"johnnyreilly",tags:["Azure Pipelines"],hide_table_of_contents:!1},prevItem:{title:"Nullable reference types; CSharp's very own strictNullChecks",permalink:"/2020/12/20/nullable-reference-types-csharp-strictnullchecks"},nextItem:{title:"Visual Studio Marketplace: images in Markdown!",permalink:"/2020/11/28/images-in-markdown-for-azure-devops-marketplace"}},p={authorsImageUrls:[void 0]},u=[],c={toc:u};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",i({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Some blog posts are insightful treatises on the future of web development, some are "here\'s how I solved my problem". This is most assuredly the latter.'),(0,n.kt)("p",null,"I'm writing an ",(0,n.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"}),"custom pipelines task extension for Azure Pipelines"),". It's written with TypeScript and the ",(0,n.kt)("a",i({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-task-lib"}),"azure-pipelines-task-lib"),"."))}m.isMDXComponent=!0}}]);
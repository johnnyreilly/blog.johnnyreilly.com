"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[55851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,d=u["".concat(l,".").concat(m)]||u[m]||y[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={slug:"azure-standard-tests-with-bicep",title:"Azure standard availability tests with Bicep",authors:"johnnyreilly",tags:["Azure","Bicep"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/azure-standard-tests-with-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-11-18-azure-standard-tests-with-bicep/index.md",source:"@site/blog/2021-11-18-azure-standard-tests-with-bicep/index.md",title:"Azure standard availability tests with Bicep",description:"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up.",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:5.75,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"azure-standard-tests-with-bicep",title:"Azure standard availability tests with Bicep",authors:"johnnyreilly",tags:["Azure","Bicep"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"TypeScript vs JSDoc JavaScript",permalink:"/typescript-vs-jsdoc-javascript"},nextItem:{title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",permalink:"/nswag-generated-c-sharp-client-property-name-clash"}},c={image:r(58406).Z,authorsImageUrls:[void 0]},p=[],u={toc:p};function y(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure standard availability tests with Bicep&quot; with a Bicep logo and Azure logos",src:r(58406).Z,width:"1600",height:"900"})))}y.isMDXComponent=!0},58406:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/title-image-90f6b7716712d9f72a72a2d0895cb8f7.png"}}]);
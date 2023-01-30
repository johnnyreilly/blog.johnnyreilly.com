"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[25714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,h=u["".concat(c,".").concat(f)]||u[f]||y[f]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},37488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const a={title:"Output connection strings and keys from Azure Bicep",authors:"johnnyreilly",tags:["Bicep","Azure","connection string"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-07-07-output-connection-strings-and-keys-from-azure-bicep/index.md",source:"@site/blog/2021-07-07-output-connection-strings-and-keys-from-azure-bicep/index.md",title:"Output connection strings and keys from Azure Bicep",description:"If we're provisioning resources in Azure with Bicep, we may have a need to acquire the connection strings and keys of our newly deployed infrastructure. For example, the connection strings of an event hub or the access keys of a storage account. Perhaps we'd like to use them to run an end-to-end test, perhaps we'd like to store these secrets somewhere for later consumption. This post shows how to do that using Bicep and the listKeys helper. Optionally it shows how we could consume this in Azure Pipelines.",date:"2021-07-07T00:00:00.000Z",formattedDate:"July 7, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"Azure",permalink:"/tags/azure"},{label:"connection string",permalink:"/tags/connection-string"}],readingTime:6.14,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Output connection strings and keys from Azure Bicep",authors:"johnnyreilly",tags:["Bicep","Azure","connection string"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"webpack? esbuild? Why not both?",permalink:"/2021/07/11/webpack-esbuild-why-not-both"},nextItem:{title:"C# 9 in-process Azure Functions",permalink:"/2021/07/01/c-sharp-9-azure-functions-in-process"}},l={image:n(47088).Z,authorsImageUrls:[void 0]},p=[],u={toc:p};function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If we're provisioning resources in Azure with Bicep, we may have a need to acquire the connection strings and keys of our newly deployed infrastructure. For example, the connection strings of an event hub or the access keys of a storage account. Perhaps we'd like to use them to run an end-to-end test, perhaps we'd like to store these secrets somewhere for later consumption. This post shows how to do that using Bicep and the ",(0,r.kt)("inlineCode",{parentName:"p"},"listKeys")," helper. Optionally it shows how we could consume this in Azure Pipelines."))}y.isMDXComponent=!0},47088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-674ca0e9fcf44f133fd835cefe4888e2.png"}}]);
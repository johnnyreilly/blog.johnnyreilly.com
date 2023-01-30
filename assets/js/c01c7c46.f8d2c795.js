"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[25486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=a,g=p["".concat(l,".").concat(y)]||p[y]||d[y]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},41030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"Managed Identity, Azure SQL and Entity Framework",authors:"johnnyreilly",tags:["connection string","managed identity","entity framework","Microsoft.Data.SqlClient"],image:"./entity-framework-core-nuget.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/2021/03/10/managed-identity-azure-sql-entity-framework",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-03-10-managed-identity-azure-sql-entity-framework/index.md",source:"@site/blog/2021-03-10-managed-identity-azure-sql-entity-framework/index.md",title:"Managed Identity, Azure SQL and Entity Framework",description:"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors.",date:"2021-03-10T00:00:00.000Z",formattedDate:"March 10, 2021",tags:[{label:"connection string",permalink:"/tags/connection-string"},{label:"managed identity",permalink:"/tags/managed-identity"},{label:"entity framework",permalink:"/tags/entity-framework"},{label:"Microsoft.Data.SqlClient",permalink:"/tags/microsoft-data-sql-client"}],readingTime:4.93,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Managed Identity, Azure SQL and Entity Framework",authors:"johnnyreilly",tags:["connection string","managed identity","entity framework","Microsoft.Data.SqlClient"],image:"./entity-framework-core-nuget.png",hide_table_of_contents:!1},prevItem:{title:"The definitive guide to migrating from Blogger to Docusaurus",permalink:"/definitive-guide-to-migrating-from-blogger-to-docusaurus"},nextItem:{title:"NSwag: TypeScript and CSharp client generation based on an API",permalink:"/2021/03/06/generate-typescript-and-csharp-clients-with-nswag"}},s={image:n(43403).Z,authorsImageUrls:[void 0]},u=[],p={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Managed Identity offers a very secure way for applications running in Azure to connect to Azure SQL databases. It's an approach that does not require code changes; merely configuration of connection string and associated resources. Hence it has a good developer experience. Importantly, it allows us to avoid exposing our database to username / password authentication, and hence making it a tougher target for bad actors."))}d.isMDXComponent=!0},43403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/entity-framework-core-nuget-2e0e4c9d7a78d3028ccf7353c62e3dac.png"}}]);
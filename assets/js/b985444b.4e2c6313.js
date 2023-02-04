"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[91603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>c});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const s={slug:"permissioning-azure-pipelines-bicep-role-assignments",title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",authors:"johnnyreilly",tags:["Role Assignments","Bicep","azure devops","Azure Pipelines"],image:"./title-image.png",hide_table_of_contents:!1},a=void 0,l={permalink:"/permissioning-azure-pipelines-bicep-role-assignments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/index.md",source:"@site/blog/2021-09-12-permissioning-azure-pipelines-bicep-role-assignments/index.md",title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",description:"How can we deploy resources to Azure, and then run an integration test through them in the context of an Azure Pipeline? This post will show how to do this by permissioning our Azure Pipeline to access these resources using Azure RBAC role assignments. It will also demonstrate a dotnet test that runs in the context of the pipeline and makes use of those role assignments.",date:"2021-09-12T00:00:00.000Z",formattedDate:"September 12, 2021",tags:[{label:"Role Assignments",permalink:"/tags/role-assignments"},{label:"Bicep",permalink:"/tags/bicep"},{label:"azure devops",permalink:"/tags/azure-devops"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"}],readingTime:8.72,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"permissioning-azure-pipelines-bicep-role-assignments",title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",authors:"johnnyreilly",tags:["Role Assignments","Bicep","azure devops","Azure Pipelines"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Structured data, SEO and React",permalink:"/structured-data-seo-and-react"},nextItem:{title:"Google APIs: authentication with TypeScript",permalink:"/google-apis-authentication-with-typescript"}},p={image:n(55513).Z,authorsImageUrls:[void 0]},c=[],u={toc:c};function m(e){var{components:t}=e,s=o(e,["components"]);return(0,r.kt)("wrapper",i({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How can we deploy resources to Azure, and then run an integration test through them in the context of an Azure Pipeline? This post will show how to do this by permissioning our Azure Pipeline to access these resources using Azure RBAC role assignments. It will also demonstrate a dotnet test that runs in the context of the pipeline and makes use of those role assignments."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Permissioning Azure Pipelines with Bicep and Role Assignments&quot; and some Azure logos",src:n(55513).Z,width:"800",height:"800"})))}m.isMDXComponent=!0},55513:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-46cc8f39c57972b35cd9c539259b88f4.png"}}]);
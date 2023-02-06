"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[91343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,m=p["".concat(s,".").concat(h)]||p[h]||y[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={slug:"easy-auth-tokens-survive-releases-on-linux-azure-app-service",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.webp",tags:["Azure","Easy Auth","ASP.NET","authorization"],hide_table_of_contents:!1},l=void 0,s={permalink:"/easy-auth-tokens-survive-releases-on-linux-azure-app-service",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",source:"@site/blog/2021-02-16-easy-auth-tokens-survive-releases-on-linux-azure-app-service/index.md",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",description:'I wrote recently about zero downtime deployments on Azure App Service. Many applications require authentication, and ours is no exception. In our case we\'re using Azure Active Directory facilitated by "Easy Auth" which provides authentication to our App Service.',date:"2021-02-16T00:00:00.000Z",formattedDate:"February 16, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Easy Auth",permalink:"/tags/easy-auth"},{label:"ASP.NET",permalink:"/tags/asp-net"},{label:"authorization",permalink:"/tags/authorization"}],readingTime:3.915,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"easy-auth-tokens-survive-releases-on-linux-azure-app-service",title:"Making Easy Auth tokens survive releases on Linux Azure App Service",authors:"johnnyreilly",image:"./easy-auth-zero-downtime-deployment.webp",tags:["Azure","Easy Auth","ASP.NET","authorization"],hide_table_of_contents:!1},prevItem:{title:"Goodbye Client Affinity, Hello Data Protection with Azure",permalink:"/goodbye-client-affinity-hello-data-protection-with-azure"},nextItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/azure-app-service-health-checks-and-zero-downtime-deployments"}},u={image:r(18676).Z,authorsImageUrls:[void 0]},c=[],p={toc:c};function y(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I ",(0,n.kt)("a",a({parentName:"p"},{href:"/azure-app-service-health-checks-and-zero-downtime-deployments"}),"wrote recently about zero downtime deployments on Azure App Service"),". Many applications require authentication, and ours is no exception. In our case we're using Azure Active Directory facilitated by ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization"}),'"Easy Auth"')," which provides authentication to our App Service."))}y.isMDXComponent=!0},18676:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/easy-auth-zero-downtime-deployment-d8f0e5334be29100329883e0cbacc7b1.webp"}}]);
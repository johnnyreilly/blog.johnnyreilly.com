"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[42473],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,f=p["".concat(l,".").concat(g)]||p[g]||y[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},88495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"react-query: strongly typing useQueries",authors:"johnnyreilly",image:"./strongly-typing-usequeries.webp",tags:["useQueries","react-query"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-01-03-strongly-typing-react-query-s-usequeries/index.md",source:"@site/blog/2021-01-03-strongly-typing-react-query-s-usequeries/index.md",title:"react-query: strongly typing useQueries",description:"react-query has a weakly typed hook named useQueries. It's possible to turn that into a strong typed hook; this post shows you how.",date:"2021-01-03T00:00:00.000Z",formattedDate:"January 3, 2021",tags:[{label:"useQueries",permalink:"/tags/use-queries"},{label:"react-query",permalink:"/tags/react-query"}],readingTime:7.84,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"react-query: strongly typing useQueries",authors:"johnnyreilly",image:"./strongly-typing-usequeries.webp",tags:["useQueries","react-query"],hide_table_of_contents:!1},prevItem:{title:"Azure Easy Auth and Roles with .NET (and .NET Core)",permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"},nextItem:{title:"Create React App with ts-loader and CRACO",permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco"}},u={image:r(13630).Z,authorsImageUrls:[void 0]},c=[],p={toc:c};function y(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"react-query")," has a weakly typed hook named ",(0,n.kt)("inlineCode",{parentName:"p"},"useQueries"),". It's possible to turn that into a strong typed hook; this post shows you how."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image that says &quot;react-query: strongly typings useQueries&quot;",src:r(13630).Z,width:"800",height:"237"})))}y.isMDXComponent=!0},13630:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/strongly-typing-usequeries-f119af57c2df5e76f0d8c31836806c62.webp"}}]);
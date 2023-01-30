"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[73746],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},l=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,l=u(t,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?o.createElement(h,a(a({ref:e},l),{},{components:n})):o.createElement(h,a({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=t,u[p]="string"==typeof t?t:r,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33152:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});n(67294);var o=n(3905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",authors:"johnnyreilly",tags:["Docusaurus"],image:"./title-image.png",description:'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use fontaine to reduce this with Docusaurus sites.',hide_table_of_contents:!1},u=void 0,s={permalink:"/2022/12/01/docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-01-docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift/index.md",source:"@site/blog/2022-12-01-docusaurus-using-fontaine-to-reduce-custom-font-cumulative-layout-shift/index.md",title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",description:'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use fontaine to reduce this with Docusaurus sites.',date:"2022-12-01T00:00:00.000Z",formattedDate:"December 1, 2022",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:5.055,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Docusaurus: Using fontaine to reduce custom font cumulative layout shift",authors:"johnnyreilly",tags:["Docusaurus"],image:"./title-image.png",description:'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use fontaine to reduce this with Docusaurus sites.',hide_table_of_contents:!1},prevItem:{title:"Deep linking with Azure Static Web Apps and Easy Auth",permalink:"/2022/12/04/azure-static-web-apps-easyauth-deeplink"},nextItem:{title:"Adding lastmod to sitemap based on git commits",permalink:"/2022/11/25/adding-lastmod-to-sitemap-git-commit-date"}},c={image:n(54592).Z,authorsImageUrls:[void 0]},l=[],p={toc:l};function f(t){var{components:e}=t,a=i(t,["components"]);return(0,o.kt)("wrapper",r({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Custom font usage can introduce cumulative layout shift (or "jank") to your website. This post shows how to use ',(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/unjs/fontaine"}),"fontaine")," to reduce this with Docusaurus sites."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Docusaurus: Using fontaine to reduce custom font cumulative layout shift&quot; in a ridiculous font with the Docusaurus logo and a screenshot of a preload link HTML element",src:n(54592).Z,width:"800",height:"450"})))}f.isMDXComponent=!0},54592:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/title-image-5aabb3a132e8d0b151a0e9f9cca01a25.png"}}]);
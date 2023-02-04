"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[10435],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,k=u["".concat(p,".").concat(f)]||u[f]||y[f]||c;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=f;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[u]="string"==typeof e?e:i,o[1]=a;for(var l=2;l<c;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57080:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={slug:"typescript-and-eslint-meet-fork-ts-checker-webpack-plugin",title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",authors:"johnnyreilly",tags:["ESLint","typescript","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},a=void 0,p={permalink:"/typescript-and-eslint-meet-fork-ts-checker-webpack-plugin",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin/index.md",source:"@site/blog/2019-07-13-typescript-and-eslint-meet-fork-ts-checker-webpack-plugin/index.md",title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",description:"The fork-ts-checker-webpack-plugin has, since its inception, performed two classes of checking:",date:"2019-07-13T00:00:00.000Z",formattedDate:"July 13, 2019",tags:[{label:"ESLint",permalink:"/tags/es-lint"},{label:"typescript",permalink:"/tags/typescript"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:4.615,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"typescript-and-eslint-meet-fork-ts-checker-webpack-plugin",title:"Using TypeScript and ESLint with webpack (fork-ts-checker-webpack-plugin new feature!)",authors:"johnnyreilly",tags:["ESLint","typescript","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},prevItem:{title:"ASP.NET Core authentication: hard-coding a claim in development",permalink:"/asp-net-authentication-hard-coding-claims"},nextItem:{title:"TypeScript / webpack - you down with PnP? Yarn, you know me!",permalink:"/typescript-webpack-you-down-with-pnp"}},l={authorsImageUrls:[void 0]},s=[],u={toc:s};function y(e){var{components:t}=e,r=c(e,["components"]);return(0,n.kt)("wrapper",i({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," has, since its inception, performed two classes of checking:"))}y.isMDXComponent=!0}}]);
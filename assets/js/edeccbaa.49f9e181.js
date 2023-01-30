"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[11359],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,b=s["".concat(l,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(b,p(p({ref:t},u),{},{components:r})):n.createElement(b,p({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61377:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>p,metadata:()=>l,toc:()=>u});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const p={title:"TypeScript + Webpack: Super Pursuit Mode",authors:"johnnyreilly",tags:["HappyPack","TypeScript","cache-loader","thread-loader","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},c=void 0,l={permalink:"/2017/09/07/typescript-webpack-super-pursuit-mode",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-09-07-typescript-webpack-super-pursuit-mode/index.md",source:"@site/blog/2017-09-07-typescript-webpack-super-pursuit-mode/index.md",title:"TypeScript + Webpack: Super Pursuit Mode",description:"This post also featured as a webpack Medium publication.",date:"2017-09-07T00:00:00.000Z",formattedDate:"September 7, 2017",tags:[{label:"HappyPack",permalink:"/tags/happy-pack"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"cache-loader",permalink:"/tags/cache-loader"},{label:"thread-loader",permalink:"/tags/thread-loader"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:6.665,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript + Webpack: Super Pursuit Mode",authors:"johnnyreilly",tags:["HappyPack","TypeScript","cache-loader","thread-loader","fork-ts-checker-webpack-plugin","Webpack"],hide_table_of_contents:!1},prevItem:{title:"fork-ts-checker-webpack-plugin code clickability",permalink:"/2017/09/12/fork-ts-checker-webpack-plugin-code"},nextItem:{title:"Oh the Glamour of Open Source",permalink:"/2017/08/30/oh-glamour-of-open-source"}},i={authorsImageUrls:[void 0]},u=[],s={toc:u};function y(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("a",a({parentName:"em"},{href:"https://medium.com/webpack/typescript-webpack-super-pursuit-mode-83cc568dea79"}),"This post also featured as a webpack Medium publication"),".")))}y.isMDXComponent=!0}}]);
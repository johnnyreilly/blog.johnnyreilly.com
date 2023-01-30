"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[12956],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||y[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"VSTS... YAML up!",authors:"johnnyreilly",tags:["yaml","vsts","travis","AppVeyor"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2018/06/16/vsts-yaml-up",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2018-06-16-vsts-yaml-up/index.md",source:"@site/blog/2018-06-16-vsts-yaml-up/index.md",title:"VSTS... YAML up!",description:"For the longest time I've been using the likes of Travis and AppVeyor to build open source projects that I work on. They rock. I've also recently been dipping my toes back in the water of Visual Studio Team Services. VSTS offers a whole stack of stuff, but my own area of interest has been the Continuous Integration / Continuous Deployment offering.",date:"2018-06-16T00:00:00.000Z",formattedDate:"June 16, 2018",tags:[{label:"yaml",permalink:"/tags/yaml"},{label:"vsts",permalink:"/tags/vsts"},{label:"travis",permalink:"/tags/travis"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:4.42,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"VSTS... YAML up!",authors:"johnnyreilly",tags:["yaml","vsts","travis","AppVeyor"],hide_table_of_contents:!1},prevItem:{title:"VSTS and EF Core Migrations",permalink:"/2018/06/24/vsts-and-ef-core-migrations"},nextItem:{title:"Compromising: A Guide for Developers",permalink:"/2018/05/13/compromising-guide-for-developers"}},p={authorsImageUrls:[void 0]},c=[],u={toc:c};function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For the longest time I've been using the likes of ",(0,n.kt)("a",o({parentName:"p"},{href:"https://travis-ci.org/"}),"Travis")," and ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.appveyor.com/"}),"AppVeyor")," to build open source projects that I work on. They rock. I've also recently been dipping my toes back in the water of ",(0,n.kt)("a",o({parentName:"p"},{href:"https://www.visualstudio.com/team-services/"}),"Visual Studio Team Services"),". VSTS offers a whole stack of stuff, but my own area of interest has been the Continuous Integration / Continuous Deployment offering."))}y.isMDXComponent=!0}}]);
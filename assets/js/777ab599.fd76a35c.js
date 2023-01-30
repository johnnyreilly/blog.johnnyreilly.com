"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[56027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||y[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"GitHub Actions and Yarn",authors:"johnnyreilly",tags:["docker","yarn","GitHub Actions"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2019/01/05/github-actions-and-yarn",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-01-05-github-actions-and-yarn/index.md",source:"@site/blog/2019-01-05-github-actions-and-yarn/index.md",title:"GitHub Actions and Yarn",description:"I'd been meaning to automate the npm publishing of ts-loader for the longest time. I had attempted to use Travis to do this in the same way as fork-ts-checker-webpack-plugin. Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack.",date:"2019-01-05T00:00:00.000Z",formattedDate:"January 5, 2019",tags:[{label:"docker",permalink:"/tags/docker"},{label:"yarn",permalink:"/tags/yarn"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:4,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"GitHub Actions and Yarn",authors:"johnnyreilly",tags:["docker","yarn","GitHub Actions"],hide_table_of_contents:!1},prevItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"},nextItem:{title:"You Might Not Need thread-loader",permalink:"/2018/12/22/you-might-not-need-thread-loader"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p};function y(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I'd been meaning to automate the npm publishing of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader"}),(0,r.kt)("inlineCode",{parentName:"a"},"ts-loader"))," for the longest time. I had attempted to use Travis to do this in the same way as ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),(0,r.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack."))}y.isMDXComponent=!0}}]);
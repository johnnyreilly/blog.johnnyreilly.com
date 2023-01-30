"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[7915],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=a,m=u["".concat(p,".").concat(k)]||u[k]||h[k]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>s});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"fork-ts-checker-webpack-plugin v1.0",authors:"johnnyreilly",tags:["typescript","fork-ts-checker-webpack-plugin","ts-loader","tslint","webpack"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-03-06-fork-ts-checker-webpack-plugin-v1/index.md",source:"@site/blog/2019-03-06-fork-ts-checker-webpack-plugin-v1/index.md",title:"fork-ts-checker-webpack-plugin v1.0",description:"It's time for the first major version of fork-ts-checker-webpack-plugin. It's been a long time coming :-)",date:"2019-03-06T00:00:00.000Z",formattedDate:"March 6, 2019",tags:[{label:"typescript",permalink:"/tags/typescript"},{label:"fork-ts-checker-webpack-plugin",permalink:"/tags/fork-ts-checker-webpack-plugin"},{label:"ts-loader",permalink:"/tags/ts-loader"},{label:"tslint",permalink:"/tags/tslint"},{label:"webpack",permalink:"/tags/webpack"}],readingTime:1.895,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"fork-ts-checker-webpack-plugin v1.0",authors:"johnnyreilly",tags:["typescript","fork-ts-checker-webpack-plugin","ts-loader","tslint","webpack"],hide_table_of_contents:!1},prevItem:{title:"Google Analytics API and ASP.Net Core",permalink:"/2019/03/22/google-analytics-api-and-aspnet-core"},nextItem:{title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",permalink:"/2019/02/22/aspnet-core-allowlist-proxying-http-requests"}},c={authorsImageUrls:[void 0]},s=[{value:"A Little History",id:"a-little-history",level:2},{value:"One Point Oh",id:"one-point-oh",level:2},{value:"Incremental Watch API on by Default",id:"incremental-watch-api-on-by-default",level:2},{value:"Compatibility",id:"compatibility",level:2}],u={toc:s};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0"}),"It's time for the first major version of ",(0,r.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". It's been a long time coming :-)"),(0,r.kt)("h2",a({},{id:"a-little-history"}),"A Little History"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," was originally the handiwork of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/piotr-oles"}),"Piotr Ole\u015b"),". He raised an issue with ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/TypeStrong/ts-loader/issues/537"}),(0,r.kt)("inlineCode",{parentName:"a"},"ts-loader"))," suggesting it could be the McCartney to ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),"'s Lennon:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hi everyone!"),(0,r.kt)("p",{parentName:"blockquote"},"I've created webpack plugin: ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"}),"fork-ts-checker-webpack-plugin")," that plays nicely with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader"),". The idea is to compile project with ",(0,r.kt)("inlineCode",{parentName:"p"},"transpileOnly: true")," and check types on separate process (async). With this approach, webpack build is not blocked by type checker and we have semantic check with fast incremental build. More info on github repo :)"),(0,r.kt)("p",{parentName:"blockquote"},"So if you like it and you think it would be good to add some info in README/index.md about this plugin, I would be greatful."),(0,r.kt)("p",{parentName:"blockquote"},"Thanks :)")),(0,r.kt)("p",null,"We did like it. We did think it would be good. We took him up on his kind offer."),(0,r.kt)("p",null,"Since that time many people have had their paws on the ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," codebase. We love them all."),(0,r.kt)("h2",a({},{id:"one-point-oh"}),"One Point Oh"),(0,r.kt)("p",null,'We could have had our first major release a long time ago. The idea first occurred when webpack 5 alpha appeared. "Huh, look at that, a major version number.... Maybe we should do that?" "',(0,r.kt)("em",{parentName:"p"},"Great"),' idea chap - do it!" So here it is; fresh out the box: v1.0.0'),(0,r.kt)("p",null,"There are actually no breaking changes that we're aware of; users of 0.x ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," should be be able to upgrade without any drama."),(0,r.kt)("h2",a({},{id:"incremental-watch-api-on-by-default"}),"Incremental Watch API on by Default"),(0,r.kt)("p",null,"Users of TypeScript 3+ may notice a performance improvement as by default the plugin now uses the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/pull/20234"}),"incremental watch API")," in TypeScript."),(0,r.kt)("p",null,"Should this prove problematic you can opt out of using it by supplying ",(0,r.kt)("inlineCode",{parentName:"p"},"useTypescriptIncrementalApi: false"),". We are aware of an ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/issues/219"}),"issue with Vue and the incremental API"),". We hope it will be fixed soon - a generous member of the community is taking a look. In the meantime, we will ",(0,r.kt)("em",{parentName:"p"},"not")," default to using the incremental watch API when in Vue mode."),(0,r.kt)("h2",a({},{id:"compatibility"}),"Compatibility"),(0,r.kt)("p",null,"As it stands, the plugin supports webpack 2, 3, 4 and 5 alpha. It is compatible with TypeScript 2.1+ and TSLint 4+."),(0,r.kt)("p",null,"Right that's it - enjoy it! And thanks everyone for contributing - we really dig your help. Much love."))}h.isMDXComponent=!0}}]);
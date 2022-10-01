"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[68159],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=o,h=d["".concat(s,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50063:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={title:"Faster Docusaurus builds with swc-loader",authors:"johnnyreilly",tags:["Docusaurus","swc","webpack"],image:"./title-image.webp",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/09/29/faster-docusaurus-build-swc-loader",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-09-29-faster-docusaurus-build-swc-loader/index.md",source:"@site/blog/2022-09-29-faster-docusaurus-build-swc-loader/index.md",title:"Faster Docusaurus builds with swc-loader",description:"This post demonstrates how to speed up your Docusaurus build by using SWC and the swc-loader for webpack.",date:"2022-09-29T00:00:00.000Z",formattedDate:"September 29, 2022",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"swc",permalink:"/tags/swc"},{label:"webpack",permalink:"/tags/webpack"}],readingTime:2.21,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Faster Docusaurus builds with swc-loader",authors:"johnnyreilly",tags:["Docusaurus","swc","webpack"],image:"./title-image.webp",hide_table_of_contents:!1},prevItem:{title:"TypeScript Unit Tests with Debug Support",permalink:"/2022/10/01/typescript-unit-tests-with-debug-support"},nextItem:{title:"React: storing state in URL with URLSearchParams",permalink:"/2022/09/20/react-usesearchparamsstate"}},u={image:r(94604).Z,authorsImageUrls:[void 0]},c=[{value:"SWC",id:"swc",level:2},{value:"Goodbye <code>babel-loader</code>, hello <code>swc-loader</code>",id:"goodbye-babel-loader-hello-swc-loader",level:2},{value:"Build times",id:"build-times",level:2}],p={toc:c};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,n.kt)("wrapper",o({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This post demonstrates how to speed up your Docusaurus build by using SWC and the ",(0,n.kt)("inlineCode",{parentName:"p"},"swc-loader")," for webpack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"title image reading &quot;Faster Docusaurus builds with swc-loader&quot; with Docusaurus, SWC and webpack logos",src:r(94604).Z,width:"800",height:"450"})),(0,n.kt)("h2",o({},{id:"swc"}),"SWC"),(0,n.kt)("p",null,"At present there's a number of projects which have been providing alternate transpilation mechanisms to transform TypeScript / modern JavaScript into JavaScript that will run widely supported browsers. Historically this has been handled by tools like the TypeScript compiler itself and Babel. Both of these tools are written in TypeScript / JavaScript. The new tools and projects which have been appearing often use languages like Go and Rust which offer the gift of performance gains. Shorter build times in other words."),(0,n.kt)("p",null,"We're going to make use of ",(0,n.kt)("a",o({parentName:"p"},{href:"https://swc.rs/"}),"SWC (Speedy Web Compiler)")," to speed up the Docusaurus build. To quote the SWC docs:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SWC can be used for both compilation and bundling. For compilation, it takes JavaScript / TypeScript files using modern JavaScript features and outputs valid code that is supported by all major browsers."),(0,n.kt)("p",{parentName:"blockquote"},"\ud83c\udfce SWC is 20x faster than Babel on a single thread and 70x faster on four cores.")),(0,n.kt)("p",null,"We like faster! Interestingly, the Docusaurus site itself is built with SWC and has been since 19th March 2022. You can see ",(0,n.kt)("a",o({parentName:"p"},{href:"https://twitter.com/SidaChen63"}),"Josh Cena"),"'s ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/facebook/docusaurus/pull/6944"}),"PR implementing SWC for Docusaurus here"),"."),(0,n.kt)("p",null,"However, by default, Docusaurus is built using Babel. This post will demonstrate how to make the switch. In fact as part of the PR that implements this post, this blog (also platformed on Docusaurus) will migrate from Babel to SWC. ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/288"}),"See the blog post PR here"),"."),(0,n.kt)("h2",o({},{id:"goodbye-babel-loader-hello-swc-loader"}),"Goodbye ",(0,n.kt)("inlineCode",{parentName:"h2"},"babel-loader"),", hello ",(0,n.kt)("inlineCode",{parentName:"h2"},"swc-loader")),(0,n.kt)("p",null,"Docusaurus is bundled using webpack. As a consequence, we need a tool to bridge the gap between webpack and SWC. That tool is the ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/swc-project/swc-loader"}),(0,n.kt)("inlineCode",{parentName:"a"},"swc-loader")),"."),(0,n.kt)("p",null,"By default, the Docusaurus build uses Babel for its build. Let's add ",(0,n.kt)("inlineCode",{parentName:"p"},"swc-loader")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"@swc/core")," to the project:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"yarn add @swc/core swc-loader\n")),(0,n.kt)("p",null,"With those in place, we're now able to tweak our the webpack config in ",(0,n.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to use ",(0,n.kt)("inlineCode",{parentName:"p"},"swc-loader")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"babel-loader"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js"}),"const config = {\n  // ....\n\n  webpack: {\n    jsLoader: (isServer) => ({\n      loader: require.resolve('swc-loader'),\n      options: {\n        jsc: {\n          parser: {\n            syntax: 'typescript',\n            tsx: true,\n          },\n          target: 'es2017',\n        },\n        module: {\n          type: isServer ? 'commonjs' : 'es6',\n        },\n      },\n    }),\n  },\n\n  // ....\n};\n")),(0,n.kt)("h2",o({},{id:"build-times"}),"Build times"),(0,n.kt)("p",null,"With this in place, we're done. We can now run ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn build")," and see the difference in build times. On GitHub actions (where I build my blog), the build time for the blog site went from around 6 minutes to around 4 minutes. It's somewhat variable, but there's a definite improvement, and every little helps!"))}d.isMDXComponent=!0},94604:function(e,t,r){t.Z=r.p+"assets/images/title-image-660b3b093de8b7aa060563121156fdbd.webp"}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[14510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,y=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[h]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={slug:"typescript-types-and-repeatable-builds",title:"@types is rogue",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},p=void 0,s={permalink:"/typescript-types-and-repeatable-builds",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-02-14-typescript-types-and-repeatable-builds/index.md",source:"@site/blog/2017-02-14-typescript-types-and-repeatable-builds/index.md",title:"@types is rogue",description:'Or perhaps I should call this "@types and repeatable builds"....',date:"2017-02-14T00:00:00.000Z",formattedDate:"February 14, 2017",tags:[],readingTime:2.03,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"typescript-types-and-repeatable-builds",title:"@types is rogue",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},prevItem:{title:"Under the Duck: An Afternoon in Open Source",permalink:"/under-duck-afternoon-in-open-source"},nextItem:{title:"Hands-free HTTPS",permalink:"/hands-free-https"}},l={authorsImageUrls:[void 0]},c=[{value:"How do we respond to this?",id:"how-do-we-respond-to-this",level:2}],h={toc:c};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Or perhaps I should call this "@types and repeatable builds"....'),(0,r.kt)("p",null,"The other day, on a React / TypeScript project I work on, the nightly CI build started failing. But nothing had changed in the project... What gives? After digging I discovered the reason; spome of the type definitions which my project depends upon had changed. Why did this break my build? Let\u2019s learn some more..."),(0,r.kt)("p",null,"We acquire type definitions via npm. Type definitions from Definitely Typed are published to npm by an ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Microsoft/types-publisher"}),"automated process")," and they are all published under the @types namespace on npm. So, the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/react"}),"react type definition")," is published as the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/@types/react"}),"@types/react")," package, the node type definition is published as the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/@types/node"}),"@types/node")," package. The hip bone's connected to the thigh bone. You get the picture."),(0,r.kt)("p",null,"The npm ecosystem is essentially built on top of ",(0,r.kt)("a",a({parentName:"p"},{href:"http://semver.org/"}),"semantic versioning")," and they ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.npmjs.com/getting-started/semantic-versioning"}),"take it seriously"),". Essentially, when a package is published it should be categorised as a major release (breaking changes), a minor release (extra functionality which is backwards compatible) or a patch release (backwards compatible bug fixes)."),(0,r.kt)("p",null,"Now we get to the meat of the matter: @types is rogue. You cannot trust the version numbers on @types packages to respect semantic versioning. They don't."),(0,r.kt)("p",null,"The main reason for this is that when it comes to versioning, the @types type definition essentially looks to mirror the version of the package they are seeking to type. ",(0,r.kt)("em",{parentName:"p"},"THIS MEANS THE TYPE DEFINITION CANNOT DO ITS OWN SEMANTIC VERSIONING.")," A simple change in a type definition can lead to breakages in consuming code. That's what happened to me. Let's say an exported interface name changes; all code that relies upon the old name will now break. You see? Pain."),(0,r.kt)("h2",a({},{id:"how-do-we-respond-to-this"}),"How do we respond to this?"),(0,r.kt)("p",null,"My own take has been to pin the version numbers of @types packages; fixing to specific definitions. No ",(0,r.kt)("inlineCode",{parentName:"p"},'"~"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"^"')," for my ",(0,r.kt)("inlineCode",{parentName:"p"},"@types devDependencies"),"."),(0,r.kt)("p",null,"No respect semantic versioning? No problem. You can go much further with repeatable builds and made use of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://code.facebook.com/posts/1840075619545360"}),"facebook's new npm client yarn")," and ",(0,r.kt)("a",a({parentName:"p"},{href:"https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/"}),"lockfiles")," (very popular BTW) but I haven't felt the need yet. This should be ample for now."),(0,r.kt)("p",null,"The other question that may be nagging at your subconscious is this: what\u2019s an easy way to know when new packages are available for my project dependencies? Well, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Get-Package -Updates")," (nuget hat tip) for npm that I\u2019d recommend is this: ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/npm-check-updates"}),"npm-check-updates"),". It does the job wonderfully."))}u.isMDXComponent=!0}}]);
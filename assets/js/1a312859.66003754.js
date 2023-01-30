"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[50745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=c(n),d=i,f=y["".concat(s,".").concat(d)]||y[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[y]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",description:"ESLint provides linting for TypeScript and JavaScript in VS Code. A similar experience is available for C# in VS Code through Roslyn Analyzers.",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",source:"@site/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",title:"ESLint your C# in VS Code with Roslyn Analyzers",description:"ESLint provides linting for TypeScript and JavaScript in VS Code. A similar experience is available for C# in VS Code through Roslyn Analyzers.",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"Roslyn Analyzers",permalink:"/tags/roslyn-analyzers"},{label:"C#",permalink:"/tags/c"},{label:"VS Code",permalink:"/tags/vs-code"},{label:"Lint",permalink:"/tags/lint"},{label:"ESLint",permalink:"/tags/es-lint"}],readingTime:10.34,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",description:"ESLint provides linting for TypeScript and JavaScript in VS Code. A similar experience is available for C# in VS Code through Roslyn Analyzers.",hide_table_of_contents:!1},prevItem:{title:"Type annotations: strong types, weakly held",permalink:"/2022/04/16/type-annotations-strong-types-weakly-held"},nextItem:{title:"Azure DevOps: consume a private artifact feed",permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed"}},c={image:n(47452).Z,authorsImageUrls:[void 0]},p=[],y={toc:p};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",i({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more."),(0,r.kt)("p",null,(0,r.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;ESLint your C# in VS Code with Roslyn Analyzers&quot; with the C# and VS Code logos`",src:n(47452).Z,width:"1600",height:"900"})))}u.isMDXComponent=!0},47452:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-87463977cb164b6169999f94ac2e9988.png"}}]);
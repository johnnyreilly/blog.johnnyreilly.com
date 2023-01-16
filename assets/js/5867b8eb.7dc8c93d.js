"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[36683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const l={title:"TypeScript 4.7 and ECMAScript Module Support",authors:"johnnyreilly",tags:["TypeScript","ECMAScript Modules"],image:"./title-image.png",hide_table_of_contents:!1},a=void 0,p={permalink:"/2022/06/07/typescript-4-7-and-ecmascript-module-support",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-06-07-typescript-4-7-and-ecmascript-module-support/index.md",source:"@site/blog/2022-06-07-typescript-4-7-and-ecmascript-module-support/index.md",title:"TypeScript 4.7 and ECMAScript Module Support",description:"As part of the TypeScript 4.7 release comes a major upgrade to ECMAScript Module Support for Node.js. This post takes a look at what that means.",date:"2022-06-07T00:00:00.000Z",formattedDate:"June 7, 2022",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"ECMAScript Modules",permalink:"/tags/ecma-script-modules"}],readingTime:6.095,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 4.7 and ECMAScript Module Support",authors:"johnnyreilly",tags:["TypeScript","ECMAScript Modules"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure Container Apps: dapr pubsub",permalink:"/2022/06/21/azure-container-apps-pubsub"},nextItem:{title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",permalink:"/2022/05/28/azure-static-web-apps-node-16-oryx"}},s={image:n(62289).Z,authorsImageUrls:[void 0]},d=[{value:"A short history of ECMAScript modules",id:"a-short-history-of-ecmascript-modules",level:2},{value:"TypeScript support",id:"typescript-support",level:2},{value:"Making a module",id:"making-a-module",level:2},{value:"Adding TypeScript 4.7",id:"adding-typescript-47",level:2},{value:"Writing TypeScript ECMAScript modules",id:"writing-typescript-ecmascript-modules",level:2},{value:"ECMAScript and CommonJS side by side",id:"ecmascript-and-commonjs-side-by-side",level:2},{value:"What files are emitted?",id:"what-files-are-emitted",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:d};function u(e){var{components:t}=e,l=i(e,["components"]);return(0,r.kt)("wrapper",o({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As part of the TypeScript 4.7 release comes a major upgrade to ECMAScript Module Support for Node.js. This post takes a look at what that means."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Upgrading to React 18 with TypeScript&quot; with the React, TypeScript and Definitely Typed logos`",src:n(62289).Z,width:"1600",height:"900"})),(0,r.kt)("h2",o({},{id:"a-short-history-of-ecmascript-modules"}),"A short history of ECMAScript modules"),(0,r.kt)("p",null,'When ES6 shipped back in 2015, with it came the concept of modules for JavaScript. Back then it was known as "ES6 modules". These days they are called ECMAScript modules.'),(0,r.kt)("p",null,"Whilst writing code using ECMAScript module semantics came quickly for front end, for the back end (which is generally Node.js) that has not the case. There's a number of reasons for this:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There was already an established module system used in Node.js called ",(0,r.kt)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/CommonJS"}),"CommonJS")),(0,r.kt)("li",{parentName:"ol"},"Node.js itself did not initially offer support for ECMAScript modules; in large part because of the problems associated with being able to support CommonJS ",(0,r.kt)("em",{parentName:"li"},"as well")," as ECMAScript modules.")),(0,r.kt)("p",null,"However, with the release Node.js 14 support for ECMAScript modules (AKA \"ESM\") landed. If you're interested in the details of that module support then it's worth ",(0,r.kt)("a",o({parentName:"p"},{href:"https://blog.logrocket.com/es-modules-in-node-today/"}),"reading this post on ECMAScript modules"),"."),(0,r.kt)("h2",o({},{id:"typescript-support"}),"TypeScript support"),(0,r.kt)("p",null,"The TypeScript team have been experimenting with ways to offer support for ECMAScript modules from a Node.js perspective, and with TypeScript 4.7 support is being released."),(0,r.kt)("p",null,"In this post we'll test drive that support by attempting to build a simple module in TypeScript using the new ECMAScript modules support. As we do this, we'll discuss what it looks like to author ECMAScript modules for Node.js in TypeScript."),(0,r.kt)("p",null,"Let's go!"),(0,r.kt)("h2",o({},{id:"making-a-module"}),"Making a module"),(0,r.kt)("p",null,"We're going to make a module named ",(0,r.kt)("inlineCode",{parentName:"p"},"greeter")," - let's initialise it:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"mkdir greeter\ncd greeter\nnpm init --yes\n")),(0,r.kt)("p",null,"We now have a ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "greeter",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,r.kt)("p",null,"Node.js supports a new setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),". ",(0,r.kt)("a",o({parentName:"p"},{href:"https://nodejs.org/api/packages.html#type"}),'This can be set to either "module" or "commonjs"'),". To quote the docs:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Files ending with ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," are loaded as ES modules when the nearest parent package.json file contains a top-level field ",(0,r.kt)("inlineCode",{parentName:"p"},'"type"')," with a value of ",(0,r.kt)("inlineCode",{parentName:"p"},'"module"'),".")),(0,r.kt)("p",null,"With that in mind, we'll add a ",(0,r.kt)("inlineCode",{parentName:"p"},'"type": "module"')," to our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,r.kt)("p",null,"We're now ECMAScript module support compliant, let's start adding some TypeScript."),(0,r.kt)("h2",o({},{id:"adding-typescript-47"}),"Adding TypeScript 4.7"),(0,r.kt)("p",null,"In order that we can make use of TypeScript ECMAScript modules support we're going to install TypeScript 4.7 (currently in beta):"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"npm install typescript@4.7.0-beta --save\n")),(0,r.kt)("p",null,"With this in place we'll initialise a TypeScript project:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),"npx tsc --init\n")),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file which contains many options. We will tweak the ",(0,r.kt)("inlineCode",{parentName:"p"},"module")," option to be ",(0,r.kt)("inlineCode",{parentName:"p"},"nodenext")," to opt into ECMAScript module support:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    // ...\n    "module": "nodenext" /* Specify what module code is generated. */,\n    "outDir": "./lib" /* Specify an output folder for all emitted files. */,\n    "declaration": true /* Generate .d.ts files from TypeScript and JavaScript files in your project. */\n\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"We've also set the ",(0,r.kt)("inlineCode",{parentName:"p"},"outDir")," option, such that compiled JavaScript will go into that directory, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"declaration")," option such that ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files will be generated. We'll also update the ",(0,r.kt)("inlineCode",{parentName:"p"},'"scripts"')," section of our ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," to include ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-json"}),'  "scripts": {\n    "build": "tsc",\n    "start": "node lib/index.js"\n  },\n')),(0,r.kt)("h2",o({},{id:"writing-typescript-ecmascript-modules"}),"Writing TypeScript ECMAScript modules"),(0,r.kt)("p",null,"With all that set up, we're ready to write some TypeScript ECMAScript modules. First we'll write a ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.ts")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"export function helloWorld(): string {\n  return 'hello world!';\n}\n")),(0,r.kt)("p",null,"There is nothing new or surprising about this; it's just a module exporting a single function named ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld"),". It becomes more interesting as we write our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import { helloWorld } from './greetings.js';\n\nconst greeting = helloWorld();\n\nconsole.log(greeting);\n")),(0,r.kt)("p",null,"The code above imports our ",(0,r.kt)("inlineCode",{parentName:"p"},"helloWorld")," function and then executes it; writing the output to the console. Not particularly noteworthy. However, the way we import is. We are importing from ",(0,r.kt)("inlineCode",{parentName:"p"},"'./greetings.js'"),". In the past we would have written:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import { helloWorld } from './greetings';\n")),(0,r.kt)("p",null,"Now we write:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import { helloWorld } from './greetings.js';\n")),(0,r.kt)("p",null,"This can feel slightly odd and unnatural because we have no ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.js")," in our codebase; only ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.ts"),". The imports we're writing, reflect the code that will end up being executed; once our TypeScript has been compiled to JavaScript. In ES modules relative import paths need to use extensions."),(0,r.kt)("p",null,"The easiest way to demonstrate that this is legitimate, is to run the code:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"npm run build && npm start\n")),(0,r.kt)("p",null,"Which results in:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"> greeter@1.0.0 build\n> tsc\n\n\n> greeter@1.0.0 start\n> node lib/index.js\n\nhello world!\n")),(0,r.kt)("p",null,"So it works!"),(0,r.kt)("h2",o({},{id:"ecmascript-and-commonjs-side-by-side"}),"ECMAScript and CommonJS side by side"),(0,r.kt)("p",null,"Part of ECMAScript module support is the ability to specify the module type of a file based on the file suffix. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},".mjs"),", you're explicitly saying a file is an ECMAScript module. If you use ",(0,r.kt)("inlineCode",{parentName:"p"},".cjs"),", you're explicitly saying a file is an CommonJS module. If you're authoring with TypeScript you'd use ",(0,r.kt)("inlineCode",{parentName:"p"},"mts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cts")," respectively and they'd be transpiled to ",(0,r.kt)("inlineCode",{parentName:"p"},"mjs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cjs"),"."),(0,r.kt)("p",null,"Happily Node.js allows ES modules to import CommonJS modules as if they were ES modules with a default export; which is good news for interop. Let's test that out by writing a ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"export function helloOldWorld(): string {\n  return 'hello old world!';\n}\n")),(0,r.kt)("p",null,"Exactly the same syntax as before. We'll adjust our ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," to consume this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import { helloWorld } from './greetings.js';\nimport { helloOldWorld } from './oldGreetings.cjs';\n\nconsole.log(helloWorld());\nconsole.log(helloOldWorld());\n")),(0,r.kt)("p",null,"Note that we're importing from ",(0,r.kt)("inlineCode",{parentName:"p"},"'./oldGreetings.cjs'"),". We'll see if it works:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"npm run build && npm start\n")),(0,r.kt)("p",null,"Which results in:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-shell"}),"> greeter@1.0.0 build\n> tsc\n\n\n> greeter@1.0.0 start\n> node lib/index.js\n\nhello world!\nhello old world!\n")),(0,r.kt)("p",null,"It does work!"),(0,r.kt)("h2",o({},{id:"what-files-are-emitted"}),"What files are emitted?"),(0,r.kt)("p",null,"Before we close out, it might be interesting to look at what TypeScript is doing when we run our ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),". It transpiles our TypeScript into JavaScript in our ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directory:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A screenshot of VS Code showing the files in the lib directory",src:n(76198).Z,width:"331",height:"314"})),(0,r.kt)("p",null,"Note the ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.ts")," file has resulted in ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.js")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.d.ts")," files. Whereas ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," has resulted in ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.cjs")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.d.cts")," files; reflecting the different module types represented."),(0,r.kt)("p",null,"It's also interesting to look at the difference in the emitted JavaScript. When you consider how similar the source files were. If you look at ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"export function helloWorld() {\n  return 'hello world!';\n}\n")),(0,r.kt)("p",null,"This is the same code as ",(0,r.kt)("inlineCode",{parentName:"p"},"greetings.ts")," but with types stripped. However, if we look at ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.cjs")," we see this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"'use strict';\nObject.defineProperty(exports, '__esModule', { value: true });\nexports.helloOldWorld = void 0;\nfunction helloOldWorld() {\n  return 'hello old world!';\n}\nexports.helloOldWorld = helloOldWorld;\n")),(0,r.kt)("p",null,"In the middle the same code as ",(0,r.kt)("inlineCode",{parentName:"p"},"oldGreetings.cts")," but with types stripped, but around that boilerplate code that TypeScript is emitting for us to aid in interop."),(0,r.kt)("h2",o({},{id:"conclusion"}),"Conclusion"),(0,r.kt)("p",null,"We've seen what TypeScript support for ECMAScript modules looks like, and how to set up a module to embrace it."),(0,r.kt)("p",null,"If you'd like to read up further on the topic, the ",(0,r.kt)("a",o({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#esm-nodejs"}),"TypeScript 4.7 beta release notes")," are an excellent resource."),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://blog.logrocket.com/typescript-4-7-ecmascript-module-support/"}),"This post was originally published on LogRocket.")),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://blog.logrocket.com/typescript-4-7-ecmascript-module-support/"})))}u.isMDXComponent=!0},76198:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/screenshot-output-files-9909cf81f2820eb8cb1148d3d3186866.png"},62289:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-51300ba4c5cfd4700a16f915bbbe51d2.png"}}]);
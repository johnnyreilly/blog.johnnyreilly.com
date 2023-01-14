"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[14576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>u});n(67294);var o=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const r={title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",authors:"johnnyreilly",tags:["Azure Pipelines","azure-pipelines-task-lib","custom pipelines task extension","Node.js","TypeScript"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,p={permalink:"/2023/01/05/azure-pipelines-custom-pipelines-task-extension-node-16",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-05-azure-pipelines-custom-pipelines-task-extension-node-16/index.md",source:"@site/blog/2023-01-05-azure-pipelines-custom-pipelines-task-extension-node-16/index.md",title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",description:"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate from a Node.js 10 custom task to one that runs on Node 16 using azure-pipelines-task-lib.",date:"2023-01-05T00:00:00.000Z",formattedDate:"January 5, 2023",tags:[{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"azure-pipelines-task-lib",permalink:"/tags/azure-pipelines-task-lib"},{label:"custom pipelines task extension",permalink:"/tags/custom-pipelines-task-extension"},{label:"Node.js",permalink:"/tags/node-js"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:3.435,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",authors:"johnnyreilly",tags:["Azure Pipelines","azure-pipelines-task-lib","custom pipelines task extension","Node.js","TypeScript"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"How I ruined my SEO",permalink:"/2023/01/14/how-i-ruined-my-seo"},nextItem:{title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",permalink:"/2023/01/01/application-insights-bicep-azure-static-web-apps"}},l={image:n(3913).Z,authorsImageUrls:[void 0]},u=[{value:"The road to Node.js 16",id:"the-road-to-nodejs-16",level:2},{value:"Migrating a task to Node.js 16",id:"migrating-a-task-to-nodejs-16",level:2},{value:"Updating TypeScript to use Node 16",id:"updating-typescript-to-use-node-16",level:2},{value:"How do we know we&#39;re using Node 16?",id:"how-do-we-know-were-using-node-16",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:u};function c(e){var{components:t}=e,r=a(e,["components"]);return(0,o.kt)("wrapper",i({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Support for Node.js 16 for Azure Pipelines custom pipelines task extensions has arrived. From a TypeScript perspective, this post documents how to migrate from a Node.js 10 custom task to one that runs on Node 16 using ",(0,o.kt)("a",i({parentName:"p"},{href:"https://www.npmjs.com/package/azure-pipelines-task-lib"}),(0,o.kt)("inlineCode",{parentName:"a"},"azure-pipelines-task-lib")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Azure Pipelines - Node.js 16 and custom pipelines task extensions&quot; with Azure Pipelines, Node.js and TypeScript logos",src:n(3913).Z,width:"800",height:"450"})),(0,o.kt)("h2",i({},{id:"the-road-to-nodejs-16"}),"The road to Node.js 16"),(0,o.kt)("p",null,"Azure Pipelines custom pipelines task extensions have been around for a while. They're a great way to extend the functionality of Azure Pipelines. They're written in TypeScript and run on Node.js. ",(0,o.kt)("a",i({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/devops/extend/develop/add-build-task?view=azure-devops"}),"You can learn how to write one here"),". However, until recently they were restricted to only be able to run on Node.js 6 or Node.js 10. This was a problem as ",(0,o.kt)("a",i({parentName:"p"},{href:"https://endoflife.date/nodejs"}),"support for Node 6 ended in 2018 and Node 10 ended in 2020"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-agent/issues/3195"}),"GitHub issue was opened to track support for different Node versions with custom tasks"),", but it remained unresolved for a long time. ",(0,o.kt)("a",i({parentName:"p"},{href:"https://learn.microsoft.com/en-us/azure/devops/release-notes/2022/sprint-210-update#node-16-task-runner-in-pipeline-agent"}),"In October 2022 it was announced that Node.js 16 support was available"),"."),(0,o.kt)("h2",i({},{id:"migrating-a-task-to-nodejs-16"}),"Migrating a task to Node.js 16"),(0,o.kt)("p",null,"There's an official migration guide to help you migrate your task from Node.js 6 or Node.js 10 to Node.js 16. It's ",(0,o.kt)("a",i({parentName:"p"},{href:"https://github.com/microsoft/azure-pipelines-tasks/blob/3ab93334eb3e5c1f3750403e3b6f976909ae45c3/docs/migrateNode16.md"}),"available here"),". It gave me a couple of pointers but I wanted to document the process in a bit more detail. Also, I wanted to show how you can start to get some benefits from being on Node.js 16 with TypeScript."),(0,o.kt)("p",null,"The version of the ",(0,o.kt)("a",i({parentName:"p"},{href:"https://www.npmjs.com/package/azure-pipelines-task-lib"}),(0,o.kt)("inlineCode",{parentName:"a"},"azure-pipelines-task-lib"))," being used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," should be incremented to ",(0,o.kt)("inlineCode",{parentName:"p"},"4.0.0")," or higher. If you haven't already, it's worth updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"@types/node")," version to ",(0,o.kt)("inlineCode",{parentName:"p"},"16.0.0")," or higher. This will give you access to the types of the Node 16 APIs."),(0,o.kt)("p",null,"The migration guide suggests updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"task.json")," to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node16")," property alongside the existing ",(0,o.kt)("inlineCode",{parentName:"p"},"Node10")," one:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-diff"}),'"execution": {\n  "Node10": {\n    "target": "bash.js",\n    "argumentFormat": ""\n  },\n+  "Node16": {\n+    "target": "bash.js",\n+    "argumentFormat": ""\n+  }\n}\n')),(0,o.kt)("p",null,"I'm rather unclear as to the benefits of having a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node10")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node16")," alongside each other; there's no useful reason to do so that I can come up with. I may be missing something."),(0,o.kt)("p",null,"Either way, in my own case I wanted to take advantage of the Node 16 environment and so I removed the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node10")," property entirely. My ",(0,o.kt)("inlineCode",{parentName:"p"},"task.json")," now looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-json"}),'  "execution": {\n    "Node16": {\n      "target": "index.js"\n    }\n  }\n')),(0,o.kt)("p",null,"This was all I needed to do, to get to the point of having a Node 16 compatible task. But we want to go a little further."),(0,o.kt)("h2",i({},{id:"updating-typescript-to-use-node-16"}),"Updating TypeScript to use Node 16"),(0,o.kt)("p",null,"Now we have Node 16, we can now start using some of the APIs available there if we'd like, and we can stop transpiling to an older version of JavaScript. To do this we need to update our TypeScript configuration in our ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-diff"}),"-    \"target\": \"es6\" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,\n-    \"lib\": [] /* Specify library files to be included in the compilation. */,\n+    \"target\": \"es2021\" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,\n+    \"lib\": [\"ES2021\"] /* Specify library files to be included in the compilation. */,\n")),(0,o.kt)("p",null,"Here we're just changing the emitted JavaScript to be more modern. We're also updating the ",(0,o.kt)("inlineCode",{parentName:"p"},"lib")," property to include the ",(0,o.kt)("inlineCode",{parentName:"p"},"ES2021")," library. This will give us access to the types of the Node 16 APIs."),(0,o.kt)("h2",i({},{id:"how-do-we-know-were-using-node-16"}),"How do we know we're using Node 16?"),(0,o.kt)("p",null,"Great question! I was suspicious that the task was still running on Node 10. I wanted to know for sure. I ran a migrated task with system diagnostics enabled:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of Azure Pipelines including the text &quot;##[debug]Using node path: /home/vsts/agents/2.213.2/externals/node16/bin/node&quot;",src:n(26225).Z,width:"1204",height:"194"})),(0,o.kt)("p",null,"As we can see, we're using Node 16. This is great news!"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-bash"}),"##[debug]Using node path: /home/vsts/agents/2.213.2/externals/node16/bin/node\n")),(0,o.kt)("h2",i({},{id:"conclusion"}),"Conclusion"),(0,o.kt)("p",null,"That's it, we're now writing modern custom pipelines task extensions using Node.js 16 and TypeScript. Fingers crossed it won't be such a long wait for newer versions of Node.js to be supported! \ud83e\udd1e"))}c.isMDXComponent=!0},26225:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-azure-pipelines-node-16-3eb58b25bf50cf0f3cb901d84779cc86.png"},3913:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-f76c725f0d8f48c86123fca4b5f0b2e6.png"}}]);
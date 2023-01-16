"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[48441],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});n(67294);var o=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Debugging Azure Functions in VS Code on Mac OS",authors:"johnnyreilly",tags:["Azure Functions","VS Code","Mac OS"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/11/11/debugging-azure-functions-vs-code-mac-os",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-11-11-debugging-azure-functions-vs-code-mac-os/index.md",source:"@site/blog/2022-11-11-debugging-azure-functions-vs-code-mac-os/index.md",title:"Debugging Azure Functions in VS Code on Mac OS",description:"VS Code's debugging mechanism for Azure Functions on Mac OS frequently breaks. This post documents an approach to get it working.",date:"2022-11-11T00:00:00.000Z",formattedDate:"November 11, 2022",tags:[{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:"VS Code",permalink:"/tags/vs-code"},{label:"Mac OS",permalink:"/tags/mac-os"}],readingTime:2.075,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Debugging Azure Functions in VS Code on Mac OS",authors:"johnnyreilly",tags:["Azure Functions","VS Code","Mac OS"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Azure AD Claims with Static Web Apps and Azure Functions",permalink:"/2022/11/17/azure-ad-claims-static-web-apps-azure-functions"},nextItem:{title:"Getting started with the Web Monetization API",permalink:"/2022/10/20/web-monetization-api"}},u={image:n(73847).Z,authorsImageUrls:[void 0]},c=[{value:"The problem",id:"the-problem",level:2},{value:"The workaround",id:"the-workaround",level:2}],p={toc:c};function d(e){var{components:t}=e,i=a(e,["components"]);return(0,o.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"VS Code's debugging mechanism for Azure Functions on Mac OS frequently breaks. This post documents an approach to get it working."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Debugging Azure Functions in VS Code on Mac OS&quot; with Docusaurus, SWC and webpack logos",src:n(73847).Z,width:"800",height:"450"})),(0,o.kt)("h2",r({},{id:"the-problem"}),"The problem"),(0,o.kt)("p",null,"I frequently use a Mac to develop Azure Functions. I use VS Code as my editor."),(0,o.kt)("p",null,"Debugging is can be very useful when you're developing; getting to understand what the computer can see at runtime is a superpower. Regrettably with Azure Functions, I often find that the debugger fails to attach. When this happens, I can't actually debug my Azure Functions."),(0,o.kt)("p",null,"This is a known issue. In fact, this blog post is me sharing a workaround that I've needed again and again, but keep losing. Not my own work, the work of ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/basilfx"}),"Bas Stottelaar"),". I share it as a public service announcement - and to remind myself how to do it! ",(0,o.kt)("a",r({parentName:"p"},{href:"https://github.com/OmniSharp/omnisharp-vscode/issues/4903#issuecomment-993015843"}),"The original issue (and workaround) is here"),". Yay Bas!"),(0,o.kt)("p",null,"There appears to be something wrong with the standard code signing of ",(0,o.kt)("inlineCode",{parentName:"p"},"vsdbg")," and / or ",(0,o.kt)("inlineCode",{parentName:"p"},"vsdbg-ui"),". The workaround is to sign the binaries yourself."),(0,o.kt)("h2",r({},{id:"the-workaround"}),"The workaround"),(0,o.kt)("p",null,"You'll first need to generate a self signed certificate to be used for code signing. ",(0,o.kt)("a",r({parentName:"p"},{href:"https://stackoverflow.com/a/58363510/761388"}),"There's a good resource on Stack Overflow covering this"),". You should only ever need to do this once. You can then use the same certificate every time you apply the workaround."),(0,o.kt)("p",null,"In fact it's probably worth emphasising that you'll likely need to apply this workaround again and again. It's not a permanent fix. The workaround script that you need to run is:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"cd ~/.vscode/extensions/ms-dotnettools.csharp-1.25.2-darwin-x64/.debugger/x86_64\ncodesign --remove-signature vsdbg-ui && codesign --remove-signature vsdbg\ncodesign -s my-codesign-cert vsdbg-ui && codesign -s my-codesign-cert vsdbg\n")),(0,o.kt)("p",null,"A thing to note about the above is the version in the path. You'll need to change that to match the version of the C# extension that you have installed. You can find the version in the VS Code extensions view:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of C# extension in VS Code; in this case version 1.25.2",src:n(55471).Z,width:"1104",height:"344"})),(0,o.kt)("p",null,"In this case the version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.25.2"),"; as is reflected in the path above."),(0,o.kt)("p",null,'Once the script has been run, I\'ve found that restarting VS Code is a good idea. Regrettably the "I cannot debug my Azure Functions" issue is likely to reoccur in future. When it does, the workaround will need to be reapplied.'),(0,o.kt)("p",null,"In the long term, I'd love to see some debugging improvements for Azure Functions. Until that time, we have this."))}d.isMDXComponent=!0},55471:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/screenshot-csharp-extension-vs-code-db10e4b244a489b94ba27076ddbfdf3b.webp"},73847:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/title-image-5df2b9bf726270716f542cfad893c18a.png"}}]);
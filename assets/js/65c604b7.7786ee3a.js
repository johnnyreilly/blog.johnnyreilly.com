"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[29586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(m,i(i({ref:t},h),{},{components:r})):a.createElement(m,i({ref:t},h))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},23122:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>h});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const i={title:"Terry Pratchett and the Azure Static Web Apps",authors:"johnnyreilly",tags:["Azure Static Web Apps"],image:"./title-image.png",description:"Terry Pratchett has a HTTP header: X-Clacks-Overhead. This post shows how we can make Azure Static Web Apps join in.",hide_table_of_contents:!1},s=void 0,l={permalink:"/2022/07/23/terry-pratchett-x-clacks-overhead-azure-static-webapps",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-07-23-terry-pratchett-x-clacks-overhead-azure-static-webapps/index.md",source:"@site/blog/2022-07-23-terry-pratchett-x-clacks-overhead-azure-static-webapps/index.md",title:"Terry Pratchett and the Azure Static Web Apps",description:"Terry Pratchett has a HTTP header: X-Clacks-Overhead. This post shows how we can make Azure Static Web Apps join in.",date:"2022-07-23T00:00:00.000Z",formattedDate:"July 23, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"}],readingTime:2.03,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Terry Pratchett and the Azure Static Web Apps",authors:"johnnyreilly",tags:["Azure Static Web Apps"],image:"./title-image.png",description:"Terry Pratchett has a HTTP header: X-Clacks-Overhead. This post shows how we can make Azure Static Web Apps join in.",hide_table_of_contents:!1},prevItem:{title:"Swashbuckle and schemaId is already used",permalink:"/2022/08/31/swashbuckle-schemaid-already-used"},nextItem:{title:"Get Build Validations with the Azure DevOps API",permalink:"/2022/07/10/azure-devops-api-build-validations"}},c={image:r(42284).Z,authorsImageUrls:[void 0]},h=[{value:"What is <code>X-Clacks-Overhead</code>?",id:"what-is-x-clacks-overhead",level:2},{value:"Azure Static Web Apps serving the <code>X-Clacks-Overhead</code> header",id:"azure-static-web-apps-serving-the-x-clacks-overhead-header",level:2},{value:"Who else is out there?",id:"who-else-is-out-there",level:2}],p={toc:h};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",n({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Terry Pratchett is remembered on the internet. A non-standardised HTTP header: ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Clacks-Overhead")," is broadcast by websites seeking to pay tribute to the great man. This post shows how we can make Azure Static Web Apps join in."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Terry Pratchett and the Azure Static Web Apps&quot; with the Azure Static Web Apps logo and a Terry Pratchett icon by Lisa Krymova from NounProject.com",src:r(42284).Z,width:"799",height:"450"})),(0,a.kt)("h2",n({},{id:"what-is-x-clacks-overhead"}),"What is ",(0,a.kt)("inlineCode",{parentName:"h2"},"X-Clacks-Overhead"),"?"),(0,a.kt)("p",null,"This is well documented in the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://xclacksoverhead.org/"}),(0,a.kt)("inlineCode",{parentName:"a"},"X-Clacks-Overhead"))," website. To quote the highlights:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"X-Clacks-Overhead is a non-standardised HTTP header based upon the fictional work of the late, great, Sir Terry Pratchett..."),(0,a.kt)("p",{parentName:"blockquote"},"As a way to preserve the memory of Sir Terry Pratchett, the users of the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://www.reddit.com/r/discworld/"}),"SubReddit for the Discworld series")," came up with ",(0,a.kt)("a",n({parentName:"p"},{href:"https://www.reddit.com/r/discworld/comments/2yt9j6/gnu_terry_pratchett/"}),"the idea behind the X-Clacks-Overhead HTTP Header"),". It allows web authors to silently commemorate someone through the use of a non-invasive header that can be transmitted from server to server, or server to client without operational interference."),(0,a.kt)("p",{parentName:"blockquote"},"You would only know the header is present if you analysed the transmission headers of your content requests on web sites serving the header.")),(0,a.kt)("p",null,"Put simply, participating websites will broadcast the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Clacks-Overhead: GNU Terry Pratchett")," header when they are serving content to a user."),(0,a.kt)("h2",n({},{id:"azure-static-web-apps-serving-the-x-clacks-overhead-header"}),"Azure Static Web Apps serving the ",(0,a.kt)("inlineCode",{parentName:"h2"},"X-Clacks-Overhead")," header"),(0,a.kt)("p",null,"Now we understand what we want to do, we can make an Azure Static Web Apps project do just that."),(0,a.kt)("p",null,"We're going to need an ",(0,a.kt)("inlineCode",{parentName:"p"},"staticwebappconfig.json")," in root of our app, so we can configure our SWA. To add extra headers in, you use the ",(0,a.kt)("a",n({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#global-headers"}),(0,a.kt)("inlineCode",{parentName:"a"},"globalHeaders"))," setting:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-json"}),'{\n  "globalHeaders": {\n    "X-Clacks-Overhead": "GNU Terry Pratchett"\n  }\n}\n')),(0,a.kt)("p",null,"Above, we added the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Clacks-Overhead")," header. When our app is deployed, it will automatically add this header to all requests:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Chrome Devtools showing the `x-clacks-overhead` header on this blog",src:r(33431).Z,width:"1853",height:"636"})),(0,a.kt)("p",null,"The above screenshot shows this very blog broadcasting the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Clacks-Overhead")," header. If you crack open devtools you can validate this for yourself. The pull request that added it in ",(0,a.kt)("a",n({parentName:"p"},{href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/pull/273"}),"can be found here"),"."),(0,a.kt)("h2",n({},{id:"who-else-is-out-there"}),"Who else is out there?"),(0,a.kt)("p",null,"It's great to know you're in good company. ",(0,a.kt)("a",n({parentName:"p"},{href:"https://xclacksoverhead.org/listing/the-signal"}),"This page")," tracks websites that are broadcasting the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Clacks-Overhead")," header. You can see from the image below that it has found this website too!"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of https://xclacksoverhead.org/listing/the-signal showing this blog being listed",src:r(2812).Z,width:"1466",height:"903"})),(0,a.kt)("p",null,"So if you'd like your Azure Static Web App to whisper Terry Pratchett's name under its breath; make it so!"))}d.isMDXComponent=!0},2812:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/screenshot-x-clacks-overhead-listing-dbaf746588db96b70af164799bfd6585.png"},33431:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/screenshot-x-clacks-overhead-response-header-3064ead5b8d6d77be6ed3f158e316cd1.png"},42284:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/title-image-68b48b13ddbedca6210b5aafbe89f3c3.png"}}]);
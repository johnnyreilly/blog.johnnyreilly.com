"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[22490],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),b=i,d=s["".concat(p,".").concat(b)]||s[b]||y[b]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},63701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>p,toc:()=>u});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const o={title:"Azure Static Web Apps: build app externally",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions"],image:"./title-image.png",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/12/18/azure-static-web-apps-build-app-externally",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-18-azure-static-web-apps-build-app-externally/index.md",source:"@site/blog/2022-12-18-azure-static-web-apps-build-app-externally/index.md",title:"Azure Static Web Apps: build app externally",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",date:"2022-12-18T00:00:00.000Z",formattedDate:"December 18, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:3.135,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps: build app externally",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions"],image:"./title-image.png",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",hide_table_of_contents:!1},prevItem:{title:"Azure Static Web Apps: dynamic redirects with Azure Functions",permalink:"/2022/12/22/azure-static-web-apps-dynamic-redirects-azure-functions"},nextItem:{title:"Publishing Docusaurus to dev.to with the dev.to API",permalink:"/2022/12/11/publishing-docusaurus-to-devto-with-devto-api"}},c={image:r(43662).Z,authorsImageUrls:[void 0]},u=[],s={toc:u};function y(e){var{components:t}=e,o=a(e,["components"]);return(0,n.kt)("wrapper",i({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with ",(0,n.kt)("inlineCode",{parentName:"p"},"skip_app_build: true")," and some GitHub Actions."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Static Web Apps: build app externally&quot; with the Static Web Apps logo",src:r(43662).Z,width:"800",height:"450"})))}y.isMDXComponent=!0},43662:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/title-image-79fba965babb965fc9084336814cfefc.png"}}]);
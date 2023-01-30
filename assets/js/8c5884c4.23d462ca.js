"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[26868],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),g=i,f=p["".concat(s,".").concat(g)]||p[g]||h[g]||o;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},34469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const a={title:"Lighthouse meet GitHub Actions",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],image:"./title-image.png",description:"This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App.",hide_table_of_contents:!1},l=void 0,s={permalink:"/2022/03/20/lighthouse-meet-github-actions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-03-20-lighthouse-meet-github-actions/index.md",source:"@site/blog/2022-03-20-lighthouse-meet-github-actions/index.md",title:"Lighthouse meet GitHub Actions",description:"This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App.",date:"2022-03-20T00:00:00.000Z",formattedDate:"March 20, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"},{label:"Docusaurus",permalink:"/tags/docusaurus"}],readingTime:11.435,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Lighthouse meet GitHub Actions",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions","Docusaurus"],image:"./title-image.png",description:"This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App.",hide_table_of_contents:!1},prevItem:{title:"Azure DevOps: consume a private artifact feed",permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed"},nextItem:{title:"Swashbuckle & inheritance: Give. Me. The. Types",permalink:"/2022/03/06/swashbuckle-inheritance-multiple-return-types"}},u={image:r(48203).Z,authorsImageUrls:[void 0]},c=[],p={toc:c};function h(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",i({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Lighthouse is a tremendous tool for auditing the performance and usability of websites. Rather than having to perform these audits manually, it's helpful to be able to plug it into your CI pipeline. This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App, and report findings directly in pull requests that are raised."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Lighthouse meet GitHub Actions&quot; with the Lighthouse logo and a screenshot of the results in a GitHub comment`",src:r(48203).Z,width:"1600",height:"900"})))}h.isMDXComponent=!0},48203:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/title-image-71d327509012cdc524b03e49eb12bba8.png"}}]);
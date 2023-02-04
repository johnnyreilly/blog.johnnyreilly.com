"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[56526],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||y[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},98333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={slug:"deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",authors:"johnnyreilly",tags:["powershell","github pages","AppVeyor"],hide_table_of_contents:!1},p=void 0,l={permalink:"/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md",source:"@site/blog/2014-12-29-deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1/index.md",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",description:"There's a small open source project I'm responsible for called jQuery Validation Unobtrusive Native. (A catchy name is a must for any good open source project. Alas I'm not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it \"Livingstone\" instead. Too late now...)",date:"2014-12-29T00:00:00.000Z",formattedDate:"December 29, 2014",tags:[{label:"powershell",permalink:"/tags/powershell"},{label:"github pages",permalink:"/tags/github-pages"},{label:"AppVeyor",permalink:"/tags/app-veyor"}],readingTime:5.805,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"deploying-aspnet-mvc-to-github-pages-with-appveyor-part-1",title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 1",authors:"johnnyreilly",tags:["powershell","github pages","AppVeyor"],hide_table_of_contents:!1},prevItem:{title:"Deploying from ASP.Net MVC to GitHub Pages using AppVeyor part 2",permalink:"/deploying-aspnet-mvc-to-github-pages-with-appveyor-part-2"},nextItem:{title:"Gulp, npm, long paths and Visual Studio.... Fight!",permalink:"/gulp-npm-long-paths-and-visual-studio-fight"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c};function y(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"There's a small open source project I'm responsible for called ",(0,n.kt)("a",o({parentName:"p"},{href:"https://github.com/johnnyreilly/jQuery.Validation.Unobtrusive.Native"}),"jQuery Validation Unobtrusive Native"),'. (A catchy name is a must for any good open source project. Alas I\'m not quite meeting my own exacting standards on this particular point... I should have gone with my gut and called it "Livingstone" instead. Too late now...)'))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[52438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={slug:"dates-DataAnnotations-and-data-impedance-mismatch",title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",authors:"johnnyreilly",tags:["Date"],hide_table_of_contents:!1},l=void 0,s={permalink:"/dates-DataAnnotations-and-data-impedance-mismatch",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch/index.md",source:"@site/blog/2014-06-20-dates-DataAnnotations-and-data-impedance-mismatch/index.md",title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",description:"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, valuation_date. (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and \\*not\\* in any way, a time.",date:"2014-06-20T00:00:00.000Z",formattedDate:"June 20, 2014",tags:[{label:"Date",permalink:"/tags/date"}],readingTime:4.04,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"dates-DataAnnotations-and-data-impedance-mismatch",title:"A folk story wherein we shall find dates, DataAnnotations & data impedance mismatch",authors:"johnnyreilly",tags:["Date"],hide_table_of_contents:!1},prevItem:{title:"HotTowel-Angular meet TypeScript",permalink:"/hottowel-angular-meet-typescript"},nextItem:{title:"Migrating from AngularJS to AngularTS - a walkthrough",permalink:"/migrating-from-angularjs-to-angularts"}},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you ever take a step back from what you're doing it can sometimes seem pretty abstract. Here's an example. I was looking at an issue in an app that I was supporting. The problem concerned a field which was to store a date value. Let's call it, for the sake of argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"valuation_date"),". (Clearly in reality the field name was entirely different... Probably.) This field was supposed to represent a specific date, like June 15th 2012 or 19th August 2014. To be clear, a date and ","*",(0,a.kt)("strong",{parentName:"p"},"not"),"*"," in any way, a time."))}u.isMDXComponent=!0}}]);
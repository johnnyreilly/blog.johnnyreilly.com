"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[25060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(s,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},17905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const o={title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",authors:"johnnyreilly",tags:["unit testing","InternalsVisibleTo","MOQ","mocking"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2012/04/16/simple-technique-for-initialising",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-04-16-simple-technique-for-initialising/index.md",source:"@site/blog/2012-04-16-simple-technique-for-initialising/index.md",title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",description:"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the domain layer was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with internal setters...",date:"2012-04-16T00:00:00.000Z",formattedDate:"April 16, 2012",tags:[{label:"unit testing",permalink:"/tags/unit-testing"},{label:"InternalsVisibleTo",permalink:"/tags/internals-visible-to"},{label:"MOQ",permalink:"/tags/moq"},{label:"mocking",permalink:"/tags/mocking"}],readingTime:5.7,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"A Simple Technique for Initialising Properties with Internal Setters for Unit Testing",authors:"johnnyreilly",tags:["unit testing","InternalsVisibleTo","MOQ","mocking"],hide_table_of_contents:!1},prevItem:{title:"JSHint - Customising your hurt feelings",permalink:"/2012/04/23/jshint-customising-your-hurt-feelings"},nextItem:{title:"Making PDFs from HTML in C# using WKHTMLtoPDF",permalink:"/2012/04/05/making-pdfs-from-html-in-c-using"}},c={authorsImageUrls:[void 0]},p=[],u={toc:p};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I was recently working with my colleagues on refactoring a legacy application. We didn't have an immense amount of time available for this but the plan was to try and improve what was there as much as possible. In its initial state the application had no unit tests in place at all and so the plan was to refactor the code base in such a way as to make testing it a realistic proposition. To that end the ",(0,r.kt)("a",i({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Domain_layer"}),"domain layer")," was being heavily adjusted and the GUI was being migrated from WebForms to MVC 3. The intention was to build up a pretty solid collection of unit tests. However, as we were working on this we realised we had a problem with properties on our models with ",(0,r.kt)("a",i({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/library/7c5ka91b(v=vs.80).aspx"}),(0,r.kt)("inlineCode",{parentName:"a"},"internal"))," setters..."))}m.isMDXComponent=!0}}]);
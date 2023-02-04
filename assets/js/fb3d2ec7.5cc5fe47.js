"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[93613],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),y=o,f=p["".concat(c,".").concat(y)]||p[y]||m[y]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},97583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={slug:"xsdxml-schema-generator-xsdexe-taking",title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",authors:"johnnyreilly",tags:["XSD","LINQ to XML"],hide_table_of_contents:!1},l=void 0,c={permalink:"/xsdxml-schema-generator-xsdexe-taking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking/index.md",source:"@site/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking/index.md",title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",description:"Is it 2003 again?!?",date:"2012-11-02T00:00:00.000Z",formattedDate:"November 2, 2012",tags:[{label:"XSD",permalink:"/tags/xsd"},{label:"LINQ to XML",permalink:"/tags/linq-to-xml"}],readingTime:7.815,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"xsdxml-schema-generator-xsdexe-taking",title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",authors:"johnnyreilly",tags:["XSD","LINQ to XML"],hide_table_of_contents:!1},prevItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/a-nicer-net-api-for-bloombergs-open-api"},nextItem:{title:"MVC 3 meet Dictionary",permalink:"/mvc-3-meet-dictionary"}},s={authorsImageUrls:[void 0]},u=[{value:"Is it 2003 again?!?",id:"is-it-2003-again",level:2}],p={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"is-it-2003-again"}),"Is it 2003 again?!?"),(0,r.kt)("p",null,"I've just discovered Xsd.exe. It's not new. Or shiny. And in fact it's been around since .NET 1.1. Truth be told, I've been aware of it for years but up until now I've not had need of it. But now now I've investigated it a bit I've found that it, combined with the XSD/XML Schema Generator can make for a nice tool to add to the utility belt."),(0,r.kt)("p",null,"Granted XML has long since stopped being sexy. But if you need it, as I did recently, then this is for you."))}m.isMDXComponent=!0}}]);
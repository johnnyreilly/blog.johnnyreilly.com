"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[7667],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74898:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var n=r(83117),o=r(80102),i=(r(67294),r(3905)),a=["components"],l={title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["TypeScript","Control Flow Analysis of Aliased Conditions"],image:"./reactions-on-github.png",hide_table_of_contents:!1},c=void 0,s={permalink:"/2021/08/14/typescript-4-4-more-readable-code",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",source:"@site/blog/2021-08-14-typescript-4-4-more-readable-code/index.md",title:"TypeScript 4.4 and more readable code",description:'An exciting feature is shipping with TypeScript 4.4. It has the name "Control Flow Analysis of Aliased Conditions" which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code.',date:"2021-08-14T00:00:00.000Z",formattedDate:"August 14, 2021",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Control Flow Analysis of Aliased Conditions",permalink:"/tags/control-flow-analysis-of-aliased-conditions"}],readingTime:4.065,truncated:!0,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 4.4 and more readable code",authors:"johnnyreilly",tags:["TypeScript","Control Flow Analysis of Aliased Conditions"],image:"./reactions-on-github.png",hide_table_of_contents:!1},prevItem:{title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops"},nextItem:{title:"TypeScript, abstract classes, and constructors",permalink:"/2021/08/01/typescript-abstract-classes-and-constructors"}},p={image:r(24755).Z,authorsImageUrls:[void 0]},u=[{value:"Updated 30th September 2021",id:"updated-30th-september-2021",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An exciting feature is shipping with TypeScript 4.4. It has the name ",(0,i.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-4-beta/#cfa-aliased-conditions"},'"Control Flow Analysis of Aliased Conditions"')," which is quite a mouthful. This post unpacks what this feature is, and demonstrates the contribution it makes to improving the readability of code."),(0,i.kt)("h2",{id:"updated-30th-september-2021"},"Updated 30th September 2021"),(0,i.kt)("p",null,"This blog evolved to become a talk:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/LxZx3ycrxI0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}m.isMDXComponent=!0},24755:function(e,t,r){t.Z=r.p+"assets/images/reactions-on-github-a45e4c95cbf5b8f748c7bd6936d10f5a.png"}}]);
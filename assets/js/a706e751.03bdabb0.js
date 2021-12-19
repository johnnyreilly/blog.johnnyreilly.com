"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[76689],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),y=o,h=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91250:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return y}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={title:"React Component Curry",authors:"johnnyreilly",tags:["currying","jsx","React","stateless functional components"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/10/05/react-component-curry",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-10-05-react-component-curry/index.md",source:"@site/blog/2016-10-05-react-component-curry/index.md",title:"React Component Curry",description:"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday.",date:"2016-10-05T00:00:00.000Z",formattedDate:"October 5, 2016",tags:[{label:"currying",permalink:"/tags/currying"},{label:"jsx",permalink:"/tags/jsx"},{label:"React",permalink:"/tags/react"},{label:"stateless functional components",permalink:"/tags/stateless-functional-components"}],readingTime:1.39,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"But you can't die... I love you!",permalink:"/2016/11/01/but-you-cant-die-i-love-you-ts-loader"},nextItem:{title:"TypeScript 2.0, ES2016 and Babel",permalink:"/2016/09/22/typescript-20-es2016-and-babel"}},u={authorsImageUrls:[void 0]},p=[{value:"Mine&#39;s a Balti",id:"mines-a-balti",children:[],level:2}],m={toc:p};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Everyone loves curry don't they? I don't know about you but I'm going for one on Friday."),(0,a.kt)("p",null,"When React 0.14 shipped, it came with a new way to write React components. Rather than as an ES2015 class or using ",(0,a.kt)("inlineCode",{parentName:"p"},"React.createClass")," there was now another way: stateless functional components."),(0,a.kt)("p",null,"These are components which have no state (the name gives it away) and a simple syntax; they are a function which takes your component props as a single parameter and they return JSX. Think of them as the render method of a standard component just with props as a parameter."),(0,a.kt)("p",null,"The advantage of these components is that they can reduce the amount of code you have to write for a component which requires no state. This is even more true if you're using ES2015 syntax as you have arrow functions and destructuring to help.Embrace the terseness!"),(0,a.kt)("h2",{id:"mines-a-balti"},"Mine's a Balti"),(0,a.kt)("p",null,"There is another advantage of this syntax. If you have a number of components which share similar implementation you can easily make component factories by currying:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function iconMaker(fontAwesomeClassName: string) {\n  return (props) => <i className={`fa ${fontAwesomeClassName}`} />;\n}\n\nconst ThumbsUpIcon = iconMaker('fa-thumbs-up');\nconst TrophyIcon = iconMaker('fa-trophy');\n\n// Somewhere in else inside a render function:\n\n<p>\n  This is totally <ThumbsUpIcon />\n  .... You should win a <TrophyIcon />\n</p>;\n")),(0,a.kt)("p",null,"So our ",(0,a.kt)("inlineCode",{parentName:"p"},"iconMaker")," is a function which, when called with a ",(0,a.kt)("a",{parentName:"p",href:"http://fontawesome.io/"},"Font Awesome")," class name produces a function which, when invoked, will return a the HTML required to render that icon. This is a super simple example, a bhaji if you will, but you can imagine how useful this technique can be when you've more of a banquet in mind."))}y.isMDXComponent=!0}}]);
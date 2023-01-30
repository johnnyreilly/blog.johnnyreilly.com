"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[43142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),y=a,m=u["".concat(s,".").concat(y)]||u[y]||h[y]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},16313:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"The Ternary Operator <3 Destructuring",authors:"johnnyreilly",tags:["typescript","ES2015"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/08/19/the-ternary-operator-meets-destructuring",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-08-19-the-ternary-operator-meets-destructuring/index.md",source:"@site/blog/2016-08-19-the-ternary-operator-meets-destructuring/index.md",title:"The Ternary Operator <3 Destructuring",description:"I'm addicted to the ternary operator. For reasons I can't explain, I cannot get enough of:",date:"2016-08-19T00:00:00.000Z",formattedDate:"August 19, 2016",tags:[{label:"typescript",permalink:"/tags/typescript"},{label:"ES2015",permalink:"/tags/es-2015"}],readingTime:2.21,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Ternary Operator <3 Destructuring",authors:"johnnyreilly",tags:["typescript","ES2015"],hide_table_of_contents:!1},prevItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"},nextItem:{title:"Understanding webpack's DefinePlugin (and using with TypeScript)",permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript"}},p={authorsImageUrls:[void 0]},c=[{value:"Crowdfund You A Tuple",id:"crowdfund-you-a-tuple",level:2}],u={toc:c};function h(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I'm addicted to the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator"}),"ternary operator"),". For reasons I can't explain, I cannot get enough of:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-js"}),"const thisOrThat = someCondition ? 'this' : 'or that';\n")),(0,n.kt)("p",null,"The occasion regularly arises where I need to turn my lovely terse code into an if statement in order to set 2 variables instead of 1. I've been heartbroken; I hate doing:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"let legWear: string, coat: boolean;\nif (weather === 'good') {\n  legWear = 'shorts';\n  coat = false;\n} else {\n  legWear = 'jeans';\n  coat = true;\n}\n")),(0,n.kt)("p",null,"Just going from setting one variable to setting two has been really traumatic:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I've had do stop using ",(0,n.kt)("inlineCode",{parentName:"li"},"const")," and moved to ",(0,n.kt)("inlineCode",{parentName:"li"},"let"),'. This has made my code less "truthful" in the sense that I never intend to reassign these variables again; they are intended to be immutable.'),(0,n.kt)("li",{parentName:"ul"},"I've gone from 1 line of code to ",(0,n.kt)("em",{parentName:"li"},"9 lines of code"),". That's 9x the code for increasing the number of variables in play by 1. That's... heavy."),(0,n.kt)("li",{parentName:"ul"},"This third point only applies if you're using TypeScript (and I am): I have to specify the types of my variables up front if I want type safety.")),(0,n.kt)("p",null,"ES2015 gives us another option. We can move back to the ternary operator if we change the return type of each branch to be an object sharing the same signature. Then, using destructuring, we can pull out those object properties into ",(0,n.kt)("inlineCode",{parentName:"p"},"const"),"s:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const { legWear, coat } =\n  weather === 'good'\n    ? { legWear: 'shorts', coat: false }\n    : { legWear: 'jeans', coat: true };\n")),(0,n.kt)("p",null,"With this approach we're keeping usage of ",(0,n.kt)("inlineCode",{parentName:"p"},"const")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"let")," and we're only marginally increasing the amount of code we're writing. If you're using TypeScript you're back to being able to rely on the compiler correctly inferring your types; you don't need to specify. Awesome."),(0,n.kt)("h2",a({},{id:"crowdfund-you-a-tuple"}),"Crowdfund You A Tuple"),(0,n.kt)("p",null,"I thought I was done and then I saw this:"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",a({parentName:"p"},{href:"https://twitter.com/johnny_reilly"}),"@johnny_reilly")," even neater with tuples: const ","[str, num]"," = test ? ",'["yes", 100]'," : ",'["no", 50]',";"),(0,n.kt)("p",{parentName:"blockquote"},"\u2014 Illustrated Pamphlet (@Rickenhacker) ",(0,n.kt)("a",a({parentName:"p"},{href:"https://twitter.com/Rickenhacker/status/766913766323781632"}),"August 20, 2016"))),(0,n.kt)("script",{async:"",src:"//platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,n.kt)("p",null,(0,n.kt)("a",a({parentName:"p"},{href:"https://twitter.com/Rickenhacker"}),"Daniel")," helpfully points out that there's an even terser syntax available to us:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const [legWear, coat] =\n  weather === 'good' ? ['shorts', false] : ['jeans', true];\n")),(0,n.kt)("p",null,"The above is ES2015 array destructuring. We get exactly the same effect but it's a little terser as we don't have to repeat the prop names as we do when using object destructuring. From a TypeScript perspective the assignment side of the above is a ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript/pull/428"}),"Tuple")," which allows our type inference to flow through in the manner we'd hope."),(0,n.kt)("p",null,"Lovely. Thanks!"))}h.isMDXComponent=!0}}]);
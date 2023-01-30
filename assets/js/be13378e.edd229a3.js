"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[35253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={title:"Understanding webpack's DefinePlugin (and using with TypeScript)",authors:"johnnyreilly",tags:["typescript","webpack"],hide_table_of_contents:!1},l=void 0,s={permalink:"/2016/07/23/using-webpacks-defineplugin-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2016-07-23-using-webpacks-defineplugin-with-typescript/index.md",source:"@site/blog/2016-07-23-using-webpacks-defineplugin-with-typescript/index.md",title:"Understanding webpack's DefinePlugin (and using with TypeScript)",description:"I've been searching for a way to describe what the DefinePlugin actually does. The docs say\\*:",date:"2016-07-23T00:00:00.000Z",formattedDate:"July 23, 2016",tags:[{label:"typescript",permalink:"/tags/typescript"},{label:"webpack",permalink:"/tags/webpack"}],readingTime:2.765,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Understanding webpack's DefinePlugin (and using with TypeScript)",authors:"johnnyreilly",tags:["typescript","webpack"],hide_table_of_contents:!1},prevItem:{title:"The Ternary Operator <3 Destructuring",permalink:"/2016/08/19/the-ternary-operator-meets-destructuring"},nextItem:{title:"Creating an ES2015 Map from an Array in TypeScript",permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript"}},p={authorsImageUrls:[void 0]},c=[{value:"What Globals?",id:"what-globals",level:2},{value:"Configuring our Globals",id:"configuring-our-globals",level:2},{value:"TypeScript and Define",id:"typescript-and-define",level:2}],u={toc:c};function h(e){var{components:t}=e,n=i(e,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I've been searching for a way to describe what the DefinePlugin actually does. The ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/webpack/docs/wiki/list-of-plugins#defineplugin"}),"docs")," say","*",":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Define free variables. Useful for having development builds with debug logging or adding global constants.")),(0,a.kt)("sub",null,"\\* Actually that should read \"used to say\". I've made some changes to the official docs.... (Surprisingly easy to do that by the way; it's just a wiki you can edit at will.)"),(0,a.kt)("p",null,"I think I would describe it thusly: the DefinePlugin allows you to create global constants which can be ",(0,a.kt)("em",{parentName:"p"},"configured at compile time"),". I find this very useful for allowing different behaviour between development builds and release builds. This post will demonstrate usage of this approach, talk about what's actually happening and how to get this working nicely with TypeScript."),(0,a.kt)("p",null,"If you just want to see this in action then take a look at this ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/poorclaresarundel/"}),"repo")," and keep your eyes open for usage of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/poorclaresarundel/search?utf8=%E2%9C%93&q=__VERSION__"}),(0,a.kt)("inlineCode",{parentName:"a"},"__VERSION__"))," and ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/johnnyreilly/poorclaresarundel/search?utf8=%E2%9C%93&q=__IN_DEBUG__"}),(0,a.kt)("inlineCode",{parentName:"a"},"__IN_DEBUG__")),"."),(0,a.kt)("h2",r({},{id:"what-globals"}),"What Globals?"),(0,a.kt)("p",null,"For our example we want to define 2 global constants; a string called ",(0,a.kt)("inlineCode",{parentName:"p"},"__VERSION__")," and a boolean called ",(0,a.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__"),'. The names are deliberately wacky to draw attention to the fact that these are not your everyday, common-or-garden variables. Them\'s "special". These constants will be initialised with different values depending on whether we are in a debug build or a production build. Usage of these constants in our code might look like this:'),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"if (__IN_DEBUG__) {\n  console.log(`This app is version ${__VERSION__}`);\n}\n")),(0,a.kt)("p",null,"So, if ",(0,a.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," this code would log out to the console the version of the app."),(0,a.kt)("h2",r({},{id:"configuring-our-globals"}),"Configuring our Globals"),(0,a.kt)("p",null,"To introduce these constants to webpack we're going to add this to our webpack configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"var webpack = require('webpack');\n\n// ...\n\nplugins: [\n  new webpack.DefinePlugin({\n    __IN_DEBUG__: JSON.stringify(false),\n    __VERSION__: JSON.stringify('1.0.0.' + Date.now()),\n  }),\n  // ...\n];\n// ...\n")),(0,a.kt)("p",null,"What's going on here? Well, each key of the object literal above represents one of our global constants. When you look at the value, just imagine each outer ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify( ... )")," is not there. It's just noise. Imagine instead that you're seeing this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"__IN_DEBUG__: false,\n          __VERSION__: '1.0.0.' + Date.now()\n")),(0,a.kt)("p",null,"A little clearer, right? ",(0,a.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," is given the boolean value ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"__VERSION__")," is given the string value of ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0.")," plus the ticks off of ",(0,a.kt)("inlineCode",{parentName:"p"},"Date.now()"),". What's happening here is well explained in Pete Hunt's excellent ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/petehunt/webpack-howto#6-feature-flags"}),"webpack howto"),': "definePlugin takes raw strings and inserts them". ',(0,a.kt)("inlineCode",{parentName:"p"},"JSON.stringify")," facilitates this; it produces a string representation of a value that can be inlined into code. When the inlining takes place the actual output would be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"if (false) {\n  // Because at compile time, __IN_DEBUG__ === false\n  console.log(`This app is version ${'1.0.0.1469268116580'}`); // And __VERSION__ === \"1.0.0.1469268116580\"\n}\n")),(0,a.kt)("p",null,"And if you've got some ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/mishoo/UglifyJS"}),"UglifyJS")," or similar in the mix then, in the example above, this would actually strip out the statement above entirely since it's clearly a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/NOP"}),"NOOP"),". Yay the dead code removal! If ",(0,a.kt)("inlineCode",{parentName:"p"},"__IN_DEBUG__")," was ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," then (perhaps obviously) this statement would be left in place as it wouldn't be dead code."),(0,a.kt)("h2",r({},{id:"typescript-and-define"}),"TypeScript and Define"),(0,a.kt)("p",null,"The final piece of the puzzle is making TypeScript happy. It doesn't know anything about our global constants. So we need to tell it:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ts"}),"declare var __IN_DEBUG__: boolean;\ndeclare var __VERSION__: string;\n")),(0,a.kt)("p",null,"And that's it. Compile time constants are a go!"))}h.isMDXComponent=!0}}]);
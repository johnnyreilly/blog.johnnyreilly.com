"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[18936],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},52962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return h}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],p={title:"TypeScript and webpack: Watch It",authors:"johnnyreilly",tags:["TypeScript","watch API","Webpack"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2019/01/13/typescript-and-webpack-watch-it",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-01-13-typescript-and-webpack-watch-it/index.md",source:"@site/blog/2019-01-13-typescript-and-webpack-watch-it/index.md",title:"TypeScript and webpack: Watch It",description:'All I ask for is a compiler and a tight feedback loop. Narrowing the gap between making a change to a program and seeing the effect of that is a productivity boon. The TypeScript team are wise cats and dig this. They\'ve taken strides to improve the developer experience of TypeScript users by introducing a "watch" API which can be leveraged by other tools. To quote the docs:',date:"2019-01-13T00:00:00.000Z",formattedDate:"January 13, 2019",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"watch API",permalink:"/tags/watch-api"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:2.37,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript and webpack: Watch It",authors:"johnnyreilly",tags:["TypeScript","watch API","Webpack"],hide_table_of_contents:!1},prevItem:{title:"ASP.NET Core: Proxying HTTP Requests with an AllowList",permalink:"/2019/02/22/aspnet-core-allowlist-proxying-http-requests"},nextItem:{title:"GitHub Actions and Yarn",permalink:"/2019/01/05/github-actions-and-yarn"}},s={authorsImageUrls:[void 0]},h=[{value:"You Can Watch Too",id:"you-can-watch-too",level:2},{value:"Mary Poppins",id:"mary-poppins",level:2},{value:"Roadmap",id:"roadmap",level:2}],u={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All I ask for is a compiler and a tight feedback loop. Narrowing the gap between making a change to a program and seeing the effect of that is a productivity boon. The TypeScript team are wise cats and dig this. They've taken strides to improve the developer experience of TypeScript users by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API#writing-an-incremental-program-watcher"},'introducing a "watch" API which can be leveraged by other tools'),". To quote the docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'TypeScript 2.7 introduces two new APIs: one for creating "watcher" programs that provide set of APIs to trigger rebuilds, and a "builder" API that watchers can take advantage of... This can speed up large projects with many files.')),(0,o.kt)("p",null,"Recently the wonderful ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xorial"},"0xorial")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/198"},"opened a PR to add support for the watch API")," to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),"."),(0,o.kt)("p",null,'I took this PR for a spin on a large project that I work on. With my machine, I was averaging 12 seconds between incremental builds. (I will charitably describe the machine in question as "challenged"; hobbled by one of the most aggressive virus checkers known to mankind. Fist bump InfoSec \ud83e\udd1c\ud83e\udd1b\ud83d\ude09) Switching to using the watch API dropped this to a mere 1.5 seconds!'),(0,o.kt)("h2",{id:"you-can-watch-too"},"You Can Watch Too"),(0,o.kt)("p",null,"0xorial's PR was merged toot suite and was been released as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/releases/tag/v1.0.0-alpha.2"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin@1.0.0-alpha.2")),". If you'd like to take this for a spin then you can. Just:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Up your version of the plugin to ",(0,o.kt)("inlineCode",{parentName:"li"},"fork-ts-checker-webpack-plugin@next")," in your ",(0,o.kt)("inlineCode",{parentName:"li"},"package.json")),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"useTypescriptIncrementalApi: true")," to the plugin when you initialise it in your ",(0,o.kt)("inlineCode",{parentName:"li"},"webpack.config.js"),".")),(0,o.kt)("p",null,"That's it."),(0,o.kt)("h2",{id:"mary-poppins"},"Mary Poppins"),(0,o.kt)("p",null,"Sorry, I was trying to paint a word picture of something you might watch that was also comforting. Didn't quite work..."),(0,o.kt)("p",null,'Anyway, you might be thinking "wait, just hold on a minute.... he said ',(0,o.kt)("inlineCode",{parentName:"p"},"@next")," ","-"," I am ",(0,o.kt)("em",{parentName:"p"},"not")," that bleeding edge.\" Well, it's not like that. Don't be scared."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," has merely been updated for webpack 5 (which is in alpha) and the ",(0,o.kt)("inlineCode",{parentName:"p"},"@next")," reflects that. To be clear, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@next")," version of the plugin still supports (remarkably!) webpack 2, 3 and 4 as well as 5 alpha. Users of current and historic versions of webpack should feel safe using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@next")," version; for webpack 2, 3 and 4 expect stability. webpack 5 users should expect potential changes to align with webpack 5 as it progresses."),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"This is available now and we'd love for you to try it out. As you can see, at the moment it's opt-in. You have to explicitly choose to use the new behaviour. Depending upon how testing goes, we may look to make this the default behaviour for the plugin in future (assuming users are running a high enough version of TypeScript). It would be great to hear from people if they have any views on that, or feedback in general."),(0,o.kt)("p",null,"Much \u2764\ufe0f y'all. And many thanks to the very excellent ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xorial"},"0xorial")," for the hard work."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[46133],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67902:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"webpack: configuring a loader with query / options",authors:"johnnyreilly",tags:["webpack 2","Webpack","query","options"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2017/01/01/webpack-configuring-loader-with-query",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-01-01-webpack-configuring-loader-with-query/index.md",source:"@site/blog/2017-01-01-webpack-configuring-loader-with-query/index.md",title:"webpack: configuring a loader with query / options",description:"webpack 2 is on it's way. As one of the maintainers of ts-loader I've been checking out that ts-loader works with webpack 2. It does: phew!",date:"2017-01-01T00:00:00.000Z",formattedDate:"January 1, 2017",tags:[{label:"webpack 2",permalink:"/tags/webpack-2"},{label:"Webpack",permalink:"/tags/webpack"},{label:"query",permalink:"/tags/query"},{label:"options",permalink:"/tags/options"}],readingTime:2.805,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"webpack: configuring a loader with query / options",authors:"johnnyreilly",tags:["webpack 2","Webpack","query","options"],hide_table_of_contents:!1},prevItem:{title:"webpack: resolveLoader / alias with query / options",permalink:"/2017/01/06/webpack-resolveloader-alias-with-query"},nextItem:{title:"Using ts-loader with webpack 2",permalink:"/2016/12/19/using-ts-loader-with-webpack-2"}},c={authorsImageUrls:[void 0]},u=[{value:"What exactly is <code>query</code> / <code>options</code>?",id:"what-exactly-is-query--options",level:2},{value:"webpack 2 is coming - look busy!",id:"webpack-2-is-coming---look-busy",level:2}],h={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-2-2-the-release-candidate-2e614d05d75f#.ntniu44u6"},"webpack 2 is on it's way"),". As one of the maintainers of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/"},"ts-loader")," I've been checking out that ts-loader works with webpack 2. It does: phew!"),(0,r.kt)("p",null,"ts-loader has a continuous integration build that runs against webpack 1. When webpack 2 ships we're planning to move to running CI against webpack 2. However, webpack 2 has some breaking changes. The one that's particularly of relevance to our test packs is that a strict schema is now enforced for ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," with webpack 2. This has been the case since webpack 2 hit beta 23. Check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/pull/2974"},"PR that added it"),". You can see some of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/3018"},"frankly tortured discussion that this generated as well"),"."),(0,r.kt)("p",null,"Let's all take a moment and realise that working on open source is sometimes a rather painful experience. Take a breath. Breathe out. Ready to carry on? Great."),(0,r.kt)("p",null,"There are 2 ways to configure loader options for ts-loader (and in fact this stands for most loaders). Loader options can be set either using a ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," when specifying the loader or through the ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," (insert the name of alternative loaders here) property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),"."),(0,r.kt)("p",null,"The implicatations of the breaking change are: with webpack 2 you can ",(0,r.kt)("strong",{parentName:"p"},"no longer")," configure ts-loader (or any other loader) with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," (insert the name of alternative loaders here) property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),". It ",(0,r.kt)("strong",{parentName:"p"},"must")," be done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),". The following code is no longer valid with webpack 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{\n      test: /\\.tsx?$/,\n      loader: 'ts-loader'\n    }]\n  },\n  // specify option using `ts` property - **only do this if you are using webpack 1**\n  ts: {\n    transpileOnly: false\n  }\n}\n")),(0,r.kt)("p",null,"This change means that we have needed to adjust how our test pack works. We can no longer make use of ",(0,r.kt)("inlineCode",{parentName:"p"},"ts")," for configuration. Since I wasn't terribly aware of ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," I thought it made sense to share my learnings."),(0,r.kt)("h2",{id:"what-exactly-is-query--options"},"What exactly is ",(0,r.kt)("inlineCode",{parentName:"h2"},"query")," / ",(0,r.kt)("inlineCode",{parentName:"h2"},"options"),"?"),(0,r.kt)("p",null,"Good question. Well, strictly speaking it's 2 possible things; both ways to configure a webpack loader. Classically ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," was a string which could be appended to the name of the loader much like a ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://en.wikipedia.org/wiki/Query_string">query string</a>')," but actually with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/loader-utils#parsequery"},"greater powers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{\n      test: /\\.tsx?$/,\n      loader: 'ts-loader?' + JSON.stringify({\n        transpileOnly: false\n      })\n    }]\n  }\n}\n")),(0,r.kt)("p",null,"But it can also be a separately specified object that's supplied alongside a loader (I understand this is relatively new behaviour):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  ...\n  module: {\n    loaders: [{\n      test: /\\.tsx?$/,\n      loader: 'ts-loader'\n      query: {\n        transpileOnly: false\n      }\n    }]\n  }\n}\n")),(0,r.kt)("h2",{id:"webpack-2-is-coming---look-busy"},"webpack 2 is coming - look busy!"),(0,r.kt)("p",null,"So if you're planning to move to webpack 2, be aware of this breaking change. You can start moving to using configuration via query right now with webpack 1. You don't need to be using webpack 2 to make the jump. So jump!"),(0,r.kt)("p",null,"Finally, and by way of a PS, ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," is renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"options")," in webpack 2; a much better name to my mind. There's actually a bunch of other renames on the way as well - check out the ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules"},"migration guide")," for more on this. The important thing to note is that ",(0,r.kt)("strong",{parentName:"p"},"the old names work in webpack 2"),". But you should plan to move to the new naming at some point as they'll likely disappear when webpack 3 ships."))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[44777],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},65436:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"webpack: resolveLoader / alias with query / options",authors:"johnnyreilly",tags:["enhanced-resolve","Webpack","query","options"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2017/01/06/webpack-resolveloader-alias-with-query",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2017-01-06-webpack-resolveloader-alias-with-query/index.md",source:"@site/blog/2017-01-06-webpack-resolveloader-alias-with-query/index.md",title:"webpack: resolveLoader / alias with query / options",description:'Sometimes you write a post for the ages. Sometimes you write one you hope is out of date before you hit "publish". This is one of those.',date:"2017-01-06T00:00:00.000Z",formattedDate:"January 6, 2017",tags:[{label:"enhanced-resolve",permalink:"/tags/enhanced-resolve"},{label:"Webpack",permalink:"/tags/webpack"},{label:"query",permalink:"/tags/query"},{label:"options",permalink:"/tags/options"}],readingTime:1.375,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"webpack: resolveLoader / alias with query / options",authors:"johnnyreilly",tags:["enhanced-resolve","Webpack","query","options"],hide_table_of_contents:!1},prevItem:{title:"Hands-free HTTPS",permalink:"/2017/02/01/hands-free-https"},nextItem:{title:"webpack: configuring a loader with query / options",permalink:"/2017/01/01/webpack-configuring-loader-with-query"}},u={authorsImageUrls:[void 0]},c=[],h={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Sometimes you write a post for the ages. Sometimes you write one you hope is out of date before you hit "publish". This is one of those.'),(0,a.kt)("p",null,"There's a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/enhanced-resolve/issues/41"},"bug")," in webpack's enhanced-resolve. It means that you cannot configure an aliased loader using the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," in the webpack 2 nomenclature). Let me illustrate; consider the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // ...\n  module: {\n    loaders: [\n      {\n        test: /\\.ts$/,\n        loader: 'ts-loader',\n        query: {\n            entryFileIsJs: true\n        }\n      }\n    ]\n  }\n}\n\nmodule.exports.resolveLoader = { alias: { 'ts-loader': require('path').join(__dirname, \"../../index.js\")\n")),(0,a.kt)("p",null,"At the time of writing, if you alias a loader as above, then the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," will ","*",(0,a.kt)("em",{parentName:"p"},"not"),"*"," be passed along. This is bad, particularly given the requirement in webpack 2 that configuration is no longer possible through extending the ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/migrating/#loader-configuration-is-through-options"},(0,a.kt)("inlineCode",{parentName:"a"},"webpack.config.js")),". So what to do? Well, when this was a problem previously the marvellous ",(0,a.kt)("a",{parentName:"p",href:"https://www.twitter.com/jbrantly"},"James Brantly")," had a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/1289#issuecomment-125767499"},"workaround"),". I've taken that and run with it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var config = {\n  // ...\n  module: {\n    loaders: [\n      {\n        test: /\\.ts$/,\n        loader: 'ts-loader',\n        query: {\n          entryFileIsJs: true,\n        },\n      },\n    ],\n  },\n};\n\nmodule.exports = config;\n\nvar loaderAliasPath = require('path').join(__dirname, '../../../index.js');\nvar rules = config.module.loaders || config.module.rules;\nrules.forEach(function (rule) {\n  var options = rule.query || rule.options;\n  rule.loader = rule.loader.replace(\n    'ts-loader',\n    loaderAliasPath + (options ? '?' + JSON.stringify(options) : '')\n  );\n});\n")),(0,a.kt)("p",null,"This approach stringifies the ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," and suffixes it to the aliased path. This works as long as the options you're passing are JSON-able (yes it's a word)."),(0,a.kt)("p",null,"As I said earlier; hopefully by the time you read this the workaround will no longer be necessary again. But just in case...."))}d.isMDXComponent=!0}}]);
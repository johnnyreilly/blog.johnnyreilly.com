"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[60948],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=o,m=u["".concat(s,".").concat(k)]||u[k]||h[k]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76599:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Finding webpack 4 (use a Map)",authors:"johnnyreilly",tags:["webpack 4"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2018/01/29/finding-webpack-4-use-map",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2018-01-29-finding-webpack-4-use-map/index.md",source:"@site/blog/2018-01-29-finding-webpack-4-use-map/index.md",title:"Finding webpack 4 (use a Map)",description:"Update: 03/02/2018",date:"2018-01-29T00:00:00.000Z",formattedDate:"January 29, 2018",tags:[{label:"webpack 4",permalink:"/tags/webpack-4"}],readingTime:4.545,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Finding webpack 4 (use a Map)",authors:"johnnyreilly",tags:["webpack 4"],hide_table_of_contents:!1},prevItem:{title:"ts-loader 4 / fork-ts-checker-webpack-plugin 0.4",permalink:"/2018/02/25/ts-loader-400-fork-ts-checker-webpack"},nextItem:{title:"webpack 4 - ts-loader / fork-ts-checker-webpack-plugin betas",permalink:"/2018/01/28/webpack-4-ts-loader-fork-ts-checker"}},c={authorsImageUrls:[void 0]},h=[{value:"Update: 03/02/2018",id:"update-03022018",level:2},{value:"webpack 4",id:"webpack-4",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Custom Hooks",id:"custom-hooks",level:2},{value:"Loaders",id:"loaders",level:2},{value:"I need a <code>Map</code>",id:"i-need-a-map",level:2},{value:"Happy Porting!",id:"happy-porting",level:2}],u={toc:h};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"update-03022018"},"Update: 03/02/2018"),(0,r.kt)("p",null,"Tobias Koppers has written a migration guide for plugins / loaders as well - take a read ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-migration-guide-for-plugins-loaders-20a79b927202"},"here"),". It's very useful."),(0,r.kt)("h2",{id:"webpack-4"},"webpack 4"),(0,r.kt)("p",null,"webpack 4 is on the horizon. ",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/webpack/webpack-4-beta-try-it-today-6b1d27d7d7e2"},"The beta dropped last Friday"),". So what do you, as a plugin / loader author need to do? What needs to change to make your loader / plugin webpack 4 friendly?"),(0,r.kt)("p",null,"This is a guide that should inform you about the changes you might need to make. It's based on my own experiences migrating ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,r.kt)("inlineCode",{parentName:"a"},"ts-loader"))," and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,r.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". If you'd like to see this in action then take a look at the PRs related to these. The ts-loader PR can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/pull/710"},"here"),". The fork-ts-checker-webpack-plugin PR can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin/pull/93"},"here"),"."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"One of the notable changes to webpack with v4 is the change to the plugin architecture. In terms of implications it's worth reading the comments made by ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/wsokra"},"Tobias Koppers"),(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/6244#issuecomment-357502113"},"here")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/issues/6064#issuecomment-349405474"},"here"),"."),(0,r.kt)("p",null,"Previously, if your plugin was tapping into a compiler hook you'd write code that looked something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.plugin('watch-close', () => {\n  // do your thing here\n});\n")),(0,r.kt)("p",null,"With webpack 4 things done changed. You'd now write something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.watchClose.tap(\n  'name-to-identify-your-plugin-goes-here',\n  () => {\n    // do your thing here\n  }\n);\n")),(0,r.kt)("p",null,"Hopefully that's fairly clear; we're using the new ",(0,r.kt)("inlineCode",{parentName:"p"},"hooks")," property and tapping into our event of choice by ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCasing")," what was previously ",(0,r.kt)("inlineCode",{parentName:"p"},"kebab-cased"),". So in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin('watch-close' =&gt; hooks.watchClose.tap"),"."),(0,r.kt)("p",null,"In the example above we were attaching to a sync hook. Now let's look at an async hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.plugin('watch-run', (watching, callback) => {\n  // do your thing here\n  callback();\n});\n")),(0,r.kt)("p",null,"This would change to be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.watchRun.tapAsync(\n  'name-to-identify-your-plugin-goes-here',\n  (compiler, callback) => {\n    // do your thing here\n    callback();\n  }\n);\n")),(0,r.kt)("p",null,"Note that rather than using ",(0,r.kt)("inlineCode",{parentName:"p"},"tap")," here, we're using ",(0,r.kt)("inlineCode",{parentName:"p"},"tapAsync"),". If you're more into promises there's a ",(0,r.kt)("inlineCode",{parentName:"p"},"tapPromise")," you could use instead."),(0,r.kt)("h2",{id:"custom-hooks"},"Custom Hooks"),(0,r.kt)("p",null,"Prior to webpack 4, you could use your own custom hooks within your plugin. Usage was as simple as this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.applyPluginsAsync('fork-ts-checker-service-before-start', () => {\n  // do your thing here\n});\n")),(0,r.kt)("p",null,"You can still use custom hooks with webpack 4, but there's a little more ceremony involved. Essentially, you need to tell webpack up front what you're planning. Not hard, I promise you."),(0,r.kt)("p",null,"First of all, you'll need to add the package ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/tapable"},(0,r.kt)("inlineCode",{parentName:"a"},"tapable"))," as a dependency. Then, inside your plugin you'll need to import the type of hook that you want to use; in the case of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-webpack-plugin")," we used both a sync and an async hook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const AsyncSeriesHook = require('tapable').AsyncSeriesHook;\nconst SyncHook = require('tapable').SyncHook;\n")),(0,r.kt)("p",null,"Then, inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"apply")," method you need to register your hooks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (\n  this.compiler.hooks.forkTsCheckerServiceBeforeStart ||\n  this.compiler.hooks.forkTsCheckerCancel ||\n  // other hooks...\n  this.compiler.hooks.forkTsCheckerEmit\n) {\n  throw new Error('fork-ts-checker-webpack-plugin hooks are already in use');\n}\nthis.compiler.hooks.forkTsCheckerServiceBeforeStart = new AsyncSeriesHook([]);\n\nthis.compiler.hooks.forkTsCheckerCancel = new SyncHook([]);\n// other sync hooks...\nthis.compiler.hooks.forkTsCheckerDone = new SyncHook([]);\n")),(0,r.kt)("p",null,"If you're interested in backwards compatibility then you should use the ",(0,r.kt)("inlineCode",{parentName:"p"},"_pluginCompat")," to wire that in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler._pluginCompat.tap('fork-ts-checker-webpack-plugin', (options) => {\n  switch (options.name) {\n    case 'fork-ts-checker-service-before-start':\n      options.async = true;\n      break;\n    case 'fork-ts-checker-cancel':\n    // other sync hooks...\n    case 'fork-ts-checker-done':\n      return true;\n  }\n  return undefined;\n});\n")),(0,r.kt)("p",null,"With your registration in place, you just need to replace your calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler.applyPlugins('sync-hook-name', ")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler.applyPluginsAsync('async-hook-name', ")," with calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler.hooks.syncHookName.call(")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler.hooks.asyncHookName.callAsync("),". So to migrate our ",(0,r.kt)("inlineCode",{parentName:"p"},"fork-ts-checker-service-before-start")," hook we'd write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"this.compiler.hooks.forkTsCheckerServiceBeforeStart.callAsync(() => {\n  // do your thing here\n});\n")),(0,r.kt)("h2",{id:"loaders"},"Loaders"),(0,r.kt)("p",null,"Loaders are impacted by the changes to the plugin architecture. Mostly this means applying the same plugin changes as discussed above. ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," hooks into 2 plugin events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"loader._compiler.plugin('after-compile' /* callback goes here */);\nloader._compiler.plugin('watch-run' /* callback goes here */);\n")),(0,r.kt)("p",null,"With webpack 4 these become:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"loader._compiler.hooks.afterCompile.tapAsync(\n  'ts-loader' /* callback goes here */\n);\nloader._compiler.hooks.watchRun.tapAsync('ts-loader' /* callback goes here */);\n")),(0,r.kt)("p",null,"Note again, we're using the string ",(0,r.kt)("inlineCode",{parentName:"p"},'"ts-loader"')," to identify our loader."),(0,r.kt)("h2",{id:"i-need-a-map"},"I need a ",(0,r.kt)("inlineCode",{parentName:"h2"},"Map")),(0,r.kt)("p",null,"When I initially ported to webpack 4, ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," simply wasn't working. In the end I tied this down to problems in our ",(0,r.kt)("inlineCode",{parentName:"p"},"watch-run")," callback. There's 2 things of note here."),(0,r.kt)("p",null,"Firstly, as per ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack/webpack/releases/tag/v4.0.0-beta.0"},"the changelog"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"watch-run")," hook now has the ",(0,r.kt)("inlineCode",{parentName:"p"},"Compiler")," as the first parameter. Previously this was a subproperty on the supplied ",(0,r.kt)("inlineCode",{parentName:"p"},"watching")," parameter. So swapping over to use the compiler directly was necessary. Incidentally, ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," previously made use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"watching.startTime")," property that was supplied in webpack's 1, 2 and 3. It seems to be coping without it; so hopefully that's fine."),(0,r.kt)("p",null,"Secondly, with webpack 4 it's \"ES2015 all the things!\" That is to say, with webpack now requiring a minimum of node 6, the codebase is free to start using ES2015. So if you're a consumer of ",(0,r.kt)("inlineCode",{parentName:"p"},"compiler.fileTimestamps")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-loader")," is) then it's time to make a change to cater for the different API that a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," offers instead of indexing into an object literal with a ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," key."),(0,r.kt)("p",null,"What this means is, code that would once have looked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Object.keys(watching.compiler.fileTimestamps)\n  .filter(\n    (filePath) =>\n      watching.compiler.fileTimestamps[filePath] > lastTimes[filePath]\n  )\n  .forEach((filePath) => {\n    lastTimes[filePath] = times[filePath];\n    // ...\n  });\n")),(0,r.kt)("p",null,"Now looks more like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (const [filePath, date] of compiler.fileTimestamps) {\n  if (date > lastTimes.get(filePath)) {\n    continue;\n  }\n\n  lastTimes.set(filePath, date);\n  // ...\n}\n")),(0,r.kt)("h2",{id:"happy-porting"},"Happy Porting!"),(0,r.kt)("p",null,"I hope your own port to webpack 4 goes well. Do let me know if there's anything I've missed out / any inaccuracies etc and I'll update this guide."))}k.isMDXComponent=!0}}]);
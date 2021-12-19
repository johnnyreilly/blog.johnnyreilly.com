"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[20202],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(t),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return t?o.createElement(m,l(l({ref:n},d),{},{components:t})):o.createElement(m,l({ref:n},d))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},51548:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var o=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],a={title:"Definitely Typed Shouldn't Exist",authors:"johnnyreilly",tags:["npm","DefinitelyTyped","TypeScript","atom-typescript"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2015/09/23/authoring-npm-modules-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2015-09-23-authoring-npm-modules-with-typescript/index.md",source:"@site/blog/2015-09-23-authoring-npm-modules-with-typescript/index.md",title:"Definitely Typed Shouldn't Exist",description:"OK - the title's total clickbait but stay with me; there's a point here.",date:"2015-09-23T00:00:00.000Z",formattedDate:"September 23, 2015",tags:[{label:"npm",permalink:"/tags/npm"},{label:"DefinitelyTyped",permalink:"/tags/definitely-typed"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"atom-typescript",permalink:"/tags/atom-typescript"}],readingTime:10.865,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"jQuery Validation Globalize hits 1.0",permalink:"/2015/10/05/jquery-validation-globalize-hits-10"},nextItem:{title:"Things Done Changed",permalink:"/2015/09/10/things-done-changed"}},d={authorsImageUrls:[void 0]},u=[{value:"Wrong!",id:"wrong",children:[],level:2},{value:"Authoring npm modules with TypeScript",id:"authoring-npm-modules-with-typescript",children:[],level:2},{value:"Port, port, port!!!",id:"port-port-port",children:[],level:2},{value:"PS I&#39;m not the only one",id:"ps-im-not-the-only-one",children:[],level:2},{value:"PPS Update 23/09/2015 09:51",id:"pps-update-23092015-0951",children:[],level:2}],c={toc:u};function h(e){var n=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OK - the title's total clickbait but stay with me; there's a point here."),(0,r.kt)("p",null,"I'm a member of the Definitely Typed team - and hopefully I won't be kicked out for writing this. My point is this: ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files should live with the package they provide typing information for, in npm / GitHub etc. Not separately. TypeScript 1.6 has just been released. Yay! In the ",(0,r.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/typescript/archive/2015/09/16/announcing-typescript-1-6.aspx"},"release blog post")," it says this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We\u2019ve changed module resolution when doing CommonJS output to work more closely to how Node does module resolution. If a module name is non-relative, we now follow these steps to find the associated typings:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Check in ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," for ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;module name&gt;.d.ts")),(0,r.kt)("li",{parentName:"ol"},"Search ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules\\&lt;module name&gt;\\package.json")," for a ",(0,r.kt)("inlineCode",{parentName:"li"},"typings")," field"),(0,r.kt)("li",{parentName:"ol"},"Look for ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules\\&lt;module name&gt;\\index.d.ts")),(0,r.kt)("li",{parentName:"ol"},"Then we go one level higher and repeat the process")),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Please note:")," when we search through node_modules, we assume these are the packaged node modules which have type information and a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},".js")," file. As such, we resolve only ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," files (not ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," file) for non-relative names."),(0,r.kt)("p",{parentName:"blockquote"},"Previously, we treated all module names as relative paths, and therefore we would never properly look in node_modules... We will continue to improve module resolution, including improvements to AMD, in upcoming releases.")),(0,r.kt)("p",null,"The TL;DR is this: consuming npm packages which come with definition files should JUST WORK\u2122... npm is now a first class citizen in TypeScriptLand. So everyone who has a package on npm should now feel duty bound to include a ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," when they publish and Definitely Typed can shut up shop. Simple right?"),(0,r.kt)("h2",{id:"wrong"},"Wrong!"),(0,r.kt)("p",null,"Yeah, it's never going to happen. Surprising as it is, there are many people who are quite happy without TypeScript in their lives (I know - mad right?). These poor unfortunates are unlikely to ever take the extra steps necessary to write definition files. For this reason, there will probably ",(0,r.kt)("em",{parentName:"p"},"always")," be a need for a provider of typings such as Definitely Typed. As well as that, the vast majority of people using TypeScript probably don't use npm to manage dependencies. There are, however, an increasing number of users who are using npm. Some (like me) may even be using tools like ",(0,r.kt)("a",{parentName:"p",href:"http://browserify.org/"},"Browserify")," (with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/smrq/tsify"},"TSIFY plugin"),") or ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.github.io/"},"WebPack")," (with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jbrantly/ts-loader"},"TS loader"),") to bring it all together. My feeling is that, over time, using npm will become more common; particularly given the improvements being made to module resolution in the language."),(0,r.kt)("p",null,"An advantage of shipping typings with an npm package is this: those typings should accurately describe their accompanying package. In Definitely Typed we only aim to support the latest and greatest typings. So if you find yourself looking for the typings of an older version of a package you're going to have to pick your way back through the history of a ",(0,r.kt)("inlineCode",{parentName:"p"},".d.ts")," file and hope you happen upon the version you're looking for. Not a fantastic experience."),(0,r.kt)("p",null,"So I guess what I'm saying is this: if you're an npm package author then it would be fantastic to start shipping a package with typings in the box. If you're using npm to consume packages then using Definitely Typed ought to be the second step you might take after installing a package; the step you only need to take if the package doesn't come with typings. Using DT should be a fallback, not a default."),(0,r.kt)("h2",{id:"authoring-npm-modules-with-typescript"},"Authoring npm modules with TypeScript"),(0,r.kt)("p",null,"Yup - that's what this post is actually about. See how I lured you in with my mild trolling and pulled the old switcheroo? That's edutainment my friend. So, how do we write npm packages in TypeScript and publish them with their typings? Apparently Gandhi ",(0,r.kt)("a",{parentName:"p",href:"http://www.nytimes.com/2011/08/30/opinion/falser-words-were-never-spoken.html?_r=0"},"didn't actually say"),' "Be the change you wish to see in the world." Which is a shame. But anyway, I\'m going to try and embrace the sentiment here.'),(0,r.kt)("p",null,"Not so long ago I wrote a small npm module called ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/globalize-so-what-cha-want"},"globalize-so-what-cha-want"),". It is used to determine what parts of Globalize 1.x you need depending on the modules you're planning to use. It also, contains a little demo UI / online tool written in React which powers ",(0,r.kt)("a",{parentName:"p",href:"http://johnnyreilly.github.io/globalize-so-what-cha-want/"},"this"),"."),(0,r.kt)("p",null,"For this post, the purpose of the package is rather irrelevant. And even though I've just told you about it, I want you to pretend that the online tool doesn't exist. Pretend I never mentioned it."),(0,r.kt)("p",null,"What is relevant, and what I want you to think about, is this: I wrote globalize-so-what-cha-want in plain old, honest to goodness JavaScript. Old school."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=V4YPFHyGWaY&feature=youtu.be&t=49s"},"But, my love of static typing could be held in abeyance for only so long.")," Once the initial package was written, unit tested and published I got the itch. THIS SHOULD BE WRITTEN IN TYPESCRIPT!!! Well, it didn't have to be but I wanted it to be. Despite having used TypeScript since the early days I'd only been using it for front end work; not for writing npm packages. My mission was clear: port globalize-so-what-cha-want to TypeScript and re-publish to npm."),(0,r.kt)("h2",{id:"port-port-port"},"Port, port, port!!!"),(0,r.kt)("p",null,"At this point globalize-so-what-cha-want consisted of a single ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," file in the root of the package. My end goal was to end up with that file still sat there, but now generated from TypeScript. Alongside it I wanted to see a ",(0,r.kt)("inlineCode",{parentName:"p"},"index.d.ts")," which was generated from the same TypeScript."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-so-what-cha-want/tree/6cce84289134a555fe8462247b43eddb051303e3"},"before")," looked like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* jshint varstmt: false, esnext: false */\nvar DEPENDENCY_TYPES = {\n  SHARED_JSON: 'Shared JSON (used by all locales)',\n  LOCALE_JSON: 'Locale specific JSON (supplied for each locale)',\n};\n\nvar moduleDependencies = {\n  core: {\n    dependsUpon: [],\n    cldrGlobalizeFiles: [\n      'cldr.js',\n      'cldr/event.js',\n      'cldr/supplemental.js',\n      'globalize.js',\n    ],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/likelySubtags.json',\n      },\n    ],\n  },\n\n  currency: {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/currency.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/currencies.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/currencyData.json',\n      },\n    ],\n  },\n\n  date: {\n    dependsUpon: ['number'],\n    cldrGlobalizeFiles: ['globalize/date.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/ca-gregorian.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/timeZoneNames.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/timeData.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/weekData.json',\n      },\n    ],\n  },\n\n  message: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/message.js'],\n    json: [],\n  },\n\n  number: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/number.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/numbers.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/numberingSystems.json',\n      },\n    ],\n  },\n\n  plural: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/plural.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/plurals.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/ordinals.json',\n      },\n    ],\n  },\n\n  relativeTime: {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/relative-time.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/dateFields.json',\n      },\n    ],\n  },\n};\n\nfunction determineRequiredCldrData(globalizeOptions) {\n  return determineRequired(\n    globalizeOptions,\n    _populateDependencyCurrier('json', function (json) {\n      return json.dependency;\n    })\n  );\n}\n\nfunction determineRequiredCldrGlobalizeFiles(globalizeOptions) {\n  return determineRequired(\n    globalizeOptions,\n    _populateDependencyCurrier(\n      'cldrGlobalizeFiles',\n      function (cldrGlobalizeFile) {\n        return cldrGlobalizeFile;\n      }\n    )\n  );\n}\n\nfunction determineRequired(globalizeOptions, populateDependencies) {\n  var modules = Object.keys(globalizeOptions);\n  modules.forEach(function (module) {\n    if (!moduleDependencies[module]) {\n      throw new TypeError(\"There is no '\" + module + \"' module\");\n    }\n  });\n\n  var requireds = [];\n  modules.forEach(function (module) {\n    if (globalizeOptions[module]) {\n      populateDependencies(module, requireds);\n    }\n  });\n\n  return requireds;\n}\n\nfunction _populateDependencyCurrier(requiredArray, requiredArrayGetter) {\n  var popDepFn = function (module, requireds) {\n    var dependencies = moduleDependencies[module];\n\n    dependencies.dependsUpon.forEach(function (requiredModule) {\n      popDepFn(requiredModule, requireds);\n    });\n\n    dependencies[requiredArray].forEach(function (required) {\n      var newRequired = requiredArrayGetter(required);\n      if (requireds.indexOf(newRequired) === -1) {\n        requireds.push(newRequired);\n      }\n    });\n\n    return requireds;\n  };\n\n  return popDepFn;\n}\n\nmodule.exports = {\n  determineRequiredCldrData: determineRequiredCldrData,\n  determineRequiredCldrGlobalizeFiles: determineRequiredCldrGlobalizeFiles,\n};\n")),(0,r.kt)("p",null,"You can even kind of tell that it was written in JavaScript thanks to the jshint rules at the top."),(0,r.kt)("p",null,"I fired up Atom and created a new folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/lib")," and inside there I created ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," (yes, ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," renamed) and ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". By the way, you'll notice I'm not leaving Atom - I'm making use of the magnificent ",(0,r.kt)("a",{parentName:"p",href:"https://atom.io/packages/atom-typescript"},"atom-typescript")," which you should totally be using too. It rocks."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(90327).Z})),(0,r.kt)("p",null,"Now I'm not going to bore you with what I had to do to port the JS to TS (not much). If you're interested, the source is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/src/lib/index.ts"},"here"),". What's more interesting is the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," ","-"," as it's this that is going to lead the generation of the JS and TS that we need:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compileOnSave": true,\n  "compilerOptions": {\n    "module": "commonjs",\n    "declaration": true,\n    "target": "es5",\n    "noImplicitAny": true,\n    "suppressImplicitAnyIndexErrors": true,\n    "removeComments": false,\n    "preserveConstEnums": true,\n    "sourceMap": false,\n    "outDir": "../../"\n  },\n  "files": ["index.ts"]\n}\n')),(0,r.kt)("p",null,"The things to notice are:"),(0,r.kt)("dl",null,(0,r.kt)("dt",null,"module"),(0,r.kt)("dd",null,"Publishing a commonjs module means it will play well with npm"),(0,r.kt)("dt",null,"declaration"),(0,r.kt)("dd",null,"This is what makes TypeScript generate ",(0,r.kt)("code",null,"index.d.ts")),(0,r.kt)("dt",null,"outDir"),(0,r.kt)("dd",null,"We want to regenerate the ",(0,r.kt)("code",null,"index.js")," in the root (2 directories above this)")),(0,r.kt)("p",null,"So now, what do we get when we build in Atom? Well, we're generating an ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/index.js">index.js</a>')," file which looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var DEPENDENCY_TYPES = {\n  SHARED_JSON: 'Shared JSON (used by all locales)',\n  LOCALE_JSON: 'Locale specific JSON (supplied for each locale)',\n};\nvar moduleDependencies = {\n  core: {\n    dependsUpon: [],\n    cldrGlobalizeFiles: [\n      'cldr.js',\n      'cldr/event.js',\n      'cldr/supplemental.js',\n      'globalize.js',\n    ],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/likelySubtags.json',\n      },\n    ],\n  },\n  currency: {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/currency.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/currencies.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/currencyData.json',\n      },\n    ],\n  },\n  date: {\n    dependsUpon: ['number'],\n    cldrGlobalizeFiles: ['globalize/date.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/ca-gregorian.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/timeZoneNames.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/timeData.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/weekData.json',\n      },\n    ],\n  },\n  message: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/message.js'],\n    json: [],\n  },\n  number: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/number.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/numbers.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/numberingSystems.json',\n      },\n    ],\n  },\n  plural: {\n    dependsUpon: ['core'],\n    cldrGlobalizeFiles: ['globalize/plural.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/plurals.json',\n      },\n      {\n        dependencyType: DEPENDENCY_TYPES.SHARED_JSON,\n        dependency: 'cldr/supplemental/ordinals.json',\n      },\n    ],\n  },\n  relativeTime: {\n    dependsUpon: ['number', 'plural'],\n    cldrGlobalizeFiles: ['globalize/relative-time.js'],\n    json: [\n      {\n        dependencyType: DEPENDENCY_TYPES.LOCALE_JSON,\n        dependency: 'cldr/main/{locale}/dateFields.json',\n      },\n    ],\n  },\n};\nfunction determineRequired(globalizeOptions, populateDependencies) {\n  var modules = Object.keys(globalizeOptions);\n  modules.forEach(function (module) {\n    if (!moduleDependencies[module]) {\n      throw new TypeError(\"There is no '\" + module + \"' module\");\n    }\n  });\n  var requireds = [];\n  modules.forEach(function (module) {\n    if (globalizeOptions[module]) {\n      populateDependencies(module, requireds);\n    }\n  });\n  return requireds;\n}\nfunction _populateDependencyCurrier(requiredArray, requiredArrayGetter) {\n  var popDepFn = function (module, requireds) {\n    var dependencies = moduleDependencies[module];\n    dependencies.dependsUpon.forEach(function (requiredModule) {\n      popDepFn(requiredModule, requireds);\n    });\n    dependencies[requiredArray].forEach(function (required) {\n      var newRequired = requiredArrayGetter(required);\n      if (requireds.indexOf(newRequired) === -1) {\n        requireds.push(newRequired);\n      }\n    });\n    return requireds;\n  };\n  return popDepFn;\n}\n/**\n * The string array returned will contain a list of the required cldr json data you need. I don't believe ordering matters for the json but it is listed in the same dependency order as the cldr / globalize files are.\n *\n * @param options The globalize modules being used.\n */\nfunction determineRequiredCldrData(globalizeOptions) {\n  return determineRequired(\n    globalizeOptions,\n    _populateDependencyCurrier('json', function (json) {\n      return json.dependency;\n    })\n  );\n}\nexports.determineRequiredCldrData = determineRequiredCldrData;\n/**\n * The string array returned will contain a list of the required cldr / globalize files you need, listed in the order they are required.\n *\n * @param options The globalize modules being used.\n */\nfunction determineRequiredCldrGlobalizeFiles(globalizeOptions) {\n  return determineRequired(\n    globalizeOptions,\n    _populateDependencyCurrier(\n      'cldrGlobalizeFiles',\n      function (cldrGlobalizeFile) {\n        return cldrGlobalizeFile;\n      }\n    )\n  );\n}\nexports.determineRequiredCldrGlobalizeFiles =\n  determineRequiredCldrGlobalizeFiles;\n")),(0,r.kt)("p",null,"Aside from one method moving internally and me adding some JSDoc, the only really notable change is the end of the file. TypeScript, when generating commonjs, doesn't use the ",(0,r.kt)("inlineCode",{parentName:"p"},"module.exports = {}")," approach. Rather, it drops exported functions onto the ",(0,r.kt)("inlineCode",{parentName:"p"},"exports")," object as functions are exported. Functionally this is ",(0,r.kt)("em",{parentName:"p"},"identical"),"."),(0,r.kt)("p",null,"Now for our big finish: happily sat alongside is ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," is the ",(0,r.kt)("inlineCode",{parentName:"p"},'<a href="https://github.com/johnnyreilly/globalize-so-what-cha-want/blob/master/index.d.ts">index.d.ts</a>')," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export interface Options {\n  currency?: boolean;\n  date?: boolean;\n  message?: boolean;\n  number?: boolean;\n  plural?: boolean;\n  relativeTime?: boolean;\n}\n/**\n * The string array returned will contain a list of the required cldr json data you need. I don't believe ordering matters for the json but it is listed in the same dependency order as the cldr / globalize files are.\n *\n * @param options The globalize modules being used.\n */\nexport declare function determineRequiredCldrData(\n  globalizeOptions: Options\n): string[];\n/**\n * The string array returned will contain a list of the required cldr / globalize files you need, listed in the order they are required.\n *\n * @param options The globalize modules being used.\n */\nexport declare function determineRequiredCldrGlobalizeFiles(\n  globalizeOptions: Options\n): string[];\n")),(0,r.kt)("p",null,"We're there, huzzah! This has been now published to npm - anyone consuming this package can use TypeScript straight out of the box. I really hope that publishing npm packages in this fashion becomes much more commonplace. Time will tell."),(0,r.kt)("h2",{id:"ps-im-not-the-only-one"},"PS I'm not the only one"),(0,r.kt)("p",null,'I was just about to hit "publish" when I happened upon ',(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/basarat"},"Basarat"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/basarat/ts-npm-module"},"ts-npm-module")," which is a project on GitHub which demo's how to publish and consume TypeScript using npm. I'd say great minds think alike but I'm pretty sure Basarat's mind is far greater than mine! (Cough, atom-typescript, cough.) Either way, it's good to see validation for the approach I'm suggesting."),(0,r.kt)("h2",{id:"pps-update-23092015-0951"},"PPS Update 23/09/2015 09:51"),(0,r.kt)("p",null,"One of the useful things about writing a blog is that you get to learn. Since I published I've become aware of a few things somewhat relevant to this post. First of all, there is still work ongoing in TypeScript land around this topic. Essentially there are problems resolving dependency conflicts when different dependencies have different versions - you can take part in the ongoing discussion ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/issues/4665"},"here"),". There's also some useful resources to look at:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/wiki/Typings-for-npm-packages"},"https://github.com/Microsoft/TypeScript/wiki/Typings-for-npm-packages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://basarat.gitbooks.io/typescript/content/docs/node/nodejs.html"},"https://basarat.gitbooks.io/typescript/content/docs/node/nodejs.html"))))}h.isMDXComponent=!0},90327:function(e,n,t){n.Z=t.p+"assets/images/Screenshot%2B2015-09-23%2B05.51.14-a6909c1b4e43317e3f6f7683a7174454.png"}}]);
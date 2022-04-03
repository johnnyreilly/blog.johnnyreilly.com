"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[41746],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83732:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"The Mysterious Case of Webpack, Angular and jQuery",authors:"johnnyreilly",tags:["provideplugin","jquery","jqlite","Angular","Webpack"],hide_table_of_contents:!1},u=void 0,p={permalink:"/2016/05/24/the-mysterious-case-of-webpack-angular-and-jquery",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-05-24-the-mysterious-case-of-webpack-angular-and-jquery/index.md",source:"@site/blog/2016-05-24-the-mysterious-case-of-webpack-angular-and-jquery/index.md",title:"The Mysterious Case of Webpack, Angular and jQuery",description:"You may know that Angular ships with a cutdown version of jQuery called jQLite. It's still possible to use the full-fat jQuery; to quote the docs:",date:"2016-05-24T00:00:00.000Z",formattedDate:"May 24, 2016",tags:[{label:"provideplugin",permalink:"/tags/provideplugin"},{label:"jquery",permalink:"/tags/jquery"},{label:"jqlite",permalink:"/tags/jqlite"},{label:"Angular",permalink:"/tags/angular"},{label:"Webpack",permalink:"/tags/webpack"}],readingTime:1.89,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Mysterious Case of Webpack, Angular and jQuery",authors:"johnnyreilly",tags:["provideplugin","jquery","jqlite","Angular","Webpack"],hide_table_of_contents:!1},prevItem:{title:"Creating an ES2015 Map from an Array in TypeScript",permalink:"/2016/06/02/create-es2015-map-from-array-in-typescript"},nextItem:{title:"Inlining Angular Templates with WebPack and TypeScript",permalink:"/2016/05/13/inlining-angular-templates-with-webpack"}},s={authorsImageUrls:[void 0]},c=[{value:"But wait! I&#39;m using webpack",id:"but-wait-im-using-webpack",level:2},{value:"You need the <code>ProvidePlugin</code>",id:"you-need-the-provideplugin",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may know that ",(0,o.kt)("a",{parentName:"p",href:"https://docs.angularjs.org/api/ng/function/angular.element"},"Angular ships with a cutdown version of jQuery called jQLite"),". It's still possible to use the full-fat jQuery; to quote the docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery"),", simply ensure it is loaded before the ",(0,o.kt)("inlineCode",{parentName:"p"},"angular.js")," file.")),(0,o.kt)("p",null,"Now the wording rather implies that you're not using any module loader / bundler. Rather that all files are being loaded via ",(0,o.kt)("inlineCode",{parentName:"p"},"script")," tags and relies on the global variables that result from that. True enough, if you take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/angular/angular.js/blob/eaa1119d4252bed08dfa42f984ef9502d0f02775/src/Angular.js#L1791"},"Angular source")," you can see how this works:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// bind to jQuery if present;\nvar jqName = jq();\njQuery = isUndefined(jqName)\n  ? window.jQuery // use jQuery (if present)\n  : !jqName\n  ? undefined // use jqLite\n  : window[jqName]; // use jQuery specified by `ngJq`\n")),(0,o.kt)("p",null,"Amongst other things it looks for a ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery")," variable which has been placed onto the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object. If it is found then jQuery is used; if it is not then it's ",(0,o.kt)("inlineCode",{parentName:"p"},"jqLite")," all the way."),(0,o.kt)("h2",{id:"but-wait-im-using-webpack"},"But wait! I'm using webpack"),(0,o.kt)("p",null,"Me too! And one of the reasons is that we get to move away from reliance upon the global scope and towards proper modularisation. So how do we get Angular to use jQuery given the code we've seen above? Well, your first thought might be to ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," yourself some ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery")," and then make sure you've got something like this in your entry file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import 'jquery'; // This'll fix it... Right?\nimport * as angular from 'angular';\n")),(0,o.kt)("p",null,"Wrong."),(0,o.kt)("h2",{id:"you-need-the-provideplugin"},"You need the ",(0,o.kt)("inlineCode",{parentName:"h2"},"ProvidePlugin")),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js")," you need to add the following entry to your plugins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'new webpack.ProvidePlugin({\n          "window.jQuery": "jquery"\n      }),\n')),(0,o.kt)("p",null,"This uses the webpack ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin"},(0,o.kt)("inlineCode",{parentName:"a"},"ProvidePlugin"))," and, at the point of webpackification (\xa9 2016 John Reilly) all references in the code to ",(0,o.kt)("inlineCode",{parentName:"p"},"window.jQuery")," will be replaced with a reference to the webpack module that contains jQuery. So when you look at the bundled file you'll see that the code that checks the ",(0,o.kt)("inlineCode",{parentName:"p"},"window")," object for ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery")," has become this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"jQuery = isUndefined(jqName)\n  ? __webpack_provided_window_dot_jQuery // use jQuery (if present)\n  : !jqName\n  ? undefined // use jqLite\n  : window[jqName]; // use jQuery specified by `ngJq`\n")),(0,o.kt)("p",null,"That's right; webpack is providing Angular with jQuery whilst still ",(0,o.kt)("em",{parentName:"p"},"not")," placing a ",(0,o.kt)("inlineCode",{parentName:"p"},"jQuery")," variable onto the ",(0,o.kt)("inlineCode",{parentName:"p"},"window"),". Neat huh?"))}m.isMDXComponent=!0}}]);
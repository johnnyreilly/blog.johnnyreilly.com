"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[56863],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,h=d["".concat(o,".").concat(g)]||d[g]||c[g]||l;return n?i.createElement(h,s(s({ref:t},u),{},{components:n})):i.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=g;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:a,s[1]=r;for(var p=2;p<l;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},38305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});n(67294);var i=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const s={title:"Using Gulp to inject scripts and styles tags directly into your HTML",authors:"johnnyreilly",tags:["asp.net","gulp-inject","Web Optimization","gulpjs","wiredep"],hide_table_of_contents:!1},r=void 0,o={permalink:"/2015/02/17/using-gulp-in-asp-net-instead-of-web-optimization",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2015-02-17-using-gulp-in-asp-net-instead-of-web-optimization/index.md",source:"@site/blog/2015-02-17-using-gulp-in-asp-net-instead-of-web-optimization/index.md",title:"Using Gulp to inject scripts and styles tags directly into your HTML",description:"This is very probably the dullest title for a blog post I've ever come up with. Read on though folks - it's definitely going to pick up...",date:"2015-02-17T00:00:00.000Z",formattedDate:"February 17, 2015",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"gulp-inject",permalink:"/tags/gulp-inject"},{label:"Web Optimization",permalink:"/tags/web-optimization"},{label:"gulpjs",permalink:"/tags/gulpjs"},{label:"wiredep",permalink:"/tags/wiredep"}],readingTime:10.465,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using Gulp to inject scripts and styles tags directly into your HTML",authors:"johnnyreilly",tags:["asp.net","gulp-inject","Web Optimization","gulpjs","wiredep"],hide_table_of_contents:!1},prevItem:{title:"Hey tsconfig.json, where have you been all my life?",permalink:"/2015/02/27/hey-tsconfigjson-where-have-you-been"},nextItem:{title:"The Convent with Continuous Delivery",permalink:"/2015/02/11/the-convent-with-continuous-delivery"}},p={authorsImageUrls:[void 0]},u=[{value:"Death to dynamic loading",id:"death-to-dynamic-loading",level:2},{value:"clean",id:"clean",level:3},{value:"boot-dependencies",id:"boot-dependencies",level:3},{value:"inject-debug and inject-release",id:"inject-debug-and-inject-release",level:3},{value:"scripts-debug and scripts-release",id:"scripts-debug-and-scripts-release",level:3},{value:"styles-debug and styles-release",id:"styles-debug-and-styles-release",level:3},{value:"fonts-debug and fonts-release",id:"fonts-debug-and-fonts-release",level:3},{value:"build-debug, build-release and default",id:"build-debug-build-release-and-default",level:3}],d={toc:u};function c(e){var{components:t}=e,n=l(e,["components"]);return(0,i.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is very probably the dullest title for a blog post I've ever come up with. Read on though folks - it's definitely going to pick up..."),(0,i.kt)("p",null,"I ",(0,i.kt)("a",a({parentName:"p"},{href:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization"}),"wrote last year")," about my first usage of Gulp in an ASP.Net project. I used Gulp to replace the Web Optimization functionality that is due to disappear when ASP.Net v5 ships. What I came up with was an approach that provided pretty much the same functionality; raw source in debug mode, bundling + minification in release mode."),(0,i.kt)("p",null,"It worked by having a launch page which was straight HTML. Embedded within this page was JavaScript that would, at runtime, load the required JavaScript / CSS and inject it dynamically into the document. This approach worked but it had a number of downsides:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Each time you fired up the app the following sequence of events would happen: - jQuery would load (purely there to simplify the making of various startup AJAX calls)")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the page would make an AJAX call to the server to load various startup data, including whether the app is running in debug or release mode"),(0,i.kt)("li",{parentName:"ul"},"Depending on the result of the startup data either the debug or release package manifest would be loaded."),(0,i.kt)("li",{parentName:"ul"},"For each entry in the package manifest ",(0,i.kt)("inlineCode",{parentName:"li"},"script")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"link")," tags would be created and added to the document. These would generate further requests to the server to load the resources.")),(0,i.kt)("p",null,'Quite a lot going on here isn\'t there? Accordingly, initial startup time was slower than you might hope. 2. The "F" word: ',(0,i.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Flash_of_unstyled_content"}),"FOUC"),". Flash Of Unstyled Content - whilst all the hard work of the page load was going on (before the CSS had been loaded) the page would look rather ... bare. Not a terrible thing but none too slick either. 3. The gulpfile built both the debug and the release package each time it was run. This meant the gulp task generally did double the work that it needed to do."),(0,i.kt)("p",null,"I wanted to see if I could tackle these issues. I've recently been watching ",(0,i.kt)("a",a({parentName:"p"},{href:"https://twitter.com/John_Papa"}),"John Papa"),"'s excellent ",(0,i.kt)("a",a({parentName:"p"},{href:"http://www.pluralsight.com/courses/javascript-build-automation-gulpjs"}),"Pluralsight course on Gulp")," and picked up a number of useful tips. With that in hand let's see what we can come up with..."),(0,i.kt)("h2",a({},{id:"death-to-dynamic-loading"}),"Death to dynamic loading"),(0,i.kt)("p",null,"The main issue with the approach I've been using is the dynamic loading. It makes the app slower and more complicated. So the obvious solution is to have my gulpfile inject scripts and css into the template. To that end it's ",(0,i.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/wiredep"}),"wiredep")," & ",(0,i.kt)("a",a({parentName:"p"},{href:"https://www.npmjs.com/package/gulp-inject"}),"gulp-inject")," to the rescue!"),(0,i.kt)("p",null,"gulp-inject (as the name suggests) is used to inject ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," tags into source code. I'm using ",(0,i.kt)("a",a({parentName:"p"},{href:"http://bower.io/"}),"Bower")," as my client side package manager and so I'm going to use wiredep to determine the vendor scripts I need. It will determine what packages my app is using from looking at my ",(0,i.kt)("inlineCode",{parentName:"p"},"bower.json"),", and give me a list of file paths in ",(0,i.kt)("em",{parentName:"p"},"dependency order")," (which I can then pass on to gulp-inject in combination with my own app script files). This means I don't have to think about ordering bower dependencies myself and I no longer need to separately maintain a list of these files within my gulpfile."),(0,i.kt)("p",null,"So, let's get the launch page (",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),") ready for gulp-inject:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />\n    <style>\n      .ng-hide {\n        display: none !important;\n      }\n    </style>\n    <title ng-bind="title">Proverb</title>\n    <meta charset="utf-8" />\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"\n    />\n\n    \x3c!-- inject:css --\x3e\n    \x3c!-- endinject --\x3e\n\n    <link rel="icon" type="image/png" href="content/images/icon.png" />\n  </head>\n  <body>\n    <div>\n      <div ng-include="\'app/layout/shell.html\'"></div>\n      <div id="splash-page" ng-show="false" class="dissolve-animation">\n        <div class="page-splash">\n          <div class="page-splash-message">Proverb</div>\n\n          <div class="progress">\n            <div\n              class="progress-bar progress-bar-striped active"\n              role="progressbar"\n              style="width: 20%;"\n            >\n              <span class="sr-only">loading...</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"><\/script>\n    <script>\n      window.jQuery ||\n        document.write(\'<script src="/build/jquery.min.js">\\x3C/script>\');\n    <\/script>\n\n    \x3c!-- inject:js --\x3e\n    \x3c!-- endinject --\x3e\n\n    <script>\n      (function () {\n        // Load startup data from the server\n        $.getJSON(\'api/Startup\').done(function (startUpData) {\n          angularApp.start({\n            thirdPartyLibs: {\n              moment: window.moment,\n              toastr: window.toastr,\n              underscore: window._,\n            },\n            appConfig: startUpData,\n          });\n        });\n      })();\n    <\/script>\n  </body>\n</html>\n')),(0,i.kt)("p",null,"The important thing to notice here are the ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;!-- inject:css --&gt;")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"&lt;!-- inject:js --&gt;")," injection placeholders. It's here that our script and style tags will be injected into the template. You'll notice that jQuery is ",(0,i.kt)("em",{parentName:"p"},"not")," being injected - and that's because I've opted to use a CDN for jQuery and then only fallback to serving jQuery myself if the CDN fails."),(0,i.kt)("p",null,"The other thing to notice here is that our launch page has become oh so much simpler in comparison with the dynamic loading approach. Which is fab."),(0,i.kt)("p",null,"Now before we start looking at our gulpfile I want to split out the configuration into a standalone file called gulpfile.config.js:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"var tsjsmapjsSuffix = '.{ts,js.map,js}';\n\nvar bower = 'bower_components/';\nvar app = 'app/';\n\nvar config = {\n  base: '.',\n  buildDir: './build/',\n  debug: 'debug',\n  release: 'release',\n  css: 'css',\n\n  bootFile: app + 'index.html',\n  bootjQuery: bower + 'jquery/dist/jquery.min.js',\n\n  // The fonts we want Gulp to process\n  fonts: [bower + 'fontawesome/fonts/*.*'],\n\n  images: 'images/**/*.{gif,jpg,png}',\n\n  // The scripts we want Gulp to process\n  scripts: [\n    // Bootstrapping\n    app + 'app' + tsjsmapjsSuffix,\n    app + 'config.route' + tsjsmapjsSuffix,\n\n    // common Modules\n    app + 'common/common' + tsjsmapjsSuffix,\n    app + 'common/logger' + tsjsmapjsSuffix,\n    app + 'common/spinner' + tsjsmapjsSuffix,\n\n    // common.bootstrap Modules\n    app + 'common/bootstrap/bootstrap.dialog' + tsjsmapjsSuffix,\n\n    // directives\n    app + 'directives/**/*' + tsjsmapjsSuffix,\n\n    // services\n    app + 'services/**/*' + tsjsmapjsSuffix,\n\n    // controllers\n    app + 'about/**/*' + tsjsmapjsSuffix,\n    app + 'admin/**/*' + tsjsmapjsSuffix,\n    app + 'dashboard/**/*' + tsjsmapjsSuffix,\n    app + 'layout/**/*' + tsjsmapjsSuffix,\n    app + 'sages/**/*' + tsjsmapjsSuffix,\n    app + 'sayings/**/*' + tsjsmapjsSuffix,\n  ],\n\n  // The styles we want Gulp to process\n  styles: ['content/styles.css'],\n\n  wiredepOptions: {\n    exclude: [/jquery/],\n    ignorePath: '..',\n  },\n};\n\nconfig.debugFolder = config.buildDir + config.debug + '/';\nconfig.releaseFolder = config.buildDir + config.release + '/';\n\nconfig.templateFiles = [\n  app + '**/*.html',\n  '!' + config.bootFile, // Exclude the launch page\n];\n\nmodule.exports = config;\n")),(0,i.kt)("p",null,"Now to the meat of the matter - let me present the gulpfile:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-js"}),"/// <vs AfterBuild='default' />\nvar gulp = require('gulp');\n\n// Include Our Plugins\nvar concat = require('gulp-concat');\nvar ignore = require('gulp-ignore');\nvar minifyCss = require('gulp-minify-css');\nvar uglify = require('gulp-uglify');\nvar rev = require('gulp-rev');\nvar del = require('del');\nvar path = require('path');\nvar templateCache = require('gulp-angular-templatecache');\nvar eventStream = require('event-stream');\nvar order = require('gulp-order');\nvar gulpUtil = require('gulp-util');\nvar wiredep = require('wiredep');\nvar inject = require('gulp-inject');\n\n// Get our config\nvar config = require('./gulpfile.config.js');\n\n/**\n * Get the scripts or styles the app requires by combining bower dependencies and app dependencies\n *\n * @param {string} jsOrCss Should be \"js\" or \"css\"\n */\nfunction getScriptsOrStyles(jsOrCss) {\n  var bowerScriptsAbsolute = wiredep(config.wiredepOptions)[jsOrCss];\n\n  var bowerScriptsRelative = bowerScriptsAbsolute.map(\n    function makePathRelativeToCwd(file) {\n      return path.relative('', file);\n    }\n  );\n\n  var appScripts = bowerScriptsRelative.concat(\n    jsOrCss === 'js' ? config.scripts : config.styles\n  );\n\n  return appScripts;\n}\n\n/**\n * Get the scripts the app requires\n */\nfunction getScripts() {\n  return getScriptsOrStyles('js');\n}\n\n/**\n * Get the styles the app requires\n */\nfunction getStyles() {\n  return getScriptsOrStyles('css');\n}\n\n/**\n * Get the scripts and the templates combined streams\n *\n * @param {boolean} isDebug\n */\nfunction getScriptsAndTemplates(isDebug) {\n  var options = isDebug ? { base: config.base } : undefined;\n  var appScripts = gulp.src(getScripts(), options);\n\n  //Get the view templates for $templateCache\n  var templates = gulp\n    .src(config.templateFiles)\n    .pipe(templateCache({ module: 'app', root: 'app/' }));\n\n  var combined = eventStream.merge(appScripts, templates);\n\n  return combined;\n}\n\ngulp.task('clean', function (cb) {\n  gulpUtil.log('Delete the build folder');\n\n  return del([config.buildDir], cb);\n});\n\ngulp.task('boot-dependencies', ['clean'], function () {\n  gulpUtil.log('Get dependencies needed for boot (jQuery and images)');\n\n  var jQuery = gulp.src(config.bootjQuery);\n  var images = gulp.src(config.images, { base: config.base });\n\n  var combined = eventStream\n    .merge(jQuery, images)\n    .pipe(gulp.dest(config.buildDir));\n\n  return combined;\n});\n\ngulp.task('inject-debug', ['styles-debug', 'scripts-debug'], function () {\n  gulpUtil.log('Inject debug links and script tags into ' + config.bootFile);\n\n  var scriptsAndStyles = [].concat(getScripts(), getStyles());\n\n  return gulp\n    .src(config.bootFile)\n    .pipe(\n      inject(\n        gulp\n          .src(\n            [\n              config.debugFolder + '**/*.{js,css}',\n              '!build\\\\debug\\\\bower_components\\\\spin.js', // Exclude weird spin js path\n            ],\n            { read: false }\n          )\n          .pipe(order(scriptsAndStyles))\n      )\n    )\n    .pipe(gulp.dest(config.buildDir));\n});\n\ngulp.task('inject-release', ['styles-release', 'scripts-release'], function () {\n  gulpUtil.log('Inject release links and script tags into ' + config.bootFile);\n\n  return gulp\n    .src(config.bootFile)\n    .pipe(\n      inject(gulp.src(config.releaseFolder + '**/*.{js,css}', { read: false }))\n    )\n    .pipe(gulp.dest(config.buildDir));\n});\n\ngulp.task('scripts-debug', ['clean'], function () {\n  gulpUtil.log('Copy across all JavaScript files to build/debug');\n\n  return getScriptsAndTemplates(true).pipe(gulp.dest(config.debugFolder));\n});\n\ngulp.task('scripts-release', ['clean'], function () {\n  gulpUtil.log('Concatenate & Minify JS for release into a single file');\n\n  return getScriptsAndTemplates(false)\n    .pipe(ignore.exclude('**/*.{ts,js.map}')) // Exclude ts and js.map files - not needed in release mode\n    .pipe(concat('app.js')) // Make a single file\n    .pipe(uglify()) // Make the file titchy tiny small\n    .pipe(rev()) // Suffix a version number to it\n    .pipe(gulp.dest(config.releaseFolder)); // Write single versioned file to build/release folder\n});\n\ngulp.task('styles-debug', ['clean'], function () {\n  gulpUtil.log('Copy across all CSS files to build/debug');\n\n  return gulp\n    .src(getStyles(), { base: config.base })\n    .pipe(gulp.dest(config.debugFolder));\n});\n\ngulp.task('styles-release', ['clean'], function () {\n  gulpUtil.log('Copy across all files in config.styles to build/debug');\n\n  return gulp\n    .src(getStyles())\n    .pipe(concat('app.css')) // Make a single file\n    .pipe(minifyCss()) // Make the file titchy tiny small\n    .pipe(rev()) // Suffix a version number to it\n    .pipe(gulp.dest(config.releaseFolder + '/' + config.css)); // Write single versioned file to build/release folder\n});\n\ngulp.task('fonts-debug', ['clean'], function () {\n  gulpUtil.log('Copy across all fonts in config.fonts to debug location');\n\n  return gulp\n    .src(config.fonts, { base: config.base })\n    .pipe(gulp.dest(config.debugFolder));\n});\n\ngulp.task('fonts-release', ['clean'], function () {\n  gulpUtil.log('Copy across all fonts in config.fonts to release location');\n\n  return gulp\n    .src(config.fonts)\n    .pipe(gulp.dest(config.releaseFolder + '/fonts'));\n});\n\ngulp.task('build-debug', ['boot-dependencies', 'inject-debug', 'fonts-debug']);\n\ngulp.task('build-release', [\n  'boot-dependencies',\n  'inject-release',\n  'fonts-release',\n]);\n\n// Use the web.config to determine whether the default task should create a debug or a release build\n// If the web.config contains this: '<compilation debug=\"true\"' then we do a default build, otherwise\n// we do a release build.  It's a little hacky but generally works\nvar fs = require('fs');\nvar data = fs.readFileSync(__dirname + '/web.config', 'UTF-8');\nvar inDebug = !!data.match(/<compilation debug=\"true\"/);\n\ngulp.task('default', [inDebug ? 'build-debug' : 'build-release']);\n")),(0,i.kt)("p",null,"That's a big old lump of code. So let's go through this a task by task..."),(0,i.kt)("h3",a({},{id:"clean"}),"clean"),(0,i.kt)("p",null,"Deletes the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder so we have a clean slate to build into."),(0,i.kt)("h3",a({},{id:"boot-dependencies"}),"boot-dependencies"),(0,i.kt)("p",null,'Copy across all files that are needed to allow the page to "boot" / startup. At present this is only jQuery and images.'),(0,i.kt)("h3",a({},{id:"inject-debug-and-inject-release"}),"inject-debug and inject-release"),(0,i.kt)("p",null,"This is the magic. This picks up the launch page (",(0,i.kt)("inlineCode",{parentName:"p"},"index.html"),"), takes the JavaScript and CSS and injects the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"script")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"link")," tags into the page and writing it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder. Either the original source code or the bundled / minified equivalent will be used depending on whether it's debug or release."),(0,i.kt)("h3",a({},{id:"scripts-debug-and-scripts-release"}),"scripts-debug and scripts-release"),(0,i.kt)("p",null,"Here we collect up the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the Bower specified JavaScript files"),(0,i.kt)("li",{parentName:"ul"},"the TypeScript + associated JavaScript files"),(0,i.kt)("li",{parentName:"ul"},"and we use our template files to construct a ",(0,i.kt)("inlineCode",{parentName:"li"},"templates.js")," file to prime the Angular template cache")),(0,i.kt)("p",null,"If it's the scripts-debug task we copy all these files into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/debug")," folder. If it's the scripts-release task we also bundle, minify and strip the TypeScript out too and copy into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/release")," folder."),(0,i.kt)("h3",a({},{id:"styles-debug-and-styles-release"}),"styles-debug and styles-release"),(0,i.kt)("p",null,"Here we collect up the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the Bower specified CSS files"),(0,i.kt)("li",{parentName:"ul"},"our own app CSS")),(0,i.kt)("p",null,"If it's the styles-debug task we copy all these files into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/debug")," folder. If it's the styles-release task we also bundle and minify and copy into the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/release")," folder."),(0,i.kt)("h3",a({},{id:"fonts-debug-and-fonts-release"}),"fonts-debug and fonts-release"),(0,i.kt)("p",null,"Whether it's the debug or the release build we copy across the font-awesome assets and place them in a location which works for the associated CSS (as the CSS will depend upon font-awesome)."),(0,i.kt)("h3",a({},{id:"build-debug-build-release-and-default"}),"build-debug, build-release and default"),(0,i.kt)("p",null,'build-debug and build-release (as their name suggests) either perform a build for release or a build for debug. If you remember, the web optimization library in ASP.Net serves up the raw code ("debug" code) if the ',(0,i.kt)("inlineCode",{parentName:"p"},"compilation debug")," flag in the ",(0,i.kt)("inlineCode",{parentName:"p"},"web.config")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". If it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),' then we get the bundled and minified code ("release" code) instead. Our default task tries its best to emulate this behaviour by doing a very blunt regex against the ',(0,i.kt)("inlineCode",{parentName:"p"},"web.config"),". Simply, if it can match ",(0,i.kt)("inlineCode",{parentName:"p"},'&lt;compilation debug="true"')," then it runs the debug build. Otherwise, the release build. It could be more elegant but there's a dearth of XML readers on npm that support synchronous parsing (which you kinda need for this scenario)."),(0,i.kt)("p",null,"What I intend to do soon is switch from using the web.config to drive the gulp build to using the approach outlined ",(0,i.kt)("a",a({parentName:"p"},{href:"http://www.codecadwallader.com/2015/03/15/integrating-gulp-into-your-tfs-builds-and-web-deploy/"}),"here"),". Namely plugging the build directly into Visual Studio's build process and using the type of build there."),(0,i.kt)("p",null,"Hopefully what I've written here makes it fairly clear how to use Gulp to directly inject scripts and styles directly into your HTML. If you want to look directly at the source then check out the Proverb.Web folder in ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/johnnyreilly/proverb-offline"}),"this repo"),"."))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[78997],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=s,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(h,r(r({ref:n},d),{},{components:t})):a.createElement(h,r({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:s,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});t(67294);var a=t(3905);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const r={title:"Using Gulp in Visual Studio instead of Web Optimization",authors:"johnnyreilly",tags:["Task Runner Explorer","Visual Studio","TypeScript","javascript","Gulp"],hide_table_of_contents:!1},l=void 0,o={permalink:"/2014/11/04/using-gulp-in-visual-studio-instead-of-web-optimization",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2014-11-04-using-gulp-in-visual-studio-instead-of-web-optimization/index.md",source:"@site/blog/2014-11-04-using-gulp-in-visual-studio-instead-of-web-optimization/index.md",title:"Using Gulp in Visual Studio instead of Web Optimization",description:"Updated 17/02/2015: I've taken the approach discussed in this post a little further - you can see here",date:"2014-11-04T00:00:00.000Z",formattedDate:"November 4, 2014",tags:[{label:"Task Runner Explorer",permalink:"/tags/task-runner-explorer"},{label:"Visual Studio",permalink:"/tags/visual-studio"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"javascript",permalink:"/tags/javascript"},{label:"Gulp",permalink:"/tags/gulp"}],readingTime:15.43,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using Gulp in Visual Studio instead of Web Optimization",authors:"johnnyreilly",tags:["Task Runner Explorer","Visual Studio","TypeScript","javascript","Gulp"],hide_table_of_contents:!1},prevItem:{title:"Pretending to be someone you're not and the dark pit of despair",permalink:"/2014/11/26/Coded-UI-IE-11-and-the-runas-problem"},nextItem:{title:"Caching and Cache-Busting in AngularJS with HTTP interceptors",permalink:"/2014/10/06/caching-and-cache-busting-in-angularjs-with-http-interceptors"}},p={authorsImageUrls:[void 0]},d=[{value:"Updated 17/02/2015: I&#39;ve taken the approach discussed in this post a little further - you can see here",id:"updated-17022015-ive-taken-the-approach-discussed-in-this-post-a-little-further---you-can-see-here",level:3},{value:"Bub bye Web Optimization",id:"bub-bye-web-optimization",level:2},{value:"Installing Gulp (and Associates)",id:"installing-gulp-and-associates",level:2},{value:"Making <code>gulpfile.js</code>",id:"making-gulpfilejs",level:2},{value:"What <code>gulpfile.js</code> does",id:"what-gulpfilejs-does",level:2},{value:"Task Runner Explorer gets in on the action",id:"task-runner-explorer-gets-in-on-the-action",level:2},{value:"How do I use this in my HTML?",id:"how-do-i-use-this-in-my-html",level:2},{value:"I want to publish, how do I include my assets?",id:"i-want-to-publish-how-do-i-include-my-assets",level:2}],u={toc:d};function c(e){var{components:n}=e,r=i(e,["components"]);return(0,a.kt)("wrapper",s({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",s({},{id:"updated-17022015-ive-taken-the-approach-discussed-in-this-post-a-little-further---you-can-see-here"}),"Updated 17/02/2015: I've taken the approach discussed in this post a little further - you can see ",(0,a.kt)("a",s({parentName:"h3"},{href:"/2012/10/05/using-web-optimization-with-mvc-3"}),"here")),(0,a.kt)("p",null,"I've used a number of tools to package up JavaScript and CSS in my web apps. ",(0,a.kt)("a",s({parentName:"p"},{href:"http://getcassette.net/"}),"Andrew Davey's tremendous Cassette")," has been really useful. Also good (although less powerful/magical) has been Microsoft's very own ",(0,a.kt)("a",s({parentName:"p"},{href:"https://www.nuget.org/packages/Microsoft.AspNet.Web.Optimization/"}),"Microsoft.AspNet.Web.Optimization")," that ships with MVC."),(0,a.kt)("p",null,"I was watching the ",(0,a.kt)("a",s({parentName:"p"},{href:"http://youtu.be/NgbA2BxNweE?list=PL0M0zPgJ3HSftTAAHttA3JQU4vOjXFquF"}),"ASP.NET Community Standup from October 7th, 2014")," and learned that the ASP.Net team is not planning to migrate ",(0,a.kt)("a",s({parentName:"p"},{href:"https://www.nuget.org/packages/Microsoft.AspNet.Web.Optimization/"}),"Microsoft.AspNet.Web.Optimization")," to the next version of ASP.Net. Instead they're looking to make use of JavaScript task runners like ",(0,a.kt)("a",s({parentName:"p"},{href:"http://gruntjs.com/"}),"Grunt")," and maybe ",(0,a.kt)("a",s({parentName:"p"},{href:"http://gulpjs.com/"}),"Gulp"),". Perhaps you're even dimly aware that they've been taking steps to make these runners more of a first class citizen in Visual Studio, hence the recent release of the new and groovy ",(0,a.kt)("a",s({parentName:"p"},{href:"http://visualstudiogallery.msdn.microsoft.com/8e1b4368-4afb-467a-bc13-9650572db708"}),"Task Runner Explorer"),"."),(0,a.kt)("p",null,'Gulp has been on my radar for a while now as has Grunt. By "on my radar" what I really mean is "Hmmmm, I really need to learn this..... perhaps I could wait until the ',(0,a.kt)("a",s({parentName:"p"},{href:"http://en.wikipedia.org/wiki/Videotape_format_war"}),"Betamax vs VHS battles"),' are done? Oh never mind, here we go...".'),(0,a.kt)("p",null,"My understanding is that Grunt and Gulp essentially do the same thing (run tasks in JavaScript) but have different approaches. Grunt is more about configuration, Gulp is more about code. At present Gulp also has a performance advantage as it does less IO than Grunt - though I understand that's due to change in the future. But generally my preference is code over configuration. On that basis I decided that I was going to give Gulp first crack."),(0,a.kt)("h2",s({},{id:"bub-bye-web-optimization"}),"Bub bye Web Optimization"),(0,a.kt)("p",null,"I already had a project that used ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb"}),"Web Optimization")," to bundle JavaScript and CSS files. When debugging on my own machine Web Optimization served up the full JavaScript and CSS files. Thanks to the magic of source maps I was able to debug the TypeScript that created the JavaScript files too. Which was nice. When I deployed to production, Web Optimization minified and concatenated the JavaScript and CSS files. This meant I had a single HTTP request for JavaScript and a single HTTP request for CSS. This was also... nooice!"),(0,a.kt)("p",null,"I took a copy of my existing project and created a ",(0,a.kt)("a",s({parentName:"p"},{href:"https://github.com/johnnyreilly/Proverb-gulp"}),"new repo for it on GitHub"),". It was very simple in terms of bundling. It had a ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleConfig")," that created 2 bundles; 1 for JavaScript and 1 for CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-cs"}),'using System.Web;\nusing System.Web.Optimization;\n\nnamespace Proverb.Web\n{\n    public class BundleConfig\n    {\n        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862\n        public static void RegisterBundles(BundleCollection bundles)\n        {\n            var angularApp = new ScriptBundle("~/angularApp").Include(\n\n                // Vendor Scripts\n                "~/scripts/jquery-{version}.js",\n                "~/scripts/angular.js",\n                "~/scripts/angular-animate.js",\n                "~/scripts/angular-route.js",\n                "~/scripts/angular-sanitize.js",\n                "~/scripts/angular-ui/ui-bootstrap-tpls.js",\n\n                "~/scripts/toastr.js",\n                "~/scripts/moment.js",\n                "~/scripts/spin.js",\n                "~/scripts/underscore.js",\n\n                // Bootstrapping\n                "~/app/app.js",\n                "~/app/config.route.js",\n\n                // common Modules\n                "~/app/common/common.js",\n                "~/app/common/logger.js",\n                "~/app/common/spinner.js",\n\n                // common.bootstrap Modules\n                "~/app/common/bootstrap/bootstrap.dialog.js"\n                );\n\n            // directives\n            angularApp.IncludeDirectory("~/app/directives", "*.js", true);\n\n            // services\n            angularApp.IncludeDirectory("~/app/services", "*.js", true);\n\n            // controllers\n            angularApp.IncludeDirectory("~/app/admin", "*.js", true);\n            angularApp.IncludeDirectory("~/app/about", "*.js", true);\n            angularApp.IncludeDirectory("~/app/dashboard", "*.js", true);\n            angularApp.IncludeDirectory("~/app/layout", "*.js", true);\n            angularApp.IncludeDirectory("~/app/sayings", "*.js", true);\n            angularApp.IncludeDirectory("~/app/sages", "*.js", true);\n\n            bundles.Add(angularApp);\n\n            bundles.Add(new StyleBundle("~/Content/css").Include(\n                "~/content/ie10mobile.css",\n                "~/content/bootstrap.css",\n                "~/content/font-awesome.css",\n                "~/content/toastr.css",\n                "~/content/styles.css"\n            ));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"I set myself a task. I wanted to be able to work in ","*",(0,a.kt)("strong",{parentName:"p"},"exactly"),"*"," the way I was working now. But using Gulp instead of Web Optimization. I wanted to lose the BundleConfig above and remove Web Optimization from my application, secure in the knowledge that I had lost nothing. Could it be done? Read on!"),(0,a.kt)("h2",s({},{id:"installing-gulp-and-associates"}),"Installing Gulp (and Associates)"),(0,a.kt)("p",null,"I fired up Visual Studio and looked for an excuse to use the Task Runner Explorer. The first thing I needed was Gulp. My machine already had Node and NPM installed so I went to the command line to install Gulp globally:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ps"}),"npm install gulp -g\n")),(0,a.kt)("p",null,"Now to start to plug Gulp into my web project. It was time to make the introductions: Visual Studio meet NPM. At the root of the web project I created a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file by executing the following command and accepting all the defaults:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ps"}),"npm init\n")),(0,a.kt)("p",null,'I wanted to add Gulp as a development dependency of my project: ("Development" because I only need to run tasks at development time. My app has no dependency on Gulp at runtime - at that point it\'s just about serving up static files.)'),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-ps"}),"npm install gulp --save-dev\n")),(0,a.kt)("p",null,'This installs gulp local to the project as a development dependency. As a result we now have a "node_modules" folder sat in our root which contains our node packages. Currently, as our ',(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," reveals, this is only gulp:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'"devDependencies": {\n    "gulp": "^3.8.8"\n  }\n')),(0,a.kt)("p",null,"It's time to go to town. Let's install all the packages we're going to need to bundle and minify JavaScript and CSS:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"npm install gulp-concat gulp-uglify gulp-rev del path gulp-ignore gulp-asset-manifest gulp-minify-css --save-dev\n")),(0,a.kt)("p",null,"This installs the packages as dev dependencies (as you've probably guessed) and leaves us with a list of dev dependencies like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'"devDependencies": {\n    "del": "^0.1.3",\n    "gulp": "^3.8.8",\n    "gulp-asset-manifest": "0.0.5",\n    "gulp-concat": "^2.4.1",\n    "gulp-ignore": "^1.2.1",\n    "gulp-minify-css": "^0.3.10",\n    "gulp-rev": "^1.1.0",\n    "gulp-uglify": "^1.0.1",\n    "path": "^0.4.9"\n  }\n')),(0,a.kt)("h2",s({},{id:"making-gulpfilejs"}),"Making ",(0,a.kt)("inlineCode",{parentName:"h2"},"gulpfile.js")),(0,a.kt)("p",null,"So now I was ready. I had everything I needed to replace my ",(0,a.kt)("inlineCode",{parentName:"p"},"BundleConfig.cs"),". I created a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js")," in the root of my web project that looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"/// <vs AfterBuild='default' />\nvar gulp = require('gulp');\n\n// Include Our Plugins\nvar concat = require('gulp-concat');\nvar ignore = require('gulp-ignore');\nvar manifest = require('gulp-asset-manifest');\nvar minifyCss = require('gulp-minify-css');\nvar uglify = require('gulp-uglify');\nvar rev = require('gulp-rev');\nvar del = require('del');\nvar path = require('path');\n\nvar tsjsmapjsSuffix = '.{ts,js.map,js}';\nvar excludetsjsmap = '**/*.{ts,js.map}';\n\nvar bundleNames = { scripts: 'scripts', styles: 'styles' };\n\nvar filesAndFolders = {\n  base: '.',\n  buildBaseFolder: './build/',\n  debug: 'debug',\n  release: 'release',\n  css: 'css',\n\n  // The fonts we want Gulp to process\n  fonts: ['./fonts/*.*'],\n\n  // The scripts we want Gulp to process - adapted from BundleConfig\n  scripts: [\n    // Vendor Scripts\n    './scripts/angular.js',\n    './scripts/angular-animate.js',\n    './scripts/angular-route.js',\n    './scripts/angular-sanitize.js',\n    './scripts/angular-ui/ui-bootstrap-tpls.js',\n\n    './scripts/toastr.js',\n    './scripts/moment.js',\n    './scripts/spin.js',\n    './scripts/underscore.js',\n\n    // Bootstrapping\n    './app/app' + tsjsmapjsSuffix,\n    './app/config.route' + tsjsmapjsSuffix,\n\n    // common Modules\n    './app/common/common' + tsjsmapjsSuffix,\n    './app/common/logger' + tsjsmapjsSuffix,\n    './app/common/spinner' + tsjsmapjsSuffix,\n\n    // common.bootstrap Modules\n    './app/common/bootstrap/bootstrap.dialog' + tsjsmapjsSuffix,\n\n    // directives\n    './app/directives/**/*' + tsjsmapjsSuffix,\n\n    // services\n    './app/services/**/*' + tsjsmapjsSuffix,\n\n    // controllers\n    './app/about/**/*' + tsjsmapjsSuffix,\n    './app/admin/**/*' + tsjsmapjsSuffix,\n    './app/dashboard/**/*' + tsjsmapjsSuffix,\n    './app/layout/**/*' + tsjsmapjsSuffix,\n    './app/sages/**/*' + tsjsmapjsSuffix,\n    './app/sayings/**/*' + tsjsmapjsSuffix,\n  ],\n\n  // The styles we want Gulp to process - adapted from BundleConfig\n  styles: [\n    './content/ie10mobile.css',\n    './content/bootstrap.css',\n    './content/font-awesome.css',\n    './content/toastr.css',\n    './content/styles.css',\n  ],\n};\n\nfilesAndFolders.debugFolder =\n  filesAndFolders.buildBaseFolder + '/' + filesAndFolders.debug + '/';\nfilesAndFolders.releaseFolder =\n  filesAndFolders.buildBaseFolder + '/' + filesAndFolders.release + '/';\n\n/**\n * Create a manifest depending upon the supplied arguments\n *\n * @param {string} manifestName\n * @param {string} bundleName\n * @param {boolean} includeRelativePath\n * @param {string} pathPrepend\n */\nfunction getManifest(\n  manifestName,\n  bundleName,\n  includeRelativePath,\n  pathPrepend\n) {\n  // Determine filename (\"./build/manifest-debug.json\" or \"./build/manifest-release.json\"\n  var manifestFile =\n    filesAndFolders.buildBaseFolder + 'manifest-' + manifestName + '.json';\n\n  return manifest({\n    bundleName: bundleName,\n    includeRelativePath: includeRelativePath,\n    manifestFile: manifestFile,\n    log: true,\n    pathPrepend: pathPrepend,\n    pathSeparator: '/',\n  });\n}\n\n// Delete the build folder\ngulp.task('clean', function (cb) {\n  del([filesAndFolders.buildBaseFolder], cb);\n});\n\n// Copy across all files in filesAndFolders.scripts to build/debug\ngulp.task('scripts-debug', ['clean'], function () {\n  return gulp\n    .src(filesAndFolders.scripts, { base: filesAndFolders.base })\n    .pipe(gulp.dest(filesAndFolders.debugFolder));\n});\n\n// Create a manifest.json for the debug build - this should have lots of script files in\ngulp.task('manifest-scripts-debug', ['scripts-debug'], function () {\n  return gulp\n    .src(filesAndFolders.scripts, { base: filesAndFolders.base })\n    .pipe(ignore.exclude('**/*.{ts,js.map}')) // Exclude ts and js.map files from the manifest (as they won't become script tags)\n    .pipe(getManifest(filesAndFolders.debug, bundleNames.scripts, true));\n});\n\n// Copy across all files in filesAndFolders.styles to build/debug\ngulp.task('styles-debug', ['clean'], function () {\n  return gulp\n    .src(filesAndFolders.styles, { base: filesAndFolders.base })\n    .pipe(gulp.dest(filesAndFolders.debugFolder));\n});\n\n// Create a manifest.json for the debug build - this should have lots of style files in\ngulp.task(\n  'manifest-styles-debug',\n  ['styles-debug', 'manifest-scripts-debug'],\n  function () {\n    return (\n      gulp\n        .src(filesAndFolders.styles, { base: filesAndFolders.base })\n        //.pipe(ignore.exclude(\"**/*.{ts,js.map}\")) // Exclude ts and js.map files from the manifest (as they won't become script tags)\n        .pipe(getManifest(filesAndFolders.debug, bundleNames.styles, true))\n    );\n  }\n);\n\n// Concatenate & Minify JS for release into a single file\ngulp.task('scripts-release', ['clean'], function () {\n  return (\n    gulp\n      .src(filesAndFolders.scripts)\n      .pipe(ignore.exclude('**/*.{ts,js.map}')) // Exclude ts and js.map files - not needed in release mode\n\n      .pipe(concat('app.js')) // Make a single file - if you want to see the contents then include the line below\n      //.pipe(gulp.dest(releaseFolder))\n\n      .pipe(uglify()) // Make the file titchy tiny small\n      .pipe(rev()) // Suffix a version number to it\n      .pipe(gulp.dest(filesAndFolders.releaseFolder))\n  ); // Write single versioned file to build/release folder\n});\n\n// Create a manifest.json for the release build - this should just have a single file for scripts\ngulp.task('manifest-scripts-release', ['scripts-release'], function () {\n  return gulp\n    .src(filesAndFolders.buildBaseFolder + filesAndFolders.release + '/*.js')\n    .pipe(getManifest(filesAndFolders.release, bundleNames.scripts, false));\n});\n\n// Copy across all files in filesAndFolders.styles to build/debug\ngulp.task('styles-release', ['clean'], function () {\n  return (\n    gulp\n      .src(filesAndFolders.styles)\n      .pipe(concat('app.css')) // Make a single file - if you want to see the contents then include the line below\n      //.pipe(gulp.dest(releaseFolder))\n\n      .pipe(minifyCss()) // Make the file titchy tiny small\n      .pipe(rev()) // Suffix a version number to it\n      .pipe(\n        gulp.dest(filesAndFolders.releaseFolder + '/' + filesAndFolders.css)\n      )\n  ); // Write single versioned file to build/release folder\n});\n\n// Create a manifest.json for the debug build - this should have a single style files in\ngulp.task(\n  'manifest-styles-release',\n  ['styles-release', 'manifest-scripts-release'],\n  function () {\n    return gulp\n      .src(filesAndFolders.releaseFolder + '**/*.css')\n      .pipe(\n        getManifest(\n          filesAndFolders.release,\n          bundleNames.styles,\n          false,\n          filesAndFolders.css + '/'\n        )\n      );\n  }\n);\n\n// Copy across all fonts in filesAndFolders.fonts to both release and debug locations\ngulp.task('fonts', ['clean'], function () {\n  return gulp\n    .src(filesAndFolders.fonts, { base: filesAndFolders.base })\n    .pipe(gulp.dest(filesAndFolders.debugFolder))\n    .pipe(gulp.dest(filesAndFolders.releaseFolder));\n});\n\n// Default Task\ngulp.task('default', [\n  'scripts-debug',\n  'manifest-scripts-debug',\n  'styles-debug',\n  'manifest-styles-debug',\n  'scripts-release',\n  'manifest-scripts-release',\n  'styles-release',\n  'manifest-styles-release',\n  'fonts',\n]);\n")),(0,a.kt)("h2",s({},{id:"what-gulpfilejs-does"}),"What ",(0,a.kt)("inlineCode",{parentName:"h2"},"gulpfile.js")," does"),(0,a.kt)("p",null,"This file does a number of things each time it is run. First of all it deletes any ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder in the root of the web project so we're ready to build anew. Then it packages up files both for debug and for release mode. For debug it does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It copies the ",(0,a.kt)("inlineCode",{parentName:"li"},"ts"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"js.map")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"js")," files declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"filesAndFolders.scripts")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug")," folder preserving their original folder structure. (So, for example, ",(0,a.kt)("inlineCode",{parentName:"li"},"app/app.ts"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"app/app.js.map")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"app/app.js")," will all end up at ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug/app/app.ts"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug/app/app.js.map")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug/app/app.js")," respectively.) This is done to allow the continued debugging of the original TypeScript files when running in debug mode."),(0,a.kt)("li",{parentName:"ol"},"It copies the ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," files declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"filesAndFolders.styles")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug")," folder preserving their original folder structure. (So ",(0,a.kt)("inlineCode",{parentName:"li"},"content/bootstrap.css")," will end up at ",(0,a.kt)("inlineCode",{parentName:"li"},"build/debug/content/bootstrap.css"),".)"),(0,a.kt)("li",{parentName:"ol"},"It creates a ",(0,a.kt)("inlineCode",{parentName:"li"},"build/manifest-debug.json")," file which contains details of all the script and style files that have been packaged up:")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": [\n    "scripts/angular.js",\n    "scripts/angular-animate.js",\n    "scripts/angular-route.js",\n    "scripts/angular-sanitize.js",\n    "scripts/angular-ui/ui-bootstrap-tpls.js",\n    "scripts/toastr.js",\n    "scripts/moment.js",\n    "scripts/spin.js",\n    "scripts/underscore.js",\n    "app/app.js",\n    "app/config.route.js",\n    "app/common/common.js",\n    "app/common/logger.js",\n    "app/common/spinner.js",\n    "app/common/bootstrap/bootstrap.dialog.js",\n    "app/directives/imgPerson.js",\n    "app/directives/serverError.js",\n    "app/directives/sidebar.js",\n    "app/directives/spinner.js",\n    "app/directives/waiter.js",\n    "app/directives/widgetClose.js",\n    "app/directives/widgetHeader.js",\n    "app/directives/widgetMinimize.js",\n    "app/services/datacontext.js",\n    "app/services/repositories.js",\n    "app/services/repository.sage.js",\n    "app/services/repository.saying.js",\n    "app/about/about.js",\n    "app/admin/admin.js",\n    "app/dashboard/dashboard.js",\n    "app/layout/shell.js",\n    "app/layout/sidebar.js",\n    "app/layout/topnav.js",\n    "app/sages/sageDetail.js",\n    "app/sages/sageEdit.js",\n    "app/sages/sages.js",\n    "app/sayings/sayingEdit.js",\n    "app/sayings/sayings.js"\n  ],\n  "styles": [\n    "content/ie10mobile.css",\n    "content/bootstrap.css",\n    "content/font-awesome.css",\n    "content/toastr.css",\n    "content/styles.css"\n  ]\n}\n')),(0,a.kt)("p",null,"For release our gulpfile works with the same resources but has a different aim. Namely to minimise the the number of HTTP requests, obfuscate the code and version the files produced to prevent caching issues. To achieve those lofty aims it does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"It concatenates together all the ",(0,a.kt)("inlineCode",{parentName:"li"},"js")," files declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"filesAndFolders.scripts"),", minifies them and writes them to a single ",(0,a.kt)("inlineCode",{parentName:"li"},"build/release/app-{xxxxx}.js")," file (where ",(0,a.kt)("inlineCode",{parentName:"li"},"-{xxxxx}")," represents a version created by gulp-rev)."),(0,a.kt)("li",{parentName:"ol"},"It concatenates together all the ",(0,a.kt)("inlineCode",{parentName:"li"},"css")," files declared in ",(0,a.kt)("inlineCode",{parentName:"li"},"filesAndFolders.styles"),", minifies them and writes them to a single ",(0,a.kt)("inlineCode",{parentName:"li"},"build/release/css/app-{xxxxx}.css")," file. The file is placed in a css subfolder because of relative paths specified in the CSS file."),(0,a.kt)("li",{parentName:"ol"},"It creates a ",(0,a.kt)("inlineCode",{parentName:"li"},"build/manifest-release.json")," file which contains details of all the script and style files that have been packaged up:")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": ["app-95d1e06d.js"],\n  "styles": ["css/app-1a6256ea.css"]\n}\n')),(0,a.kt)("p",null,"As you can see, the number of files included are reduced down to 2; 1 for JavaScript and 1 for CSS."),(0,a.kt)("p",null,"Finally, for both the debug and release packages the contents of the ",(0,a.kt)("inlineCode",{parentName:"p"},"fonts")," folder is copied across wholesale, preserving the original folder structure. This is because the CSS files contain relative references that point to the font files. If I had image files which were referenced by my CSS I'd similarly need to include these in the build process."),(0,a.kt)("h2",s({},{id:"task-runner-explorer-gets-in-on-the-action"}),"Task Runner Explorer gets in on the action"),(0,a.kt)("p",null,"The eagle eyed amongst you will also have noticed a peculiar first line to our ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),"/// <vs AfterBuild='default' />\n")),(0,a.kt)("p",null,"This mysterious comment is actually how the Task Runner Explorer hooks our ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js"),' into the Visual Studio build process. Our "magic comment" ensures that on the ',(0,a.kt)("inlineCode",{parentName:"p"},"AfterBuild")," event, Task Runner Explorer runs the ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," task in our ",(0,a.kt)("inlineCode",{parentName:"p"},"gulpfile.js"),". The reason we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"AfterBuild")," event rather than the ",(0,a.kt)("inlineCode",{parentName:"p"},"BeforeBuild")," event is because our project contains TypeScript and we need the transpiled JavaScript to be created before we can usefully run our package tasks. If we were using JavaScript alone then that wouldn't be an issue and either build event would do."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(54758).Z,width:"640",height:"553"})),(0,a.kt)("h2",s({},{id:"how-do-i-use-this-in-my-html"}),"How do I use this in my HTML?"),(0,a.kt)("p",null,"Well this is magnificent - we have a gulpfile that builds our debug and release packages. The question now is, how do we use it?"),(0,a.kt)("p",null,"Web Optimization made our lives really easy. Up in my head I had a ",(0,a.kt)("inlineCode",{parentName:"p"},'@Styles.Render("~/Content/css")')," which pushed out my CSS and down at the foot of the body tag I had a ",(0,a.kt)("inlineCode",{parentName:"p"},'@Scripts.Render("~/angularApp")')," which pushed out my script tags. ",(0,a.kt)("inlineCode",{parentName:"p"},"Styles")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Scripts")," are server-side utilities. It would be very easy to write equivalent utility classes that, depending on whether we were in debug or not, read the appropriate ",(0,a.kt)("inlineCode",{parentName:"p"},"build/manifest-xxxxxx.json")," file and served up either debug or release ",(0,a.kt)("inlineCode",{parentName:"p"},"style")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," tags."),(0,a.kt)("p",null,"That would be pretty simple - and for what it's worth ","*","*","simple is ",(0,a.kt)("u",null,"good")),(0,a.kt)("p",null,"*","*",". But today I felt like a challenge. What say server side rendering had been outlawed? A draconian ruling had been passed and all you had to play with was HTML / JavaScript and a server API that served up JSON? What would you do then? (All fantasy I know... But go with me on this - it's a journey.) Or more sensibly, what if you just want to remove some of the work your app is doing server-side to bundle and minify. Just serve up static assets instead. Spend less money in Azure why not?"),(0,a.kt)("p",null,"Before I make all the changes let's review where we were. I had a single MVC view which, in terms of bundles, CSS and JavaScript pretty much looked like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n  <head>\n    \x3c!-- ... --\x3e\n    @Styles.Render("~/Content/css")\n  </head>\n  <body>\n    \x3c!-- ... --\x3e\n\n    @Scripts.Render("~/angularApp")\n    <script>\n      (function () {\n        $.getJSON(\'@Url.Content("~/Home/StartApp")\').done(function (\n          startUpData\n        ) {\n          var appConfig = $.extend({}, startUpData, {\n            appRoot: \'@Url.Content("~/")\',\n            remoteServiceRoot: \'@Url.Content("~/api/")\',\n          });\n\n          angularApp.start({\n            thirdPartyLibs: {\n              moment: window.moment,\n              toastr: window.toastr,\n              underscore: window._,\n            },\n            appConfig: appConfig,\n          });\n        });\n      })();\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"This is already more a complicated example than most peoples use cases. Essentially what's happening here is both bundles are written out as part of the HTML and then, once the scripts have loaded the Angular app is bootstrapped with some configuration loaded from the server by a good old jQuery AJAX call."),(0,a.kt)("p",null,"After reading ",(0,a.kt)("a",s({parentName:"p"},{href:"http://www.html5rocks.com/en/tutorials/speed/script-loading/"}),"an article about script loading by the magnificently funny Jake Archibald")," I felt ready. I cast my MVC view to the four winds and created myself a straight HTML file:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-html"}),"<!DOCTYPE html>\n<html>\n  <head>\n    \x3c!-- ... --\x3e\n  </head>\n  <body>\n    \x3c!-- ... --\x3e\n\n    <script src=\"Scripts/jquery-2.1.1.min.js\"><\/script>\n    <script>\n      (function () {\n        var appConfig = {};\n        var scriptsToLoad;\n\n        /**\n         * Handler which fires as each script loads\n         */\n        function onScriptLoad(event) {\n          scriptsToLoad -= 1;\n\n          // Now all the scripts are present start the app\n          if (scriptsToLoad === 0) {\n            angularApp.start({\n              thirdPartyLibs: {\n                moment: window.moment,\n                toastr: window.toastr,\n                underscore: window._,\n              },\n              appConfig: appConfig,\n            });\n          }\n        }\n\n        // Load startup data from the server\n        $.getJSON('api/Startup').done(function (startUpData) {\n          appConfig = startUpData;\n\n          // Determine the assets folder depending upon whether in debug mode or not\n          var buildFolder = appConfig.appRoot + 'build/';\n          var debugOrRelease = appConfig.inDebug ? 'debug' : 'release';\n          var manifestFile =\n            buildFolder + 'manifest-' + debugOrRelease + '.json';\n          var outputFolder = buildFolder + debugOrRelease + '/';\n\n          // Load JavaScript and CSS listed in manifest file\n          $.getJSON(manifestFile).done(function (manifest) {\n            manifest.styles.forEach(function (href) {\n              var link = document.createElement('link');\n\n              link.rel = 'stylesheet';\n              link.media = 'all';\n              link.href = outputFolder + href;\n\n              document.head.appendChild(link);\n            });\n\n            scriptsToLoad = manifest.scripts.length;\n            manifest.scripts.forEach(function (src) {\n              var script = document.createElement('script');\n\n              script.onload = onScriptLoad;\n              script.src = outputFolder + src;\n              script.async = false;\n\n              document.head.appendChild(script);\n            });\n          });\n        });\n      })();\n    <\/script>\n  </body>\n</html>\n")),(0,a.kt)("p",null,"If you very carefully compare the HTML above the MVC view that it replaces you can see the commonalities. They are doing pretty much the same thing - the only real difference is the bootstrapping API. Previously it was an MVC endpoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"/Home/StartApp"),". Now it's a Web API endpoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"api/Startup"),". Here's how it works:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A jQuery AJAX call kicks off a call to load the bootstrapping / app config data. Importantly this data includes whether the app is running in debug or not."),(0,a.kt)("li",{parentName:"ol"},"Depending on the ",(0,a.kt)("inlineCode",{parentName:"li"},"isDebug")," flag the app either loads the ",(0,a.kt)("inlineCode",{parentName:"li"},"build/manifest-debug.json")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"build/manifest-release.json")," manifest."),(0,a.kt)("li",{parentName:"ol"},"For each CSS file in the styles bundle a ",(0,a.kt)("inlineCode",{parentName:"li"},"link")," element is created and added to the page."),(0,a.kt)("li",{parentName:"ol"},"For each JavaScript file in the scripts bundle a ",(0,a.kt)("inlineCode",{parentName:"li"},"script")," element is created and added to the page.")),(0,a.kt)("p",null,"It's worth pointing out that this also has a performance edge over Web Optimization as the assets are loaded asynchronously! (Yes I know it says ",(0,a.kt)("inlineCode",{parentName:"p"},"script.async = false")," but that's not what you think it is... Go read Jake's article!)"),(0,a.kt)("p",null,"To finish off I had to make a few tweaks to my ",(0,a.kt)("inlineCode",{parentName:"p"},"web.config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Allow ASP.Net to serve up JSON files --\x3e\n    <system.webServer>\n        <staticContent>\n            <mimeMap fileExtension=".json" mimeType="application/json"/>\n        </staticContent>\n    </system.webServer>\n\n    \x3c!-- The build folder (and it\'s child folder "debug") will not be cached.\n         When people are debugging they don\'t want to cache --\x3e\n    <location path="build">\n        <system.webServer>\n            <staticContent>\n                <clientCache cacheControlMode="DisableCache"/>\n            </staticContent>\n        </system.webServer>\n    </location>\n\n    \x3c!-- The release folder will be cached for a loooooong time\n         When you\'re in Production caching is your friend --\x3e\n    <location path="build/release">\n        <system.webServer>\n            <staticContent>\n                <clientCache cacheControlMode="UseMaxAge"/>\n            </staticContent>\n        </system.webServer>\n    </location>\n')),(0,a.kt)("h2",s({},{id:"i-want-to-publish-how-do-i-include-my-assets"}),"I want to publish, how do I include my assets?"),(0,a.kt)("p",null,"It's time for some ",(0,a.kt)("inlineCode",{parentName:"p"},"csproj")," trickery. I must say I think I'll be glad to see the back of project files when ASP.Net vNext ships. This is what you need:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-xml"}),'<Target Name="AfterBuild">\n    <ItemGroup>\n      \x3c!-- what ever is in the build folder should be included in the project --\x3e\n      <Content Include="build\\**\\*.*" />\n    </ItemGroup>\n  </Target>\n')),(0,a.kt)("p",null,"What's happening here is that ","*",(0,a.kt)("em",{parentName:"p"},"after"),"*"," a build Visual Studio considers the complete contents of the build folder to part of the project. It's after the build because the folder will be deleted and reconstructed as part of the build."))}c.isMDXComponent=!0},54758:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Screenshot-2014-10-21-17.02.11-e6efce21155e122138e6ea2793f2fa06.webp"}}]);
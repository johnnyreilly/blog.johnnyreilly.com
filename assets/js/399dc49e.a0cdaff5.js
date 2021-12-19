"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[64451],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},353:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"TypeScript and RequireJS (Keep It Simple)",authors:"johnnyreilly",tags:["RequireJS","AMD","TypeScript"],hide_table_of_contents:!1},l=void 0,p={permalink:"/2014/02/27/typescript-and-requirejs-keep-it-simple",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-02-27-typescript-and-requirejs-keep-it-simple/index.md",source:"@site/blog/2014-02-27-typescript-and-requirejs-keep-it-simple/index.md",title:"TypeScript and RequireJS (Keep It Simple)",description:"I'm not the first to take a look at mixing TypeScript and RequireJS but I wanted to get it clear in my head. Also, I've always felt the best way to learn is to do. So here we go. I'm going to create a TypeScript and RequireJS demo based on John Papa's \"Keep It Simple RequireJS Demo\".",date:"2014-02-27T00:00:00.000Z",formattedDate:"February 27, 2014",tags:[{label:"RequireJS",permalink:"/tags/require-js"},{label:"AMD",permalink:"/tags/amd"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:4.065,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Caching and cache-busting with RequireJS",permalink:"/2014/03/05/caching-and-cache-busting-with-requirejs"},nextItem:{title:"WPF and Mystic Meg or Playing Futurologist",permalink:"/2014/02/12/wpf-and-mystic-meg-or-playing"}},u={authorsImageUrls:[void 0]},c=[{value:"Closing Thoughts",id:"closing-thoughts",children:[],level:2},{value:"Finally for bonus points....",id:"finally-for-bonus-points",children:[],level:2},{value:"Want the code for your very own?",id:"want-the-code-for-your-very-own",children:[],level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'm not the first to take a look at mixing TypeScript and RequireJS but I wanted to get it clear in my head. Also, I've always felt the best way to learn is to do. So here we go. I'm going to create a TypeScript and RequireJS demo based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/kis-requirejs-demo/"},'John Papa\'s "Keep It Simple RequireJS Demo"'),"."),(0,o.kt)("p",null,"So let's fire up Visual Studio 2013 and create a new ASP.NET Web Application called \u201cRequireJSandTypeScript\u201d (the empty project template is fine)."),(0,o.kt)("p",null,"Add a new HTML file to the root called \u201cindex.html\u201d and base it on \u201cindex3.html\u201d from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/index3.html"},"John Papa\u2019s demo"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <title>TypeScript with RequireJS</title>\n  </head>\n  <body>\n    <div>\n      <h1>TypeScript with RequireJS loading jQuery in Visual Studio land</h1>\n    </div>\n\n    \x3c!-- use jquery to load this message--\x3e\n    <p id="message"></p>\n\n    \x3c!-- Shortcut to load require and then load main--\x3e\n    <script\n      src="/scripts/require.js"\n      data-main="/scripts/main"\n      type="text/javascript"\n    ><\/script>\n  </body>\n</html>\n')),(0,o.kt)("p",null,"John\u2019s demo depends on jQuery and RequireJS (not too surprisingly) so let\u2019s fire up Nuget and get them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},"Install-Package RequireJS\nInstall-Package jQuery\n")),(0,o.kt)("p",null,"Whilst we\u2019re at it, let\u2019s get the Definitely Typed typings as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},"Install-Package jQuery.TypeScript.DefinitelyTyped\n")),(0,o.kt)("p",null,"To my surprise this popped up the following dialog:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://2.bp.blogspot.com/-rzhPvMSWRZ4/Uw9uJaGRz2I/AAAAAAAAAhI/sa6ZS1-fuPs/s320/TypeScriptConfigured.png",alt:null})),(0,o.kt)("p",null,'By "Your project has been configured to support TypeScript." it means that the csproj file has had the following entries added:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<Project ToolsVersion="12.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">\n  <Import Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props" Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.Default.props\')" />\n  ...\n  <PropertyGroup>\n    ...\n    <TypeScriptToolsVersion>0.9</TypeScriptToolsVersion>\n  </PropertyGroup>\n  ...\n  <Import Project="$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets" Condition="Exists(\'$(MSBuildExtensionsPath32)\\Microsoft\\VisualStudio\\v$(VisualStudioVersion)\\TypeScript\\Microsoft.TypeScript.targets\')" />\n  ...\n</Project>\n')),(0,o.kt)("p",null,"I\u2019m not sure when this tweak to the Visual Studio tooling was added was added. Perhaps it's part of the ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/typescript/archive/2014/02/25/announcing-typescript-1-0rc.aspx"},"TypeScript 1.0 RC release"),"; either way it\u2019s pretty nice. Let's press on."),(0,o.kt)("p",null,"Whilst we\u2019re at it let\u2019s make sure that we\u2019re compiling to AMD (to be RequireJS friendly) by adding in the following csproj tweaks just before the Microsoft.TypeScript.targets Project import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<PropertyGroup Condition=\"'$(Configuration)' == 'Debug'\">\n    <TypeScriptModuleKind>amd</TypeScriptModuleKind>\n  </PropertyGroup>\n  <PropertyGroup Condition=\"'$(Configuration)' == 'Release'\">\n    <TypeScriptModuleKind>amd</TypeScriptModuleKind>\n  </PropertyGroup>\n")),(0,o.kt)("p",null,"Where was I? Oh yes, typings. So let\u2019s get the RequireJS typings too:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ps"},"Install-Package requirejs.TypeScript.DefinitelyTyped\n")),(0,o.kt)("p",null,"Right \u2013 looking at index.html we can see from the data-main tag that the first file loaded by RequireJS, our bootstrapper if you will, is main.js. So let\u2019s add ourselves a main.ts based on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/main.js"},"John's example")," (which will in turn generate a main.js):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"(function () {\n  requirejs.config({\n    baseUrl: 'scripts',\n    paths: {\n      jquery: 'jquery-2.1.0',\n    },\n  });\n\n  require(['alerter'], (alerter) => {\n    alerter.showMessage();\n  });\n})();\n")),(0,o.kt)("p",null,"main.ts depends upon ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/alerter.js"},"alerter")," so let\u2019s add ourselves an alerter.ts as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"define('alerter', ['jquery', 'dataservice'], function ($, dataservice) {\n  var name = 'John',\n    showMessage = function () {\n      var msg = dataservice.getMessage();\n\n      $('#message').text(msg + ', ' + name);\n    };\n\n  return {\n    showMessage: showMessage,\n  };\n});\n")),(0,o.kt)("p",null,"And a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnpapa/kis-requirejs-demo/blob/master/ModularDemo/Scripts3/dataservice.js"},"dataservice.ts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"define('dataservice', [], function () {\n  var msg = 'Welcome to Code Camp',\n    getMessage = function () {\n      return msg;\n    };\n\n  return {\n    getMessage: getMessage,\n  };\n});\n")),(0,o.kt)("p",null,"That all compiles fine. But we\u2019re missing a trick. We\u2019re supposed to be using TypeScripts AMD support so let\u2019s change the code to do just that. First dataservice.ts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"var msg = 'Welcome to Code Camp';\n\nexport function getMessage() {\n  return msg;\n}\n")),(0,o.kt)("p",null,"Then alerter.ts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import $ = require('jquery');\nimport dataservice = require('dataservice');\n\nvar name = 'John';\n\nexport function showMessage() {\n  var msg = dataservice.getMessage();\n\n  $('#message').text(msg + ', ' + name);\n}\n")),(0,o.kt)("p",null,"I know both of the above look slightly different but if you look close you'll see it's really only boilerplate changes. The actual application code is unaffected. Finally, main.ts remains as it is and that's us done; we have ourselves a working demo... Yay!"),(0,o.kt)("p",null,"Thanks to John Papa for creating such a simple demo I could use as the basis for my own demo."),(0,o.kt)("h2",{id:"closing-thoughts"},"Closing Thoughts"),(0,o.kt)("p",null,"Unfortunately there is no typing on the alerter reference within main.ts. To my knowledge there is no way to implicitly import the typings here \u2013 the only thing you can do is specify them manually. (By the way, if I'm wrong about this then please do set me straight!) That said, this is not so bad really since this main.ts file is essentially just a bootstrapper that kicks things off. All the other files contain the real application code and they have have typings a-go-go. So we're happy."),(0,o.kt)("h2",{id:"finally-for-bonus-points"},"Finally for bonus points...."),(0,o.kt)("p",null,"I\u2019ve included the js and js.map files in the project file as they don't seem to be added into the project by Visual Studio when the TS file is created or when it is compiled for the first time. I've also ensured that these files are dependent upon the typescript files they were generated from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<TypeScriptCompile Include="Scripts\\alerter.ts" />\n    <Content Include="Scripts\\alerter.js">\n        <DependentUpon>alerter.ts</DependentUpon>\n    </Content>\n    <Content Include="Scripts\\alerter.js.map">\n        <DependentUpon>alerter.ts</DependentUpon>\n    </Content>\n    <TypeScriptCompile Include="Scripts\\dataservice.ts" />\n    <Content Include="Scripts\\dataservice.js">\n        <DependentUpon>dataservice.ts</DependentUpon>\n    </Content>\n    <Content Include="Scripts\\dataservice.js.map">\n        <DependentUpon>dataservice.ts</DependentUpon>\n    </Content>\n    <TypeScriptCompile Include="Scripts\\main.ts" />\n    <Content Include="Scripts\\main.js">\n        <DependentUpon>main.ts</DependentUpon>\n    </Content>\n    <Content Include="Scripts\\main.js.map">\n        <DependentUpon>main.ts</DependentUpon>\n    </Content>\n')),(0,o.kt)("h2",{id:"want-the-code-for-your-very-own"},"Want the code for your very own?"),(0,o.kt)("p",null,"Well you can grab it from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/RequireJSandTypeScript"},"GitHub"),"."))}m.isMDXComponent=!0}}]);
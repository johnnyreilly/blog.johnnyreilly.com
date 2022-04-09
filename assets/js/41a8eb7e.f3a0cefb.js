"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[93313],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},64524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",source:"@site/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",title:"ESLint your C# in VS Code with Roslyn Analyzers",description:"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more.",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"Roslyn Analyzers",permalink:"/tags/roslyn-analyzers"},{label:"C#",permalink:"/tags/c"},{label:"VS Code",permalink:"/tags/vs-code"},{label:"Lint",permalink:"/tags/lint"},{label:"ESLint",permalink:"/tags/es-lint"}],readingTime:10.335,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Azure DevOps: consume a private artifact feed",permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed"}},c={image:n(11831).Z,authorsImageUrls:[void 0]},d=[{value:"Linting and C#",id:"linting-and-c",level:2},{value:"Roslyn Analyzers",id:"roslyn-analyzers",level:2},{value:"&quot;Analyse <code>this</code>&quot;",id:"analyse-this",level:2},{value:"Now fail my build!",id:"now-fail-my-build",level:2},{value:"Categories",id:"categories",level:2},{value:"Opt out of rules",id:"opt-out-of-rules",level:2},{value:"Dial up information to warning",id:"dial-up-information-to-warning",level:2},{value:"Deactivate linting partially",id:"deactivate-linting-partially",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function g(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;ESLint your C# in VS Code with Roslyn Analyzers&quot; with the C# and VS Code logos`",src:n(11831).Z,width:"1600",height:"900"})),(0,o.kt)("h2",{id:"linting-and-c"},"Linting and C#"),(0,o.kt)("p",null,"JavaScript and TypeScript benefit from a tremendous tooling ecosystem which allows us to simply format and lint our codebases as we're editing. Similar tooling exists for C#. ",(0,o.kt)("a",{parentName:"p",href:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"},"Previously I wrote about using ",(0,o.kt)("inlineCode",{parentName:"a"},"dotnet-format")," to have a Prettier-like experience for formatting our C#"),". If that last post focussed on formatting C#; looking through the lens of ",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", this post focusses on linting; looking through the lens of ",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),"."),(0,o.kt)("h2",{id:"roslyn-analyzers"},"Roslyn Analyzers"),(0,o.kt)("p",null,"There's often overlap between linting and formatting tooling; and so it goes with C# as well. Linting and formatting in the .NET space make use of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn-analyzers"},"Roslyn Analyzers"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Roslyn analyzers analyze your code for style, quality and maintainability, design and other issues. The documentation for Roslyn Analyzers can be found at docs.microsoft.com/dotnet/fundamentals/code-analysis/overview.")),(0,o.kt)("p",null,"To learn more about them, it's worth reading ",(0,o.kt)("a",{parentName:"p",href:"https://endjin.com/blog/2022/01/raising-coding-standard-dotnet-analyzers"},"the excellent piece on the topic")," by ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/idg10"},"Ian Griffiths"),"."),(0,o.kt)("h2",{id:"analyse-this"},'"Analyse ',(0,o.kt)("inlineCode",{parentName:"h2"},"this"),'"'),(0,o.kt)("p",null,"In order that we can see what the linting experience is like in VS Code, we're going to need a project to work on. We have the .NET 6 SDK installed, so we'll create ourselves a project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new webapi -o AnalyseThis\n")),(0,o.kt)("p",null,"We have the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C# extension")," installed already, but we're getting no feedback on the code. Maybe it's already beautiful?"),(0,o.kt)("p",null,"Or maybe not. We're going to need an ",(0,o.kt)("inlineCode",{parentName:"p"},".editorconfig")," file to control all the code style settings. You can create this directly using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet")," CLI like so;"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new editorconfig\n")),(0,o.kt)("p",null,"Once this runs, it creates a file with all of the settings in with their default values. Alongside that, we need to wake VS Code up to our brave new world by setting the following in our ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "omnisharp.enableRoslynAnalyzers": true,\n  "omnisharp.enableEditorConfigSupport": true\n}\n')),(0,o.kt)("p",null,"Or alternatively, use the GUI in VS Code to set these settings directly:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the VS Code settings screen",src:n(35525).Z,width:"1908",height:"769"})),(0,o.kt)("p",null,"It's then a good idea to turn OmniSharp off and on again, so it picks up these changes:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the VS Code &quot;restart OmniSharp&quot;",src:n(52).Z,width:"1203",height:"126"})),(0,o.kt)("p",null,"Then, excitingly, we start to see code analysis, or linting, messages in the problems pane of VS Code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:n(61891).Z,width:"2422",height:"552"})),(0,o.kt)("p",null,"It's possible to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet-format")," command to surface this information:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet format style -v detailed --severity info --verify-no-changes\n  The dotnet runtime version is '6.0.2'.\n  Formatting code files in workspace '/workspaces/AnalyseThis.csproj'.\n    Determining projects to restore...\n  All projects are up-to-date for restore.\n  Project AnalyseThis is using configuration from '/workspaces/.editorconfig'.\n  Project AnalyseThis is using configuration from '/workspaces/obj/Debug/net6.0/AnalyseThis.GeneratedMSBuildEditorConfig.editorconfig'.\n  Project AnalyseThis is using configuration from '/usr/share/dotnet/sdk/6.0.200/Sdks/Microsoft.NET.Sdk/analyzers/build/config/analysislevel_6_default.editorconfig'.\n  Running 45 analyzers on AnalyseThis.\n/workspaces/Controllers/WeatherForecastController.cs(14,57): info IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis.csproj]\n  Formatted code file '/workspaces/Controllers/WeatherForecastController.cs'.\n  Formatted 1 of 6 files.\n  Format complete in 7993ms.\n")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read")," message above."),(0,o.kt)("h2",{id:"now-fail-my-build"},"Now fail my build!"),(0,o.kt)("p",null,"This is all very exciting - we've a world of extra linting at our fingertips! But what's a touch disappointing, is that the above information isn't surfaced in my build. What if as a team we commit to a particular code style? If I can't enforce that in the build, it's likely not going to happen."),(0,o.kt)("p",null,"So what do I do? Well, the information is out there on how to do this, but it's easy to miss. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview#enable-on-build"},"You can find the details here"),". We update our ",(0,o.kt)("inlineCode",{parentName:"p"},"AnalyseThis.csproj")," to include an ",(0,o.kt)("inlineCode",{parentName:"p"},"EnforceCodeStyleInBuild")," setting like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n\n    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>\n  </PropertyGroup>\n")),(0,o.kt)("p",null,"We're going to replace our exhaustive ",(0,o.kt)("inlineCode",{parentName:"p"},".editorconfig")," file with a much simpler one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = warning\n")),(0,o.kt)("p",null,"Do you see what we did here? We told our build to treat ",(0,o.kt)("inlineCode",{parentName:"p"},"Style")," diagnostics (lints) as warnings. Once OmniSharp picks this up, more linting messages start to appear in the problems pane of VS Code:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of more linting messages",src:n(36306).Z,width:"2261",height:"517"})),(0,o.kt)("p",null,"And what's more, if we attempt to build, guess what?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    6 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:06.53\n")),(0,o.kt)("p",null,"That's right! The same messages from the problems pane are now surfaced in our build as warnings. And we can kick it up a notch too; let's make them errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build errors)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n")),(0,o.kt)("p",null,"Once OmniSharp catches up we see our warnings transform into errors:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of a more linting messages",src:n(53953).Z,width:"2264",height:"510"})),(0,o.kt)("p",null,"And if we build..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n\nBuild FAILED.\n\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    0 Warning(s)\n    6 Error(s)\n\nTime Elapsed 00:00:04.22\n")),(0,o.kt)("p",null,"Yes! Our style diagnostics are now failing the build. This is terrific!"),(0,o.kt)("h2",{id:"categories"},"Categories"),(0,o.kt)("p",null,"It's worth pausing a second and considering the category upgrade we did here:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"dotnet_analyzer_diagnostic.category-Style.severity = error\n")),(0,o.kt)("p",null,"There's a number of different categories that encapsulate groups of rules, ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/categories"},"they're documented here"),". Taken from there you can see the wealth of different categories that exist:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Category"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"EditorConfig value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Design rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Design rules support adherence to the .NET Framework Design Guidelines."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Design.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Documentation rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Documentation rules support writing well-documented libraries through the correct use of XML documentation comments for externally visible APIs."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Documentation.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Globalization rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Globalization rules support world-ready libraries and applications."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Globalization.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Portability and interoperability rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Portability rules support portability across different platforms. Interoperability rules support interaction with COM clients."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Interoperability.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Maintainability rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Maintainability rules support library and application maintenance."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Maintainability.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Naming rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Naming rules support adherence to the naming conventions of the .NET design guidelines."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Naming.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Performance rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Performance rules support high-performance libraries and applications."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Performance.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"SingleFile rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Single-file rules support single-file applications."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-SingleFile.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reliability rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Reliability rules support library and application reliability, such as correct memory and thread usage."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Reliability.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Security rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Security rules support safer libraries and applications. These rules help prevent security flaws in your program."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Security.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Style rules"),(0,o.kt)("td",{parentName:"tr",align:null},'Style rules support consistent code style in your codebase. These rules start with the "IDE" prefix.'),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Style.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Usage rules"),(0,o.kt)("td",{parentName:"tr",align:null},"Usage rules support proper usage of .NET."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-Usage.severity"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},'You can use this EditorConfig value to enable the following rules: IDE0051, IDE0064, IDE0076. While these rules start with "IDE", they are not technically part of the ',(0,o.kt)("inlineCode",{parentName:"td"},"Style")," category."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"dotnet_analyzer_diagnostic.category-CodeQuality.severity"))))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IDE0052")," information we saw when we used ",(0,o.kt)("inlineCode",{parentName:"p"},"dotnet format")," earlier is technically part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeQuality")," category. If we wanted to, we we could dial that up that category to an error like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Default severity for analyzer diagnostics with category 'CodeQuality' (escalated to build errors)\ndotnet_analyzer_diagnostic.category-CodeQuality.severity = error\n")),(0,o.kt)("h2",{id:"opt-out-of-rules"},"Opt out of rules"),(0,o.kt)("p",null,"As it turns out, I disagree with the complaints I'm getting on the codebase right now, so I'd like to dial those down to ignore. To do that globally, you simply put configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},".editorconfig")," to reflect that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n")),(0,o.kt)("p",null,"What we're doing here is saying \"upgrade all ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/style-rules/"},"style rules")," to be errors, but ",(0,o.kt)("inlineCode",{parentName:"p"},"IDE0008"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"IDE0058")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"IDE0160")," (which are style rules) - ignore those; don't tell me about them\"."),(0,o.kt)("p",null,"Now I'm not going to be bothered by those errors in future. Great."),(0,o.kt)("h2",{id:"dial-up-information-to-warning"},"Dial up information to warning"),(0,o.kt)("p",null,"If we look again at our problems pane in VS Code, we can see there's an entry there. It's not an error, it's not a warning. It's information:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:n(61891).Z,width:"2422",height:"552"})),(0,o.kt)("p",null,"Let's say we want to take that and dial it up to be a warning, such that it surfaces in the build too. We can with a simple addition to our ",(0,o.kt)("inlineCode",{parentName:"p"},".editorconfig"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n\n# Roslyn analzer surfaces this as information - we'll dial it up to a warning\ndotnet_diagnostic.IDE0052.severity = warning\n")),(0,o.kt)("p",null,"Once OmniSharp notices:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of our information now a warning",src:n(48621).Z,width:"2276",height:"157"})),(0,o.kt)("p",null,"And if we run the build, there it is!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    1 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:02.21\n")),(0,o.kt)("h2",{id:"deactivate-linting-partially"},"Deactivate linting partially"),(0,o.kt)("p",null,"Let's say we want to ignore that one warning. We'd like the equivalent functionality to ",(0,o.kt)("inlineCode",{parentName:"p"},"// eslint-disable-next-line"),". That doesn't exist alas. However, what does is the equivalent to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable */\n\nalert('foo');\n\n/* eslint-enable */\n")),(0,o.kt)("p",null,"In our case what we'd do is this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore\n")),(0,o.kt)("p",null,"Or to be more specific:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable IDE0052\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore IDE0052\n")),(0,o.kt)("p",null,"And now we can opt out of that rule in this specific place - whilst maintaining it more generally."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"There's powerful linting tools in C#, hopefully this guide has made it easier for you to surface them, control them and apply them both to VS Code and to your build."),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/JoeyRobichaud"},"Joey Robichaud"),", ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/timheuer"},"Tim Heuer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/YoussefV1313"},"Youssef Victor")," for some excellent pointers that fed into the writing of this post. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn/issues/60620"},"You can see the help they provided here"),"."))}g.isMDXComponent=!0},53953:function(e,t,n){t.Z=n.p+"assets/images/screenshot-extra-problems-as-errors-f73e86a437f07df467d3892f727ad32a.png"},36306:function(e,t,n){t.Z=n.p+"assets/images/screenshot-extra-problems-52c2abbd8d957754387718e393f79079.png"},48621:function(e,t,n){t.Z=n.p+"assets/images/screenshot-information-as-warning-dd948769ccf7c9484f68121f5b39a88c.png"},61891:function(e,t,n){t.Z=n.p+"assets/images/screenshot-initial-problems-6efa2f09bb868314c95251cef0e5ae87.png"},52:function(e,t,n){t.Z=n.p+"assets/images/screenshot-vs-code-restart-omnisharp-2bf295f57937ee3c10c0e3023c0aff5d.png"},35525:function(e,t,n){t.Z=n.p+"assets/images/screenshot-vs-code-settings-enable-4a9d64c0b122987d3f3fe689de29c8f7.png"},11831:function(e,t,n){t.Z=n.p+"assets/images/title-image-768f62affdb4aefd256d9606b98833dc.png"}}]);
"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[50745],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var s=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,r=function(e,n){if(null==e)return{};var t,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=s.createContext({}),c=function(e){var n=s.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return s.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,g=d["".concat(l,".").concat(u)]||d[u]||h[u]||a;return t?s.createElement(g,o(o({ref:n},p),{},{components:t})):s.createElement(g,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4188:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var s=t(83117),r=t(80102),a=(t(67294),t(3905)),o=["components"],i={title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,c={permalink:"/2022/04/06/eslint-your-csharp-in-vs-code-with-roslyn-analyzers",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",source:"@site/blog/2022-04-06-eslint-your-csharp-in-vs-code-with-roslyn-analyzers/index.md",title:"ESLint your C# in VS Code with Roslyn Analyzers",description:"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more.",date:"2022-04-06T00:00:00.000Z",formattedDate:"April 6, 2022",tags:[{label:"Roslyn Analyzers",permalink:"/tags/roslyn-analyzers"},{label:"C#",permalink:"/tags/c"},{label:"VS Code",permalink:"/tags/vs-code"},{label:"Lint",permalink:"/tags/lint"},{label:"ESLint",permalink:"/tags/es-lint"}],readingTime:7.305,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ESLint your C# in VS Code with Roslyn Analyzers",authors:"johnnyreilly",tags:["Roslyn Analyzers","C#","VS Code","Lint","ESLint"],image:"./title-image.png",hide_table_of_contents:!1},nextItem:{title:"Azure DevOps: consume a private artifact feed",permalink:"/2022/03/30/azure-devops-consume-private-nuget-artifact-feed"}},p={image:t(11831).Z,authorsImageUrls:[void 0]},h=[{value:"Linting and C#",id:"linting-and-c",level:2},{value:"Roslyn Analyzers",id:"roslyn-analyzers",level:2},{value:"&quot;Analyse <code>this</code>&quot;",id:"analyse-this",level:2},{value:"Now fail my build!",id:"now-fail-my-build",level:2},{value:"Opt out of rules",id:"opt-out-of-rules",level:2},{value:"Dial up information to warning",id:"dial-up-information-to-warning",level:2},{value:"Deactivate linting partially",id:"deactivate-linting-partially",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:h};function u(e){var n=e.components,i=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,s.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ESLint provides a great linting experience for TypeScript and JavaScript in VS Code. The suggestions, fixes and ignore options make creating clean code a joy. A similar experience is available for C# in VS Code through Roslyn Analyzers - this post tells us more."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;ESLint your C# in VS Code with Roslyn Analyzers&quot; with the C# and VS Code logos`",src:t(11831).Z,width:"1600",height:"900"})),(0,a.kt)("h2",{id:"linting-and-c"},"Linting and C#"),(0,a.kt)("p",null,"JavaScript and TypeScript benefit from a tremendous tooling ecosystem which allows us to simply format and lint our codebases as we're editing. Similar tooling exists for C#. ",(0,a.kt)("a",{parentName:"p",href:"/2020/12/22/prettier-your-csharp-with-dotnet-format-and-lint-staged"},"Previously I wrote about using ",(0,a.kt)("inlineCode",{parentName:"a"},"dotnet-format")," to have a Prettier-like experience for formatting our C#"),". If that last post focussed on formatting C#; looking through the lens of ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),", this post focusses on linting; looking through the lens of ",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint"),"."),(0,a.kt)("h2",{id:"roslyn-analyzers"},"Roslyn Analyzers"),(0,a.kt)("p",null,"There's often overlap between linting and formatting tooling; and so it goes with C# as well. Linting and formatting in the .NET space make use of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dotnet/roslyn-analyzers"},"Roslyn Analyzers"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Roslyn analyzers analyze your code for style, quality and maintainability, design and other issues. The documentation for Roslyn Analyzers can be found at docs.microsoft.com/dotnet/fundamentals/code-analysis/overview.")),(0,a.kt)("p",null,"To learn more about them, it's worth reading ",(0,a.kt)("a",{parentName:"p",href:"https://endjin.com/blog/2022/01/raising-coding-standard-dotnet-analyzers"},"the excellent piece on the topic")," by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/idg10"},"Ian Griffiths"),"."),(0,a.kt)("h2",{id:"analyse-this"},'"Analyse ',(0,a.kt)("inlineCode",{parentName:"h2"},"this"),'"'),(0,a.kt)("p",null,"In order that we can see what the linting experience is like in VS Code, we're going to need a project to work on. We have the .NET 6 SDK installed, so we'll create ourselves a project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet new webapi -o AnalyseThis\n")),(0,a.kt)("p",null,"We have the ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp"},"C# extension")," installed already, but we're getting no feedback on the code. Maybe it's already beautiful?"),(0,a.kt)("p",null,"Or maybe not. We just need to set the following in our ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "omnisharp.enableRoslynAnalyzers": true,\n  "omnisharp.enableEditorConfigSupport": true\n}\n')),(0,a.kt)("p",null,"Or alternatively, use the GUI in VS Code to set these settings directly:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the VS Code settings screen",src:t(35525).Z,width:"1908",height:"769"})),(0,a.kt)("p",null,"It's then a good idea to turn OmniSharp off and on again, so it picks up these changes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the VS Code &quot;restart OmniSharp&quot;",src:t(52).Z,width:"1203",height:"126"})),(0,a.kt)("p",null,"Then, excitingly, we start to see code analysis, or linting, messages in the problems pane of VS Code:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:t(61891).Z,width:"2422",height:"552"})),(0,a.kt)("h2",{id:"now-fail-my-build"},"Now fail my build!"),(0,a.kt)("p",null,"This is all very exciting - we've a world of extra linting at our fingertips! But what's a touch disappointing, is that the above information isn't surfaced in my build. What if as a team we commit to a particular code style? If I can't enforce that in the build, it's likely not going to happen."),(0,a.kt)("p",null,"So what do I do? Well, the information is out there on how to do this, but it's easy to miss. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/overview#enable-on-build"},"You can find the details here"),". We update our ",(0,a.kt)("inlineCode",{parentName:"p"},"AnalyseThis.csproj")," to include an ",(0,a.kt)("inlineCode",{parentName:"p"},"EnforceCodeStyleInBuild")," setting like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <PropertyGroup>\n    <TargetFramework>net6.0</TargetFramework>\n    <Nullable>enable</Nullable>\n    <ImplicitUsings>enable</ImplicitUsings>\n\n    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>\n  </PropertyGroup>\n")),(0,a.kt)("p",null,"We create ourselves an ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," file in the root of our project with this contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = warning\n")),(0,a.kt)("p",null,'Do you see what we did here? We told our build to treat "style" diagnostics (lints) as warnings. Once OmniSharp picks this up, more linting messages start to appear in the problems pane of VS Code:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of more linting messages",src:t(36306).Z,width:"2261",height:"517"})),(0,a.kt)("p",null,"And what's more, if we attempt to build, guess what?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): warning IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): warning IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): warning IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    6 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:06.53\n")),(0,a.kt)("p",null,"That's right! The same messages from the problems pane are now surfaced in our build as warnings. And we can kick it up a notch too; let's make them errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build errors)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n")),(0,a.kt)("p",null,"Once OmniSharp catches up we see our warnings transform into errors:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of a more linting messages",src:t(53953).Z,width:"2264",height:"510"})),(0,a.kt)("p",null,"And if we build..."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n\nBuild FAILED.\n\n/workspaces/AnalyseThis/WeatherForecast.cs(1,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(3,1): error IDE0160: Convert to block scoped namespace [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(1,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(10,1): error IDE0008: Use explicit type instead of 'var' [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(15,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n/workspaces/AnalyseThis/Program.cs(16,5): error IDE0058: Expression value is never used [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    0 Warning(s)\n    6 Error(s)\n\nTime Elapsed 00:00:04.22\n")),(0,a.kt)("p",null,"Yes! Our style diagnostics are now failing the build. This is terrific!"),(0,a.kt)("h2",{id:"opt-out-of-rules"},"Opt out of rules"),(0,a.kt)("p",null,"As it turns out, I disagree with the complaints I'm getting on the codebase right now, so I'd like to dial those down to ignore. To do that globally, you simply put configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," to reflect that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n")),(0,a.kt)("p",null,"Now I'm not going to be bothered by those errors in future. Great."),(0,a.kt)("h2",{id:"dial-up-information-to-warning"},"Dial up information to warning"),(0,a.kt)("p",null,"If we look again at our problems pane in VS Code, we can see there's an entry there. It's not an error, it's not a warning. It's information:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of a first linting message and the code to which it applies",src:t(61891).Z,width:"2422",height:"552"})),(0,a.kt)("p",null,"Let's say we want to take that and dial it up to be a warning, such that it surfaces in the build too. We can with a simple addition to our ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ini"},"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n[*.cs]\n# Default severity for analyzer diagnostics with category 'Style' (escalated to build warnings)\ndotnet_analyzer_diagnostic.category-Style.severity = error\n\ndotnet_diagnostic.IDE0008.severity = none\ndotnet_diagnostic.IDE0058.severity = none\ndotnet_diagnostic.IDE0160.severity = none\n\n# Roslyn analzer surfaces this as information - we'll dial it up to a warning\ndotnet_diagnostic.IDE0052.severity = warning\n")),(0,a.kt)("p",null,"Once OmniSharp notices:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of our information now a warning",src:t(48621).Z,width:"2276",height:"157"})),(0,a.kt)("p",null,"And if we run the build, there it is!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dotnet build\nMicrosoft (R) Build Engine version 17.1.0+ae57d105c for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n  AnalyseThis -> /workspaces/AnalyseThis/bin/Debug/net6.0/AnalyseThis.dll\n\nBuild succeeded.\n\n/workspaces/AnalyseThis/Controllers/WeatherForecastController.cs(14,57): warning IDE0052: Private member 'WeatherForecastController._logger' can be removed as the value assigned to it is never read [/workspaces/AnalyseThis/AnalyseThis.csproj]\n    1 Warning(s)\n    0 Error(s)\n\nTime Elapsed 00:00:02.21\n")),(0,a.kt)("h2",{id:"deactivate-linting-partially"},"Deactivate linting partially"),(0,a.kt)("p",null,"Let's say we want to ignore that one warning. We'd like the equivalent functionality to ",(0,a.kt)("inlineCode",{parentName:"p"},"// eslint-disable-next-line"),". That does't exist alas. However, what does is the equivalent to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/* eslint-disable */\n\nalert('foo');\n\n/* eslint-enable */\n")),(0,a.kt)("p",null,"In our case what we'd do is this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore\n")),(0,a.kt)("p",null,"Or to be more specific:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"#pragma warning disable IDE0052\n    private readonly ILogger<WeatherForecastController> _logger;\n#pragma warning restore IDE0052\n")),(0,a.kt)("p",null,"And now we can opt out of that rule in this specific place - whilst maintaining it more generally."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"There's powerful linting tools in C#, hopefully this guide has made it easier for you to surface them, control them and apply them both to VS Code and to your build."))}u.isMDXComponent=!0},53953:function(e,n,t){n.Z=t.p+"assets/images/screenshot-extra-problems-as-errors-f73e86a437f07df467d3892f727ad32a.png"},36306:function(e,n,t){n.Z=t.p+"assets/images/screenshot-extra-problems-52c2abbd8d957754387718e393f79079.png"},48621:function(e,n,t){n.Z=t.p+"assets/images/screenshot-information-as-warning-dd948769ccf7c9484f68121f5b39a88c.png"},61891:function(e,n,t){n.Z=t.p+"assets/images/screenshot-initial-problems-6efa2f09bb868314c95251cef0e5ae87.png"},52:function(e,n,t){n.Z=t.p+"assets/images/screenshot-vs-code-restart-omnisharp-2bf295f57937ee3c10c0e3023c0aff5d.png"},35525:function(e,n,t){n.Z=t.p+"assets/images/screenshot-vs-code-settings-enable-4a9d64c0b122987d3f3fe689de29c8f7.png"},11831:function(e,n,t){n.Z=t.p+"assets/images/title-image-768f62affdb4aefd256d9606b98833dc.png"}}]);
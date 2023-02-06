"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[88468],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),c=r,u=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const o={slug:"prettier-your-csharp-with-dotnet-format-and-lint-staged",title:"dotnet-format: Prettier your C# with lint-staged & husky",authors:"johnnyreilly",image:"./title-image.png",tags:["Prettier"],hide_table_of_contents:!1},l=void 0,s={permalink:"/prettier-your-csharp-with-dotnet-format-and-lint-staged",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged/index.md",source:"@site/blog/2020-12-22-prettier-your-csharp-with-dotnet-format-and-lint-staged/index.md",title:"dotnet-format: Prettier your C# with lint-staged & husky",description:"Consistent formatting in a codebase is a good thing. We can achieve this in dotnet using dotnet format, used in combination with the npm packages husky and lint-staged. This post shows how.",date:"2020-12-22T00:00:00.000Z",formattedDate:"December 22, 2020",tags:[{label:"Prettier",permalink:"/tags/prettier"}],readingTime:4.375,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"prettier-your-csharp-with-dotnet-format-and-lint-staged",title:"dotnet-format: Prettier your C# with lint-staged & husky",authors:"johnnyreilly",image:"./title-image.png",tags:["Prettier"],hide_table_of_contents:!1},prevItem:{title:"Azure Pipelines meet Jest",permalink:"/azure-pipelines-meet-jest"},nextItem:{title:"Make Microsoft.Identity.Web respond with 403 forbidden instead of a 302 redirect",permalink:"/how-to-make-azure-ad-403"}},p={image:n(87158).Z,authorsImageUrls:[void 0]},d=[{value:"Updated 17/09/2021",id:"updated-17092021",level:2},{value:"Updated linting 07/04/2022",id:"updated-linting-07042022",level:2},{value:"Why format?",id:"why-format",level:2},{value:"<code>dotnet-format</code>: a new hope",id:"dotnet-format-a-new-hope",level:2},{value:"Customising our formatting",id:"customising-our-formatting",level:2},{value:"<code>lint-staged</code> / <code>husky</code> integration",id:"lint-staged--husky-integration",level:2},{value:"CSharpier - update 16/05/2021",id:"csharpier---update-16052021",level:2}],h={toc:d};function m(e){var{components:t}=e,o=i(e,["components"]);return(0,a.kt)("wrapper",r({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Consistent formatting in a codebase is a good thing. We can achieve this in dotnet using ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format"),", used in combination with the npm packages ",(0,a.kt)("inlineCode",{parentName:"p"},"husky")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged"),". This post shows how."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;dotnet-format: Prettier your CSharp with lint-staged and husky&quot; and the dotnet-format logo",src:n(87158).Z,width:"1600",height:"900"})),(0,a.kt)("h2",r({},{id:"updated-17092021"}),"Updated 17/09/2021"),(0,a.kt)("p",null,"This has been updated to work with the latest versions of ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"husky"),"."),(0,a.kt)("h2",r({},{id:"updated-linting-07042022"}),"Updated linting 07/04/2022"),(0,a.kt)("p",null,"If you're interested in formatting, you might be interested in linting; formatting's big sister. C# has linting too; ",(0,a.kt)("a",r({parentName:"p"},{href:"/eslint-your-csharp-in-vs-code-with-roslyn-analyzers"}),"read about it here"),"."),(0,a.kt)("h2",r({},{id:"why-format"}),"Why format?"),(0,a.kt)("p",null,'Consistent formatting makes code less confusing to newcomers and it allows whoever is working on the codebase to reliably focus on the task at hand. Not "fixing curly braces because Janice messed them up with her last commit". (A ',(0,a.kt)("inlineCode",{parentName:"p"},"git commit")," message that would be tragic in so many ways.)"),(0,a.kt)("p",null,"Once we've agreed that we want to have consistent formatting, we want it to be enforced. Enter, stage left, ",(0,a.kt)("a",r({parentName:"p"},{href:"https://prettier.io/"}),"Prettier"),", the fantastic tool for formatting code. It rocks; I've been using on my JavaScript / TypeScript for the longest time. But what about C#? Well, there is a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/warrenseine/prettier-plugin-csharp"}),"Prettier plugin for C#"),".... Sort of. It appears to be abandoned and contains the worrying message in the ",(0,a.kt)("inlineCode",{parentName:"p"},"README/index.md"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that this plugin is under active development, and might not be ready to run on production code yet. It will break your code.")),(0,a.kt)("p",null,"Not a ringing endorsement."),(0,a.kt)("h2",r({},{id:"dotnet-format-a-new-hope"}),(0,a.kt)("inlineCode",{parentName:"h2"},"dotnet-format"),": a new hope"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://twitter.com/margaridagp"}),"Margarida Pereira")," recently pointed me in the direction of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/dotnet/format"}),(0,a.kt)("inlineCode",{parentName:"a"},"dotnet-format"))," which is a formatter for .NET. It's a .NET tool which:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"is a code formatter for dotnet that applies style preferences to a project or solution. Preferences will be read from an ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," file, if present, otherwise a default set of preferences will be used.")),(0,a.kt)("p",null,"It can be installed with:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-shell"}),"dotnet tool install -g dotnet-format\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/dotnet/format/issues/648#issuecomment-614905524"}),"VS Code C# extension will make use of this formatter"),", we just need to set the following in our ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'"omnisharp.enableRoslynAnalyzers": true,\n"omnisharp.enableEditorConfigSupport": true\n')),(0,a.kt)("h2",r({},{id:"customising-our-formatting"}),"Customising our formatting"),(0,a.kt)("p",null,"If we'd like to deviate from the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/fundamentals/code-analysis/code-style-rule-options"}),"default formatting options")," then create ourselves an ",(0,a.kt)("inlineCode",{parentName:"p"},".editorconfig")," file in the root of our project. Let's say we prefer more of the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Indentation_style#K&R_style"}),"K & R style")," approach to braces instead of the C# default of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Indentation_style#Allman_style"}),"Allman style"),". To make ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet-format")," use that we'd set the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-ini"}),"# Remove the line below if you want to inherit .editorconfig settings from higher directories\nroot = true\n\n# See https://github.com/dotnet/format/blob/master/docs/Supported-.editorconfig-options/index.md for reference\n[*.cs]\ncsharp_new_line_before_open_brace = none\ncsharp_new_line_before_catch = false\ncsharp_new_line_before_else = false\ncsharp_new_line_before_finally = false\ncsharp_new_line_before_members_in_anonymous_types = false\ncsharp_new_line_before_members_in_object_initializers = false\ncsharp_new_line_between_query_expression_clauses = true\n")),(0,a.kt)("p",null,"With this in place it's K & R all the way baby!"),(0,a.kt)("h2",r({},{id:"lint-staged--husky-integration"}),(0,a.kt)("inlineCode",{parentName:"h2"},"lint-staged")," / ",(0,a.kt)("inlineCode",{parentName:"h2"},"husky")," integration"),(0,a.kt)("p",null,"It's become somewhat standard to use the marvellous ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/typicode/husky"}),(0,a.kt)("inlineCode",{parentName:"a"},"husky"))," and ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/okonet/lint-staged"}),(0,a.kt)("inlineCode",{parentName:"a"},"lint-staged"))," to enforce code quality. To quote the docs:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Run linters against staged git files and don't let \ud83d\udca9 slip into our code base!")),(0,a.kt)("p",null,"To add this to our (otherwise C# codebase), we're going to need a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"npm init --yes\n")),(0,a.kt)("p",null,"We'll install ",(0,a.kt)("inlineCode",{parentName:"p"},"husky")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-sh"}),"npx husky-init && npm install\nnpm install lint-staged --save-dev\n")),(0,a.kt)("p",null,"We should have a new file living at ",(0,a.kt)("inlineCode",{parentName:"p"},".husky/pre-commit")," which is our pre-commit hook."),(0,a.kt)("p",null,"Within that file we should replace ",(0,a.kt)("inlineCode",{parentName:"p"},"npm test")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx lint-staged --relative"),". This is the command that will be run on commit. ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," will be run and we're specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"relative")," so that ",(0,a.kt)("strong",{parentName:"p"},"relative")," file paths will be used. This is important as ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"--include"),' accepts "a list of relative file or folder paths to include in formatting". ',(0,a.kt)("strong",{parentName:"p"},"Absolute paths (the default) won't work - and if we pass them to ",(0,a.kt)("inlineCode",{parentName:"strong"},"dotnet format"),", it will not format the files.")),(0,a.kt)("p",null,"Finally we add the following entry to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'  "lint-staged": {\n    "*.cs": "dotnet format --include"\n  }\n')),(0,a.kt)("p",null,"This is the task that will be invoked by ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," against files with a ",(0,a.kt)("inlineCode",{parentName:"p"},".cs")," suffix on commit. When ",(0,a.kt)("inlineCode",{parentName:"p"},"lint-staged")," runs, it will pass a list of relative file paths to ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format"),". So if we'd staged two files it might end up executing a command like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dotnet format --include src/server-app/Server/Controllers/UserController.cs src/server-app/Server/Controllers/WeatherForecastController.cs")),(0,a.kt)("p",null,"We should end up with a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," that looks something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "name": "app",\n  "version": "1.0.0",\n  "description": "[![Shared Build Status](https://dev.azure.com/investec/maas/_apis/build/status/shared?repoName=maas)](https://dev.azure.com/investec/maas/_build/latest?definitionId=1128&repoName=maas)",\n  "main": "index.js",\n  "dependencies": {\n    "husky": "^7.0.2"\n  },\n  "devDependencies": {\n    "husky": "^7.0.0",\n    "lint-staged": "^11.1.2"\n  },\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "prepare": "husky install"\n  },\n  "lint-staged": {\n    "*.cs": "dotnet format --include"\n  },\n  "repository": {\n    "type": "git",\n    "url": "https://investec@dev.azure.com/investec/maas/_git/maas"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC"\n}\n')),(0,a.kt)("p",null,"By and large we don't have to think about this; the important take home is that we're now enforcing standardised formatting for all C# files upon commit. Everything that goes into the codebase will be formatted in a consistent fashion."),(0,a.kt)("h2",r({},{id:"csharpier---update-16052021"}),"CSharpier - update 16/05/2021"),(0,a.kt)("p",null,"There is an alternative to the CSharp Prettier project. It's being worked on by\n",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/belav"}),"Bela VanderVoort")," and it goes by the name of ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/belav/csharpier"}),"csharpier"),". When comparing CSharpier and dotnet-format, Bela put it like this:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"I could see CSharpier being the non-configurable super opinionated formatter and dotnet-format being for the people that do want to have options.")),(0,a.kt)("p",null,"Check it out!"))}m.isMDXComponent=!0},87158:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-7fc4956ba503155ee49cece0524868fc.png"}}]);
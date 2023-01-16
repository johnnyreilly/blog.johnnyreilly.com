"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[66190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});n(67294);var r=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET 5","querystring","query params","dependency injection","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",source:"@site/blog/2021-06-11-azure-functions-dotnet-5-query-params-di-bicep/index.md",title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",date:"2021-06-11T00:00:00.000Z",formattedDate:"June 11, 2021",tags:[{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET 5",permalink:"/tags/net-5"},{label:"querystring",permalink:"/tags/querystring"},{label:"query params",permalink:"/tags/query-params"},{label:"dependency injection",permalink:"/tags/dependency-injection"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:3.38,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",authors:"johnnyreilly",tags:["Azure Functions",".NET 5","querystring","query params","dependency injection","Bicep"],image:"./title-image.png",description:"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. This post shows part of the upgrade: Query params, Dependency Injection, Bicep & Build",hide_table_of_contents:!1},prevItem:{title:"React 18 and TypeScript",permalink:"/2021/06/30/react-18-and-typescript"},nextItem:{title:"Azurite and Table Storage in a dev container",permalink:"/2021/05/15/azurite-and-table-storage-dev-container"}},p={image:n(28061).Z,authorsImageUrls:[void 0]},u=[{value:"Query params",id:"query-params",level:2},{value:"Dependency Injection, local development and Azure Application Settings",id:"dependency-injection-local-development-and-azure-application-settings",level:2},{value:"Bicep",id:"bicep",level:2},{value:"Building .NET 5 functions",id:"building-net-5-functions",level:2}],c={toc:u};function d(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",i({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The upgrade of Azure Functions from .NET Core 3.1 to .NET 5 is significant. There's an excellent ",(0,r.kt)("a",i({parentName:"p"},{href:"https://codetraveler.io/2021/05/28/creating-azure-functions-using-net-5/"}),"guide")," for the general steps required to perform the upgrade. However there's a number of (unrelated) items which are not covered by that post:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query params"),(0,r.kt)("li",{parentName:"ul"},"Dependency Injection"),(0,r.kt)("li",{parentName:"ul"},"Bicep"),(0,r.kt)("li",{parentName:"ul"},"Build")),(0,r.kt)("p",null,"This post will show how to tackle these."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image showing name of post and the Azure Functions logo",src:n(28061).Z,width:"1347",height:"431"})),(0,r.kt)("h2",i({},{id:"query-params"}),"Query params"),(0,r.kt)("p",null,"As part of the move to .NET 5 functions, we say goodbye to ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest?view=aspnetcore-5.0"}),(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequest"))," and hello to ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.azure.functions.worker.http.httprequestdata?view=azure-dotnet"}),(0,r.kt)("inlineCode",{parentName:"a"},"HttpRequestData")),". Now ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequest")," had a useful ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.http.httprequest.query?view=aspnetcore-5.0#Microsoft_AspNetCore_Http_HttpRequest_Query"}),(0,r.kt)("inlineCode",{parentName:"a"},"Query"))," property which allowed for the simple extraction of query parameters like so."),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'var from = req.Query["from"]\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"HttpRequestData")," has no such property. However, it's straightforward to make our own. It's simply a matter of using ",(0,r.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-us/dotnet/api/system.web.httputility.parsequerystring?view=net-5.0"}),(0,r.kt)("inlineCode",{parentName:"a"},"System.Web.HttpUtility.ParseQueryString"))," on ",(0,r.kt)("inlineCode",{parentName:"p"},"req.Url.Query")," and using that:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'var query = System.Web.HttpUtility.ParseQueryString(req.Url.Query);\nvar from = query["from"]\n')),(0,r.kt)("h2",i({},{id:"dependency-injection-local-development-and-azure-application-settings"}),"Dependency Injection, local development and Azure Application Settings"),(0,r.kt)("p",null,"Dependency Injection is a much more familiar shape in .NET 5 if you're familiar with .NET Core web apps. Once again we have a ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," file. To get the configuration built in such a way to support both local development and when deployed to Azure, there's a few things to do. When deployed to Azure you'll likely want to read from Azure Application Settings:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of Azure Application Settings",src:n(27809).Z,width:"3014",height:"1364"})),(0,r.kt)("p",null,"To tackle both of these, you'll want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"AddJsonFile")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"AddEnvironmentVariables")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureAppConfiguration"),". A final ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs")," might look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Threading.Tasks;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace MyApp\n{\n    public class Program\n    {\n        public static Task Main(string[] args)\n        {\n            var host = new HostBuilder()\n                .ConfigureAppConfiguration(configurationBuilder =>\n                    configurationBuilder\n                        .AddCommandLine(args)\n                        // below is for local development\n                        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)\n                        // below is what you need to read Application Settings in Azure\n                        .AddEnvironmentVariables()\n                )\n                .ConfigureFunctionsWorkerDefaults()\n                .ConfigureServices(services =>\n                {\n                    services.AddLogging();\n                    services.AddHttpClient();\n                })\n                .Build();\n\n            return host.RunAsync();\n        }\n    }\n}\n')),(0,r.kt)("p",null,"With this approach in place, when the application runs, it should construct a configuration driven by all the providers required to run our application."),(0,r.kt)("h2",i({},{id:"bicep"}),"Bicep"),(0,r.kt)("p",null,"When it comes to deploying to Azure via ",(0,r.kt)("a",i({parentName:"p"},{href:"https://github.com/Azure/bicep"}),"Bicep"),", there's some small tweaks required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appSettings.FUNCTIONS_WORKER_RUNTIME")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"dotnet-isolated")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linuxFxVersion")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"DOTNET-ISOLATED|5.0"))),(0,r.kt)("p",null,"Applied to the resource itself the diff looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-diff"}),"resource functionAppName_resource 'Microsoft.Web/sites@2018-11-01' = {\n  name: functionAppName\n  location: location\n  tags: tags_var\n  kind: 'functionapp,linux'\n  identity: {\n    type: 'SystemAssigned'\n  }\n  properties: {\n    serverFarmId: appServicePlanName_resource.id\n    siteConfig: {\n      http20Enabled: true\n      remoteDebuggingEnabled: false\n      minTlsVersion: '1.2'\n      appSettings: [\n        {\n          name: 'FUNCTIONS_EXTENSION_VERSION'\n          value: '~3'\n        }\n        {\n          name: 'FUNCTIONS_WORKER_RUNTIME'\n-          value: 'dotnet'\n+          value: 'dotnet-isolated'\n        }\n        {\n          name: 'AzureWebJobsStorage'\n          value: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n      connectionStrings: [\n        {\n          name: 'TableStorageConnectionString'\n          connectionString: 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};AccountKey=${listKeys(resourceId('Microsoft.Storage/storageAccounts', storageAccountName), '2019-06-01').keys[0].value};EndpointSuffix=${environment().suffixes.storage}'\n        }\n      ]\n-      linuxFxVersion: 'DOTNETCORE|LTS'\n+      linuxFxVersion: 'DOTNET-ISOLATED|5.0'\n      ftpsState: 'Disabled'\n      managedServiceIdentityId: 1\n    }\n    clientAffinityEnabled: false\n    httpsOnly: true\n  }\n}\n")),(0,r.kt)("h2",i({},{id:"building-net-5-functions"}),"Building .NET 5 functions"),(0,r.kt)("p",null,"Before signing off, there's one more thing to slip in. When attempting to build .NET 5 Azure Functions with the .NET SDK ",(0,r.kt)("em",{parentName:"p"},"alone"),", you'll encounter this error:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),"The framework 'Microsoft.NETCore.App', version '3.1.0' was not found.\n")),(0,r.kt)("p",null,"Docs on this seem to be pretty short. The closest I came to docs was ",(0,r.kt)("a",i({parentName:"p"},{href:"https://stackoverflow.com/questions/66938752/net-5-the-framework-microsoft-netcore-app-version-3-1-0-was-not-found/66938753#66938753"}),"this comment on Stack Overflow"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To build .NET 5 functions, the .NET Core 3 SDK is required. So this must be installed alongside the 5.0.x sdk.")),(0,r.kt)("p",null,"So with Azure Pipelines you might have have something that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"stages:\n  - stage: build\n    displayName: build\n    pool:\n      vmImage: 'ubuntu-latest'\n    jobs:\n      - job: BuildAndTest\n        displayName: 'Build and Test'\n        steps:\n          # we need .NET Core SDK 3.1 too!\n          - task: UseDotNet@2\n            displayName: 'Install .NET Core SDK 3.1'\n            inputs:\n              packageType: 'sdk'\n              version: 3.1.x\n\n          - task: UseDotNet@2\n            displayName: 'Install .NET SDK 5.0'\n            inputs:\n              packageType: 'sdk'\n              version: 5.0.x\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app test'\n            inputs:\n              command: test\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app build'\n            inputs:\n              command: build\n              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp'\n\n          - task: DotNetCoreCLI@2\n            displayName: 'function app publish'\n            inputs:\n              command: publish\n              arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/MyApp /p:SourceRevisionId=$(Build.SourceVersion)'\n              publishWebProjects: false\n              modifyOutputPath: false\n              zipAfterPublish: true\n\n          - publish: $(Build.ArtifactStagingDirectory)/MyApp\n            artifact: functionapp\n")),(0,r.kt)("p",null,"Have fun building .NET 5 functions!"))}d.isMDXComponent=!0},27809:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/application-settings-03a89ec8679efd18aa79e3793c61647e.png"},28061:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/title-image-8c454e88184cf532ac81230927060f90.png"}}]);
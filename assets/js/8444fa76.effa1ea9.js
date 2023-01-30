"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[45395],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var r=i.createContext({}),c=function(t){var e=i.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=c(t.components);return i.createElement(r.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,l=p(t,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(r,".").concat(h)]||u[h]||g[h]||o;return n?i.createElement(m,s(s({ref:e},l),{},{components:n})):i.createElement(m,s({ref:e},l))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=h;var p={};for(var r in e)hasOwnProperty.call(e,r)&&(p[r]=e[r]);p.originalType=t,p[u]="string"==typeof t?t:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88082:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>l});n(67294);var i=n(3905);function a(){return a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const s={title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",authors:"johnnyreilly",tags:["Azure Static Web Apps","Application Insights","Azure Functions","Bicep"],image:"./title-image.png",description:"Application Insights are a great way to monitor Azure Static Web Apps and Azure Functions. But how do you deploy that using Bicep? Let's find out!",hide_table_of_contents:!1},p=void 0,r={permalink:"/2023/01/01/application-insights-bicep-azure-static-web-apps",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2023-01-01-application-insights-bicep-azure-static-web-apps/index.md",source:"@site/blog/2023-01-01-application-insights-bicep-azure-static-web-apps/index.md",title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",description:"Application Insights are a great way to monitor Azure Static Web Apps and Azure Functions. But how do you deploy that using Bicep? Let's find out!",date:"2023-01-01T00:00:00.000Z",formattedDate:"January 1, 2023",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"Application Insights",permalink:"/tags/application-insights"},{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:"Bicep",permalink:"/tags/bicep"}],readingTime:5.39,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions",authors:"johnnyreilly",tags:["Azure Static Web Apps","Application Insights","Azure Functions","Bicep"],image:"./title-image.png",description:"Application Insights are a great way to monitor Azure Static Web Apps and Azure Functions. But how do you deploy that using Bicep? Let's find out!",hide_table_of_contents:!1},prevItem:{title:"Azure Pipelines - Node.js 16 and custom pipelines task extensions",permalink:"/2023/01/05/azure-pipelines-custom-pipelines-task-extension-node-16"},nextItem:{title:"Serving Docusaurus images with Cloudinary",permalink:"/2022/12/26/docusaurus-image-cloudinary-rehype-plugin"}},c={image:n(76364).Z,authorsImageUrls:[void 0]},l=[{value:"Monitoring Azure Static Web Apps",id:"monitoring-azure-static-web-apps",level:2},{value:"Deploying Application Insights with Bicep",id:"deploying-application-insights-with-bicep",level:2},{value:"Using the Application Insights module",id:"using-the-application-insights-module",level:2},{value:"Configuring the Azure Static Web App to use Application Insights",id:"configuring-the-azure-static-web-app-to-use-application-insights",level:2},{value:"1. Configuring the Azure Static Web App and Azure Function to use Application Insights",id:"1-configuring-the-azure-static-web-app-and-azure-function-to-use-application-insights",level:3},{value:"2. Connecting the Azure Static Web App to the Application Insights resource in the Azure Portal",id:"2-connecting-the-azure-static-web-app-to-the-application-insights-resource-in-the-azure-portal",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:l};function g(t){var{components:e}=t,s=o(t,["components"]);return(0,i.kt)("wrapper",a({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Application Insights are a great way to monitor Azure Static Web Apps and Azure Functions. But how do you deploy that using Bicep? Let's find out!"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Using Application Insights with Bicep to monitor Azure Static Web Apps and Azure Functions&quot; with the Bicep, Application Insights, Azure Static Web Apps and Azure Functions logos",src:n(76364).Z,width:"800",height:"450"})),(0,i.kt)("h2",a({},{id:"monitoring-azure-static-web-apps"}),"Monitoring Azure Static Web Apps"),(0,i.kt)("p",null,"This post should possibly win some kind of \"least pithy blog title\" award. But it's definitely descriptive. Let's get into it."),(0,i.kt)("p",null,"I recently wrote ",(0,i.kt)("a",a({parentName:"p"},{href:"/2022/12/22/azure-static-web-apps-dynamic-redirects-azure-functions"}),"about using dynamic redirects in Azure Static Web Apps using the Azure Function they support"),". I wanted to monitor the redirects that were being performed. I knew I could do this with Application Insights. But how do I deploy Application Insights using Bicep?"),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://johnnyreilly.com"}),"My blog")," runs on Azure Static Web Apps which is deployed using Bicep. ",(0,i.kt)("a",a({parentName:"p"},{href:"/2022/02/01/migrating-from-github-pages-to-azure-static-web-apps"}),"I've written about deploying Azure Static Web Apps with Bicep previously"),". I wanted to add Application Insights to that deployment."),(0,i.kt)("h2",a({},{id:"deploying-application-insights-with-bicep"}),"Deploying Application Insights with Bicep"),(0,i.kt)("p",null,"The first thing we need to do is deploy the Application Insights workspace. This is a resource that is required for Application Insights to work. And then deploy an Application Insights resource that uses it. We can achieve that with the following ",(0,i.kt)("inlineCode",{parentName:"p"},"appInsights.bicep")," Bicep module:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"param location string\nparam tags object\nparam workspaceName string = 'appInsightsWorkspace'\nparam appInsightsName string = 'appInsights'\n\n// https://learn.microsoft.com/en-us/azure/templates/microsoft.operationalinsights/workspaces?pivots=deployment-language-bicep\nresource workspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {\n  name: workspaceName\n  location: location\n  tags: tags\n  properties: {\n    sku: {\n      name: 'PerGB2018'\n    }\n    retentionInDays: 30\n    workspaceCapping: {}\n  }\n}\n\n// https://learn.microsoft.com/en-us/azure/templates/microsoft.insights/components?pivots=deployment-language-bicep\nresource appInsights 'Microsoft.Insights/components@2020-02-02' = {\n  name: appInsightsName\n  location: location\n  kind: 'other'\n  properties: {\n    Application_Type: 'web'\n    Flow_Type: 'Bluefield'\n    WorkspaceResourceId: workspace.id\n    RetentionInDays: 90\n    IngestionMode: 'LogAnalytics'\n    publicNetworkAccessForIngestion: 'Enabled'\n    publicNetworkAccessForQuery: 'Enabled'\n  }\n}\n\noutput appInsightsId string = appInsights.id\noutput appInsightsInstrumentationKey string = appInsights.properties.InstrumentationKey\noutput appInsightsConnectionString string = appInsights.properties.ConnectionString\n")),(0,i.kt)("p",null,"You'll note we're outputting the ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"InstrumentationKey")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionString")," properties of the Application Insights resource. We'll need those later."),(0,i.kt)("h2",a({},{id:"using-the-application-insights-module"}),"Using the Application Insights module"),(0,i.kt)("p",null,"We can now use the module in our ",(0,i.kt)("inlineCode",{parentName:"p"},"main.bicep")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"param location string\nparam branch string\nparam staticWebAppName string\nparam tags object\n@secure()\nparam repositoryToken string\nparam rootCustomDomainName string\nparam blogCustomDomainName string\nparam workspaceName string = 'blog-app-insights-workspace'\nparam appInsightsName string = 'blog-app-insights'\n\nmodule appInsights './appInsights.bicep' = {\n  name: 'appInsights'\n  params: {\n    location: location\n    tags: tags\n    workspaceName: workspaceName\n    appInsightsName: appInsightsName\n  }\n}\n\nmodule staticWebApp './staticWebApp.bicep' = {\n  name: 'staticWebApp'\n  params: {\n    location: location\n    branch: branch\n    staticWebAppName: staticWebAppName\n    tags: tags\n    repositoryToken: repositoryToken\n    rootCustomDomainName: rootCustomDomainName\n    blogCustomDomainName: blogCustomDomainName\n    appInsightsId: appInsights.outputs.appInsightsId\n    appInsightsConnectionString: appInsights.outputs.appInsightsConnectionString\n    appInsightsInstrumentationKey: appInsights.outputs.appInsightsInstrumentationKey\n  }\n}\n\noutput staticWebAppDefaultHostName string = staticWebApp.outputs.staticWebAppDefaultHostName\noutput staticWebAppId string = staticWebApp.outputs.staticWebAppId\noutput staticWebAppName string = staticWebApp.outputs.staticWebAppName\n")),(0,i.kt)("p",null,"There's a few things to note here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have two modules. One for the Application Insights workspace and one for the Azure Static Web App."),(0,i.kt)("li",{parentName:"ul"},"The Static Web App module ",(0,i.kt)("em",{parentName:"li"},"depends")," on the outputs from the Application Insights module. This is because we need the ",(0,i.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"InstrumentationKey")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ConnectionString")," properties of the Application Insights resource.")),(0,i.kt)("h2",a({},{id:"configuring-the-azure-static-web-app-to-use-application-insights"}),"Configuring the Azure Static Web App to use Application Insights"),(0,i.kt)("p",null,"At this point we have something that deploys the Application Insights. The interesting part now is how we configure the Azure Static Web App to use Application Insights. We need to do that in the ",(0,i.kt)("inlineCode",{parentName:"p"},"staticWebApp.bicep")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"param location string\nparam branch string\nparam staticWebAppName string\nparam tags object\n@secure()\nparam repositoryToken string\nparam rootCustomDomainName string\nparam blogCustomDomainName string\nparam appInsightsId string\nparam appInsightsInstrumentationKey string\nparam appInsightsConnectionString string\n\nvar tagsWithHiddenLinks = union({\n  'hidden-link: /app-insights-resource-id': appInsightsId\n  'hidden-link: /app-insights-instrumentation-key': appInsightsInstrumentationKey\n  'hidden-link: /app-insights-conn-string': appInsightsConnectionString\n}, tags)\n\nresource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {\n  name: staticWebAppName\n  location: location\n  tags: tagsWithHiddenLinks\n  sku: {\n    name: 'Free'\n    tier: 'Free'\n  }\n  properties: {\n    repositoryUrl: 'https://github.com/johnnyreilly/blog.johnnyreilly.com'\n    repositoryToken: repositoryToken\n    branch: branch\n    provider: 'GitHub'\n    stagingEnvironmentPolicy: 'Enabled'\n    allowConfigFileUpdates: true\n    buildProperties:{\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\nresource staticWebAppAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {\n  name: 'appsettings'\n  kind: 'string'\n  parent: staticWebApp\n  properties: {\n    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey\n    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString\n  }\n}\n\nresource staticWebAppFunctionAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {\n  name: 'functionappsettings'\n  kind: 'string'\n  parent: staticWebApp\n  properties: {\n    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey\n    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString\n  }\n}\n\nresource rootCustomDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {\n  parent: staticWebApp\n  name: rootCustomDomainName\n  properties: {}\n}\n\nresource blogCustomDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {\n  parent: staticWebApp\n  name: blogCustomDomainName\n  properties: {}\n}\n\noutput staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname\noutput staticWebAppId string = staticWebApp.id\noutput staticWebAppName string = staticWebApp.name\n")),(0,i.kt)("p",null,"There's some code here you can ignore; the part related to custom domains for instance."),(0,i.kt)("p",null,"But there's two relevant things to note:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configuring the Azure Static Web App and Azure Function to use Application Insights"),(0,i.kt)("li",{parentName:"ol"},"Connecting the Azure Static Web App to the Application Insights resource in the Azure Portal")),(0,i.kt)("h3",a({},{id:"1-configuring-the-azure-static-web-app-and-azure-function-to-use-application-insights"}),"1. Configuring the Azure Static Web App and Azure Function to use Application Insights"),(0,i.kt)("p",null,"First of all, let's look at how we get data flowing from the Azure Static Web App and Azure Function to Application Insights:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"resource staticWebAppAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {\n  name: 'appsettings'\n  kind: 'string'\n  parent: staticWebApp\n  properties: {\n    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey\n    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString\n  }\n}\n\nresource staticWebAppFunctionAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {\n  name: 'functionappsettings'\n  kind: 'string'\n  parent: staticWebApp\n  properties: {\n    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey\n    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString\n  }\n}\n")),(0,i.kt)("p",null,"We're setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"APPINSIGHTS_INSTRUMENTATIONKEY")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"APPLICATIONINSIGHTS_CONNECTION_STRING")," application settings on the Azure Static Web App and its associated Azure Function. These settings are what tells the Azure Static Web App and Azure Function to use Application Insights."),(0,i.kt)("h3",a({},{id:"2-connecting-the-azure-static-web-app-to-the-application-insights-resource-in-the-azure-portal"}),"2. Connecting the Azure Static Web App to the Application Insights resource in the Azure Portal"),(0,i.kt)("p",null,"The other thing we need to do is to connect the Azure Static Web App to the Application Insights resource in the Azure Portal. What that means is that when you click on the Application Insights resource in the Azure Portal, you'll have a button which takes you from the Azure Static Web App in the portal to Application Insights resource:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of the Azure Portal Static Web App connected to the Application Insights resource",src:n(65534).Z,width:"1552",height:"856"})),(0,i.kt)("p",null,"This is done by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"hidden-link")," tags on the Azure Static Web App resource. Here's how we do that:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"var tagsWithHiddenLinks = union({\n  'hidden-link: /app-insights-resource-id': appInsightsId\n  'hidden-link: /app-insights-instrumentation-key': appInsightsInstrumentationKey\n  'hidden-link: /app-insights-conn-string': appInsightsConnectionString\n}, tags)\n\nresource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {\n  name: staticWebAppName\n  location: location\n  tags: tagsWithHiddenLinks\n  // ...\n}\n")),(0,i.kt)("h2",a({},{id:"conclusion"}),"Conclusion"),(0,i.kt)("p",null,"With this in place, we can now deploy our Azure Static Web App with an Application Insights resource using Bicep and have the Azure Static Web App connected to, and providing data to, the Application Insights resource. Monitoring awaits!"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Screenshot of Application Insights in the Azure Portal - see how they try to hack me with their spurious `sellers.json` requests ;-)",src:n(83262).Z,width:"3051",height:"1437"})))}g.isMDXComponent=!0},83262:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/screenshot-application-insights-67bed4833a4aa1e00dcc759fcd094388.png"},65534:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/screenshot-azure-portal-application-insights-hidden-link-ae51a8aef4b8705b4a93b77c2fe518e8.webp"},76364:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/title-image-77c999aef8a2d4635e14bf29aa13b6c1.png"}}]);
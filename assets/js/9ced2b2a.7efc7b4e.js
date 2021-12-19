"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[40284],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return m}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],p={title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",authors:"johnnyreilly",tags:["Azure Static Web App","Bicep","Azure DevOps","Azure Pipelines"],image:"title-image.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/2021/08/15/bicep-azure-static-web-apps-azure-devops",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-08-15-bicep-azure-static-web-apps-azure-devops/index.md",source:"@site/blog/2021-08-15-bicep-azure-static-web-apps-azure-devops/index.md",title:"Publish Azure Static Web Apps with Bicep and Azure DevOps",description:'This post demonstrates how to deploy Azure Static Web Apps using Bicep and Azure DevOps. It includes a few workarounds for the "Provider is invalid. Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue.',date:"2021-08-15T00:00:00.000Z",formattedDate:"August 15, 2021",tags:[{label:"Azure Static Web App",permalink:"/tags/azure-static-web-app"},{label:"Bicep",permalink:"/tags/bicep"},{label:"Azure DevOps",permalink:"/tags/azure-dev-ops"},{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"}],readingTime:4.39,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",permalink:"/2021/08/19/bicep-syntax-highlighting-with-prismjs"},nextItem:{title:"TypeScript 4.4 and more readable code",permalink:"/2021/08/14/typescript-4-4-more-readable-code"}},u={authorsImageUrls:[void 0]},c=[{value:"Bicep template",id:"bicep-template",children:[],level:2},{value:"Static Web App",id:"static-web-app",children:[],level:2},{value:"Azure Pipeline",id:"azure-pipeline",children:[],level:2},{value:"<code>Provider is invalid</code> workaround 2",id:"provider-is-invalid-workaround-2",children:[],level:2}],d={toc:c};function m(e){var t=e.components,p=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This post demonstrates how to deploy ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/overview"},"Azure Static Web Apps")," using Bicep and Azure DevOps. It includes a few workarounds for the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps/issues/516"},'"Provider is invalid. Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue'),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Publish Azure Static Web Apps with Bicep and Azure DevOps&quot; and some Azure logos",src:n(74779).Z})),(0,r.kt)("h2",{id:"bicep-template"},"Bicep template"),(0,r.kt)("p",null,"The first thing we're going to do is create a folder where our Bicep file for deploying our Azure Static Web App will live:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir infra/static-web-app -p\n")),(0,r.kt)("p",null,"Then we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"main.bicep")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bicep"},"param repositoryUrl string\nparam repositoryBranch string\n\nparam location string = 'westeurope'\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nparam appName string\n\nresource staticWebApp 'Microsoft.Web/staticSites@2020-12-01' = {\n  name: appName\n  location: location\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput deployment_token string = listSecrets(staticWebApp.id, staticWebApp.apiVersion).properties.apiKey\n")),(0,r.kt)("p",null,"There's some things to draw attention to in the code above:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"provider"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"repositoryUrl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"branch")," fields are required for successive deployments to succeed. In our case we're deploying via Azure DevOps and so our provider is ",(0,r.kt)("inlineCode",{parentName:"li"},"'DevOps'"),". For more details, ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps/issues/516"},"look at this issue"),"."),(0,r.kt)("li",{parentName:"ol"},"We're creating a ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token")," which we'll need in order that we can deploy into the Azure Static Web App resource.")),(0,r.kt)("h2",{id:"static-web-app"},"Static Web App"),(0,r.kt)("p",null,"In order that we can test out Azure Static Web Apps, what we need is a static web app. You could use pretty much anything here; we're going to use Docusaurus. We'll execute this single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @docusaurus/init@latest init static-web-app classic\n")),(0,r.kt)("p",null,"Which will scaffold a Docusaurus site in a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"static-web-app"),". We don't need to change it any further; let's just see if we can deploy it."),(0,r.kt)("h2",{id:"azure-pipeline"},"Azure Pipeline"),(0,r.kt)("p",null,"We're going to add an ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file which Azure DevOps can use to power a pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"trigger:\n  - main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - checkout: self\n    submodules: true\n\n  - bash: az bicep build --file infra/static-web-app/main.bicep\n    displayName: 'Compile Bicep to ARM'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeployStaticWebAppInfra\n    displayName: Deploy Static Web App infra\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: $(serviceConnection)\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(azureResourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: 'infra/static-web-app/main.json' # created by bash script\n      overrideParameters: >-\n        -repositoryUrl $(repo)\n        -repositoryBranch $(Build.SourceBranchName)\n        -appName $(staticWebAppName)\n      deploymentMode: Incremental\n      deploymentOutputs: deploymentOutputs\n\n  - task: PowerShell@2\n    name: 'SetDeploymentOutputVariables'\n    displayName: 'Set Deployment Output Variables'\n    inputs:\n      targetType: inline\n      script: |\n        $armOutputObj = '$(deploymentOutputs)' | ConvertFrom-Json\n        $armOutputObj.PSObject.Properties | ForEach-Object {\n          $keyname = $_.Name\n          $value = $_.Value.value\n\n          # Creates a standard pipeline variable\n          Write-Output \"##vso[task.setvariable variable=$keyName;issecret=true]$value\"\n\n          # Display keys in pipeline\n          Write-Output \"output variable: $keyName\"\n        }\n      pwsh: true\n\n  - task: AzureStaticWebApp@0\n    name: DeployStaticWebApp\n    displayName: Deploy Static Web App\n    inputs:\n      app_location: 'static-web-app'\n      # api_location: 'api' # we don't have an API\n      output_location: 'build'\n      azure_static_web_apps_api_token: $(deployment_token) # captured from deploymentOutputs\n")),(0,r.kt)("p",null,"When the pipeline is run, it does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Compiles our Bicep into an ARM template"),(0,r.kt)("li",{parentName:"ol"},"Deploys the compiled ARM template to Azure"),(0,r.kt)("li",{parentName:"ol"},"Captures the deployment outputs (essentially the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token"),") and converts them into variables to use in the pipeline"),(0,r.kt)("li",{parentName:"ol"},"Deploys our Static Web App using the ",(0,r.kt)("inlineCode",{parentName:"li"},"deployment_token"))),(0,r.kt)("p",null,"The pipeline depends upon a number of variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"azureResourceGroup")," - the name of your resource group in Azure where the app will be deployed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"location")," - where your app is deployed, eg ",(0,r.kt)("inlineCode",{parentName:"li"},"northeurope")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repo")," - the URL of your repository in Azure DevOps, eg ",(0,r.kt)("a",{parentName:"li",href:"https://dev.azure.com/johnnyreilly/_git/azure-static-web-apps"},"https://dev.azure.com/johnnyreilly/_git/azure-static-web-apps")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"serviceConnection")," - the name of your AzureRM service connection in Azure DevOps"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"staticWebAppName")," - the name of your static web app, eg ",(0,r.kt)("inlineCode",{parentName:"li"},"azure-static-web-apps-johnnyreilly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"subscriptionId")," - your Azure subscription id from the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com"},"Azure Portal"))),(0,r.kt)("p",null,"A successful pipeline looks something like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of successfully running Azure Pipeline",src:n(64211).Z})),(0,r.kt)("p",null,"What you might notice is that the ",(0,r.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," is itself installing and building our application. This is handled by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/Oryx"},"Microsoft Oryx"),". The upshot of this is that we don't need to manually run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"npm build")," ourselves; the ",(0,r.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp")," task will take care of it for us."),(0,r.kt)("p",null,"Finally, let's see if we've deployed something successfully..."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of deployed Azure Static Web App",src:n(16724).Z})),(0,r.kt)("p",null,"We have! It's worth noting that you'll likely want to give your Azure Static Web App a lovelier URL, and perhaps even put it behind Azure Front Door as well."),(0,r.kt)("h2",{id:"provider-is-invalid-workaround-2"},(0,r.kt)("inlineCode",{parentName:"h2"},"Provider is invalid")," workaround 2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/shaneneff/"},"Shane Neff")," was attempting to follow the instructions in this post and encountered issues. He shared his struggles with me as he encountered the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps/issues/516"},'"Provider is invalid. Cannot change the Provider. Please detach your static site first if you wish to use to another deployment provider." issue'),"."),(0,r.kt)("p",null,"He was good enough to share his solution as well, which is inserting this task at the start of the pipeline (before the ",(0,r.kt)("inlineCode",{parentName:"p"},"az bicep build")," step):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"- task: AzureCLI@2\n  inputs:\n    azureSubscription: '<name of your service connection>'\n    scriptType: 'bash'\n    scriptLocation: 'inlineScript'\n    inlineScript: 'az staticwebapp disconnect -n <name of your app>'\n")),(0,r.kt)("p",null,"I haven't had the problems that Shane has had myself, but I wanted to share his fix for the people out there who almost certainly are bumping on this."))}m.isMDXComponent=!0},16724:function(e,t,n){t.Z=n.p+"assets/images/deployed-azure-static-web-app-screenshot-1ebda27d7f0537e14647e234282d6930.png"},64211:function(e,t,n){t.Z=n.p+"assets/images/successful-azure-pipelines-run-screenshot-bf1d896067834091a095faf736f00cb7.png"},74779:function(e,t,n){t.Z=n.p+"assets/images/title-image-d24b3ab999e590da3ebe6fda7dc7c31c.png"}}]);
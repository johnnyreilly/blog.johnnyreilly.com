"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[93090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,p(p({ref:t},u),{},{components:n})):a.createElement(h,p({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>u});n(67294);var a=n(3905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={slug:"static-web-apps-azure-devops-named-preview-environments",title:"Azure Static Web Apps: named preview environments with Azure DevOps",authors:"johnnyreilly",tags:["Azure Static Web Apps","azure devops"],image:"./title-image.png",description:'Azure Static Web Apps have just released a new feature for Azure DevOps users called "named preview environments". Let us have a look',hide_table_of_contents:!1},o=void 0,s={permalink:"/static-web-apps-azure-devops-named-preview-environments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-05-07-static-web-apps-azure-devops-named-preview-environments/index.md",source:"@site/blog/2022-05-07-static-web-apps-azure-devops-named-preview-environments/index.md",title:"Azure Static Web Apps: named preview environments with Azure DevOps",description:'Azure Static Web Apps have just released a new feature for Azure DevOps users called "named preview environments". Let us have a look',date:"2022-05-07T00:00:00.000Z",formattedDate:"May 7, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"azure devops",permalink:"/tags/azure-devops"}],readingTime:5.135,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"static-web-apps-azure-devops-named-preview-environments",title:"Azure Static Web Apps: named preview environments with Azure DevOps",authors:"johnnyreilly",tags:["Azure Static Web Apps","azure devops"],image:"./title-image.png",description:'Azure Static Web Apps have just released a new feature for Azure DevOps users called "named preview environments". Let us have a look',hide_table_of_contents:!1},prevItem:{title:"Azure Static Web Apps: Node.js 16 / 18 and Oryx",permalink:"/azure-static-web-apps-node-16-oryx"},nextItem:{title:"Upgrading to React 18 with TypeScript",permalink:"/upgrading-to-react-18-typescript"}},l={image:n(88461).Z,authorsImageUrls:[void 0]},u=[{value:"What are named preview environments?",id:"what-are-named-preview-environments",level:2},{value:"Deploy Static Web App with Bicep",id:"deploy-static-web-app-with-bicep",level:2},{value:"Azure Pipelines",id:"azure-pipelines",level:2},{value:"Creating a site",id:"creating-a-site",level:2},{value:"Testing the preview",id:"testing-the-preview",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function m(e){var{components:t}=e,p=r(e,["components"]);return(0,a.kt)("wrapper",i({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Azure Static Web Apps have just released a new feature for Azure DevOps users called "named preview environments". They allow users to deploy changes to an environment, prior to merging.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Static Web App Deploy Previews with Azure DevOps&quot; with a Azure, Bicep and Azure DevOps logos",src:n(88461).Z,width:"1600",height:"900"})),(0,a.kt)("h2",i({},{id:"what-are-named-preview-environments"}),"What are named preview environments?"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",i({parentName:"p"},{href:"https://docs.microsoft.com/en-gb/azure/static-web-apps/named-environments?tabs=azure-devops"}),"announcement")," describes them like so:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can configure your site to deploy every change to a named environment. This preview deployment is published at a stable URL that includes the environment name. For example, if the environment is named ",(0,a.kt)("inlineCode",{parentName:"p"},"release"),", then the preview is available at a location like ",(0,a.kt)("inlineCode",{parentName:"p"},"<DEFAULT_HOST_NAME>-release.<LOCATION>.azurestaticapps.net"),".")),(0,a.kt)("p",null,(0,a.kt)("a",i({parentName:"p"},{href:"/azure-static-web-app-deploy-previews-with-azure-devops"}),"I'd previously written about how to hand roll preview environments with Azure DevOps using Bicep"),". But now there's dedicated functionality that covers this, let's see if we can test it out."),(0,a.kt)("h2",i({},{id:"deploy-static-web-app-with-bicep"}),"Deploy Static Web App with Bicep"),(0,a.kt)("p",null,"We'll start with an empty repo in Azure DevOps and we'll create the Bicep template for deploying a Static Web App to Azure:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-bicep"}),"param appName string\nparam repositoryUrl string\nparam repositoryBranch string\n\nparam location string = resourceGroup().location\nparam skuName string = 'Free'\nparam skuTier string = 'Free'\n\nresource staticWebApp 'Microsoft.Web/staticSites@2021-03-01' = {\n  name: appName\n  location: location\n  sku: {\n    name: skuName\n    tier: skuTier\n  }\n  properties: {\n    // The provider, repositoryUrl and branch fields are required for successive deployments to succeed\n    // for more details see: https://github.com/Azure/static-web-apps/issues/516\n    provider: 'DevOps'\n    repositoryUrl: repositoryUrl\n    branch: repositoryBranch\n    buildProperties: {\n      skipGithubActionWorkflowGeneration: true\n    }\n  }\n}\n\noutput staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net\noutput staticWebAppId string = staticWebApp.id\noutput staticWebAppName string = staticWebApp.name\n")),(0,a.kt)("p",null,"The above deploys a Static Web App configured for Azure DevOps."),(0,a.kt)("p",null,"We are now outputting the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultHostname"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," of our newly provisioned SWA. Doing this allows us to do build things in the pipeline around our SWA should we choose to."),(0,a.kt)("h2",i({},{id:"azure-pipelines"}),"Azure Pipelines"),(0,a.kt)("p",null,"We're going to need an Azure Pipeline for this. We'll create an ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file in the root of our repo:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"trigger:\n  - '*'\n\npool:\n  vmImage: ubuntu-latest\n\nvariables:\n  # subscriptionId is a variable defined on the pipeline itself\n  - name: appName\n    value: 'our-static-web-app'\n  - name: location\n    value: 'westeurope' #\xa0at time of writing static sites are available in limited locations such as westeurope\n  - name: serviceConnection\n    value: 'azure-resource-manager-rg-static-web-apps' # Azure Resource Manager Service Connection created in Azure DevOps with permission against the rg-static-web-apps resource group in Azure\n  - name: azureResourceGroup # this resource group lives in westeurope\n    value: 'rg-static-web-apps'\n  - name: isMain\n    value: $[eq(variables['Build.SourceBranch'], 'refs/heads/main')] # runtime expression\n\nsteps:\n  - checkout: self\n    submodules: true\n\n  - bash: az bicep build --file infra/static-web-app/main.bicep\n    displayName: 'Compile Bicep to ARM'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeployStaticWebAppInfra\n    displayName: Deploy Static Web App infra\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: $(serviceConnection)\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(azureResourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: 'infra/static-web-app/main.json' # created by bash script\n      overrideParameters: >-\n        -repositoryUrl $(Build.Repository.Uri)\n        -repositoryBranch $(Build.SourceBranchName)\n        -appName $(appName)\n      deploymentMode: Incremental\n      deploymentOutputs: deploymentOutputs\n\n  - task: PowerShell@2\n    name: 'SetDeploymentOutputVariables'\n    displayName: 'Set Deployment Output Variables'\n    inputs:\n      targetType: inline\n      script: |\n        $armOutputObj = '$(deploymentOutputs)' | ConvertFrom-Json\n        $armOutputObj.PSObject.Properties | ForEach-Object {\n          $keyname = $_.Name\n          $value = $_.Value.value\n\n          # Creates a standard pipeline variable\n          Write-Output \"##vso[task.setvariable variable=$keyName;]$value\"\n\n          # Display keys and values in pipeline\n          Write-Output \"output variable: $keyName $value\"\n        }\n      pwsh: true\n\n  - task: AzureCLI@2\n    displayName: 'Acquire API key for deployment'\n    inputs:\n      azureSubscription: $(serviceConnection)\n      scriptType: bash\n      scriptLocation: inlineScript\n      inlineScript: |\n        APIKEY=$(az staticwebapp secrets list --name $(staticWebAppName) | jq -r '.properties.apiKey')\n        echo \"##vso[task.setvariable variable=apiKey;issecret=true]$APIKEY\"\n\n  - task: AzureStaticWebApp@0\n    name: DeployStaticWebApp\n    displayName: Deploy Static Web App\n    condition: and(succeeded(), eq(variables.isMain, 'true'))\n    inputs:\n      app_location: 'static-web-app'\n      # api_location: 'api'\n      output_location: 'build'\n      azure_static_web_apps_api_token: $(apiKey)\n\n  - task: AzureStaticWebApp@0\n    name: DeployStaticWebAppPreview\n    displayName: Deploy Static Web App to named preview environment\n    condition: and(succeeded(), ne(variables.isMain, 'true'))\n    inputs:\n      app_location: 'static-web-app'\n      # api_location: 'api'\n      output_location: 'build'\n      azure_static_web_apps_api_token: $(apiKey)\n      deployment_environment: 'pullrequest'\n")),(0,a.kt)("p",null,"There's two significant parts to the above pipeline. First the trigger, which ensures we run the pipeline on each change:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"trigger:\n  - '*' # this means we'll trigger on each change\n")),(0,a.kt)("p",null,"Next the two ",(0,a.kt)("inlineCode",{parentName:"p"},"AzureStaticWebApp@0")," tasks:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-yml"}),"- task: AzureStaticWebApp@0\n  name: DeployStaticWebApp\n  displayName: Deploy Static Web App\n  condition: and(succeeded(), eq(variables.isMain, 'true'))\n  inputs:\n    app_location: 'static-web-app'\n    # api_location: 'api'\n    output_location: 'build'\n    azure_static_web_apps_api_token: $(apiKey)\n\n- task: AzureStaticWebApp@0\n  name: DeployStaticWebAppPreview\n  displayName: Deploy Static Web App to named preview environment\n  condition: and(succeeded(), ne(variables.isMain, 'true'))\n  inputs:\n    app_location: 'static-web-app'\n    # api_location: 'api'\n    output_location: 'build'\n    azure_static_web_apps_api_token: $(apiKey)\n    deployment_environment: 'pullrequest'\n")),(0,a.kt)("p",null,"Depending upon whether we're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch or not, we either use or do not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment_environment")," property. When it is not the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch we supply the ",(0,a.kt)("inlineCode",{parentName:"p"},"deployment_environment")," property with a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"'pullrequest'"),". This is the name of our preview environment; and the value will be used in the URL we end up with. In my own experiments it seems that using hyphens in the name can be problematic - so I would advise avoiding this."),(0,a.kt)("h2",i({},{id:"creating-a-site"}),"Creating a site"),(0,a.kt)("p",null,"So we can test this out, we need a static web app to deploy. We'll spin up a simple Docusaurus site:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{}),"npx create-docusaurus@latest static-web-app classic\n")),(0,a.kt)("p",null,"Upon the initial commit of our main branch we end up with a website, once the pipeline has run:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Azure Pipelines, including the phrase &quot;Visit your site at: https://zealous-beach-05119b203.1.azurestaticapps.net&quot;",src:n(21041).Z,width:"2467",height:"1307"})),(0,a.kt)("p",null,"Note the URL:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Docusaurus site deployed to Azure Static Web Apps",src:n(81648).Z,width:"1552",height:"1100"})),(0,a.kt)("h2",i({},{id:"testing-the-preview"}),"Testing the preview"),(0,a.kt)("p",null,"Now our main site is deployed, let's test out the preview environment. We'll create a new branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",i({parentName:"pre"},{className:"language-shell"}),"git checkout -b test-preview\n")),(0,a.kt)("p",null,"And we'll update the ",(0,a.kt)("inlineCode",{parentName:"p"},"pages.index.js"),' file to include this message: "Hello from preview environment!". Once we commit and push our changes, we see the pipeline run:'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Azure Pipelines, including the phrase &quot;Visit your site at: https://zealous-beach-05119b203-pullrequest.westeurope.1.azurestaticapps.net&quot;",src:n(20161).Z,width:"2457",height:"1291"})),(0,a.kt)("p",null,"Note that this time we are deploying to our preview environment instead."),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"screenshot of Docusaurus site deployed to Azure Static Web Apps",src:n(39517).Z,width:"1558",height:"1102"})),(0,a.kt)("p",null,'As we can see, this preview is showing our "Hello from preview environment!" changes as well; whilst the main environment is unchanged.'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"animated GIF demonstrating both environments with different content",src:n(9413).Z,width:"1584",height:"1224"})),(0,a.kt)("h2",i({},{id:"conclusion"}),"Conclusion"),(0,a.kt)("p",null,"Azure DevOps now has support for named preview environments for Azure Static Web Apps; a powerful addition to the product."),(0,a.kt)("p",null,"You can see further discussion of this feature on the ",(0,a.kt)("a",i({parentName:"p"},{href:"https://github.com/Azure/static-web-apps/issues/510#issuecomment-1116307462"}),"Azure/static-web-apps repo"),"."))}m.isMDXComponent=!0},9413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/both-environments-b890794a924a785bb1624c0df66fa1f1.gif"},21041:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-azure-pipeline-main-deployment-a76135fdbb4c2e010bd4562fab9a9fea.png"},20161:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-azure-pipeline-preview-deployment-31a4f6a54877fa3821190e629d01b081.png"},81648:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-main-static-web-app-950a25d4b231ffc8668cdf6a9b7ce9bb.png"},39517:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/screenshot-of-preview-static-web-app-d2ab822989018ad0c005e5496792f62a.png"},88461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-image-44b5814dcf8723af68514dd3807b577a.png"}}]);
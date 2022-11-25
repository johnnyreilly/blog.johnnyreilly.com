"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[25896],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>b});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),u=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),b=o,d=m["".concat(c,".").concat(b)]||m[b]||p[b]||r;return t?a.createElement(d,i(i({ref:n},l),{},{components:t})):a.createElement(d,i({ref:n},l))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},46710:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});t(67294);var a=t(3905);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={title:"Output connection strings and keys from Azure Bicep",authors:"johnnyreilly",tags:["Bicep","Azure","connection string","keys"],image:"./title-image.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-07-07-output-connection-strings-and-keys-from-azure-bicep/index.md",source:"@site/blog/2021-07-07-output-connection-strings-and-keys-from-azure-bicep/index.md",title:"Output connection strings and keys from Azure Bicep",description:"If we're provisioning resources in Azure with Bicep, we may have a need to acquire the connection strings and keys of our newly deployed infrastructure. For example, the connection strings of an event hub or the access keys of a storage account. Perhaps we'd like to use them to run an end-to-end test, perhaps we'd like to store these secrets somewhere for later consumption. This post shows how to do that using Bicep and the listKeys helper. Optionally it shows how we could consume this in Azure Pipelines.",date:"2021-07-07T00:00:00.000Z",formattedDate:"July 7, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"Azure",permalink:"/tags/azure"},{label:"connection string",permalink:"/tags/connection-string"},{label:"keys",permalink:"/tags/keys"}],readingTime:6.135,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Output connection strings and keys from Azure Bicep",authors:"johnnyreilly",tags:["Bicep","Azure","connection string","keys"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"webpack? esbuild? Why not both?",permalink:"/2021/07/11/webpack-esbuild-why-not-both"},nextItem:{title:"C# 9 in-process Azure Functions",permalink:"/2021/07/01/c-sharp-9-azure-functions-in-process"}},u={image:t(36124).Z,authorsImageUrls:[void 0]},l=[{value:"Event Hub connection string",id:"event-hub-connection-string",level:2},{value:"Storage Account connection string",id:"storage-account-connection-string",level:2},{value:"From Bicep to Azure Pipelines",id:"from-bicep-to-azure-pipelines",level:2}],p={toc:l};function m(e){var{components:n}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",o({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If we're provisioning resources in Azure with Bicep, we may have a need to acquire the connection strings and keys of our newly deployed infrastructure. For example, the connection strings of an event hub or the access keys of a storage account. Perhaps we'd like to use them to run an end-to-end test, perhaps we'd like to store these secrets somewhere for later consumption. This post shows how to do that using Bicep and the ",(0,a.kt)("inlineCode",{parentName:"p"},"listKeys")," helper. Optionally it shows how we could consume this in Azure Pipelines."),(0,a.kt)("p",null,"Please note that exporting keys / connection strings etc from Bicep / ARM templates is generally considered to be a less secure approach. This is because these values will be visible inside the deployments section of the Azure Portal. Anyone who has access to this will be able to see them. An alternative approach would be permissioning our pipeline to access the resources directly. You can read about that approach ",(0,a.kt)("a",o({parentName:"p"},{href:"/2021/09/12/permissioning-azure-pipelines-bicep-role-assignments"}),"here"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image which contains the blog title",src:t(36124).Z,width:"750",height:"250"})),(0,a.kt)("h2",o({},{id:"event-hub-connection-string"}),"Event Hub connection string"),(0,a.kt)("p",null,"First of all, let's provision an Azure Event Hub. This involves deploying an event hub namespace, an event hub in that namespace and an authorization rule. The following Bicep will do this for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bicep"}),"// Create an event hub namespace\n\nvar eventHubNamespaceName = 'evhns-demo'\n\nresource eventHubNamespace 'Microsoft.EventHub/namespaces@2021-01-01-preview' = {\n  name: eventHubNamespaceName\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard'\n    tier: 'Standard'\n    capacity: 1\n  }\n  properties: {\n    zoneRedundant: true\n  }\n}\n\n// Create an event hub inside the namespace\n\nvar eventHubName = 'evh-demo'\n\nresource eventHubNamespaceName_eventHubName 'Microsoft.EventHub/namespaces/eventhubs@2021-01-01-preview' = {\n  parent: eventHubNamespace\n  name: eventHubName\n  properties: {\n    messageRetentionInDays: 7\n    partitionCount: 1\n  }\n}\n\n// Grant Listen and Send on our event hub\n\nresource eventHubNamespaceName_eventHubName_ListenSend 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2021-01-01-preview' = {\n  parent: eventHubNamespaceName_eventHubName\n  name: 'ListenSend'\n  properties: {\n    rights: [\n      'Listen'\n      'Send'\n    ]\n  }\n  dependsOn: [\n    eventHubNamespace\n  ]\n}\n")),(0,a.kt)("p",null,"When this is deployed to Azure, it will result in creating something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of event hub connection strings in the Azure Portal",src:t(85423).Z,width:"2358",height:"1460"})),(0,a.kt)("p",null,"As we can see, there are connection strings available which can be used to access the event hub. How do we get a connection string that we can play with? It's easily achieved by appending the following to our Bicep:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bicep"}),"// Determine our connection string\n\nvar eventHubNamespaceConnectionString = listKeys(eventHubNamespaceName_eventHubName_ListenSend.id, eventHubNamespaceName_eventHubName_ListenSend.apiVersion).primaryConnectionString\n\n// Output our variables\n\noutput eventHubNamespaceConnectionString string = eventHubNamespaceConnectionString\noutput eventHubName string = eventHubName\n")),(0,a.kt)("p",null,"What we're doing here is using the ",(0,a.kt)("a",o({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-resource#list"}),(0,a.kt)("inlineCode",{parentName:"a"},"listKeys"))," helper on our authorization rule and retrieving the handy ",(0,a.kt)("inlineCode",{parentName:"p"},"primaryConnectionString"),", which is then exposed as an output variable."),(0,a.kt)("h2",o({},{id:"storage-account-connection-string"}),"Storage Account connection string"),(0,a.kt)("p",null,"We'd like to obtain a connection string for a storage account also. Let's put together a Bicep file that creates a storage account and a container therein. (Incidentally, it's fairly common to have a storage account provisioned alongside an event hub to facilitate reading from an event hub.)"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bicep"}),"// Create a storage account\n\nvar storageAccountName = 'stdemo'\n\nresource eventHubNamespaceName_storageAccount 'Microsoft.Storage/storageAccounts@2021-02-01' = {\n  name: storageAccountName\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard_LRS'\n    tier: 'Standard'\n  }\n  kind: 'StorageV2'\n  properties: {\n    networkAcls: {\n      bypass: 'AzureServices'\n      defaultAction: 'Allow'\n    }\n    accessTier: 'Hot'\n    allowBlobPublicAccess: false\n    minimumTlsVersion: 'TLS1_2'\n    allowSharedKeyAccess: true\n  }\n}\n\n// create a container inside that storage account\n\nvar blobContainerName = 'test-container'\n\nresource storageAccountName_default_containerName 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-02-01' = {\n  name: '${storageAccountName}/default/${blobContainerName}'\n  dependsOn: [\n    eventHubNamespaceName_storageAccount\n  ]\n}\n")),(0,a.kt)("p",null,"When this is deployed to Azure, it will result in creating something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of storage account access keys in the Azure Portal",src:t(67482).Z,width:"2358",height:"1460"})),(0,a.kt)("p",null,"Again we can see, there are connection strings available in the Azure Portal, which can be used to access the storage account. However, things aren't quite as simple as previously; in that there doesn't seem to be a way to directly acquire a connection string. What we can do, is acquire a key; and construct ourselves a connection string with that. Here's how:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bicep"}),"// Determine our connection string\n\nvar blobStorageConnectionString = 'DefaultEndpointsProtocol=https;AccountName=${eventHubNamespaceName_storageAccount.name};EndpointSuffix=${environment().suffixes.storage};AccountKey=${listKeys(eventHubNamespaceName_storageAccount.id, eventHubNamespaceName_storageAccount.apiVersion).keys[0].value}'\n\n// Output our variable\n\noutput blobStorageConnectionString string = blobStorageConnectionString\noutput blobContainerName string = blobContainerName\n")),(0,a.kt)("p",null,"If you just wanted to know how to acquire connection strings from Bicep then you can stop now; we're done! But if you're curious on how the Bicep might connect to ",(0,a.kt)("del",{parentName:"p"},"the shoulder")," Azure Pipelines... Read on."),(0,a.kt)("h2",o({},{id:"from-bicep-to-azure-pipelines"}),"From Bicep to Azure Pipelines"),(0,a.kt)("p",null,"If we put together our snippets above into a single Bicep file it would look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-bicep"}),"// Create an event hub namespace\n\nvar eventHubNamespaceName = 'evhns-demo'\n\nresource eventHubNamespace 'Microsoft.EventHub/namespaces@2021-01-01-preview' = {\n  name: eventHubNamespaceName\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard'\n    tier: 'Standard'\n    capacity: 1\n  }\n  properties: {\n    zoneRedundant: true\n  }\n}\n\n// Create an event hub inside the namespace\n\nvar eventHubName = 'evh-demo'\n\nresource eventHubNamespaceName_eventHubName 'Microsoft.EventHub/namespaces/eventhubs@2021-01-01-preview' = {\n  parent: eventHubNamespace\n  name: eventHubName\n  properties: {\n    messageRetentionInDays: 7\n    partitionCount: 1\n  }\n}\n\n// Grant Listen and Send on our event hub\n\nresource eventHubNamespaceName_eventHubName_ListenSend 'Microsoft.EventHub/namespaces/eventhubs/authorizationRules@2021-01-01-preview' = {\n  parent: eventHubNamespaceName_eventHubName\n  name: 'ListenSend'\n  properties: {\n    rights: [\n      'Listen'\n      'Send'\n    ]\n  }\n  dependsOn: [\n    eventHubNamespace\n  ]\n}\n\n// Create a storage account\n\nvar storageAccountName = 'stdemo'\n\nresource eventHubNamespaceName_storageAccount 'Microsoft.Storage/storageAccounts@2021-02-01' = {\n  name: storageAccountName\n  location: resourceGroup().location\n  sku: {\n    name: 'Standard_LRS'\n    tier: 'Standard'\n  }\n  kind: 'StorageV2'\n  properties: {\n    networkAcls: {\n      bypass: 'AzureServices'\n      defaultAction: 'Allow'\n    }\n    accessTier: 'Hot'\n    allowBlobPublicAccess: false\n    minimumTlsVersion: 'TLS1_2'\n    allowSharedKeyAccess: true\n  }\n}\n\n// create a container inside that storage account\n\nvar blobContainerName = 'test-container'\n\nresource storageAccountName_default_containerName 'Microsoft.Storage/storageAccounts/blobServices/containers@2021-02-01' = {\n  name: '${storageAccountName}/default/${blobContainerName}'\n  dependsOn: [\n    eventHubNamespaceName_storageAccount\n  ]\n}\n\n// Determine our connection strings\n\nvar blobStorageConnectionString       = 'DefaultEndpointsProtocol=https;AccountName=${eventHubNamespaceName_storageAccount.name};EndpointSuffix=${environment().suffixes.storage};AccountKey=${listKeys(eventHubNamespaceName_storageAccount.id, eventHubNamespaceName_storageAccount.apiVersion).keys[0].value}'\nvar eventHubNamespaceConnectionString = listKeys(eventHubNamespaceName_eventHubName_ListenSend.id, eventHubNamespaceName_eventHubName_ListenSend.apiVersion).primaryConnectionString\n\n// Output our variables\n\noutput blobStorageConnectionString string = blobStorageConnectionString\noutput blobContainerName string = blobContainerName\noutput eventHubNamespaceConnectionString string = eventHubNamespaceConnectionString\noutput eventHubName string = eventHubName\n")),(0,a.kt)("p",null,"This might be consumed in an Azure Pipeline that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"- bash: az bicep build --file infra/our-test-app/main.bicep\n  displayName: 'Compile Bicep to ARM'\n\n- task: AzureResourceManagerTemplateDeployment@3\n  name: DeploySharedInfra\n  displayName: Deploy Shared ARM Template\n  inputs:\n    deploymentScope: Resource Group\n    azureResourceManagerConnection: ${{ parameters.serviceConnection }}\n    subscriptionId: $(subscriptionId)\n    action: Create Or Update Resource Group\n    resourceGroupName: $(azureResourceGroup)\n    location: $(location)\n    templateLocation: Linked artifact\n    csmFile: 'infra/our-test-app/main.json' # created by bash script\n    deploymentMode: Incremental\n    deploymentOutputs: deployOutputs\n\n- task: PowerShell@2\n  name: 'SetOutputVariables'\n  displayName: 'Set Output Variables'\n  inputs:\n    targetType: inline\n    script: |\n      $armOutputObj = '$(deployOutputs)' | ConvertFrom-Json\n      $armOutputObj.PSObject.Properties | ForEach-Object {\n        $keyname = $_.Name\n        $value = $_.Value.value\n\n        # Creates a standard pipeline variable\n        Write-Output \"##vso[task.setvariable variable=$keyName;]$value\"\n\n        # Creates an output variable\n        Write-Output \"##vso[task.setvariable variable=$keyName;issecret=true;isOutput=true]$value\"\n\n        # Display keys in pipeline\n        Write-Output \"output variable: $keyName\"\n      }\n    pwsh: true\n")),(0,a.kt)("p",null,"Above we can see:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the Bicep get compiled to ARM"),(0,a.kt)("li",{parentName:"ul"},"the ARM is deployed to Azure, with ",(0,a.kt)("inlineCode",{parentName:"li"},"deploymentOutputs")," being passed out at the end"),(0,a.kt)("li",{parentName:"ul"},"the outputs are turned into secret output variables inside the pipeline (the names of which are printed to the console)")),(0,a.kt)("p",null,"With the above in place, we now have all of our variables in place; ",(0,a.kt)("inlineCode",{parentName:"p"},"blobStorageConnectionString"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"blobContainerName"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"eventHubNamespaceConnectionString")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"eventHubName"),". These could now be consumed in whatever way is useful. Consider the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-yml"}),"- task: UseDotNet@2\n  displayName: 'Install .NET Core SDK 3.1.x'\n  inputs:\n    packageType: 'sdk'\n    version: 3.1.x\n\n- task: DotNetCoreCLI@2\n  displayName: 'dotnet run eventhub test'\n  inputs:\n    command: 'run'\n    arguments: 'eventhub test --eventHubNamespaceConnectionString \"$(eventHubNamespaceConnectionString)\" --eventHubName \"$(eventHubName)\" --blobStorageConnectionString \"$(blobStorageConnectionString)\" --blobContainerName \"$(blobContainerName)\"'\n    workingDirectory: '$(Build.SourcesDirectory)/OurTestApp'\n")),(0,a.kt)("p",null,"Here we run a .NET application and pass it our connection strings. Please note, there's nothing .NET specific about what we're doing above - it could be any kind of application, bash script or similar that consumes our connection strings. The significant thing is that we can acquire connection strings in an automated fashion, for use in whichever manner pleases us."))}m.isMDXComponent=!0},85423:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/event-hub-connection-string-c332b535fe5ae987d0b5095cbc7e08de.webp"},67482:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/storage-account-access-keys-eb71c62a744303169c7c0679f95bd9e5.png"},36124:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/title-image-674ca0e9fcf44f133fd835cefe4888e2.png"}}]);
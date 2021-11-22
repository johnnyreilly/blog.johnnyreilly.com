"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[19801],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=s,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48321:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),s=n(63366),r=(n(67294),n(3905)),i=["components"],o={title:"Azure standard availability tests with Bicep",authors:"johnnyreilly",tags:["Azure","Bicep","standard tests"],image:"blog/2021-11-18-azure-standard-tests-with-bicep/title-image.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/2021/11/18/azure-standard-tests-with-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-11-18-azure-standard-tests-with-bicep.md",source:"@site/blog/2021-11-18-azure-standard-tests-with-bicep.md",title:"Azure standard availability tests with Bicep",description:"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up.",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Bicep",permalink:"/tags/bicep"},{label:"standard tests",permalink:"/tags/standard-tests"}],readingTime:5.745,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"TypeScript vs JSDoc JavaScript",permalink:"/2021/11/22/typescript-vs-jsdoc-javascript"},nextItem:{title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",permalink:"/2021/10/31/nswag-generated-c-sharp-client-property-name-clash"}},p={authorsImageUrls:[void 0]},d=[{value:"What are standard tests?",id:"what-are-standard-tests",children:[],level:2},{value:"Standard test Bicep",id:"standard-test-bicep",children:[{value:"Locations / populations",id:"locations--populations",children:[],level:3},{value:"The <code>hidden-link</code> tag",id:"the-hidden-link-tag",children:[],level:3},{value:"App insights and standard tests share a resource group",id:"app-insights-and-standard-tests-share-a-resource-group",children:[],level:3}],level:2},{value:"Using <code>standard-test.bicep</code>",id:"using-standard-testbicep",children:[],level:2},{value:"Azure Pipelines test",id:"azure-pipelines-test",children:[],level:2}],c={toc:d};function h(e){var t=e.components,o=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image reading &quot;Azure standard availability tests with Bicep&quot; with a Bicep logo and Azure logos",src:n(59941).Z})),(0,r.kt)("h2",{id:"what-are-standard-tests"},"What are standard tests?"),(0,r.kt)("p",null,"To quote the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-standard-tests"},"docs"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Standard tests are a single request test that is similar to the URL ping test but more advanced. In addition to validating whether an endpoint is responding and measuring the performance, Standard tests also includes SSL certificate validity, proactive lifetime check, HTTP request verb (for example GET,HEAD,POST, etc.), custom headers, and custom data associated with your HTTP request.")),(0,r.kt)("p",null,"So we can use these to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"send requests to a URL"),(0,r.kt)("li",{parentName:"ul"},"from a variety of geographic locations"),(0,r.kt)("li",{parentName:"ul"},"and determine if it is responding with a 200 status code")),(0,r.kt)("p",null,"The URL may be one of our own service URLs, but it could be checking any kind of URL. It's web specific, not Azure specific."),(0,r.kt)("h2",{id:"standard-test-bicep"},"Standard test Bicep"),(0,r.kt)("p",null,"Now we're going to write a Bicep module that provisions a standard test named ",(0,r.kt)("inlineCode",{parentName:"p"},"standard-test.bicep"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bicep"},"@description('Tags that our resources need')\nparam tags object\n\n@description('The resource id of the app insights which the webtest will reference')\nparam appInsightsResourceId string\n\n@description('The name of the webtest to create')\nparam standardTestName string\n\n@description('URL to test')\nparam urlToTest string\n\n@description('Interval in seconds between test runs for this WebTest. Default value is 300.')\nparam frequency int = 300\n\n@description('Seconds until this WebTest will timeout and fail. Default value is 30.')\nparam timeout int = 30\n\n// useful reference:\n// https://docs.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability#azure\n@allowed([\n  'emea-au-syd-edge' // Australia\u202fEast\n  'latam-br-gru-edge' // Brazil South\n  'us-fl-mia-edge' // Central US\n  'apac-hk-hkn-azr' // East Asia\n  'us-va-ash-azr' // East US\n  'emea-ch-zrh-edge' // France South (Formerly France Central)\n  'emea-fr-pra-edge' // France Central\n  'apac-jp-kaw-edge' // Japan East\n  'emea-gb-db3-azr' // North Europe\n  'us-il-ch1-azr' // North Central US\n  'us-tx-sn1-azr' // South Central US\n  'apac-sg-sin-azr' // Southeast Asia\n  'emea-se-sto-edge' // UK West\n  'emea-nl-ams-azr' // West Europe\n  'us-ca-sjc-azr' // West US\n  'emea-ru-msa-edge' // UK South\n])\n@description('The populations (locations) for the test')\nparam testPopulations array = [\n  'emea-se-sto-edge' // UK West\n  'emea-ru-msa-edge' // UK South\n  'emea-gb-db3-azr' // North Europe\n  'us-va-ash-azr' // East US\n  'apac-sg-sin-azr' // Southeast Asia\n]\n\nvar tagsWithHiddenLink = union({\n  'hidden-link:${appInsightsResourceId}': 'Resource'\n}, tags)\n\nresource standardWebTest 'Microsoft.Insights/webtests@2018-05-01-preview' = {\n  name: standardTestName\n  location: resourceGroup().location\n  tags: tagsWithHiddenLink\n  kind: 'ping'\n  properties: {\n    SyntheticMonitorId: urlToTest\n    Name: urlToTest\n    Description: null\n    Enabled: true\n    Frequency: frequency\n    Timeout: timeout\n    Kind: 'standard'\n    RetryEnabled: true\n    Locations: [for testPopulation in testPopulations: {\n      Id: testPopulation\n    }]\n    Configuration: null\n    Request: {\n      RequestUrl: urlToTest\n      Headers: null\n      HttpVerb: 'GET'\n      RequestBody: null\n      ParseDependentRequests: false\n      FollowRedirects: null\n    }\n    ValidationRules: {\n      ExpectedHttpStatusCode: 200\n      IgnoreHttpsStatusCode: false\n      ContentValidation: null\n      SSLCheck: true\n      SSLCertRemainingLifetimeCheck: 7\n    }\n  }\n}\n\noutput standardWebTestName string = standardWebTest.name\noutput standardWebTestId string = standardWebTest.id\n")),(0,r.kt)("h3",{id:"locations--populations"},"Locations / populations"),(0,r.kt)("p",null,"You'll note that a parameter to the Bicep module is ",(0,r.kt)("inlineCode",{parentName:"p"},"testPopulations"),". These are the geographical places where requests will be sent from. You'll note we have a default value of five populations, but these could be any of the (presently) sixteen valid values. If you were wondering where those are sourced from, ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-standard-tests#location-population-tags"},"here is the link to the Azure docs"),"."),(0,r.kt)("h3",{id:"the-hidden-link-tag"},"The ",(0,r.kt)("inlineCode",{parentName:"h3"},"hidden-link")," tag"),(0,r.kt)("p",null,"Another significant call out should go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag. The ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden-link"),' tag is a mandatory tag that connects the test (known in Azure as a "webtest") to an app insights instance.'),(0,r.kt)("p",null,"If you do not provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag, or if you try to specify a resource group other than the app insights resource group, Azure will fail to deploy your test and you may find yourself presented with an error like this in the deployments section of the Azure Portal."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Resource should exist in the same resource group as the linked component")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of the Azure Portal Deployments section saying &quot;Resource should exist in the same resource group as the linked component&quot;",src:n(56660).Z})),(0,r.kt)("p",null,"In our module we set both the ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag as well as the tags that have been supplied via the ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," parameter."),(0,r.kt)("h3",{id:"app-insights-and-standard-tests-share-a-resource-group"},"App insights and standard tests share a resource group"),(0,r.kt)("p",null,"Another thing that can cause issues is the deployment of your app insights resource. It's not unusual to spin up Azure resources on demand, for a given branch of your source code. Those resources will be named in relation to the branch and will depend upon one another. I've never managed to successfully create an app insights resource, and reference it from a standard test within the same Bicep file. It appears to be necessary to separate the two actions, such that Azure recognises the existence of the app insights resource when the standard test is deployed."),(0,r.kt)("p",null,"If you are working with long-lived app insights it won't be an issue for you, but if you aren't it's worth being aware of."),(0,r.kt)("h2",{id:"using-standard-testbicep"},"Using ",(0,r.kt)("inlineCode",{parentName:"h2"},"standard-test.bicep")),(0,r.kt)("p",null,"Our Bicep module can be invoked from another Bicep module named ",(0,r.kt)("inlineCode",{parentName:"p"},"ping-them.bicep")," like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bicep"},"@description('Tags that our resources need')\nparam tags object\n\n@description('The name of the app insights')\nparam appInsightsName string\n\n@description('An object where the keys are the name of the web test and the values are the URL eg {\"my-standard-test\": \"https://status.azure.com/en-gb/status\"} ')\nparam standardTests object\n\nvar appInsightsResourceId = resourceId('Microsoft.Insights/components', appInsightsName)\n\nmodule standardTestsToCreate 'standard-test.bicep' = [for standardTest in items(standardTests): {\n  name: standardTest.key\n  params: {\n    tags: tags\n    appInsightsResourceId: appInsightsResourceId\n    standardTestName: standardTest.key\n    urlToTest: standardTest.value\n  }\n}]\n")),(0,r.kt)("p",null,"As you can see, this module itself takes a number of parameters, and will typically be invoked from some kind of continuous integration mechanism such as Azure Pipelines or GitHub Actions."),(0,r.kt)("p",null,"This module is written in the expectation that multiple URLs will need to be pinged, and so it has a parameter named ",(0,r.kt)("inlineCode",{parentName:"p"},"standardTests")," which is effectively a dictionary of key-value pairs, where the key is the name of the standard test, and the value is the URL to test."),(0,r.kt)("p",null,"The module makes use of the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-array#items"},(0,r.kt)("inlineCode",{parentName:"a"},"items"))," array helper in Bicep to convert the object into an array that can be iterated over."),(0,r.kt)("h2",{id:"azure-pipelines-test"},"Azure Pipelines test"),(0,r.kt)("p",null,"We're going to use Azure Pipelines to test this out. Here's an ",(0,r.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'trigger:\n  - main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - checkout: self\n    submodules: true\n\n  - bash: az bicep build --file ping-them.bicep\n    displayName: \'Compile Bicep to ARM\'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeploySharedWebTests\n    displayName: Deploy Shared Web Tests\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: ${{ variables.serviceConnection }}\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(resourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: \'ping-them.json\' # created by bash script\n      overrideParameters: >-\n        -tags {"owner": "@johnny_reilly", "branch": "$(Build.SourceBranchName)"}\n        -appInsightsName $(appInsightsName)\n        -standardTests {"my-standard-test": "https://status.azure.com/en-gb/status"}\n      deploymentMode: Incremental\n')),(0,r.kt)("p",null,"When run, it invokes our ",(0,r.kt)("inlineCode",{parentName:"p"},"ping-them.bicep")," module, passing two URLs to test."),(0,r.kt)("p",null,'When executed, you end up with a delightful "availability test" (which is your standard test) in Azure:'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of an Availability test in the Azure Portal",src:n(89888).Z})))}h.isMDXComponent=!0},89888:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-availability-3df735dce5d90c6965e04aeecd748d36.png"},56660:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-deployments-resource-should-exist-in-the-same-resource-group-0c735904ec15a000a9571d51d034d869.png"},59941:function(e,t,n){t.Z=n.p+"assets/images/title-image-64b411db371c0333acbfe9eb5c3a4fb8.png"}}]);
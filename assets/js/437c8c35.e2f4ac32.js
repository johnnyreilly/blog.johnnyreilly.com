"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[98310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});n(67294);var a=n(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={title:"Azurite and Table Storage in a dev container",authors:"johnnyreilly",tags:["VS Code","devcontainer","Docker"],image:"./dev-container-start.gif",hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/05/15/azurite-and-table-storage-dev-container",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-05-15-azurite-and-table-storage-dev-container/index.md",source:"@site/blog/2021-05-15-azurite-and-table-storage-dev-container/index.md",title:"Azurite and Table Storage in a dev container",description:'It\'s great to be able to develop locally without needing a "real" database to connect to. Azurite is an Azure Storage emulator which exists to support just that. This post demonstrates how to run Azurite v3 in a dev container, such that you can access the Table Storage API, which is currently in preview.',date:"2021-05-15T00:00:00.000Z",formattedDate:"May 15, 2021",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"devcontainer",permalink:"/tags/devcontainer"},{label:"Docker",permalink:"/tags/docker"}],readingTime:6.51,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azurite and Table Storage in a dev container",authors:"johnnyreilly",tags:["VS Code","devcontainer","Docker"],image:"./dev-container-start.gif",hide_table_of_contents:!1},prevItem:{title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep"},nextItem:{title:"Create a Pipeline with the Azure DevOps API",permalink:"/2021/05/08/create-pipeline-with-azure-devops-api"}},c={image:n(84213).Z,authorsImageUrls:[void 0]},u=[{value:"Azurite in VS Code",id:"azurite-in-vs-code",level:2},{value:"Make a function app",id:"make-a-function-app",level:2},{value:"Can we swap out Azurite for The Real Thing\u2122\ufe0f?",id:"can-we-swap-out-azurite-for-the-real-thing\ufe0f",level:2}],p={toc:u};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,a.kt)("wrapper",r({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'It\'s great to be able to develop locally without needing a "real" database to connect to. ',(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/Azurite"}),"Azurite")," is an Azure Storage emulator which exists to support just that. This post demonstrates how to run Azurite v3 in a ",(0,a.kt)("a",r({parentName:"p"},{href:"https://code.visualstudio.com/docs/remote/containers"}),"dev container"),", such that you can access the Table Storage API, which is currently in preview."),(0,a.kt)("h2",r({},{id:"azurite-in-vs-code"}),"Azurite in VS Code"),(0,a.kt)("p",null,(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/Azurite/releases/tag/v3.12.0"}),"Azurite v3.12.0")," recently shipped, and with it came:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Preview of Table Service in npm package and docker image. (Visual Studio Code extension doesn't support Table Service in this release)")),(0,a.kt)("p",null,"You'll note that whilst there's a VS Code extension for Azurite, it doesn't have support for the Table Service yet. However, we do have it available in the form of a Docker image. So whilst we may not be able to directly use the Table APIs of Azurite in VS Code, what we could do instead is use a dev container."),(0,a.kt)("p",null,"We'll start by making ourselves a new directory and open VS Code in that location:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir azurite-devcontainer\ncode azurite-devcontainer\n")),(0,a.kt)("p",null,"We're going to initialise a dev container there for function apps based upon ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/microsoft/vscode-dev-containers/tree/master/containers/azure-functions-dotnetcore-3.1"}),"the example Azure Functions & C# - .NET Core 3.1 container"),". We'll use it later to test our Azurite connectivity. To do that let's create ourselves a ",(0,a.kt)("inlineCode",{parentName:"p"},".devcontainer")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir .devcontainer\n")),(0,a.kt)("p",null,"And inside there we'll add a ",(0,a.kt)("inlineCode",{parentName:"p"},"devcontainer.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-json"}),'// For format details, see https://aka.ms/devcontainer.json. For config options, see the README at:\n// https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/azure-functions-dotnetcore-3.1\n{\n  "name": "Azurite and Azure Functions & C# - .NET Core 3.1",\n  "dockerComposeFile": "docker-compose.yml",\n  "service": "app",\n  "workspaceFolder": "/workspace",\n  "forwardPorts": [7071],\n\n  // Set *default* container specific settings.json values on container create.\n  "settings": {\n    "terminal.integrated.defaultProfile.linux": "/bin/bash"\n  },\n\n  // Add the IDs of extensions you want installed when the container is created.\n  "extensions": [\n    "ms-azuretools.vscode-azurefunctions",\n    "ms-dotnettools.csharp"\n  ],\n\n  // Use \'postCreateCommand\' to run commands after the container is created.\n  // "postCreateCommand": "dotnet restore",\n\n  // Comment out connect as root instead. More info: https://aka.ms/vscode-remote/containers/non-root.\n  "remoteUser": "vscode"\n}\n')),(0,a.kt)("p",null,"As we can see, we're referencing a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file; let's add that:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-yml"}),"version: '3'\n\nservices:\n  app:\n    build:\n      context: .\n      dockerfile: Dockerfile\n      args:\n        # On Linux, you may need to update USER_UID and USER_GID below if not your local UID is not 1000.\n        USER_UID: 10000\n        USER_GID: 10000\n\n    init: true\n    volumes:\n      - ..:/workspace:cached\n\n    # Overrides default command so things don't shut down after the process ends.\n    command: sleep infinity\n\n    # Uncomment the next line to use a non-root user for all processes.\n    user: vscode\n\n  # run azurite and expose the relevant ports\n  azurite:\n    image: ./'mcr.microsoft.com/azure-storage/azurite'\n    ports:\n      - '10000:10000'\n      - '10001:10001'\n      - '10002:10002'\n")),(0,a.kt)("p",null,"It consists of two services; ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite")," is the Docker image of Azurite, which exposes the Azurite ports so ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," can access it. Note the name of ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite"),"; that will turn out to be significant later. We're actually only going to use the Table Storage port of ",(0,a.kt)("inlineCode",{parentName:"p"},"10002"),", but this would allow us to use Blobs and Queues also. The ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite")," service is effectively going to be executing this command for us when it runs:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"docker run -p 10000:10000 -p 10001:10001 -p 10002:10002 mcr.microsoft.com/azure-storage/azurite\n")),(0,a.kt)("p",null,"Now let's look at ",(0,a.kt)("inlineCode",{parentName:"p"},"app"),". This is our Azure Functions container. It references a ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," which we need to add:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-dockerfile"}),"# Find the Dockerfile for mcr.microsoft.com/azure-functions/dotnet:3.0-dotnet3-core-tools at this URL\n# https://github.com/Azure/azure-functions-docker/blob/master/host/3.0/buster/amd64/dotnet/dotnet-core-tools.Dockerfile\nFROM mcr.microsoft.com/azure-functions/dotnet:3.0-dotnet3-core-tools\n")),(0,a.kt)("p",null,"We now have ourselves a dev container! VS Code should prompt us to reopen inside the container:"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"eager",fetchpriority:"high",alt:"The dev container starting",src:n(84213).Z,width:"2282",height:"1342"})),(0,a.kt)("h2",r({},{id:"make-a-function-app"}),"Make a function app"),(0,a.kt)("p",null,"Now we're inside our container, we're going to make ourselves a function app that will use Azurite. Let's fire up the terminal in VS Code and create a function app containing a simple HTTP function:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"mkdir src\ncd src\nfunc init TableStorage --dotnet\ncd TableStorage\n")),(0,a.kt)("p",null,"We need to add a package for the APIs which interact with Table Storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"dotnet restore\ndotnet add package Microsoft.Azure.Cosmos.Table --version 1.0.8\n")),(0,a.kt)("p",null,"The name is somewhat misleading, as it's both for Cosmos ",(0,a.kt)("em",{parentName:"p"},"and")," for Table Storage. Famously, naming things is hard \ud83d\ude09."),(0,a.kt)("p",null,"Our mission is to be able to write and read from Azurite Table Storage. We need something to read and write that we care about. I like to visit ",(0,a.kt)("a",r({parentName:"p"},{href:"https://www.kew.org/kew-gardens"}),"Kew Gardens")," and so let's imagine ourselves a system which tracks visitors to Kew."),(0,a.kt)("p",null,"We're going to add a class called ",(0,a.kt)("inlineCode",{parentName:"p"},"KewGardensVisit"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing Microsoft.Azure.Cosmos.Table;\n\nnamespace TableStorage\n{\n    public class KewGardenVisit : TableEntity\n    {\n        public KewGardenVisit() {}\n        public KewGardenVisit(DateTime arrivedAt, string memberId)\n        {\n            PartitionKey = arrivedAt.ToString("yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture);\n            RowKey = memberId;\n\n            ArrivedAt = arrivedAt;\n        }\n\n        public DateTime ArrivedAt { get; set; }\n    }\n}\n')),(0,a.kt)("p",null,"Now we have our entity, let's add a class called ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloAzuriteTableStorage")," which will contain functions which interact with the storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.Linq;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Azure.WebJobs;\nusing Microsoft.Azure.WebJobs.Extensions.Http;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.Logging;\nusing Microsoft.Azure.Cosmos.Table;\n\nnamespace TableStorage\n{\n    public static class HelloAzuriteTableStorage\n    {\n        // Note how we\'re addressing our azurite service\n        const string AZURITE_TABLESTORAGE_CONNECTIONSTRING =\n            "DefaultEndpointsProtocol=http;" +\n            "AccountName=devstoreaccount1;" +\n            "AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;" +\n            "BlobEndpoint=http://azurite:10000/devstoreaccount1;" +\n            "QueueEndpoint=http://azurite:10001/devstoreaccount1;" +\n            "TableEndpoint=http://azurite:10002/devstoreaccount1;";\n        const string TABLE_NAME = "KewGardenVisits";\n\n        [FunctionName("SaveVisit")]\n        public static async Task<IActionResult> RunSaveVisit(\n            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,\n            ILogger log)\n        {\n            try\n            {\n                var table = await GetTable(log);\n\n                // Create the InsertOrReplace table operation\n                var insertOrMergeOperation = TableOperation.InsertOrMerge(new KewGardenVisit(\n                    arrivedAt: DateTime.UtcNow,\n                    memberId: "JR123456743921"\n                ));\n\n                // Execute the operation.\n                TableResult result = await table.ExecuteAsync(insertOrMergeOperation);\n                KewGardenVisit savedTelemetry = result.Result as KewGardenVisit;\n\n                if (result.RequestCharge.HasValue)\n                    log.LogInformation("Request Charge of InsertOrMerge Operation: " + result.RequestCharge);\n\n                return new OkObjectResult(savedTelemetry);\n\n            }\n            catch (Exception e)\n            {\n                log.LogError(e, "Problem saving");\n            }\n\n            return new BadRequestObjectResult("There was an issue");\n        }\n\n        [FunctionName("GetTodaysVisits")]\n        public static async Task<IActionResult> RunGetTodaysVisits(\n            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = null)] HttpRequest req,\n            ILogger log)\n        {\n            try\n            {\n                var table = await GetTable(log);\n\n                var snowOnTheAdoTelemetries = table.CreateQuery<KewGardenVisit>()\n                    .Where(x => x.PartitionKey == DateTime.UtcNow.ToString("yyyy-MM-dd", System.Globalization.CultureInfo.InvariantCulture))\n                    .ToArray();\n\n                return new OkObjectResult(snowOnTheAdoTelemetries);\n\n            }\n            catch (Exception e)\n            {\n                log.LogError(e, "Problem loading");\n                return new BadRequestObjectResult("There was an issue");\n            }\n        }\n\n        private static async Task<CloudTable> GetTable(ILogger log)\n        {\n            // Construct a new TableClient using a TableSharedKeyCredential.\n            var storageAccount = CloudStorageAccount.Parse(AZURITE_TABLESTORAGE_CONNECTIONSTRING); ;\n\n            // Create a table client for interacting with the table service\n            CloudTableClient tableClient = storageAccount.CreateCloudTableClient(new TableClientConfiguration());\n\n            // Create a table client for interacting with the table service\n            CloudTable table = tableClient.GetTableReference(TABLE_NAME);\n            if (await table.CreateIfNotExistsAsync())\n                log.LogInformation("Created Table named: {0}", TABLE_NAME);\n            else\n                log.LogInformation("Table {0} already exists", TABLE_NAME);\n\n            return table;\n        }\n    }\n}\n')),(0,a.kt)("p",null,"There's a couple of things to draw attention to here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"AZURITE_TABLESTORAGE_CONNECTIONSTRING")," - this mega string is based upon the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/Azurite#connection-strings"}),"Azurite connection string docs"),". The account name and key are the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://github.com/Azure/Azurite#default-storage-account"}),"Azurite default storage accounts"),". You'll note we target ",(0,a.kt)("inlineCode",{parentName:"p"},"TableEndpoint=http://azurite:10002/devstoreaccount1"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite")," here is replacing the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," where Azurite typically listens. This ",(0,a.kt)("inlineCode",{parentName:"p"},"azurite")," name comes from the name of our service in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We're creating two functions ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveVisit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTodaysVisits"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"SaveVisit")," creates an entry in our storage to represent someone's visit. It's a hardcoded value representing me, and we're exposing a write operation at a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," endpoint which is not very RESTful. But this is a demo and Roy Fielding would forgive us. ",(0,a.kt)("inlineCode",{parentName:"p"},"GetTodaysVisits")," allows us to read back the visits that have happened today."))),(0,a.kt)("p",null,"Let's see if it works by entering ",(0,a.kt)("inlineCode",{parentName:"p"},"func start")," and browsing to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7071/api/savevisit")),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"a screenshot of the response from the savevisits endpoint",src:n(82785).Z,width:"1110",height:"472"})),(0,a.kt)("p",null,"Looking good. Now let's see if we can query them at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:7071/api/gettodaysvisits"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"a screenshot of the response from the gettodaysvisits endpoint",src:n(38637).Z,width:"1110",height:"472"})),(0,a.kt)("p",null,"Disco."),(0,a.kt)("h2",r({},{id:"can-we-swap-out-azurite-for-the-real-thing\ufe0f"}),"Can we swap out Azurite for The Real Thing\u2122\ufe0f?"),(0,a.kt)("p",null,"You may be thinking ",(0,a.kt)("em",{parentName:"p"},'"This is great! But in the end I need to write to Azure Table Storage itself; not Azurite."')),(0,a.kt)("p",null,"That's a fair point. Fortunately, it's only the connection string that determines where you read and write to. It would be fairly easy to dependency inject the appropriate connection string, or indeed a service that is connected to the storage you wish to target. If you want to make that happen, you can."))}d.isMDXComponent=!0},84213:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dev-container-start-3af06d7f824b78f55827d683962fe5be.gif"},38637:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gettodaysvisits-dcbd78683a30f8294b718d3af86d62f1.png"},82785:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/savevisits-a8d90f0716f36cad91c8b791242352b7.png"}}]);
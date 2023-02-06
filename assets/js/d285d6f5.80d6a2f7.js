"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[32408],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):u(u({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(o),d=r,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||a;return o?n.createElement(m,u(u({ref:t},s),{},{components:o})):n.createElement(m,u({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,u=new Array(a);u[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,u[1]=i;for(var p=2;p<a;p++)u[p]=o[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9929:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>u,metadata:()=>l,toc:()=>s});o(67294);var n=o(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}const u={slug:"azure-cli-show-query-output-properties",title:"Query deployment outputs with the Azure CLI",authors:"johnnyreilly",tags:["azure cli","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},i=void 0,l={permalink:"/azure-cli-show-query-output-properties",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",source:"@site/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",title:"Query deployment outputs with the Azure CLI",description:"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs.",date:"2021-12-28T00:00:00.000Z",formattedDate:"December 28, 2021",tags:[{label:"azure cli",permalink:"/tags/azure-cli"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:2.575,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"azure-cli-show-query-output-properties",title:"Query deployment outputs with the Azure CLI",authors:"johnnyreilly",tags:["azure cli","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Preload fonts with Docusaurus (updated 03/11/2022)",permalink:"/preload-fonts-with-docusaurus"},nextItem:{title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",permalink:"/azure-container-apps-build-and-deploy-with-bicep-and-github-actions"}},p={image:o(2393).Z,authorsImageUrls:[void 0]},s=[{value:"Deployment outputs",id:"deployment-outputs",level:2},{value:"Acquire all outputs",id:"acquire-all-outputs",level:2},{value:"Acquire an individual output",id:"acquire-an-individual-output",level:2},{value:"Convert deployment outputs to GitHub Action job outputs",id:"convert-deployment-outputs-to-github-action-job-outputs",level:2}],c={toc:s};function h(e){var{components:t}=e,u=a(e,["components"]);return(0,n.kt)("wrapper",r({},c,u,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs."),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Query deployment outputs with the Azure CLI&quot; with the Azure logo and the Azure Cloud Shell in the background",src:o(2393).Z,width:"1600",height:"900"})),(0,n.kt)("h2",r({},{id:"deployment-outputs"}),"Deployment outputs"),(0,n.kt)("p",null,"When we deploy something to Azure, we frequently have outputs which we want to use. Let's consider the canonical case, whereby a website is created and we want to use the URL of where it has been deployed. We can see these values in the Azure Portal:"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",alt:"a screenshot of the Azure portal demostrating deployment outputs, there is a single output of &quot;nodeUrl&quot;",src:o(79665).Z,width:"1253",height:"320"})),(0,n.kt)("p",null,"The above deployment has a single output of ",(0,n.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". Rather than logging into the portal to acquire this value, how can we do so using the Azure CLI and bash?"),(0,n.kt)("h2",r({},{id:"acquire-all-outputs"}),"Acquire all outputs"),(0,n.kt)("p",null,"The way to acquire outputs from the Azure CLI is using the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://docs.microsoft.com/en-us/cli/azure/group/deployment?view=azure-cli-latest#az_group_deployment_show"}),(0,n.kt)("inlineCode",{parentName:"a"},"az group deployment show"))," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"az deployment group show \\\n  -g <resource-group-name> \\\n  -n <deployment-name> \\\n  --query properties.outputs\n")),(0,n.kt)("p",null,"Running the above will produce a piece of JSON that contains all our outputs. In our case, we have a single deployment output: ",(0,n.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". So our JSON looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-json"}),'{\n  "nodeUrl": {\n    "type": "String",\n    "value": "some.url.northeurope.azurecontainerapps.io"\n  }\n}\n')),(0,n.kt)("h2",r({},{id:"acquire-an-individual-output"}),"Acquire an individual output"),(0,n.kt)("p",null,"To acquire an individual output, you can provide a targeted ",(0,n.kt)("inlineCode",{parentName:"p"},"--query")," to pull out the value you care about. However, there's a slight issue:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs.nodeUrl.value)\njohn@Azure:~$ echo $NODE_URL\n"some.url.northeurope.azurecontainerapps.io"\n')),(0,n.kt)("p",null,"The value we capture in the ",(0,n.kt)("inlineCode",{parentName:"p"},"NODE_URL")," variable above is surrounded by quotes. These will probably get in the way when we're scripting something with this. Rather than purging them with bash, I tend to use ",(0,n.kt)("a",r({parentName:"p"},{href:"https://stedolan.github.io/jq/manual/"}),(0,n.kt)("inlineCode",{parentName:"a"},"jq"),"'s ",(0,n.kt)("inlineCode",{parentName:"a"},"--raw-output / -r")," option")," to grab the raw string."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs | jq -r '.nodeUrl.value')\njohn@Azure:~$ echo $NODE_URL\nsome.url.northeurope.azurecontainerapps.io\n")),(0,n.kt)("p",null,"Perfect!"),(0,n.kt)("p",null,"There's another approach you could use which ",(0,n.kt)("a",r({parentName:"p"},{href:"https://twitter.com/alexandair/status/1476554234543890437"}),"Aleksandar Nikoli\u0107 shared"),", which means jq needn't be used at all; using the ",(0,n.kt)("inlineCode",{parentName:"p"},"tsv")," output formatter:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),"john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs.nodeUrl.value -o tsv)\njohn@Azure:~$ echo $NODE_URL\nsome.url.northeurope.azurecontainerapps.io\n")),(0,n.kt)("h2",r({},{id:"convert-deployment-outputs-to-github-action-job-outputs"}),"Convert deployment outputs to GitHub Action job outputs"),(0,n.kt)("p",null,"Before wrapping up, here's one more useful script, if you find yourself automating in the context of GitHub Actions. It's often useful to take the deployment outputs, and convert them into GHA job outputs that can be used in other jobs."),(0,n.kt)("p",null,"With JSON and ",(0,n.kt)("a",r({parentName:"p"},{href:"https://stedolan.github.io/jq/"}),"jq")," in hand, it's possible to expose these like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-bash"}),'DEPLOYMENT_OUTPUTS=$(az deployment group show \\\n  --resource-group ${{ env.RESOURCE_GROUP }} \\\n  --name $DEPLOYMENT_NAME \\\n  --query properties.outputs)\n\necho \'convert deployment outputs to outputs\'\necho $DEPLOYMENT_OUTPUTS | jq -c \'. | to_entries[] | [.key, .value.value]\' |\n  while IFS=$"\\n" read -r c; do\n    OUTPUT_NAME=$(echo "$c" | jq -r \'.[0]\')\n    OUTPUT_VALUE=$(echo "$c" | jq -r \'.[1]\')\n    echo "setting output $OUTPUT_NAME=$OUTPUT_VALUE"\n    echo "::set-output name=$OUTPUT_NAME::$OUTPUT_VALUE"\n  done\n')))}h.isMDXComponent=!0},79665:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/screenshot-azure-portal-deployment-outputs-ef95ea65dbbc38a67a5734b878d26579.png"},2393:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/title-image-9d464523ef4bead98a36a95e5c569945.png"}}]);
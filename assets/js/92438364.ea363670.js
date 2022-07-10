"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[16598],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return d}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?u(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)o=u[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,u=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),h=p(o),d=r,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||u;return o?n.createElement(m,a(a({ref:t},s),{},{components:o})):n.createElement(m,a({ref:t},s))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=o.length,a=new Array(u);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<u;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},63774:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var n=o(83117),r=o(80102),u=(o(67294),o(3905)),a=["components"],i={title:"Query deployment outputs with the Azure CLI",authors:"johnnyreilly",tags:["Azure CLI","deployment outputs","bash","jq","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/12/28/azure-cli-show-query-output-properties",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",source:"@site/blog/2021-12-28-azure-cli-show-query-output-properties/index.md",title:"Query deployment outputs with the Azure CLI",description:"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs.",date:"2021-12-28T00:00:00.000Z",formattedDate:"December 28, 2021",tags:[{label:"Azure CLI",permalink:"/tags/azure-cli"},{label:"deployment outputs",permalink:"/tags/deployment-outputs"},{label:"bash",permalink:"/tags/bash"},{label:"jq",permalink:"/tags/jq"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:2.57,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Query deployment outputs with the Azure CLI",authors:"johnnyreilly",tags:["Azure CLI","deployment outputs","bash","jq","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},prevItem:{title:"Preload fonts with Docusaurus",permalink:"/2021/12/29/preload-fonts-with-docusaurus"},nextItem:{title:"Azure Container Apps: build and deploy with Bicep and GitHub Actions",permalink:"/2021/12/27/azure-container-apps-build-and-deploy-with-bicep-and-github-actions"}},s={image:o(68947).Z,authorsImageUrls:[void 0]},c=[{value:"Deployment outputs",id:"deployment-outputs",level:2},{value:"Acquire all outputs",id:"acquire-all-outputs",level:2},{value:"Acquire an individual output",id:"acquire-an-individual-output",level:2},{value:"Convert deployment outputs to GitHub Action job outputs",id:"convert-deployment-outputs-to-github-action-job-outputs",level:2}],h={toc:c};function d(e){var t=e.components,i=(0,r.Z)(e,a);return(0,u.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"It's often desirable to query the outputs of deployments to Azure. This post demonstrates how to do this using the Azure CLI, bash and jq. It also shows how to generically convert deployment outputs to GitHub Action job outputs."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"title image reading &quot;Query deployment outputs with the Azure CLI&quot; with the Azure logo and the Azure Cloud Shell in the background",src:o(68947).Z,width:"1600",height:"900"})),(0,u.kt)("h2",{id:"deployment-outputs"},"Deployment outputs"),(0,u.kt)("p",null,"When we deploy something to Azure, we frequently have outputs which we want to use. Let's consider the canonical case, whereby a website is created and we want to use the URL of where it has been deployed. We can see these values in the Azure Portal:"),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"a screenshot of the Azure portal demostrating deployment outputs, there is a single output of &quot;nodeUrl&quot;",src:o(31569).Z,width:"1253",height:"320"})),(0,u.kt)("p",null,"The above deployment has a single output of ",(0,u.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". Rather than logging into the portal to acquire this value, how can we do so using the Azure CLI and bash?"),(0,u.kt)("h2",{id:"acquire-all-outputs"},"Acquire all outputs"),(0,u.kt)("p",null,"The way to acquire outputs from the Azure CLI is using the ",(0,u.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/cli/azure/group/deployment?view=azure-cli-latest#az_group_deployment_show"},(0,u.kt)("inlineCode",{parentName:"a"},"az group deployment show"))," command:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"az deployment group show \\\n  -g <resource-group-name> \\\n  -n <deployment-name> \\\n  --query properties.outputs\n")),(0,u.kt)("p",null,"Running the above will produce a piece of JSON that contains all our outputs. In our case, we have a single deployment output: ",(0,u.kt)("inlineCode",{parentName:"p"},"nodeUrl"),". So our JSON looks like this:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nodeUrl": {\n    "type": "String",\n    "value": "some.url.northeurope.azurecontainerapps.io"\n  }\n}\n')),(0,u.kt)("h2",{id:"acquire-an-individual-output"},"Acquire an individual output"),(0,u.kt)("p",null,"To acquire an individual output, you can provide a targeted ",(0,u.kt)("inlineCode",{parentName:"p"},"--query")," to pull out the value you care about. However, there's a slight issue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs.nodeUrl.value)\njohn@Azure:~$ echo $NODE_URL\n"some.url.northeurope.azurecontainerapps.io"\n')),(0,u.kt)("p",null,"The value we capture in the ",(0,u.kt)("inlineCode",{parentName:"p"},"NODE_URL")," variable above is surrounded by quotes. These will probably get in the way when we're scripting something with this. Rather than purging them with bash, I tend to use ",(0,u.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/"},(0,u.kt)("inlineCode",{parentName:"a"},"jq"),"'s ",(0,u.kt)("inlineCode",{parentName:"a"},"--raw-output / -r")," option")," to grab the raw string."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs | jq -r '.nodeUrl.value')\njohn@Azure:~$ echo $NODE_URL\nsome.url.northeurope.azurecontainerapps.io\n")),(0,u.kt)("p",null,"Perfect!"),(0,u.kt)("p",null,"There's another approach you could use which ",(0,u.kt)("a",{parentName:"p",href:"https://twitter.com/alexandair/status/1476554234543890437"},"Aleksandar Nikoli\u0107 shared"),", which means jq needn't be used at all; using the ",(0,u.kt)("inlineCode",{parentName:"p"},"tsv")," output formatter:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"john@Azure:~$ NODE_URL=$(az deployment group show -g rg-aca -n our-deployment --query properties.outputs.nodeUrl.value -o tsv)\njohn@Azure:~$ echo $NODE_URL\nsome.url.northeurope.azurecontainerapps.io\n")),(0,u.kt)("h2",{id:"convert-deployment-outputs-to-github-action-job-outputs"},"Convert deployment outputs to GitHub Action job outputs"),(0,u.kt)("p",null,"Before wrapping up, here's one more useful script, if you find yourself automating in the context of GitHub Actions. It's often useful to take the deployment outputs, and convert them into GHA job outputs that can be used in other jobs."),(0,u.kt)("p",null,"With JSON and ",(0,u.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," in hand, it's possible to expose these like so:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},'DEPLOYMENT_OUTPUTS=$(az deployment group show \\\n  --resource-group ${{ env.RESOURCE_GROUP }} \\\n  --name $DEPLOYMENT_NAME \\\n  --query properties.outputs)\n\necho \'convert deployment outputs to outputs\'\necho $DEPLOYMENT_OUTPUTS | jq -c \'. | to_entries[] | [.key, .value.value]\' |\n  while IFS=$"\\n" read -r c; do\n    OUTPUT_NAME=$(echo "$c" | jq -r \'.[0]\')\n    OUTPUT_VALUE=$(echo "$c" | jq -r \'.[1]\')\n    echo "setting output $OUTPUT_NAME=$OUTPUT_VALUE"\n    echo "::set-output name=$OUTPUT_NAME::$OUTPUT_VALUE"\n  done\n')))}d.isMDXComponent=!0},31569:function(e,t,o){t.Z=o.p+"assets/images/screenshot-azure-portal-deployment-outputs-fabf54282469cfc7828ea8cd5b42c93a.png"},68947:function(e,t,o){t.Z=o.p+"assets/images/title-image-8162c254edf92f519370af4803172e67.png"}}]);
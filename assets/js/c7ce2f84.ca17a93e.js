"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[32461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),b=a,y=c["".concat(p,".").concat(b)]||c[b]||d[b]||o;return n?i.createElement(y,r(r({ref:t},u),{},{components:n})):i.createElement(y,r({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});n(67294);var i=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const r={title:"Azure Static Web Apps: build app externally",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions"],image:"./title-image.png",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",hide_table_of_contents:!1},l=void 0,p={permalink:"/2022/12/18/azure-static-web-apps-build-app-externally",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2022-12-18-azure-static-web-apps-build-app-externally/index.md",source:"@site/blog/2022-12-18-azure-static-web-apps-build-app-externally/index.md",title:"Azure Static Web Apps: build app externally",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",date:"2022-12-18T00:00:00.000Z",formattedDate:"December 18, 2022",tags:[{label:"Azure Static Web Apps",permalink:"/tags/azure-static-web-apps"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:3.135,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure Static Web Apps: build app externally",authors:"johnnyreilly",tags:["Azure Static Web Apps","GitHub Actions"],image:"./title-image.png",description:"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with `skip_app_build: true`.",hide_table_of_contents:!1},prevItem:{title:"Azure Static Web Apps: dynamic redirects with Azure Functions",permalink:"/2022/12/22/azure-static-web-apps-dynamic-redirects-azure-functions"},nextItem:{title:"Publishing Docusaurus to dev.to with the dev.to API",permalink:"/2022/12/11/publishing-docusaurus-to-devto-with-devto-api"}},s={image:n(43662).Z,authorsImageUrls:[void 0]},u=[{value:"Build with Oryx",id:"build-with-oryx",level:2},{value:"Build externally",id:"build-externally",level:2}],c={toc:u};function d(e){var{components:t}=e,r=o(e,["components"]);return(0,i.kt)("wrapper",a({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Azure Static Web Apps can generally build themselves with Oryx. If you need finer grained control of your build, you can with ",(0,i.kt)("inlineCode",{parentName:"p"},"skip_app_build: true")," and some GitHub Actions."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"title image reading &quot;Azure Static Web Apps: build app externally&quot; with the Static Web Apps logo",src:n(43662).Z,width:"800",height:"450"})),(0,i.kt)("h2",a({},{id:"build-with-oryx"}),"Build with Oryx"),(0,i.kt)("p",null,"I love Azure Static Web Apps. ",(0,i.kt)("a",a({parentName:"p"},{href:"https://blog.johnnyreilly.com"}),"My blog")," is built with them. I've written about them many times."),(0,i.kt)("p",null,"One of the things I like about Azure Static Web Apps is that they can build themselves. You can just push your code to GitHub and they'll build it using a tool called ",(0,i.kt)("a",a({parentName:"p"},{href:"https://github.com/microsoft/Oryx"}),"Oryx"),'. This is great for simple scenarios. Actually, it\'s good for medium to complex scenarios too. However, if you ever get to that "break glass" moment where you need to do something unusual with your build, you can.'),(0,i.kt)("p",null,"Let's start by looking at a simple Azure Static Web Apps configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"- name: Static Web App - get API key for deployment\n  id: static_web_app_apikey\n  uses: azure/CLI@v1\n  with:\n    inlineScript: |\n      APIKEY=$(az staticwebapp secrets list --name '${{ env.STATICWEBAPPNAME }}' | jq -r '.properties.apiKey')\n      echo \"::set-output name=APIKEY::$APIKEY\"\n\n- name: Static Web App - build and deploy\n  id: static_web_app_build_and_deploy\n  uses: Azure/static-web-apps-deploy@v1\n  with:\n    azure_static_web_apps_api_token: ${{ steps.static_web_app_apikey.outputs.APIKEY }}\n    repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)\n    action: 'upload'\n    app_location: '/blog-website' # App source code path\n    output_location: 'build' # Built app content directory - optional\n\n    # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig\n    api_location: '' # Api source code path - optional\n")),(0,i.kt)("p",null,"Above is an old version of what my blog used to build and deploy itself. With the yaml above, Oryx built the app and deployed it. ",(0,i.kt)("a",a({parentName:"p"},{href:"/2022/11/25/adding-lastmod-to-sitemap-git-commit-date"}),"I wanted to add the last modified date to my blog posts.")," It would have been fiddly to do this in Oryx."),(0,i.kt)("h2",a({},{id:"build-externally"}),"Build externally"),(0,i.kt)("p",null,"So, I decided to build the app externally and then deploy it. I did this by tweaking the yaml above to add some extra steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-yaml"}),"- name: Get API key \ud83d\udd11\n  id: static_web_app_apikey\n  uses: azure/CLI@v1\n  with:\n    inlineScript: |\n      APIKEY=$(az staticwebapp secrets list --name '${{ env.STATICWEBAPPNAME }}' | jq -r '.properties.apiKey')\n      echo \"::set-output name=APIKEY::$APIKEY\"\n\n- name: Setup Node.js \ud83d\udd27\n  uses: actions/setup-node@v3\n  with:\n    node-version: '18'\n    cache: 'yarn'\n\n- name: Install and build site \ud83d\udd27\n  run: |\n    cd blog-website\n    yarn install --frozen-lockfile\n    yarn run build\n    # copy staticwebapp.config.json to build folder\n    cp staticwebapp.config.json build/staticwebapp.config.json\n\n- name: Deploy site \ud83d\ude80\n  id: static_web_app_build_and_deploy\n  uses: Azure/static-web-apps-deploy@v1\n  with:\n    azure_static_web_apps_api_token: ${{ steps.static_web_app_apikey.outputs.APIKEY }}\n    repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)\n    action: 'upload'\n    skip_app_build: true\n    app_location: '/blog-website/build' # App source code path\n    # output_location: 'build' # Built app content directory - optional\n\n    # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig\n    api_location: '' # Api source code path - optional\n")),(0,i.kt)("p",null,"What's changed? Well, I've added a few steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setup Node.js - essentially, this is just installing Node.js so we can build the app"),(0,i.kt)("li",{parentName:"ul"},"Install and build site - this is where we actually do install the dependencies and build the app"),(0,i.kt)("li",{parentName:"ul"},"Significantly (and ",(0,i.kt)("a",a({parentName:"li"},{href:"https://github.com/Azure/static-web-apps/issues/1017#issuecomment-1356786140"}),"thanks to Vivek Jilla for this tip"),"), we copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"staticwebapp.config.json")," file to the build folder. This is important because it contains the routing information for the app. Without it, any rules you have in your ",(0,i.kt)("inlineCode",{parentName:"li"},"staticwebapp.config.json")," file won't be applied."),(0,i.kt)("li",{parentName:"ul"},"We set ",(0,i.kt)("inlineCode",{parentName:"li"},"skip_app_build: true")," - this tells Azure Static Web Apps to skip the build step and point it at the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," folder instead, where the built app (with ",(0,i.kt)("inlineCode",{parentName:"li"},"staticwebapp.config.json"),") can be found.")),(0,i.kt)("p",null,"With this in place I'm now able to build the app externally and deploy it to Azure Static Web Apps. This is great for when you need to do something a little more complex than Oryx can handle."))}d.isMDXComponent=!0},43662:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/title-image-79fba965babb965fc9084336814cfefc.png"}}]);
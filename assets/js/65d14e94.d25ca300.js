"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[50186],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?o.createElement(g,r(r({ref:t},h),{},{components:n})):o.createElement(g,r({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43230:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return h},toc:function(){return u},default:function(){return d}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={title:"Google APIs: authentication with TypeScript",authors:"johnnyreilly",tags:["Google APIs","TypeScript"],image:"app-registration.png",hide_table_of_contents:!1},s=void 0,c={permalink:"/2021/09/10/google-apis-authentication-with-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-09-10-google-apis-authentication-with-typescript/index.md",source:"@site/blog/2021-09-10-google-apis-authentication-with-typescript/index.md",title:"Google APIs: authentication with TypeScript",description:"Google has a wealth of APIs which we can interact with. At the time of writing, there's more than two hundred available; including YouTube, Google Calendar and GMail (alongside many others). To integrate with these APIs, it's necessary to authenticate and then use that credential with the API. This post will take you through how to do just that using TypeScript. It will also demonstrate how to use one of those APIs: the Google Calendar API.",date:"2021-09-10T00:00:00.000Z",formattedDate:"September 10, 2021",tags:[{label:"Google APIs",permalink:"/tags/google-ap-is"},{label:"TypeScript",permalink:"/tags/type-script"}],readingTime:8.705,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Permissioning Azure Pipelines with Bicep and Azure RBAC Role Assignments",permalink:"/2021/09/12/permissioning-azure-pipelines-bicep-role-assignments"},nextItem:{title:"Bicep: syntax highlighting with PrismJS (and Docusaurus)",permalink:"/2021/08/19/bicep-syntax-highlighting-with-prismjs"}},h={authorsImageUrls:[void 0]},u=[{value:"Creating an OAuth 2.0 Client ID on the Google Cloud Platform",id:"creating-an-oauth-20-client-id-on-the-google-cloud-platform",children:[],level:2},{value:"Acquiring a refresh token",id:"acquiring-a-refresh-token",children:[],level:2},{value:"Accessing the Google Calendar API",id:"accessing-the-google-calendar-api",children:[],level:2},{value:"Today the Google Calendar API, tomorrow the (Google API) world!",id:"today-the-google-calendar-api-tomorrow-the-google-api-world",children:[],level:2}],p={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Google has a wealth of APIs which we can interact with. At the time of writing, there's more than two hundred available; including YouTube, Google Calendar and GMail (alongside many others). To integrate with these APIs, it's necessary to authenticate and then use that credential with the API. This post will take you through how to do just that using TypeScript. It will also demonstrate how to use one of those APIs: the Google Calendar API."),(0,i.kt)("h2",{id:"creating-an-oauth-20-client-id-on-the-google-cloud-platform"},"Creating an OAuth 2.0 Client ID on the Google Cloud Platform"),(0,i.kt)("p",null,"The first thing we need to do is go to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/projectcreate"},"Google Cloud Platform to create a project"),". The name of the project doesn't matter particularly; although it can be helpful to name the project to align with the API you're intending to consume. That's what we'll do here as we plan to integrate with the Google Calendar API:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the Create Project screen in the Google Cloud Platform",src:n(63131).Z})),(0,i.kt)("p",null,"The project is the container in which the OAuth 2.0 Client ID will be housed. Now we've created the project, let's go to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials"},"credentials screen")," and create an OAuth Client ID using the Create Credentials dropdown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the Create Credentials dropdown in the Google Cloud Platform",src:n(96958).Z})),(0,i.kt)("p",null,"You'll likely have to create an OAuth consent screen before you can create the OAuth Client ID. Going through the journey of doing that feels a little daunting as many questions have to be answered. This is because the consent screen can be used for a variety of purposes beyond the API authentication we're looking at today."),(0,i.kt)("p",null,'When challenged, you can generally accept the defaults and proceed. The user type you\'ll require will be "External":'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the OAuth consent screen in the Google Cloud Platform",src:n(26201).Z})),(0,i.kt)("p",null,"You'll also be required to create an app registration - all that's really required here is a name (which can be anything) and your email address:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the OAuth consent screen in the Google Cloud Platform",src:n(97926).Z})),(0,i.kt)("p",null,"You don't need to worry about scopes. You can either plan to publish the app, or alternately set yourself up to be a test user - you'll need to do one of these in order that you can authenticate with the app. Continuing to the end of the journey should provide you with the OAuth consent screen which you need in order that you may then create the OAuth Client ID."),(0,i.kt)("p",null,'Creating the OAuth Client ID is slightly confusing as the "Application type" required is "TVs and Limited Input devices".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the create OAuth Client ID screen in the Google Cloud Platform",src:n(32649).Z})),(0,i.kt)("p",null,"We're using this type of application as we want to acquire a ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/refresh-token/"},"refresh token")," which we'll be able to use in future to aquire access tokens which will be used to access the Google APIs."),(0,i.kt)("p",null,"Once it's created, you'll be able to download the Client ID from the Google Cloud Platform:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the create OAuth Client ID screen in the Google Cloud Platform",src:n(28313).Z})),(0,i.kt)("p",null,"When you download it, it should look something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "installed": {\n    "client_id": "CLIENT_ID",\n    "project_id": "PROJECT_ID",\n    "auth_uri": "https://accounts.google.com/o/oauth2/auth",\n    "token_uri": "https://oauth2.googleapis.com/token",\n    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",\n    "client_secret": "CLIENT_SECRET",\n    "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]\n  }\n}\n')),(0,i.kt)("p",null,"You'll need the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect_uris")," - but keep them in a safe place and don't commit ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," to source control!"),(0,i.kt)("h2",{id:"acquiring-a-refresh-token"},"Acquiring a refresh token"),(0,i.kt)("p",null,"Now we've got our ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),", we're ready to write a simple node command line application which we can use to obtain a refresh token. This is actually a multi-stage process that will end up looking like this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide the Google authentication provider with the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret"),", in return it will provide an authentication URL."),(0,i.kt)("li",{parentName:"ul"},"Open the authentication URL in the browser and grant consent, the provider will hand over a code."),(0,i.kt)("li",{parentName:"ul"},"Provide the Google authentication provider with the ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," and the code, it will acquire and provide users with a refresh token.")),(0,i.kt)("p",null,"Let's start coding. We'll initialise a TypeScript Node project like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir src\ncd src\nnpm init -y\nnpm install googleapis ts-node typescript yargs @types/yargs @types/node\nnpx tsc --init\n")),(0,i.kt)("p",null,"We've added a number of dependencies that will allow us to write a TypeScript Node command line application. We've also added a dependency to the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/googleapis"},(0,i.kt)("inlineCode",{parentName:"a"},"googleapis"))," package which describes itself as:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Node.js client library for using Google APIs. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included.")),(0,i.kt)("p",null,"We're going to make use of the OAuth 2.0 part. We'll start our journey by creating a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"google-api-auth.ts"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { getArgs, makeOAuth2Client } from './shared';\n\nasync function getToken() {\n  const { clientId, clientSecret, code } = await getArgs();\n  const oauth2Client = makeOAuth2Client({ clientId, clientSecret });\n\n  if (code) await getRefreshToken(code);\n  else getAuthUrl();\n\n  async function getAuthUrl() {\n    const url = oauth2Client.generateAuthUrl({\n      // 'online' (default) or 'offline' (gets refresh_token)\n      access_type: 'offline',\n\n      // scopes are documented here: https://developers.google.com/identity/protocols/oauth2/scopes#calendar\n      scope: [\n        'https://www.googleapis.com/auth/calendar',\n        'https://www.googleapis.com/auth/calendar.events',\n      ],\n    });\n\n    console.log(`Go to this URL to acquire a refresh token:\\n\\n${url}\\n`);\n  }\n\n  async function getRefreshToken(code: string) {\n    const token = await oauth2Client.getToken(code);\n    console.log(token);\n  }\n}\n\ngetToken();\n")),(0,i.kt)("p",null,"And a common file named ",(0,i.kt)("inlineCode",{parentName:"p"},"shared.ts")," which ",(0,i.kt)("inlineCode",{parentName:"p"},"google-api-auth.ts")," imports and which we'll re-use later:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { google } from 'googleapis';\nimport yargs from 'yargs/yargs';\nconst { hideBin } = require('yargs/helpers');\n\nexport async function getArgs() {\n  const argv = await Promise.resolve(yargs(hideBin(process.argv)).argv);\n\n  const clientId = argv['clientId'] as string;\n  const clientSecret = argv['clientSecret'] as string;\n\n  const code = argv.code as string | undefined;\n  const refreshToken = argv.refreshToken as string | undefined;\n  const test = argv.test as boolean;\n\n  if (!clientId) throw new Error('No clientId ');\n  console.log('We have a clientId');\n\n  if (!clientSecret) throw new Error('No clientSecret');\n  console.log('We have a clientSecret');\n\n  if (code) console.log('We have a code');\n  if (refreshToken) console.log('We have a refreshToken');\n\n  return { code, clientId, clientSecret, refreshToken, test };\n}\n\nexport function makeOAuth2Client({\n  clientId,\n  clientSecret,\n}: {\n  clientId: string;\n  clientSecret: string;\n}) {\n  return new google.auth.OAuth2(\n    /* YOUR_CLIENT_ID */ clientId,\n    /* YOUR_CLIENT_SECRET */ clientSecret,\n    /* YOUR_REDIRECT_URL */ 'urn:ietf:wg:oauth:2.0:oob'\n  );\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getToken")," function above does these things:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If given a ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," it will obtain an authentication URL."),(0,i.kt)("li",{parentName:"ol"},"If given a ",(0,i.kt)("inlineCode",{parentName:"li"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"client_secret")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," it will obtain a refresh token (scoped to access the Google Calendar API).")),(0,i.kt)("p",null,"We'll add an entry to our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," which will allow us to run our console app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "google-api-auth": "ts-node google-api-auth.ts"\n')),(0,i.kt)("p",null,"Now we're ready to acquire the refresh token. We'll run the following command (substituting in the appropriate values):"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run google-api-auth -- --clientId CLIENT_ID --clientSecret CLIENT_SECRET")),(0,i.kt)("p",null,"Click on the URL that is generated in the console, it should open up a consent screen in the browser which looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the consent screen",src:n(85608).Z})),(0,i.kt)("p",null,"Authenticate and grant consent and you should get a code:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of the generated code",src:n(52490).Z})),(0,i.kt)("p",null,"Then (quickly) paste the acquired code into the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run google-api-auth -- --clientId CLIENT_ID --clientSecret CLIENT_SECRET --code THISISTHECODE")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," (alongside much else) will be printed to the console. Grab it and put it somewhere secure. Again, no storing in source control!"),(0,i.kt)("p",null,"It's worth taking a moment to reflect on what we've done. We've acquired a refresh token which involved a certain amount of human interaction. We've had to run a console command, do some work in a browser and run another commmand. You wouldn't want to do this repeatedly because it involves human interaction. Intentionally it cannot be automated. However, once you've acquired the refresh token, you can use it repeatedly until it expires (which may be never or at least years in the future). So once you have the refresh token, and you've stored it securely, you have what you need to be able to automate an API interaction."),(0,i.kt)("h2",{id:"accessing-the-google-calendar-api"},"Accessing the Google Calendar API"),(0,i.kt)("p",null,"Let's test out our refresh token by attempting to access the Google Calendar API. We'll create a ",(0,i.kt)("inlineCode",{parentName:"p"},"calendar.ts")," file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { google } from 'googleapis';\nimport { getArgs, makeOAuth2Client } from './shared';\n\nasync function makeCalendarClient() {\n  const { clientId, clientSecret, refreshToken } = await getArgs();\n  const oauth2Client = makeOAuth2Client({ clientId, clientSecret });\n  oauth2Client.setCredentials({\n    refresh_token: refreshToken,\n  });\n\n  const calendarClient = google.calendar({\n    version: 'v3',\n    auth: oauth2Client,\n  });\n  return calendarClient;\n}\n\nasync function getCalendar() {\n  const calendarClient = await makeCalendarClient();\n\n  const { data: calendars, status } = await calendarClient.calendarList.list();\n\n  if (status === 200) {\n    console.log('calendars', calendars);\n  } else {\n    console.log('there was an issue...', status);\n  }\n}\n\ngetCalendar();\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"getCalendar")," function above uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," to access the Google Calendar API and retrieve the list of calendars."),(0,i.kt)("p",null,"We'll add an entry to our ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," which will allow us to run this function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'    "calendar": "ts-node calendar.ts",\n')),(0,i.kt)("p",null,"Now we're ready to test ",(0,i.kt)("inlineCode",{parentName:"p"},"calendar.ts"),". We'll run the following command (substituting in the appropriate values):"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"npm run calendar -- --clientId CLIENT_ID --clientSecret CLIENT_SECRET --refreshToken REFRESH_TOKEN")),(0,i.kt)("p",null,"When we run for the first time, we may encounter a self explanatory message which tells us that we need enable the calendar API for our application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"(node:31563) UnhandledPromiseRejectionWarning: Error: Google Calendar API has not been used in project 77777777777777 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/calendar-json.googleapis.com/overview?project=77777777777777 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.\n")),(0,i.kt)("p",null,"Once enabled, we can run successfully for the first time. Consequently we should see something like this showing up in the console:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot of calendars list response in the console",src:n(95475).Z})),(0,i.kt)("p",null,"This demonstrates that we're successfully integrating with a Google API using our refresh token."),(0,i.kt)("h2",{id:"today-the-google-calendar-api-tomorrow-the-google-api-world"},"Today the Google Calendar API, tomorrow the (Google API) world!"),(0,i.kt)("p",null,"What we've demonstrated here is integrating with the Google Calendar API. However, that is not the limit of what we can do. As we discussed earlier, Google has more than two hundred APIs we can interact with, and the key to that interaction is following the same steps for authentication that this post outlines."),(0,i.kt)("p",null,"Let's imagine that we want to integrate with the YouTube API or the GMail API. We'd be able to follow the steps in this post, using different ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/scopes#calendar"},"scopes for the refresh token appropriate to the API"),", and build an integration against that API. ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/apis-explorer"},"Take a look at the available APIs")," here."),(0,i.kt)("p",null,"The approach outlined by this post is the key to integrating with a multitude of Google APIs. Happy integrating!"),(0,i.kt)("p",null,"The idea of this was sparked by ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/command-line-google.html"},"Martin Fowler's post")," on the topic which comes from a Ruby angle."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/how-to-authenticate-access-google-apis-using-oauth-2-0/"},"This post was originally published on LogRocket.")))}d.isMDXComponent=!0},97926:function(e,t,n){t.Z=n.p+"assets/images/app-registration-89fad5a5faa4a16ac999c6839d3541cd.png"},52490:function(e,t,n){t.Z=n.p+"assets/images/auth-code-447b1ae3be05840d909af1addaed01dc.png"},95475:function(e,t,n){t.Z=n.p+"assets/images/calendars-response-87302a6bec5b1ffd18a9cc4100359464.png"},96958:function(e,t,n){t.Z=n.p+"assets/images/create-credentials-7832382d860e78193d3fcfd4426f4be9.png"},32649:function(e,t,n){t.Z=n.p+"assets/images/create-oauth-client-id-type-bd075a0db2457b46223c5a30e9f4be50.png"},63131:function(e,t,n){t.Z=n.p+"assets/images/google-cloud-platform-create-project-ec30db7bf23fc76f02ec4fb89e10f515.png"},85608:function(e,t,n){t.Z=n.p+"assets/images/grant-consent-c6985d2606f3056ba9a960ff464b1160.png"},28313:function(e,t,n){t.Z=n.p+"assets/images/oauth-client-id-540541fde5c11831559257acc1378bb7.png"},26201:function(e,t,n){t.Z=n.p+"assets/images/oauth-consent-screen-29613b9a7aaaa3b6b32a41bd78400d30.png"}}]);
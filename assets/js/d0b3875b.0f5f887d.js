"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[43801],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,m=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return n?o.createElement(m,r(r({ref:t},h),{},{components:n})):o.createElement(m,r({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97396:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"Up to the clouds!",authors:"johnnyreilly",tags:["docker","kubernetes","asp net core","aws"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2020/04/04/up-to-clouds",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-04-04-up-to-clouds/index.md",source:"@site/blog/2020-04-04-up-to-clouds/index.md",title:"Up to the clouds!",description:"This last four months has been quite the departure for me. Most typically I find myself building applications; for this last period of time I've been taking the platform that I work on, and been migrating it from running on our on premise servers to running in the cloud.",date:"2020-04-04T00:00:00.000Z",formattedDate:"April 4, 2020",tags:[{label:"docker",permalink:"/tags/docker"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"aws",permalink:"/tags/aws"}],readingTime:10.645,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Up to the clouds!",authors:"johnnyreilly",tags:["docker","kubernetes","asp net core","aws"],hide_table_of_contents:!1},prevItem:{title:"From react-window to react-virtual",permalink:"/2020/05/10/from-react-window-to-react-virtual"},nextItem:{title:"Offline storage in a PWA",permalink:"/2020/03/29/offline-storage-in-pwa"}},h={authorsImageUrls:[void 0]},d=[{value:"The mission",id:"the-mission",level:2},{value:"Kubernetes and Docker",id:"kubernetes-and-docker",level:2},{value:"Jenkins",id:"jenkins",level:2},{value:"Vault",id:"vault",level:2},{value:"Networking",id:"networking",level:2},{value:"Kerberos",id:"kerberos",level:2},{value:"Hangfire",id:"hangfire",level:2},{value:"Azure Active Directory Single Sign-On",id:"azure-active-directory-single-sign-on",level:2},{value:"Do the right thing and tell people about it",id:"do-the-right-thing-and-tell-people-about-it",level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This last four months has been quite the departure for me. Most typically I find myself building applications; for this last period of time I've been taking the platform that I work on, and been migrating it from running on our on premise servers to running in the cloud."),(0,i.kt)("p",null,"This turned out to be much more difficult than I'd expected and for reasons that often surprised me. We knew where we wanted to get to, but not all of what we'd need to do to get there. So many things you can only learn by doing. Whilst these experiences are still fresh in my mind I wanted to document some of the challenges we faced."),(0,i.kt)("h2",{id:"the-mission"},"The mission"),(0,i.kt)("p",null,"At the start of January, the team decided to make a concerted effort to take our humble ASP.NET Core application and migrate it to the cloud. We sat down with some friends from the DevOps team who are part of our organisation. We're fortunate in that these marvellous people are very talented engineers indeed. It was going to be a collaboration between our two teams of budding cloudmongers that would make this happen."),(0,i.kt)("p",null,"Now our application is young. It is not much more than a year old. However it is growing ",(0,i.kt)("em",{parentName:"p"},"fast"),". And as we did the migration from on premise to the cloud, that wasn't going to stop. Development of the application was to continue as is, shipping new versions daily. Without impeding that, we were to try and get the application migrated to the cloud."),(0,i.kt)("p",null,"I would liken it to boarding a speeding train, fighting your way to the front, taking the driver hostage and then diverting the train onto a different track. It was challenging. Really, really challenging."),(0,i.kt)("p",null,"So many things had to change for us to get from on premise servers to the cloud, all the while keeping our application a going (and shipping) concern. Let's go through them one by one."),(0,i.kt)("h2",{id:"kubernetes-and-docker"},"Kubernetes and Docker"),(0,i.kt)("p",null,"Our application was built using ASP.NET Core. A technology that is entirely cloud friendly (that's one of the reasons we picked it). We were running on a collection of hand installed, hand configured Windows servers. That had to change. We wanted to move our application to run on Kubernetes; so we didn't have to manually configure servers. Rather k8s would manage the provisioning and deployment of containers running our application. Worth saying now: I knew ",(0,i.kt)("em",{parentName:"p"},"nothing")," about Kubernetes. Or nearly nothing. I learned a bunch along the way, but, as I've said, this was a collaboration between our team and the mighty site reliability engineers of the DevOps team. They knew a ",(0,i.kt)("em",{parentName:"p"},"lot")," about this k8s stuff and moreoften than not, our team stood back and let them work their magic."),(0,i.kt)("p",null,"In order that we could migrate to running in k8s, we first needed to containerise our application. We needed a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),". There followed a good amount of experimentation as we worked out how to build ourselves images. There's an art to building an optimal Docker image."),(0,i.kt)("p",null,"So that we can cover a lot of ground, this post will remain relatively high level. So here's a number of things that we encountered along the way that are worth considering:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multi-stage builds were an absolute necessity for us. We'd build the front end of our app (React / TypeScript) using one stage with a ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/node"},"Node base image"),". Then we'd build our app using a ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-core-sdk/"},".NET Core SDK base image"),". Finally, we'd use a ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/_/microsoft-dotnet-core-aspnet"},"ASP.Net")," image to run the app; copying in the output of previous stages."),(0,i.kt)("li",{parentName:"ul"},"Our application accesses various SQL Server databases. We struggled to get our application to connect to them. The issue related to the SSL configuration of our runner image. The fix was simple but frustrating; use a ",(0,i.kt)("inlineCode",{parentName:"li"},"-bionic")," image as it has the configuration you need. We found that gem ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dotnet/SqlClient/issues/222#issuecomment-535802822"},"here"),"."),(0,i.kt)("li",{parentName:"ul"},"Tests. Automated tests. We want to run them in our build; but how? Once more multi-stage builds to the rescue. We'd build our application, then in a separate stage we'd run the tests; copying in the app from the build stage. If the tests failed, the build failed. If they passed then the intermediate stage containing the tests would be discarded by Docker. No unnecessary bloat of the image; all that testing goodness still; now in containerised form!")),(0,i.kt)("h2",{id:"jenkins"},"Jenkins"),(0,i.kt)("p",null,"Our on premise world used TeamCity for our continuous integration needs and Octopus for deployment. We liked these tools well enough; particularly Octopus. However, the DevOps team were very much of the mind that we should be use Jenkins instead. And ",(0,i.kt)("a",{parentName:"p",href:"https://jenkins.io/doc/book/pipeline/"},"Pipeline"),". It was here that we initially struggled. To quote the docs:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Jenkins Pipeline (or simply "Pipeline" with a capital "P") is a suite of plugins which supports implementing and integrating continuous delivery pipelines into Jenkins.')),(0,i.kt)("p",null,"Whilst continuous delivery is super cool, and is something our team was interested in, we weren't ready for it yet. We didn't yet have the kind of automated testing in place that gave us the confidence that we'd need to move to it. One day, but not today. For now there was still some manual testing done on each release, prior to shipping. Octopus suited us very well here as it allowed us to deploy, on demand, a build of our choice to a given environment. So the question was: what to do? Fortunately the immensely talented Aby Egea came up with a mechanism that supported that very notion. A pipeline that would, optionally, deploy our build to a specified environment. So we were good!"),(0,i.kt)("p",null,"One thing we got to really appreciate about Jenkins was that the build is scripted with a ",(0,i.kt)("a",{parentName:"p",href:"https://jenkins.io/doc/book/pipeline/jenkinsfile/"},"Jenkinsfile"),". This was in contrast to our TeamCity world where it was all manually configured. ",(0,i.kt)("a",{parentName:"p",href:"https://jenkins.io/projects/jcasc/"},"Configuration as code")," is truly a wonderful thing as your build pipeline becomes part of your codebase; open for everyone to see and understand. If anyone wants to change the build pipeline it has to get code reviewed like everything else. It was as code in our ",(0,i.kt)("inlineCode",{parentName:"p"},"Jenkinsfile")," that the deployment mechanism lived."),(0,i.kt)("h2",{id:"vault"},"Vault"),(0,i.kt)("p",null,"Another thing that we used Octopus for was secrets. Applications run on configuration; these are settings that drive the behaviour of your application. A subset of configuration is \"secrets\". Secrets are configuration that can't be stored in source code; they would represent a risk if they did. For instance a database connection string. We'd been merrily using Octopus for this; as Octopus deploys an application to a server it enriches the ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.json")," file with any required secrets."),(0,i.kt)("p",null,"Without Octopus in the mix, how were we to handle our secrets? The answer is with ",(0,i.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Hashicorp Vault"),". We'd store our secrets in there and, thanks to clever work by ",(0,i.kt)("a",{parentName:"p",href:"https://uk.linkedin.com/in/robert-grzankowski-53618114"},"Robski")," of the DevOps team, when our container was brought up by Kubernetes, it would mount into the filesystem an ",(0,i.kt)("inlineCode",{parentName:"p"},"appsettings.Vault.json")," file which we read thanks to our trusty friend ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-3.1#json-configuration-provider"},(0,i.kt)("inlineCode",{parentName:"a"},".AddJsonFile"))," with ",(0,i.kt)("inlineCode",{parentName:"p"},"optional: true"),". (As the file didn't exist in our development environment.)"),(0,i.kt)("p",null,"Hey presto! Safe secrets in k8s."),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("p",null,"Our on premise servers sat on the company network. They could see ",(0,i.kt)("em",{parentName:"p"},"everything")," that there was to see. All the other servers around them on the network, bleeping and blooping. The opposite was true in AWS. There was nothing to see. Nothing to access. As it should be. It's safer that way should a machine become compromised. For each database and each API our application depended upon, we needed to specifically allowlist access."),(0,i.kt)("h2",{id:"kerberos"},"Kerberos"),(0,i.kt)("p",null,"There's always a fly in the ointment. A nasty surprise on a dark night. Ours was realising that our application depended upon an API that was secured using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/iis/configuration/system.webserver/security/authentication/windowsauthentication/"},"Windows Authentication"),". Our application was accessing it by running under a service account which had been permissioned to access it. However, in AWS, our application wasn't running as under a service account on the company network. Disappointingly, in the short term the API was not going to support an alternate authentication mechanism."),(0,i.kt)("p",null,"What to do? Honestly it wasn't looking good. We were considering proxying through one of our Windows servers just to get access to that API. I was tremendously disappointed. At this point our hero arrived; one ",(0,i.kt)("a",{parentName:"p",href:"https://twitter.com/foldr"},"JMac")," hacked together a Kerberos sidecar approach one weekend. You can see a similar approach ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/edseymour/kinit-sidecar"},"here"),". This got us to a point that allowed us to access the API we needed to."),(0,i.kt)("p",null,"I'm kind of amazed that there isn't better documentation out there around have a Kerberos sidecar in a k8s setup. Tragically Windows Authentication is a widely used authentication mechanism. That being the case, having good docs to show how you can get a Kerberos sidecar in place would likely greatly advance the ability of enterprises to migrate to the cloud. The best docs I've found are ",(0,i.kt)("a",{parentName:"p",href:"https://blog.openshift.com/kerberos-sidecar-container/"},"here"),". It is super hard though. ",(0,i.kt)("em",{parentName:"p"},"So hard!")),(0,i.kt)("h2",{id:"hangfire"},"Hangfire"),(0,i.kt)("p",null,"We were using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/host/hosted-services?view=aspnetcore-3.1&tabs=visual-studio"},"Hosted Services")," to perform background task running in our app. The nature of our background tasks meant that it was important to only run a single instance of a background task at a time. Or bad things would happen. This was going to become a problem since we had ambitions to be able to horizontally scale our application; to add new pods as running our app as demand determined."),(0,i.kt)("p",null,"So we started to use ",(0,i.kt)("a",{parentName:"p",href:"https://www.hangfire.io/"},"Hangfire")," to perform task running in our app. With Hangfire, when a job is picked up it gets locked so other servers can't pick it up. That's what we need."),(0,i.kt)("p",null,"Hangfire is pretty awesome. However it turns out that there's quirks when you move to a containerised environment. We have a number of recurring jobs that are scheduled to run at certain dates and times. In order that Hangfire can ascertain what time it is, it needs a timezone. It turns out that timezones on Windows != timezones in Docker / Linux."),(0,i.kt)("p",null,"This was a problem because, as we limbered up for the great migration, we were trying to run our cloud implementation side by side with our on premise one. And Windows picked a fight with Linux over timezones. You can see others bumping into this condition ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/HangfireIO/Hangfire/issues/1268"},"here"),". We learned this the hard way; jobs mysteriously stopping due to timezone related errors. Windows Hangfire not able to recognise Linux Hangfire timezones and vica versa."),(0,i.kt)("p",null,"The TL;DR is that we had to do a hard switch with Hangfire; it couldn't run side by side. Not the end of the world, but surprising."),(0,i.kt)("h2",{id:"azure-active-directory-single-sign-on"},"Azure Active Directory Single Sign-On"),(0,i.kt)("p",null,"Historically our application had used two modes of authentication; Windows Authentication and cookies. Windows Authentication doesn't generally play nicely with Docker. It's doable, but it's not the hill you want to die on. So we didn't; we swapped out Windows Authentication for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/what-is-single-sign-on"},"Azure AD SSO")," and didn't look back."),(0,i.kt)("p",null,"We also made some changes so our app would support cookies auth alongside Azure AD auth; ",(0,i.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2020/03/dual-boot-authentication-with-aspnetcore.html"},"I've written about this previously"),"."),(0,i.kt)("h2",{id:"do-the-right-thing-and-tell-people-about-it"},"Do the right thing and tell people about it"),(0,i.kt)("p",null,"We're there now; we've made the move. It was a difficult journey but one worth making; it sets up our platform for where we want to take it in the future. Having infrastructure as code makes all kinds of approaches possible that weren't before. Here's some things we're hoping to get out of the move:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"blue green deployments - shipping without taking down our platform"),(0,i.kt)("li",{parentName:"ul"},"provision environments on demand - currently we have a highly contended situation when it comes to test environments. With k8s and AWS we can look at spinning up environments as we need them and throwing them away also"),(0,i.kt)("li",{parentName:"ul"},"autoscaling for need - we can start to look at spinning up new containers in times of high load and removing excessive containers in times of low load")),(0,i.kt)("p",null,"We've also become more efficient as a team. We are no longer maintaining servers, renewing certificates, installing software, RDPing onto boxes. All that time and effort we can plough back into making awesome experiences for our users."),(0,i.kt)("p",null,"There's a long list of other benefits and it's very exciting indeed! It's not enough for us to have done this though. It's important that we tell the story of what we've done and how and why we've done it. That way people have empathy for the work. Also they can start to think about how they could start to reap similar benefits themselves. By talking to others about the road we've travelled, we can save them time and help them to travel a similar road. This is good for them and it's good for us; it helps our relationships and it helps us all to move forwards together."),(0,i.kt)("p",null,"A rising tide lifts all boats. By telling others about our journey, we raise the water level. Up to the clouds!"))}c.isMDXComponent=!0}}]);
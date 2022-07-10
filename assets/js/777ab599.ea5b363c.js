"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[56027],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70041:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],l={title:"GitHub Actions and Yarn",authors:"johnnyreilly",tags:["docker","yarn","GitHub Actions"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2019/01/05/github-actions-and-yarn",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2019-01-05-github-actions-and-yarn/index.md",source:"@site/blog/2019-01-05-github-actions-and-yarn/index.md",title:"GitHub Actions and Yarn",description:"I'd been meaning to automate the npm publishing of ts-loader for the longest time. I had attempted to use Travis to do this in the same way as fork-ts-checker-webpack-plugin. Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack.",date:"2019-01-05T00:00:00.000Z",formattedDate:"January 5, 2019",tags:[{label:"docker",permalink:"/tags/docker"},{label:"yarn",permalink:"/tags/yarn"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:3.995,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"GitHub Actions and Yarn",authors:"johnnyreilly",tags:["docker","yarn","GitHub Actions"],hide_table_of_contents:!1},prevItem:{title:"TypeScript and webpack: Watch It",permalink:"/2019/01/13/typescript-and-webpack-watch-it"},nextItem:{title:"You Might Not Need thread-loader",permalink:"/2018/12/22/you-might-not-need-thread-loader"}},u={authorsImageUrls:[void 0]},c=[{value:"Automate What?",id:"automate-what",level:2},{value:"GitHub Action for <code>npm</code>",id:"github-action-for-npm",level:2},{value:"GitHub Action for <code>npm</code> for <code>yarn</code>",id:"github-action-for-npm-for-yarn",level:2},{value:"Going With The Workflow",id:"going-with-the-workflow",level:2},{value:"You Don&#39;t Actually Need the npm GitHub Action",id:"you-dont-actually-need-the-npm-github-action",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I'd been meaning to automate the npm publishing of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"ts-loader"))," for the longest time. I had attempted to use Travis to do this in the same way as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"fork-ts-checker-webpack-plugin")),". Alas using secure environment variables in Travis has unfortunate implications for ts-loader's test pack."),(0,o.kt)("p",null,"Be not afeard. I've heard there's a new shiny thing from GitHub that I could use instead... It's a sign; I must use it!"),(0,o.kt)("p",null,"GitHub Actions are still in beta. Technically Actions are ",(0,o.kt)("a",{parentName:"p",href:"https://developer.github.com/actions/creating-github-actions/"},"code run in Docker containers")," in response to events. This didn't mean a great deal to me until I started thinking about what I wanted to do with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader"),"'s publishing flow."),(0,o.kt)("h2",{id:"automate-what"},"Automate What?"),(0,o.kt)("p",null,"Each time I publish a release of ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-loader")," I execute the following node commands by hand:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn install")," ","-"," to install ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-loader"),"'s dependencies"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn build")," ","-"," to build ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-loader")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"yarn test")," ","-"," to run ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-loader"),"'s test packs"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"npm publish")," ","-"," to publish the release of ",(0,o.kt)("inlineCode",{parentName:"li"},"ts-loader")," to npm")),(0,o.kt)("p",null,"Having read up on GitHub Actions it seemed like they were born to handle this sort of task."),(0,o.kt)("h2",{id:"github-action-for-npm"},"GitHub Action for ",(0,o.kt)("inlineCode",{parentName:"h2"},"npm")),(0,o.kt)("p",null,"I quickly discovered that someone out there ",(0,o.kt)("s",null,"loves me")),(0,o.kt)("p",null,"had ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/npm"},"already written a GitHub Action for ",(0,o.kt)("inlineCode",{parentName:"a"},"npm")),"."),(0,o.kt)("p",null,"The example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"README/index.md")," could be easily tweaked to meet my needs with one caveat: I had to use ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," in place of ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),". I didn't want to switch from ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn"),". What to do?"),(0,o.kt)("p",null,"Well, remember when I said actions are code run in Docker containers? Another way to phrase that is to say: GitHub Actions are Docker images. Let's look under the covers of the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," GitHub Action. As we peer inside the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/npm/blob/e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437/Dockerfile#L1"},(0,o.kt)("inlineCode",{parentName:"a"},"Dockerfile"))," what do we find?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"FROM node:10-slim\n")),(0,o.kt)("p",null,"Hmmmm.... Interesting. The base image of the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," GitHub Action is ",(0,o.kt)("inlineCode",{parentName:"p"},"node:10-slim"),". Looking it up, it seems the ",(0,o.kt)("inlineCode",{parentName:"p"},"-slim")," Docker images come with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/docker-node/blob/master/Dockerfile-slim.template"},(0,o.kt)("inlineCode",{parentName:"a"},"yarn")," included"),". Which means we should be able to use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," GitHub Action. Nice!"),(0,o.kt)("h2",{id:"github-action-for-npm-for-yarn"},"GitHub Action for ",(0,o.kt)("inlineCode",{parentName:"h2"},"npm")," for ",(0,o.kt)("inlineCode",{parentName:"h2"},"yarn")),(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," from the GitHub Action for ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is delightfully simple. Here's what running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# install with npm\naction "install" {\n  uses = "actions/npm@1.0.0"\n  args = "install"\n}\n')),(0,o.kt)("p",null,"Pivoting to use ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# install with yarn\naction "install" {\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "install"\n}\n')),(0,o.kt)("p",null,"You can see we've introduced the ",(0,o.kt)("inlineCode",{parentName:"p"},'runs = "yarn"')," and after that the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," are whatever you need them to be."),(0,o.kt)("h2",{id:"going-with-the-workflow"},"Going With The Workflow"),(0,o.kt)("p",null,"A GitHub Workflow that implements the steps I need would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workflow "build, test and publish on release" {\n  on = "push"\n  resolves = "publish"\n}\n\n# install with yarn\naction "install" {\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "install"\n}\n\n# build with yarn\naction "build" {\n  needs = "install"\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "build"\n}\n\n# test with yarn\naction "test" {\n  needs = "build"\n  uses = "actions/npm@1.0.0"\n  runs = "yarn"\n  args = "test"\n}\n\n# filter for a new tag\naction "check for new tag" {\n  needs = "Test"\n  uses = "actions/bin/filter@master"\n  args = "tag"\n}\n\n# publish with npm\naction "publish" {\n  needs = "check for new tag"\n  uses = "actions/npm@1.0.0"\n  args = "publish"\n  secrets = ["NPM_AUTH_TOKEN"]\n}\n')),(0,o.kt)("p",null,"As you can see, this is a direct automation of steps 1-4 I listed earlier. Since all these actions are executed in the same container, we can skip from ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," with gay abandon."),(0,o.kt)("p",null,"What's absolutely amazing is, when I got access to GitHub Actions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader/blob/master/.github/main.workflow"},"my hand crafted workflow")," looked like it should work first time! I know, right? Don't you love it when that happens? ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/bin/issues/13"},"Alas there's presently a problem with filters in GitHub Actions"),". But that's by the by, if you're just looking to use a GitHub Action with yarn instead of npm then you are home free."),(0,o.kt)("h2",{id:"you-dont-actually-need-the-npm-github-action"},"You Don't Actually Need the npm GitHub Action"),(0,o.kt)("p",null,"You heard me right. Docker containers be Docker containers. You don't actually need to use this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'uses = "actions/npm@1.0.0"\n')),(0,o.kt)("p",null,"You can use ",(0,o.kt)("em",{parentName:"p"},"any")," Docker container which has node / npm installed! So if you'd like to use say node 11 instead you could just do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'uses = "docker://node:11"\n')),(0,o.kt)("p",null,"Which would use the node 11 image on ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/node"},"docker hub"),"."),(0,o.kt)("p",null,"Which is pretty cool. You know what's even more incredible? Inside a workflow you can switch ",(0,o.kt)("inlineCode",{parentName:"p"},"uses")," mid-workflow and keep the output. That's right; you can have a work flow with say three actions running ",(0,o.kt)("inlineCode",{parentName:"p"},'uses = "docker://node:11"')," and then a fourth running ",(0,o.kt)("inlineCode",{parentName:"p"},'uses = "actions/npm@1.0.0"'),". That's ",(0,o.kt)("em",{parentName:"p"},"so")," flexible and powerful!"),(0,o.kt)("p",null,"Thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mcolyer"},"Matt Colyer")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LandonSchropp"},"Landon Schropp")," for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/actions/npm/issues/9"},"schooling me on the intricicies of GitHub Actions"),". Much \u2764"))}h.isMDXComponent=!0}}]);
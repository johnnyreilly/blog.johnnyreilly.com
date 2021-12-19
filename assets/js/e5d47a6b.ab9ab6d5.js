"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[56321],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||a;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92750:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return m},default:function(){return g}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=["components"],l={title:"Teams notification webhooks",authors:"johnnyreilly",tags:["Microsoft Teams","connectors","notifications","webhook"],image:"teams-notification.gif",hide_table_of_contents:!1},s=void 0,c={permalink:"/2019/12/18/teams-notification-webhooks",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-12-18-teams-notification-webhooks/index.md",source:"@site/blog/2019-12-18-teams-notification-webhooks/index.md",title:"Teams notification webhooks",description:"Teams notifications are mighty useful. You can send them using Markdown via a webhook.",date:"2019-12-18T00:00:00.000Z",formattedDate:"December 18, 2019",tags:[{label:"Microsoft Teams",permalink:"/tags/microsoft-teams"},{label:"connectors",permalink:"/tags/connectors"},{label:"notifications",permalink:"/tags/notifications"},{label:"webhook",permalink:"/tags/webhook"}],readingTime:3.19,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"EF Core 3.1 breaks left join with no navigation property",permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property"},nextItem:{title:"Definitely Typed: The Movie",permalink:"/2019/10/08/definitely-typed-movie"}},p={authorsImageUrls:[void 0]},m=[{value:"Notifications via Webhooks",id:"notifications-via-webhooks",children:[],level:2},{value:"Markdown",id:"markdown",children:[],level:2},{value:"ASP.Net Core",id:"aspnet-core",children:[],level:2}],u={toc:m};function g(e){var t=e.components,l=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Teams notifications are mighty useful. You can send them using Markdown via a webhook."),(0,a.kt)("p",null,"This post will explain the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"How you can automate the sending of notifications using Teams."),(0,a.kt)("li",{parentName:"ol"},"How Teams supports Markdown in notifications."),(0,a.kt)("li",{parentName:"ol"},"How you can use ASP.Net Core to automate sending notifications.")),(0,a.kt)("h2",{id:"notifications-via-webhooks"},"Notifications via Webhooks"),(0,a.kt)("p",null,"Now, it's not obvious from Teams that there is a simple webhooks integration for Teams, but there is. It's tucked away under \"Connectors\". If you want to create a webhook of your own, find your team, your channel, click on the menu, then connectors and create a hook. Like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"animation of setting up a webhook connector in Teams",src:n(1759).Z})),(0,a.kt)("p",null,"With the URL you've just obtained, you are now free to send notifications to that channel via a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type: application/json" -d "{\\"text\\": \\"Hello World\\"}" https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2\n')),(0,a.kt)("h2",{id:"markdown"},"Markdown"),(0,a.kt)("p",null,"Let's see if we can make this more interesting. It turns out that the the webhook can receive JSON as the body of the payload. And there's 3 properties we'd like our JSON to contain:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"title")," - this is optional and is the title of your notification if supplied."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"textFormat")," - provide the value ",(0,a.kt)("inlineCode",{parentName:"li"},'"markdown"')," and then..."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," - provide your markdown notification content!")),(0,a.kt)("p",null,"So if we have a notification payload file called ",(0,a.kt)("inlineCode",{parentName:"p"},"down.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Your Notification Title",\n  "textFormat": "markdown",\n  "text": "*Wow*\\nThis is [markdown](https://en.wikipedia.org/wiki/Markdown)!\\n![do a little dance!](https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif)\\n**Huzzah**!"\n}\n')),(0,a.kt)("p",null,"We can trigger it with this ",(0,a.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -H "Content-Type: application/json" -d @down.json https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2\n')),(0,a.kt)("p",null,"As you can see from the example above, you can use all the qualities of Markdown that you know and love. Text, bold text, italics, links and even images too. It's ",(0,a.kt)("em",{parentName:"p"},"great"),"!"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"animation of Teams notification",src:n(68559).Z})),(0,a.kt)("h2",{id:"aspnet-core"},"ASP.Net Core"),(0,a.kt)("p",null,"Finally, I wanted to illustrate just how simple the WebHooks API makes plugging notifications into an existing app. In our case we're going to use ASP.Net Core, but really there's nothing particular about how we're going to do this."),(0,a.kt)("p",null,"Here's a class called ",(0,a.kt)("inlineCode",{parentName:"p"},"TeamsNotificationService"),". It exposes 2 methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SendNotification")," which allows the consumer to just provide a ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," and a ",(0,a.kt)("inlineCode",{parentName:"li"},"message")," - you could consume this from anywhere in your app and use it to publish the notification of your choice."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SendExcitingNotification")," which actually uses ",(0,a.kt)("inlineCode",{parentName:"li"},"SendNotification")," and illustrates how you might provide an exciting notification to publish out.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Collections.Generic;\nusing System.Net.Http;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\n\nnamespace My.Services {\n    public interface ITeamsNotificationService {\n        Task SendNotification(string title, string message);\n        Task SendExcitingNotification(Guid someAppId, string person);\n    }\n\n    public class TeamsNotificationService : ITeamsNotificationService {\n\n        // in Startup.ConfigureServices you\'re going to want to add this line:\n        // services.AddHttpClient(TeamsNotificationService.TEAMS_NOTIFIER_CLIENT);\n\n        public const string TEAMS_NOTIFIER_CLIENT = "TEAMS_NOTIFIER_CLIENT";\n\n        private readonly ILogger<TeamsNotificationService> logger;\n        private readonly IHttpClientFactory _clientFactory;\n\n\n        public TeamsNotificationService(\n            ILogger<TeamsNotificationService> logger,\n            IHttpClientFactory clientFactory\n        ) {\n            _logger = logger;\n            _clientFactory = clientFactory;\n        }\n\n        private HttpClient CreateClient() {\n            var client = _clientFactory.CreateClient(TEAMS_NOTIFIER);\n\n            client.DefaultRequestHeaders.Clear();\n            client.DefaultRequestHeaders.Accept.Clear();\n            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));\n\n            return client;\n        }\n\n        public async Task SendNotification(string title, string message) {\n            try {\n                var client = CreateClient();\n\n                var messageContents = string.IsNullOrEmpty(title)\n                    ? new JsonContent(new { text = message, textFormat = "markdown" })\n                    : new JsonContent(new { title = title, text = message, textFormat = "markdown" });\n\n                var webhookUrl = "https://outlook.office.com/webhook/big-long-guid1/IncomingWebhook/big-long-guid2";\n                var response = await client.PostAsync(webhookUrl, messageContents);\n\n                _logger.LogInformation("Sent {title} notification to Teams using {url}; received this response: {responseStatusCode}", title, url, response.StatusCode);\n            }\n            catch (Exception exc) {\n                _logger.LogError(exc, $"Failed to send {title} notification to Teams");\n            }\n        }\n\n        public async Task SendExcitingNotification(Guid someAppId, string person) {\n            var celebration = GetCelebration();\n            await SendNotification(\n                title: "Incredible Thing Alert!",\n                message: $@"**{person}** has done something incredible! &#x1F44B;\n\n![celebration time!]({celebration})\n\n[Go see for yourself](https://my.app/some-page/{someAppId})"\n            );\n        }\n\n        string GetCelebration() => GetRandomItem(_celebrations);\n        string GetRandomItem(string[] arrayOfStrings) => arrayOfStrings[new Random().Next(0, arrayOfStrings.Length)];\n\n        string[] _celebrations = new string[] {\n            "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",\n            "https://media.giphy.com/media/GStLeae4F7VIs/giphy.gif",\n            "https://media.giphy.com/media/NbXTwsoD7hvag/giphy.gif",\n            "https://media.giphy.com/media/d86kftzaeizO8/giphy.gif",\n            "https://media.giphy.com/media/YJ5OlVLZ2QNl6/giphy.gif",\n            "https://media.giphy.com/media/kyLYXonQYYfwYDIeZl/giphy.gif",\n            "https://media.giphy.com/media/KYElw07kzDspaBOwf9/giphy.gif",\n            "https://media.giphy.com/media/6nuiJjOOQBBn2/giphy.gif",\n            "https://media.giphy.com/media/hZj44bR9FVI3K/giphy.gif",\n            "https://media.giphy.com/media/31lPv5L3aIvTi/giphy.gif"\n        };\n    }\n}\n')),(0,a.kt)("p",null,"It's as simple as that \ud83d\ude04"))}g.isMDXComponent=!0},68559:function(e,t,n){t.Z=n.p+"assets/images/teams-notification-528c45d6d2099dcf1e5094f1c5591f7c.gif"},1759:function(e,t,n){t.Z=n.p+"assets/images/teams-webhook-connector-0b0449a31c3fde572e975f476cbcbaf0.gif"}}]);
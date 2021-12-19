"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[69993],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(l,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78865:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return h},toc:function(){return c},default:function(){return d}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={title:"Dual boot authentication with ASP.NET",authors:"johnnyreilly",tags:["Authentication","dual authentication","Cookie","Azure AD","ForwardDefaultSelector","ASP.NET"],hide_table_of_contents:!1},l=void 0,u={permalink:"/2020/03/22/dual-boot-authentication-with-aspnetcore",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-03-22-dual-boot-authentication-with-aspnetcore/index.md",source:"@site/blog/2020-03-22-dual-boot-authentication-with-aspnetcore/index.md",title:"Dual boot authentication with ASP.NET",description:"This is a post about having two kinds of authentication working at the same time in ASP.Net Core. But choosing which authentication method to use dynamically at runtime; based upon the criteria of your choice.",date:"2020-03-22T00:00:00.000Z",formattedDate:"March 22, 2020",tags:[{label:"Authentication",permalink:"/tags/authentication"},{label:"dual authentication",permalink:"/tags/dual-authentication"},{label:"Cookie",permalink:"/tags/cookie"},{label:"Azure AD",permalink:"/tags/azure-ad"},{label:"ForwardDefaultSelector",permalink:"/tags/forward-default-selector"},{label:"ASP.NET",permalink:"/tags/asp-net"}],readingTime:8.045,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Offline storage in a PWA",permalink:"/2020/03/29/offline-storage-in-pwa"},nextItem:{title:"Web Workers, comlink, TypeScript and React",permalink:"/2020/02/21/web-workers-comlink-typescript-and-react"}},h={authorsImageUrls:[void 0]},c=[{value:"Let us speak of the past",id:"let-us-speak-of-the-past",children:[],level:2},{value:"A new hope",id:"a-new-hope",children:[],level:2},{value:"Show me the code",id:"show-me-the-code",children:[],level:2},{value:"The mystery of no documentation",id:"the-mystery-of-no-documentation",children:[],level:2}],p={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This is a post about having two kinds of authentication working at the same time in ASP.Net Core. But choosing which authentication method to use dynamically at runtime; based upon the criteria of your choice."),(0,r.kt)("p",null,"Already this sounds complicated; let's fix that. Perhaps I should describe my situation to you. I've an app which has two classes of user. One class, let's call them \"customers\" (because... uh... they're customers). The customers access our application via a public facing website. Traffic rolls through Cloudflare and into our application. The public facing URL is something fancy like ",(0,r.kt)("a",{parentName:"p",href:"https://mega-app.com"},"https://mega-app.com"),". That's one class of user."),(0,r.kt)("p",null,'The other class of user we\'ll call "our peeps"; because they are ',(0,r.kt)("em",{parentName:"p"},"us"),'. We use the app that we build. Traffic from "us" comes from a different hostname; only addressable on our network. So URLs from requests that we make are more along the lines of ',(0,r.kt)("a",{parentName:"p",href:"https://strictly4mypeeps.io"},"https://strictly4mypeeps.io"),"."),(0,r.kt)("p",null,"So far, so uncontroversial. Now it starts to get interesting. Our customers log into our application using their super secret credentials. It's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/authentication/cookie?view=aspnetcore-3.1#create-an-authentication-cookie"},"cookie based authentication"),". But for our peeps we do something different. Having to enter your credentials each time you use the app is friction. It gets in the way. So for us we have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/security/authentication/azure-active-directory/?view=aspnetcore-3.1"},"Azure AD")," in the mix. Azure AD is how we authenticate ourselves; and that means we don't spend 5% of each working day entering credentials."),(0,r.kt)("h2",{id:"let-us-speak-of-the-past"},"Let us speak of the past"),(0,r.kt)("p",null,'Now our delightful little application grew up in a simpler time. A time where you went to the marketplace, picked out some healthy looking servers, installed software upon them, got them attached to the internet, deployed an app onto them and said "hey presto, we\'re live!".'),(0,r.kt)("p",null,"Way back when, we had some servers on the internet, that's how our customers got to our app. Our peeps, us, we went to other servers that lived on our network. So we had multiple instances of our app, deployed to different machines. The ones on the internet were configured to use cookie based auth, the ones on our internal network were Azure AD."),(0,r.kt)("p",null,"As I said, a simpler time."),(0,r.kt)("h2",{id:"a-new-hope"},"A new hope"),(0,r.kt)("p",null,"We've been going through the process of cloudifying our app. Bye, bye servers, hello ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes"),". So exciting! As we change the way our app is built and deployed; we've been thinking about whether the choices we make still make sense."),(0,r.kt)("p",null,'When it came to authentication, my initial thoughts were to continue the same road we\'re travelling; just in containers and pods. So where we had "internal" servers, we\'d have "internal" pods, and where we\'d have "external" servers we\'d have external pods. I had the good fortune to be working with the amazingly talented ',(0,r.kt)("a",{parentName:"p",href:"https://uk.linkedin.com/in/robert-grzankowski-53618114"},"Robski"),'. Robski knows far more about K8s and networking than I\'m ever likely to. He\'d regularly say things like "ingress" and "MTLS" whilst I stared blankly at him. He definitely knows stuff.'),(0,r.kt)("p",null,"Robski challenged my plans. \"We don't need it. Have one pod that does both sorts of auth. If you do that, your implementation is simpler and scaling is more straightforward. You'll only need half the pods because you won't need internal ",(0,r.kt)("em",{parentName:"p"},"and")," external ones; one pod can handle both sets of traffic. You'll save money.\""),(0,r.kt)("p",null,"I loved the idea but I didn't think that ASP.Net Core supported it. \"It's just not a thing Robski; ASP.Net Core doesn't suppport it.\" Robski didn't believe me. That turned out to a ",(0,r.kt)("em",{parentName:"p"},"very good thing"),". There followed a period of much googling and experimentation. One day of hunting in, I was still convinced there was no way to do it that would allow me to look in the mirror without self loathing. Then Robski sent me this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of WhatsApp message with a link in it",src:n(77582).Z})),(0,r.kt)("p",null,"It was a link to the amazing ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/davidfowl"},"David Fowler")," talking about ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aspnet/Security/issues/1469#issuecomment-335027005"},"some API I'd never heard of called ",(0,r.kt)("inlineCode",{parentName:"a"},"SchemeSelector")),". It turned out that this was the starting point for exactly what we needed; a way to dynamically select an authentication scheme at runtime."),(0,r.kt)("h2",{id:"show-me-the-code"},"Show me the code"),(0,r.kt)("p",null,"This API did end up landing in ASP.Net Core, but with the name ",(0,r.kt)("inlineCode",{parentName:"p"},"ForwardDefaultSelector"),". Not the most descriptive of names and I've struggled to find any documentation on it at all. What I did discover was ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/51897159/761388"},"an answer on StackOverflow by the marvellous Barbara Post"),". I was able to take the approach Barbara laid out and use it to my own ends. I ended up with this snippet of code added to my ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.ConfigureServices"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'services\n    .AddAuthentication(sharedOptions => {\n        sharedOptions.DefaultScheme = "WhichAuthDoWeUse";\n        sharedOptions.DefaultAuthenticateScheme = "WhichAuthDoWeUse";\n        sharedOptions.DefaultChallengeScheme = "WhichAuthDoWeUse";\n    })\n    .AddPolicyScheme("WhichAuthDoWeUse", "Azure AD or Cookies", options => {\n        options.ForwardDefaultSelector = context => {\n            var (isExternalRequest, requestUrl) = context.Request.GetIsExternalRequestAndDomain();\n            if (isExternalRequest) {\n                _logger.LogInformation(\n                    "Request ({RequestURL}) has come from external domain ({Domain}) so using Cookie Authentication",\n                    requestUrl, ExternalBaseUrl);\n\n                return CookieAuthenticationDefaults.AuthenticationScheme;\n           }\n\n           _logger.LogInformation(\n               "Request ({RequestURL}) has not come from external domain ({Domain}) so using Azure AD Authentication",\n               requestUrl, ExternalBaseUrl);\n\n            return AzureADDefaults.AuthenticationScheme;\n        };\n    })\n    .AddAzureAD(options => {\n        Configuration.Bind("AzureAd", options);\n    })\n    .AddCookie(options => {\n        options.Cookie.SecurePolicy = CookieSecurePolicy.Always;\n        options.Cookie.SameSite = SameSiteMode.Strict;\n        options.Cookie.HttpOnly = true;\n        options.Events.OnRedirectToAccessDenied = (context) => {\n            context.Response.StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status401Unauthorized;\n            return Task.CompletedTask;\n        };\n\n        options.Events.OnRedirectToLogin = (context) => {\n            context.Response.StatusCode = Microsoft.AspNetCore.Http.StatusCodes.Status401Unauthorized;\n            return Task.CompletedTask;\n        };\n    });\n')),(0,r.kt)("p",null,"If you look at this code it's doing these things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Registering three types of authentication: Cookie, Azure AD and "WhichAuthDoWeUse"'),(0,r.kt)("li",{parentName:"ol"},"Registers the default ",(0,r.kt)("inlineCode",{parentName:"li"},"Scheme"),' to be "WhichAuthDoWeUse".')),(0,r.kt)("p",null,'"WhichAuthDoWeUse" is effectively an ',(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement that says, ",(0,r.kt)("em",{parentName:"p"},'"if this is an external ',(0,r.kt)("inlineCode",{parentName:"em"},"Request"),' use Cookies authentication, otherwise use Azure AD"'),'. Given that "WhichAuthDoWeUse" is the default scheme, this code runs for each request, to determine which authentication method to use.'),(0,r.kt)("p",null,"Alongside this mechanism I added these extension methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Http.Extensions;\n\nnamespace My.App.Auth {\n    public static class AuthExtensions {\n        public const string ExternalBaseUrl = "https://mega-app.com";\n        public const string InternalBaseUrl = "https://strictly4mypeeps.io";\n\n        /// <summary>\n        /// Determines if a request is an "external" URL (eg begins "https://mega-app.com")\n        /// or an "internal" URL (eg begins "https://strictly4mypeeps.io")\n        /// </summary>\n        public static (bool, string) GetIsExternalRequestAndDomain(this HttpRequest request) {\n            var (requestUrl, domain) = GetRequestUrlAndDomain(request);\n\n            var isExternalUrl = domain == ExternalBaseUrl;\n\n            var isUnknownPath = domain == null; // This scenario is extremely unlikely but has been observed once during testing so we will cater for it\n\n            var isExternalRequest = isExternalUrl || isUnknownPath; // If unknown we\'ll treat as "external" for a safe fallback\n\n            return (isExternalRequest, requestUrl);\n        }\n\n        /// <summary>\n        /// Determines if a request is an "external" URL (eg begins "https://mega-app.com")\n        /// or an "internal" URL (eg begins "https://strictly4mypeeps.io")\n        /// </summary>\n        public static (bool, string) GetIsInternalRequestAndDomain(this HttpRequest request) {\n            var (requestUrl, domain) = GetRequestUrlAndDomain(request);\n\n            var isInternalRequest = domain == InternalBaseUrl;\n\n            return (isInternalRequest, requestUrl);\n        }\n\n        private static (string, string) GetRequestUrlAndDomain(HttpRequest request) {\n            string requestUrl = null;\n            string domain = null;\n            if (request.Host.HasValue) {\n                requestUrl = request.GetEncodedUrl();\n                domain = new Uri(requestUrl).GetLeftPart(UriPartial.Authority);\n            }\n\n            return (requestUrl, domain);\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Finally, I updated the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpaController.cs")," (which serves initial requests to our Single Page Application) to cater for having two types of Auth in play:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'        /// <summary>\n        /// ASP.NET will try and load the index.html using the FileServer if we don\'t have a route\n        /// here to match `/`. These attributes can\'t be on Index or the spa fallback doesn\'t work\n        /// Note: this is almost perfect except that if someone actually calls /index.html they\'ll get\n        /// the FileServer one, not the one from this file.\n        /// </summary>\n        [HttpGet("/")]\n        [AllowAnonymous]\n        public async Task<IActionResult> SpaFallback([FromQuery] string returnUrl) {\n            var redirectUrlIfUserIsInternalAndNotAuthenticated = GetRedirectUrlIfUserIsInternalAndNotAuthenticated(returnUrl);\n\n            if (redirectUrlIfUserIsInternalAndNotAuthenticated != null)\n                return LocalRedirect(redirectUrlIfUserIsInternalAndNotAuthenticated);\n\n            return await Index(); // Index just serves up our SPA index.html\n        }\n\n        /// <summary>\n        /// SPA landing with authorisation - this endpoint will typically not be directly navigated to by a user;\n        /// rather it will be redirected to from the IndexWithoutAuthorisation and SpaFallback actions above\n        /// in the case where a user is *not* authenticated but has come from an internal URL eg https://strictlyformypeeps.io\n        /// </summary>\n        [HttpGet("/login-with-azure-ad")]\n        [Authorize]\n        public async Task<IActionResult> IndexWithAuthorisation()\n        {\n            return await Index(); // Index just serves up our SPA index.html\n        }\n\n        /// <summary>\n        /// This method returns a RedirectURL if a request is coming from an internal URL\n        /// eg https://int.prd.our.cloud and is not authenticated.  In this case\n        /// we likely want to trigger authentication by redirecting to an authorized endpoint\n        /// </summary>\n        string GetRedirectUrlIfUserIsInternalAndNotAuthenticated(string returnUrl)\n        {\n            // If a user is authenticated then we don\'t need to trigger authentication\n            var isAuthenticated = User?.Identity?.Name != null;\n            if (isAuthenticated)\n                return null;\n\n            // This scenario is extremely unlikely but has been observed once during testing so we will cater for it\n            var (isInternalRequest, requestUrl) = Request.GetIsInternalRequestAndDomain();\n\n            if (isInternalRequest) {\n                var redirectUrl = $"/login-with-azure-ad{(string.IsNullOrEmpty(returnUrl) ? "" : "?returnUrl=" + WebUtility.UrlEncode(returnUrl))}";\n                _logger.LogInformation(\n                    "Request ({RequestURL}) has come from internal domain ({InternalDomain}) but is not authenticated; redirecting to {RedirectURL}",\n                    requestUrl, AuthExtensions.InternalBaseUrl, redirectUrl);\n\n                return redirectUrl;\n            }\n\n            return null;\n        }\n')),(0,r.kt)("p",null,"The code above allows anonymous requests to land in our app through the ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowAnonymous")," attribute. However, it checks the request when it comes in to see if:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"It's an internal request (i.e. the Request URL starts \"",(0,r.kt)("a",{parentName:"li",href:"https://strictly4mypeeps.io/%22"},'https://strictly4mypeeps.io/"'),")"),(0,r.kt)("li",{parentName:"ol"},"The current user is ",(0,r.kt)("em",{parentName:"li"},"not")," authenticated.")),(0,r.kt)("p",null,"In this case the user is redirected to the ",(0,r.kt)("a",{parentName:"p",href:"https://strictly4mypeeps.io/login-with-azure-ad"},"https://strictly4mypeeps.io/login-with-azure-ad")," route which is decorated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorize")," attribute. This will trigger authentication for our unauthenticated internal users and drive them through the Azure AD login process."),(0,r.kt)("h2",{id:"the-mystery-of-no-documentation"},"The mystery of no documentation"),(0,r.kt)("p",null,"I'm so surprised that this approach hasn't yet been better documented on the (generally superb) ASP.Net Core docs. It's such a potentially useful approach; and in our case, money saving too! I hope the official docs feature something on this in future. If they do, and I've just missed it (possible!) then please hit me up in the comments."))}d.isMDXComponent=!0},77582:function(e,t,n){t.Z=n.p+"assets/images/robski-dynamic-auth-8ecf36998724cdb480d565351a2a65d5.png"}}]);
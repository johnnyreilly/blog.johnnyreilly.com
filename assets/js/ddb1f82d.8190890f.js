"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[54148],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=l(t),y=o,m=g["".concat(c,".").concat(y)]||g[y]||u[y]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32333:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],s={title:"Google Analytics API and ASP.Net Core",authors:"johnnyreilly",tags:["asp net core","google analytics"],hide_table_of_contents:!1},c=void 0,l={permalink:"/2019/03/22/google-analytics-api-and-aspnet-core",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2019-03-22-google-analytics-api-and-aspnet-core/index.md",source:"@site/blog/2019-03-22-google-analytics-api-and-aspnet-core/index.md",title:"Google Analytics API and ASP.Net Core",description:"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using the API:",date:"2019-03-22T00:00:00.000Z",formattedDate:"March 22, 2019",tags:[{label:"asp net core",permalink:"/tags/asp-net-core"},{label:"google analytics",permalink:"/tags/google-analytics"}],readingTime:1.885,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Google Analytics API and ASP.Net Core",authors:"johnnyreilly",tags:["asp net core","google analytics"],hide_table_of_contents:!1},prevItem:{title:"Template Tricks for a Dainty DOM",permalink:"/2019/03/24/template-tricks-for-dainty-dom"},nextItem:{title:"fork-ts-checker-webpack-plugin v1.0",permalink:"/2019/03/06/fork-ts-checker-webpack-plugin-v1"}},p={authorsImageUrls:[void 0]},u=[],g={toc:u};function y(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I recently had need to be able to access the API for Google Analytics from ASP.Net Core. Getting this up and running turned out to be surprisingly tough because of an absence of good examples. So here it is; an example of how you can access a simple page access stat using ",(0,a.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Google.Apis.AnalyticsReporting.v4/"},"the API"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'async Task<SomeKindOfDataStructure[]> GetUsageFromGoogleAnalytics(DateTime startAtThisDate, DateTime endAtThisDate)\n{\n    // Create the DateRange object. Here we want data from last week.\n    var dateRange = new DateRange\n    {\n        StartDate = startAtThisDate.ToString("yyyy-MM-dd"),\n        EndDate = endAtThisDate.ToString("yyyy-MM-dd")\n    };\n    // Create the Metrics and dimensions object.\n    // var metrics = new List<Metric> { new Metric { Expression = "ga:sessions", Alias = "Sessions" } };\n    // var dimensions = new List<Dimension> { new Dimension { Name = "ga:pageTitle" } };\n    var metrics = new List<Metric> { new Metric { Expression = "ga:uniquePageviews" } };\n    var dimensions = new List<Dimension> {\n        new Dimension { Name = "ga:date" },\n        new Dimension { Name = "ga:dimension1" }\n    };\n\n    // Get required View Id from configuration\n    var viewId = $"ga:{"[VIEWID]"}";\n\n    // Create the Request object.\n    var reportRequest = new ReportRequest\n    {\n        DateRanges = new List<DateRange> { dateRange },\n        Metrics = metrics,\n        Dimensions = dimensions,\n        FiltersExpression = "ga:pagePath==/index.html",\n        ViewId = viewId\n    };\n\n    var getReportsRequest = new GetReportsRequest {\n        ReportRequests = new List<ReportRequest> { reportRequest }\n    };\n\n    //Invoke Google Analytics API call and get report\n    var analyticsService = GetAnalyticsReportingServiceInstance();\n    var response = await (analyticsService.Reports.BatchGet(getReportsRequest)).ExecuteAsync();\n\n    var logins = response.Reports[0].Data.Rows.Select(row => new SomeKindOfDataStructure {\n        Date = new DateTime(\n            year: Convert.ToInt32(row.Dimensions[0].Substring(0, 4)),\n            month: Convert.ToInt32(row.Dimensions[0].Substring(4, 2)),\n            day: Convert.ToInt32(row.Dimensions[0].Substring(6, 2))),\n        NumberOfLogins = Convert.ToInt32(row.Metrics[0].Values[0])\n    })\n    .OrderByDescending(login => login.Date)\n    .ToArray();\n\n    return logins;\n}\n\n/// <summary>\n/// Intializes and returns Analytics Reporting Service Instance\n/// </summary>\nAnalyticsReportingService GetAnalyticsReportingServiceInstance() {\n    var googleAuthFlow = new GoogleAuthorizationCodeFlow(new GoogleAuthorizationCodeFlow.Initializer {\n        ClientSecrets = new ClientSecrets {\n            ClientId = "[CLIENTID]",\n            ClientSecret = "[CLIENTSECRET]"\n        }\n    });\n\n    var responseToken = new TokenResponse {\n        AccessToken = "[ANALYTICSTOKEN]",\n        RefreshToken = "[REFRESHTOKEN]",\n        Scope = AnalyticsReportingService.Scope.AnalyticsReadonly, //Read-only access to Google Analytics,\n        TokenType = "Bearer",\n    };\n\n    var credential = new UserCredential(googleAuthFlow, "", responseToken);\n\n    // Create the  Analytics service.\n    return new AnalyticsReportingService(new BaseClientService.Initializer {\n        HttpClientInitializer = credential,\n        ApplicationName = "my-super-applicatio",\n    });\n}\n')),(0,a.kt)("p",null,"You can see above that you need various credentials to be able to use the API. You can acquire these by logging into GA. Enjoy!"))}y.isMDXComponent=!0}}]);
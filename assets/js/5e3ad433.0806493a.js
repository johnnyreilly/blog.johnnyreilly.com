"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[98511],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),m=o,h=c["".concat(s,".").concat(m)]||c[m]||g[m]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36884:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var i=t(83117),o=t(80102),r=(t(67294),t(3905)),a=["components"],l={title:"ASP.NET, Serilog and Application Insights",authors:"johnnyreilly",image:"./application-insights-properties.png",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2021/01/30/aspnet-serilog-and-application-insights",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",source:"@site/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",title:"ASP.NET, Serilog and Application Insights",description:"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic Serilog and will want to plug it into Azure's Application Insights.",date:"2021-01-30T00:00:00.000Z",formattedDate:"January 30, 2021",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Azure",permalink:"/tags/azure"},{label:"Application Insights",permalink:"/tags/application-insights"},{label:"Serilog",permalink:"/tags/serilog"}],readingTime:3.75,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"ASP.NET, Serilog and Application Insights",authors:"johnnyreilly",image:"./application-insights-properties.png",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},prevItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"},nextItem:{title:"Azure Pipelines Build Info in an ASP.NET React app",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"}},u={image:t(40633).Z,authorsImageUrls:[void 0]},g=[{value:"Let&#39;s plug it together",id:"lets-plug-it-together",level:2}],c={toc:g};function m(e){var n=e.components,l=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic ",(0,r.kt)("a",{parentName:"p",href:"https://serilog.net/"},"Serilog")," and will want to plug it into Azure's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application Insights"),"."),(0,r.kt)("p",null,"This post will show you how it's done, and it'll also build upon the ",(0,r.kt)("a",{parentName:"p",href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"},"build info work from our previous post"),". In what way? Great question. Well logs are a tremendous diagnostic tool. If you have logs which display some curious behaviour, and you'd like to replicate that in another environment, you really want to take exactly that version of the codebase out to play. Our last post introduced build info into our application in the form of our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," class that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "buildNumber": "20210130.1",\n  "buildId": "123456",\n  "branchName": "main",\n  "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),(0,r.kt)("p",null,"We'd initially exposed an endpoint in our application which surfaced up this information. Now we're going to take that self same information and bake it into our log messages by making use of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog/wiki/Enrichment"},"Serilog's enrichment functionality"),". Build info and Serilog's enrichment are the double act your logging has been waiting for."),(0,r.kt)("h2",{id:"lets-plug-it-together"},"Let's plug it together"),(0,r.kt)("p",null,"We're going to need a number of Serilog dependencies added to our ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />\n<PackageReference Include="Serilog.Enrichers.Environment" Version="2.1.3" />\n<PackageReference Include="Serilog.Enrichers.Thread" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.ApplicationInsights" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.Async" Version="1.4.0" />\n')),(0,r.kt)("p",null,"The earlier in your application lifetime you get logging wired up, the happier you will be. Earlier, means more information when you're diagnosing issues. So we want to start in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," would be just ",(0,r.kt)("em",{parentName:"p"},"way")," too late."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Program {\n    const string APP_NAME = "MyAmazingApp";\n\n    public static int Main(string[] args) {\n        AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n        LoggerConfigurationExtensions.SetupLoggerConfiguration(APP_NAME, AppVersionInfo.GetBuildInfo());\n\n        try\n        {\n            Log.Information("Starting web host");\n            CreateHostBuilder(args).Build().Run();\n            return 0;\n        }\n        catch (Exception ex)\n        {\n            Log.Fatal(ex, "Host terminated unexpectedly");\n            return 1;\n        }\n        finally\n        {\n            Log.CloseAndFlush();\n        }\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .UseSerilog((hostBuilderContext, services, loggerConfiguration) => {\n                loggerConfiguration.ConfigureBaseLogging(APP_NAME, AppVersionInfo.GetBuildInfo());\n                loggerConfiguration.AddApplicationInsightsLogging(services, hostBuilderContext.Configuration);\n            })\n            .ConfigureWebHostDefaults(webBuilder => {\n                webBuilder\n                    .UseStartup<Startup>();\n            });\n}\n')),(0,r.kt)("p",null,"If you look at the code above you'll see that the first line of code that executes is ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo.InitialiseBuildInfoGivenPath"),". This initialises our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," so we have meaningful build info to pump into our logs. The next thing we do is to configure Serilog with ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions.SetupLoggerConfiguration"),". This provides us with a configured logger so we are free to log any issues that take place during startup. (Incidentally, after startup you'll likely inject an ",(0,r.kt)("inlineCode",{parentName:"p"},"ILogger")," into your classes rather than using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," directly.)"),(0,r.kt)("p",null,"Finally, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateHostBuilder")," which in turn calls ",(0,r.kt)("inlineCode",{parentName:"p"},"UseSerilog")," to plug Serilog into ASP.NET. If you take a look inside the body of ",(0,r.kt)("inlineCode",{parentName:"p"},"UseSerilog")," you'll see we configure the logging of ASP.NET (in the same way we did for Serilog) and we hook into Application Insights as well. There's been a number of references to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions"),". Let's take a look at it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'internal static class LoggerConfigurationExtensions {\n    internal static void SetupLoggerConfiguration(string appName, BuildInfo buildInfo) {\n        Log.Logger = new LoggerConfiguration()\n            .ConfigureBaseLogging(appName, buildInfo)\n            .CreateLogger();\n    }\n\n    internal static LoggerConfiguration ConfigureBaseLogging(\n        this LoggerConfiguration loggerConfiguration,\n        string appName,\n        BuildInfo buildInfo\n    ) {\n        loggerConfiguration\n            .MinimumLevel.Debug()\n            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)\n            // AMAZING COLOURS IN THE CONSOLE!!!!\n            .WriteTo.Async(a => a.Console(theme: AnsiConsoleTheme.Code))\n            .Enrich.FromLogContext()\n            .Enrich.WithMachineName()\n            .Enrich.WithThreadId()\n            // Build information as custom properties\n            .Enrich.WithProperty(nameof(buildInfo.BuildId), buildInfo.BuildId)\n            .Enrich.WithProperty(nameof(buildInfo.BuildNumber), buildInfo.BuildNumber)\n            .Enrich.WithProperty(nameof(buildInfo.BranchName), buildInfo.BranchName)\n            .Enrich.WithProperty(nameof(buildInfo.CommitHash), buildInfo.CommitHash)\n            .Enrich.WithProperty("ApplicationName", appName);\n\n        return loggerConfiguration;\n    }\n\n    internal static LoggerConfiguration AddApplicationInsightsLogging(this LoggerConfiguration loggerConfiguration, IServiceProvider services, IConfiguration configuration)\n    {\n        if (!string.IsNullOrWhiteSpace(configuration.GetValue<string>("APPINSIGHTS_INSTRUMENTATIONKEY")))\n        {\n            loggerConfiguration.WriteTo.ApplicationInsights(\n                services.GetRequiredService<TelemetryConfiguration>(),\n                TelemetryConverter.Traces);\n        }\n\n        return loggerConfiguration;\n    }\n}\n')),(0,r.kt)("p",null,"If we take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureBaseLogging")," method above, we can see that our logs are being enriched with the build info, property by property. We're also giving ourselves a beautifully coloured console thanks to Serilog's glorious ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog-sinks-console#themes"},"theme support"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of the console featuring coloured output",src:t(49028).Z,width:"924",height:"128"})),(0,r.kt)("p",null,"Take a moment to admire the salmon pinks. Is it not lovely?"),(0,r.kt)("p",null,"Finally we come to the main act. Plugging in Application Insights is as simple as dropping in ",(0,r.kt)("inlineCode",{parentName:"p"},"loggerConfiguration.WriteTo.ApplicationInsights")," into our configuration. You'll note that this depends upon the existence of an application setting of ",(0,r.kt)("inlineCode",{parentName:"p"},"APPINSIGHTS_INSTRUMENTATIONKEY")," - this is the secret sauce that we need to be in place so we can pipe logs merrily to Application Insights. So you'll need this configuration in place so this works."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of application insights with our output",src:t(40633).Z,width:"806",height:"1068"})),(0,r.kt)("p",null,"As you can see, we now have the likes of ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitHash")," and friends visible on each log. Happy diagnostic days!"),(0,r.kt)("p",null,"I'm indebted to the marvellous ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/MarcelMichau"},"Marcel Michau")," who showed me how to get the fiddlier parts of how to get Application Insights plugged in the right way. Thanks chap!"))}m.isMDXComponent=!0},40633:function(e,n,t){n.Z=t.p+"assets/images/application-insights-properties-72237e21926a47f0f2bc04aee0237843.png"},49028:function(e,n){n.Z="data:image/png;base64,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"}}]);
"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[59812],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||r;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},16992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});t(67294);var i=t(3905);function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},a.apply(this,arguments)}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const o={slug:"surfacing-azure-pipelines-build-info-in-an-aspnet-react-app",title:"Azure Pipelines Build Info in an ASP.NET React app",authors:"johnnyreilly",image:"./about-page.png",tags:["azure pipelines"],hide_table_of_contents:!1},l=void 0,s={permalink:"/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-01-29-surfacing-azure-pipelines-build-info-in-an-aspnet-react-app/index.md",source:"@site/blog/2021-01-29-surfacing-azure-pipelines-build-info-in-an-aspnet-react-app/index.md",title:"Azure Pipelines Build Info in an ASP.NET React app",description:'How do you answer the question: "what version of my application is running in Production right now?" This post demonstrates how to surface the build metadata that represents the version of your app, from your app using Azure Pipelines and ASP.NET.',date:"2021-01-29T00:00:00.000Z",formattedDate:"January 29, 2021",tags:[{label:"azure pipelines",permalink:"/tags/azure-pipelines"}],readingTime:6.54,hasTruncateMarker:!0,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{slug:"surfacing-azure-pipelines-build-info-in-an-aspnet-react-app",title:"Azure Pipelines Build Info in an ASP.NET React app",authors:"johnnyreilly",image:"./about-page.png",tags:["azure pipelines"],hide_table_of_contents:!1},prevItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/aspnet-serilog-and-application-insights"},nextItem:{title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",permalink:"/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web"}},u={image:t(25418).Z,authorsImageUrls:[void 0]},p=[{value:"Putting build info into <code>azure-pipelines.yml</code>",id:"putting-build-info-into-azure-pipelinesyml",level:2},{value:"Surfacing the server build info",id:"surfacing-the-server-build-info",level:2},{value:"Surfacing the client build info",id:"surfacing-the-client-build-info",level:2}],d={toc:p};function c(e){var{components:n}=e,o=r(e,["components"]);return(0,i.kt)("wrapper",a({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'How do you answer the question: "what version of my application is running in Production right now?" This post demonstrates how to surface the build metadata that represents the version of your app, from your app using Azure Pipelines and ASP.NET.'),(0,i.kt)("p",null,"Many is the time where I've been pondering over why something isn't working as expected and burned a disappointing amount of time before realising that I'm playing with an old version of an app. Wouldn't it be great give our app a way to say: \"Hey! I'm version 1.2.3.4 of your app; built from this commit hash, I was built on Wednesday, I was the nineth build that day and I was built from the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch. And I'm an Aries.\" Or something like that."),(0,i.kt)("p",null,"This post was inspired by ",(0,i.kt)("a",a({parentName:"p"},{href:"https://www.hanselman.com/blog/adding-a-git-commit-hash-and-azure-devops-build-number-and-build-id-to-an-aspnet-website"}),"Scott Hanselman's similar post on the topic"),". Ultimately this ended up going in a fairly different direction and so seemed worthy of a post of its own."),(0,i.kt)("p",null,'A particular difference is that this is targeting SPAs. Famously, cache invalidation is hard. It\'s possible for the HTML/JS/CSS of your app to be stale due to aggressive caching. So we\'re going to make it possible to see build information for both when the SPA (or "client") is built, as well as when the .NET app (or "server") is built. We\'re using a specific type of SPA here; a ',(0,i.kt)("a",a({parentName:"p"},{href:"https://reactjs.org/"}),"React")," SPA built with ",(0,i.kt)("a",a({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," and ",(0,i.kt)("a",a({parentName:"p"},{href:"https://material-ui.com/"}),"Material UI"),", however the principles here are general; you could surface this up any which way you choose."),(0,i.kt)("h2",a({},{id:"putting-build-info-into-azure-pipelinesyml"}),"Putting build info into ",(0,i.kt)("inlineCode",{parentName:"h2"},"azure-pipelines.yml")),(0,i.kt)("p",null,"The first thing we're going to do is to inject our build details into two identical ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," files; one that sits in the server codebase and which will be used to drive the server build information, and one that sits in the client codebase to drive the client equivalent. They'll end up looking something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "buildNumber": "20210130.1",\n  "buildId": "123456",\n  "branchName": "main",\n  "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),(0,i.kt)("p",null,"We generate this by adding the following ",(0,i.kt)("inlineCode",{parentName:"p"},"yml")," to the beginning of our ",(0,i.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," (crucially before the client or server build take place):"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-yml"}),'- script: |\n      echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/client-app/src/buildinfo.json"\n      echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/server-app/Server/buildinfo.json"\n    displayName: "emit build details as JSON"\n    failOnStderr: true\n')),(0,i.kt)("p",null,"As you can see, we're placing the following variables that are available at build time in Azure Pipelines, into the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BuildNumber")," - The name of the completed build; which usually takes the form of a date in the ",(0,i.kt)("inlineCode",{parentName:"li"},"yyyyMMdd")," format, suffixed by ",(0,i.kt)("inlineCode",{parentName:"li"},".x")," where ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," is a number that increments representing the number of builds that have taken place on the given day."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BuildId")," - The ID of the record for the completed build."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SourceVersion")," - This is the commit hash of the source code in Git"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SourceBranchName")," - The name of the branch in Git.")),(0,i.kt)("p",null,(0,i.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#build-variables-devops-services"}),"There's many variables available in Azure Pipelines that can be used")," - we've picked out the ones most interesting to us."),(0,i.kt)("h2",a({},{id:"surfacing-the-server-build-info"}),"Surfacing the server build info"),(0,i.kt)("p",null,"Our pipeline is dropping the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," over pre-existing stub ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," files in both our client and server codebases. The stub files look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "buildNumber": "yyyyMMdd.x",\n  "buildId": "xxxxxx",\n  "branchName": "",\n  "commitHash": "LOCAL_BUILD"\n}\n')),(0,i.kt)("p",null,"In our .NET app, the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," file has been dropped in the root of the app. And as luck would have it, all JSON files are automatically included in a .NET build and so it will be available at runtime. We want to surface this file through an API, and we also want to use it to stamp details into our logs."),(0,i.kt)("p",null,"So we need to parse the file, and for that we'll use this:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'using System;\nusing System.IO;\nusing System.Text.Json;\n\nnamespace Server {\n    public record BuildInfo(string BranchName, string BuildNumber, string BuildId, string CommitHash);\n\n    public static class AppVersionInfo {\n        private const string _buildFileName = "buildinfo.json";\n        private static BuildInfo _fileBuildInfo = new(\n            BranchName: "",\n            BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n            BuildId: "xxxxxx",\n            CommitHash: $"Not yet initialised - call {nameof(InitialiseBuildInfoGivenPath)}"\n        );\n\n        public static void InitialiseBuildInfoGivenPath(string path) {\n            var buildFilePath = Path.Combine(path, _buildFileName);\n            if (File.Exists(buildFilePath)) {\n                try {\n                    var buildInfoJson = File.ReadAllText(buildFilePath);\n                    var buildInfo = JsonSerializer.Deserialize<BuildInfo>(buildInfoJson, new JsonSerializerOptions {\n                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase\n                    });\n                    if (buildInfo == null) throw new Exception($"Failed to deserialise {_buildFileName}");\n\n                    _fileBuildInfo = buildInfo;\n                } catch (Exception) {\n                    _fileBuildInfo = new BuildInfo(\n                        BranchName: "",\n                        BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n                        BuildId: "xxxxxx",\n                        CommitHash: "Failed to load build info from buildinfo.json"\n                    );\n                }\n            }\n        }\n\n        public static BuildInfo GetBuildInfo() => _fileBuildInfo;\n    }\n}\n')),(0,i.kt)("p",null,"The above code reads the ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," file and deserialises it into a ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildInfo")," record which is then surfaced up by the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetBuildInfo")," method. We initialise this at the start of our ",(0,i.kt)("inlineCode",{parentName:"p"},"Program.cs")," like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),"public static int Main(string[] args) {\n    AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n    // Now we're free to call AppVersionInfo.GetBuildInfo()\n    // ....\n}\n")),(0,i.kt)("p",null,"Now we need a controller to surface this information up. We'll add ourselves a ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildInfoController.cs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-cs"}),'using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace Server.Controllers {\n    [ApiController]\n    public class BuildInfoController : ControllerBase {\n        [AllowAnonymous]\n        [HttpGet("api/build")]\n        public BuildInfo GetBuild() => AppVersionInfo.GetBuildInfo();\n    }\n}\n')),(0,i.kt)("p",null,"This exposes an ",(0,i.kt)("inlineCode",{parentName:"p"},"api/build")," endpoint in our .NET app that, when hit, will display the following JSON:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"eager",fetchpriority:"high",alt:"screenshot of api/build output",src:t(94754).Z,width:"1050",height:"248"})),(0,i.kt)("h2",a({},{id:"surfacing-the-client-build-info"}),"Surfacing the client build info"),(0,i.kt)("p",null,"Our server now lets the world know which version it is running and this is tremendous. Now let's make our client do the same."),(0,i.kt)("p",null,"Very little is required to achieve this. Again we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," sat in the root of our codebase. We're able to import it as a module in TypeScript because we've set the following property in our ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-json"}),'"resolveJsonModule": true,\n')),(0,i.kt)("p",null,"As a consequence, consumption is as simple as:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import clientBuildInfo from './buildinfo.json';\n")),(0,i.kt)("p",null,"Which provides us with a ",(0,i.kt)("inlineCode",{parentName:"p"},"clientBuildInfo")," which TypeScript automatically derives as this type:"),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"type ClientBuildInfo = {\n  buildNumber: string;\n  buildId: string;\n  branchName: string;\n  commitHash: string;\n};\n")),(0,i.kt)("p",null,'How you choose to use that information is entirely your choice. We\'re going to add ourselves an "about" screen in our app, which displays both client info (loaded using the mechanism above) and server info (',(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),"ed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/api/build")," endpoint)."),(0,i.kt)("pre",null,(0,i.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),'import {\n  Card,\n  CardContent,\n  CardHeader,\n  createStyles,\n  Grid,\n  makeStyles,\n  Theme,\n  Typography,\n  Zoom,\n} from \'@material-ui/core\';\nimport React from \'react\';\nimport clientBuildInfo from \'../../buildinfo.json\';\nimport { projectsPurple } from \'../shared/colors\';\nimport { Loading } from \'../shared/Loading\';\nimport { TransitionContainer } from \'../shared/TransitionContainer\';\n\nconst useStyles = (cardColor: string) =>\n  makeStyles((theme: Theme) =>\n    createStyles({\n      card: {\n        padding: theme.spacing(0),\n        backgroundColor: cardColor,\n        color: theme.palette.common.white,\n        minHeight: theme.spacing(28),\n      },\n      avatar: {\n        backgroundColor: theme.palette.getContrastText(cardColor),\n        color: cardColor,\n      },\n      main: {\n        padding: theme.spacing(2),\n      },\n    })\n  )();\n\ntype Styles = ReturnType<typeof useStyles>;\n\nconst AboutPage: React.FC = () => {\n  const [serverBuildInfo, setServerBuildInfo] =\n    React.useState<typeof clientBuildInfo>();\n\n  React.useEffect(() => {\n    fetch(\'/api/build\')\n      .then((response) => response.json())\n      .then(setServerBuildInfo);\n  }, []);\n\n  const classes = useStyles(projectsPurple);\n\n  return (\n    <TransitionContainer>\n      <Grid container spacing={3}>\n        <Grid item xs={12} sm={12} container alignItems="center">\n          <Grid item>\n            <Typography variant="h4" component="h1">\n              About\n            </Typography>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid container spacing={1}>\n        <BuildInfo\n          classes={classes}\n          title="Client Version"\n          {...clientBuildInfo}\n        />\n      </Grid>\n      <br />\n      <Grid container spacing={1}>\n        {serverBuildInfo ? (\n          <BuildInfo\n            classes={classes}\n            title="Server Version"\n            {...serverBuildInfo}\n          />\n        ) : (\n          <Loading />\n        )}\n      </Grid>\n    </TransitionContainer>\n  );\n};\n\ninterface Props {\n  classes: Styles;\n  title: string;\n  branchName: string;\n  buildNumber: string;\n  buildId: string;\n  commitHash: string;\n}\n\nconst BuildInfo: React.FC<Props> = ({\n  classes,\n  title,\n  branchName,\n  buildNumber,\n  buildId,\n  commitHash,\n}) => (\n  <Zoom mountOnEnter unmountOnExit in={true}>\n    <Card className={classes.card}>\n      <CardHeader title={title} />\n      <CardContent className={classes.main}>\n        <Typography variant="body1" component="p">\n          <b>Build Number</b> {buildNumber}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Build Id</b> {buildId}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Branch Name</b> {branchName}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Commit Hash</b> {commitHash}\n        </Typography>\n      </CardContent>\n    </Card>\n  </Zoom>\n);\n\nexport default AboutPage;\n')),(0,i.kt)("p",null,"When the above page is viewed it looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"screenshot of our web app surfacing up the build information",src:t(25418).Z,width:"1050",height:"1056"})),(0,i.kt)("p",null,"And that's it! Our app is clearly telling us what version is being run, both on the server and in the client. Thanks to Scott Hanselman for his work which inspired this."))}c.isMDXComponent=!0},25418:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/about-page-770705599a33cec4e60eb1f6442b1832.png"},94754:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/api-build-screenshot-361f0ca3aa93a3340fdce01739fd0ef4.png"}}]);
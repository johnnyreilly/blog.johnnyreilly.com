"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[39249],{3905:function(e,n,i){i.d(n,{Zo:function(){return p},kt:function(){return m}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(i),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return i?t.createElement(h,r(r({ref:n},p),{},{components:i})):t.createElement(h,r({ref:n},p))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=i[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}c.displayName="MDXCreateElement"},9754:function(e,n,i){i.r(n),i.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return d},default:function(){return m}});var t=i(83117),a=i(80102),o=(i(67294),i(3905)),r=["components"],l={title:"Azure Pipelines Build Info in an ASP.NET React app",authors:"johnnyreilly",image:"./about-page.png",tags:["build information","azure pipelines"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-29-surfacing-azure-pipelines-build-info-in-an-aspnet-react-app/index.md",source:"@site/blog/2021-01-29-surfacing-azure-pipelines-build-info-in-an-aspnet-react-app/index.md",title:"Azure Pipelines Build Info in an ASP.NET React app",description:'How do you answer the question: "what version of my application is running in Production right now?" This post demonstrates how to surface the build metadata that represents the version of your app, from your app using Azure Pipelines and ASP.NET.',date:"2021-01-29T00:00:00.000Z",formattedDate:"January 29, 2021",tags:[{label:"build information",permalink:"/tags/build-information"},{label:"azure pipelines",permalink:"/tags/azure-pipelines"}],readingTime:6.535,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/2021/01/30/aspnet-serilog-and-application-insights"},nextItem:{title:"Azure Easy Auth and Roles with .NET and Microsoft.Identity.Web",permalink:"/2021/01/17/azure-easy-auth-and-roles-with-net-and-microsoft-identity-web"}},p={image:i(1488).Z,authorsImageUrls:[void 0]},d=[{value:"Putting build info into <code>azure-pipelines.yml</code>",id:"putting-build-info-into-azure-pipelinesyml",children:[],level:2},{value:"Surfacing the server build info",id:"surfacing-the-server-build-info",children:[],level:2},{value:"Surfacing the client build info",id:"surfacing-the-client-build-info",children:[],level:2}],c={toc:d};function m(e){var n=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'How do you answer the question: "what version of my application is running in Production right now?" This post demonstrates how to surface the build metadata that represents the version of your app, from your app using Azure Pipelines and ASP.NET.'),(0,o.kt)("p",null,"Many is the time where I've been pondering over why something isn't working as expected and burned a disappointing amount of time before realising that I'm playing with an old version of an app. Wouldn't it be great give our app a way to say: \"Hey! I'm version 1.2.3.4 of your app; built from this commit hash, I was built on Wednesday, I was the nineth build that day and I was built from the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," branch. And I'm an Aries.\" Or something like that."),(0,o.kt)("p",null,"This post was inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://www.hanselman.com/blog/adding-a-git-commit-hash-and-azure-devops-build-number-and-build-id-to-an-aspnet-website"},"Scott Hanselman's similar post on the topic"),". Ultimately this ended up going in a fairly different direction and so seemed worthy of a post of its own."),(0,o.kt)("p",null,'A particular difference is that this is targeting SPAs. Famously, cache invalidation is hard. It\'s possible for the HTML/JS/CSS of your app to be stale due to aggressive caching. So we\'re going to make it possible to see build information for both when the SPA (or "client") is built, as well as when the .NET app (or "server") is built. We\'re using a specific type of SPA here; a ',(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," SPA built with ",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript")," and ",(0,o.kt)("a",{parentName:"p",href:"https://material-ui.com/"},"Material UI"),", however the principles here are general; you could surface this up any which way you choose."),(0,o.kt)("h2",{id:"putting-build-info-into-azure-pipelinesyml"},"Putting build info into ",(0,o.kt)("inlineCode",{parentName:"h2"},"azure-pipelines.yml")),(0,o.kt)("p",null,"The first thing we're going to do is to inject our build details into two identical ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," files; one that sits in the server codebase and which will be used to drive the server build information, and one that sits in the client codebase to drive the client equivalent. They'll end up looking something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "buildNumber": "20210130.1",\n  "buildId": "123456",\n  "branchName": "main",\n  "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),(0,o.kt)("p",null,"We generate this by adding the following ",(0,o.kt)("inlineCode",{parentName:"p"},"yml")," to the beginning of our ",(0,o.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," (crucially before the client or server build take place):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'- script: |\n      echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/client-app/src/buildinfo.json"\n      echo -e -n "{\\"buildNumber\\":\\"$(Build.BuildNumber)\\",\\"buildId\\":\\"$(Build.BuildId)\\",\\"branchName\\":\\"$(Build.SourceBranchName)\\",\\"commitHash\\":\\"$(Build.SourceVersion)\\"}" > "$(Build.SourcesDirectory)/src/server-app/Server/buildinfo.json"\n    displayName: "emit build details as JSON"\n    failOnStderr: true\n')),(0,o.kt)("p",null,"As you can see, we're placing the following variables that are available at build time in Azure Pipelines, into the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BuildNumber")," - The name of the completed build; which usually takes the form of a date in the ",(0,o.kt)("inlineCode",{parentName:"li"},"yyyyMMdd")," format, suffixed by ",(0,o.kt)("inlineCode",{parentName:"li"},".x")," where ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is a number that increments representing the number of builds that have taken place on the given day."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BuildId")," - The ID of the record for the completed build."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SourceVersion")," - This is the commit hash of the source code in Git"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SourceBranchName")," - The name of the branch in Git.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/build/variables?view=azure-devops&tabs=yaml#build-variables-devops-services"},"There's many variables available in Azure Pipelines that can be used")," - we've picked out the ones most interesting to us."),(0,o.kt)("h2",{id:"surfacing-the-server-build-info"},"Surfacing the server build info"),(0,o.kt)("p",null,"Our pipeline is dropping the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," over pre-existing stub ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," files in both our client and server codebases. The stub files look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "buildNumber": "yyyyMMdd.x",\n  "buildId": "xxxxxx",\n  "branchName": "",\n  "commitHash": "LOCAL_BUILD"\n}\n')),(0,o.kt)("p",null,"In our .NET app, the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," file has been dropped in the root of the app. And as luck would have it, all JSON files are automatically included in a .NET build and so it will be available at runtime. We want to surface this file through an API, and we also want to use it to stamp details into our logs."),(0,o.kt)("p",null,"So we need to parse the file, and for that we'll use this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Text.Json;\n\nnamespace Server {\n    public record BuildInfo(string BranchName, string BuildNumber, string BuildId, string CommitHash);\n\n    public static class AppVersionInfo {\n        private const string _buildFileName = "buildinfo.json";\n        private static BuildInfo _fileBuildInfo = new(\n            BranchName: "",\n            BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n            BuildId: "xxxxxx",\n            CommitHash: $"Not yet initialised - call {nameof(InitialiseBuildInfoGivenPath)}"\n        );\n\n        public static void InitialiseBuildInfoGivenPath(string path) {\n            var buildFilePath = Path.Combine(path, _buildFileName);\n            if (File.Exists(buildFilePath)) {\n                try {\n                    var buildInfoJson = File.ReadAllText(buildFilePath);\n                    var buildInfo = JsonSerializer.Deserialize<BuildInfo>(buildInfoJson, new JsonSerializerOptions {\n                        PropertyNamingPolicy = JsonNamingPolicy.CamelCase\n                    });\n                    if (buildInfo == null) throw new Exception($"Failed to deserialise {_buildFileName}");\n\n                    _fileBuildInfo = buildInfo;\n                } catch (Exception) {\n                    _fileBuildInfo = new BuildInfo(\n                        BranchName: "",\n                        BuildNumber: DateTime.UtcNow.ToString("yyyyMMdd") + ".0",\n                        BuildId: "xxxxxx",\n                        CommitHash: "Failed to load build info from buildinfo.json"\n                    );\n                }\n            }\n        }\n\n        public static BuildInfo GetBuildInfo() => _fileBuildInfo;\n    }\n}\n')),(0,o.kt)("p",null,"The above code reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," file and deserialises it into a ",(0,o.kt)("inlineCode",{parentName:"p"},"BuildInfo")," record which is then surfaced up by the ",(0,o.kt)("inlineCode",{parentName:"p"},"GetBuildInfo")," method. We initialise this at the start of our ",(0,o.kt)("inlineCode",{parentName:"p"},"Program.cs")," like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},"public static int Main(string[] args) {\n    AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n    // Now we're free to call AppVersionInfo.GetBuildInfo()\n    // ....\n}\n")),(0,o.kt)("p",null,"Now we need a controller to surface this information up. We'll add ourselves a ",(0,o.kt)("inlineCode",{parentName:"p"},"BuildInfoController.cs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs"},'using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Mvc;\n\nnamespace Server.Controllers {\n    [ApiController]\n    public class BuildInfoController : ControllerBase {\n        [AllowAnonymous]\n        [HttpGet("api/build")]\n        public BuildInfo GetBuild() => AppVersionInfo.GetBuildInfo();\n    }\n}\n')),(0,o.kt)("p",null,"This exposes an ",(0,o.kt)("inlineCode",{parentName:"p"},"api/build")," endpoint in our .NET app that, when hit, will display the following JSON:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of api/build output",src:i(60099).Z})),(0,o.kt)("h2",{id:"surfacing-the-client-build-info"},"Surfacing the client build info"),(0,o.kt)("p",null,"Our server now lets the world know which version it is running and this is tremendous. Now let's make our client do the same."),(0,o.kt)("p",null,"Very little is required to achieve this. Again we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"buildinfo.json")," sat in the root of our codebase. We're able to import it as a module in TypeScript because we've set the following property in our ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"resolveJsonModule": true,\n')),(0,o.kt)("p",null,"As a consequence, consumption is as simple as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import clientBuildInfo from './buildinfo.json';\n")),(0,o.kt)("p",null,"Which provides us with a ",(0,o.kt)("inlineCode",{parentName:"p"},"clientBuildInfo")," which TypeScript automatically derives as this type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type ClientBuildInfo = {\n  buildNumber: string;\n  buildId: string;\n  branchName: string;\n  commitHash: string;\n};\n")),(0,o.kt)("p",null,'How you choose to use that information is entirely your choice. We\'re going to add ourselves an "about" screen in our app, which displays both client info (loaded using the mechanism above) and server info (',(0,o.kt)("inlineCode",{parentName:"p"},"fetch"),"ed from the ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/build")," endpoint)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Card,\n  CardContent,\n  CardHeader,\n  createStyles,\n  Grid,\n  makeStyles,\n  Theme,\n  Typography,\n  Zoom,\n} from \'@material-ui/core\';\nimport React from \'react\';\nimport clientBuildInfo from \'../../buildinfo.json\';\nimport { projectsPurple } from \'../shared/colors\';\nimport { Loading } from \'../shared/Loading\';\nimport { TransitionContainer } from \'../shared/TransitionContainer\';\n\nconst useStyles = (cardColor: string) =>\n  makeStyles((theme: Theme) =>\n    createStyles({\n      card: {\n        padding: theme.spacing(0),\n        backgroundColor: cardColor,\n        color: theme.palette.common.white,\n        minHeight: theme.spacing(28),\n      },\n      avatar: {\n        backgroundColor: theme.palette.getContrastText(cardColor),\n        color: cardColor,\n      },\n      main: {\n        padding: theme.spacing(2),\n      },\n    })\n  )();\n\ntype Styles = ReturnType<typeof useStyles>;\n\nconst AboutPage: React.FC = () => {\n  const [serverBuildInfo, setServerBuildInfo] =\n    React.useState<typeof clientBuildInfo>();\n\n  React.useEffect(() => {\n    fetch(\'/api/build\')\n      .then((response) => response.json())\n      .then(setServerBuildInfo);\n  }, []);\n\n  const classes = useStyles(projectsPurple);\n\n  return (\n    <TransitionContainer>\n      <Grid container spacing={3}>\n        <Grid item xs={12} sm={12} container alignItems="center">\n          <Grid item>\n            <Typography variant="h4" component="h1">\n              About\n            </Typography>\n          </Grid>\n        </Grid>\n      </Grid>\n      <Grid container spacing={1}>\n        <BuildInfo\n          classes={classes}\n          title="Client Version"\n          {...clientBuildInfo}\n        />\n      </Grid>\n      <br />\n      <Grid container spacing={1}>\n        {serverBuildInfo ? (\n          <BuildInfo\n            classes={classes}\n            title="Server Version"\n            {...serverBuildInfo}\n          />\n        ) : (\n          <Loading />\n        )}\n      </Grid>\n    </TransitionContainer>\n  );\n};\n\ninterface Props {\n  classes: Styles;\n  title: string;\n  branchName: string;\n  buildNumber: string;\n  buildId: string;\n  commitHash: string;\n}\n\nconst BuildInfo: React.FC<Props> = ({\n  classes,\n  title,\n  branchName,\n  buildNumber,\n  buildId,\n  commitHash,\n}) => (\n  <Zoom mountOnEnter unmountOnExit in={true}>\n    <Card className={classes.card}>\n      <CardHeader title={title} />\n      <CardContent className={classes.main}>\n        <Typography variant="body1" component="p">\n          <b>Build Number</b> {buildNumber}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Build Id</b> {buildId}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Branch Name</b> {branchName}\n        </Typography>\n        <Typography variant="body1" component="p">\n          <b>Commit Hash</b> {commitHash}\n        </Typography>\n      </CardContent>\n    </Card>\n  </Zoom>\n);\n\nexport default AboutPage;\n')),(0,o.kt)("p",null,"When the above page is viewed it looks like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of our web app surfacing up the build information",src:i(1488).Z})),(0,o.kt)("p",null,"And that's it! Our app is clearly telling us what version is being run, both on the server and in the client. Thanks to Scott Hanselman for his work which inspired this."))}m.isMDXComponent=!0},1488:function(e,n,i){n.Z=i.p+"assets/images/about-page-8d61e655ef763d472c3bfd65d503fc79.png"},60099:function(e,n,i){n.Z=i.p+"assets/images/api-build-screenshot-afa125066d289079090e347613d4e1e1.png"}}]);
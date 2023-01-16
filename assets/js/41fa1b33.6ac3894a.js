"use strict";(self.webpackChunkjohnnyreilly_com=self.webpackChunkjohnnyreilly_com||[]).push([[1505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(l,".").concat(m)]||c[m]||h[m]||a;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});n(67294);var r=n(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const s={title:"Unit testing MVC controllers / Mocking UrlHelper",authors:"johnnyreilly",tags:["MVC","unit testing","AreaRegistration.RegisterAllAreas()","MOQ","UrlHelper"],hide_table_of_contents:!1},i=void 0,l={permalink:"/2013/02/18/unit-testing-mvc-controllers-mocking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2013-02-18-unit-testing-mvc-controllers-mocking/index.md",source:"@site/blog/2013-02-18-unit-testing-mvc-controllers-mocking/index.md",title:"Unit testing MVC controllers / Mocking UrlHelper",description:"I have put a name to my pain...",date:"2013-02-18T00:00:00.000Z",formattedDate:"February 18, 2013",tags:[{label:"MVC",permalink:"/tags/mvc"},{label:"unit testing",permalink:"/tags/unit-testing"},{label:"AreaRegistration.RegisterAllAreas()",permalink:"/tags/area-registration-register-all-areas"},{label:"MOQ",permalink:"/tags/moq"},{label:"UrlHelper",permalink:"/tags/url-helper"}],readingTime:5.715,hasTruncateMarker:!1,authors:[{name:"John Reilly",title:"OSS Engineer - TypeScript, Azure, React, Node.js, .NET",url:"https://johnnyreilly.com/about",imageURL:"https://johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Unit testing MVC controllers / Mocking UrlHelper",authors:"johnnyreilly",tags:["MVC","unit testing","AreaRegistration.RegisterAllAreas()","MOQ","UrlHelper"],hide_table_of_contents:!1},prevItem:{title:"Unit testing ModelState",permalink:"/2013/03/03/unit-testing-modelstate"},nextItem:{title:"Using Expressions with Constructors",permalink:"/2013/02/13/using-expressions-with-constructors"}},u={authorsImageUrls:[void 0]},p=[{value:"I have put a name to my pain...",id:"i-have-put-a-name-to-my-pain",level:2},{value:"Getting disillusioned",id:"getting-disillusioned",level:2},{value:"MvcMockControllers updated",id:"mvcmockcontrollers-updated",level:2},{value:"What I want to test",id:"what-i-want-to-test",level:2},{value:"Enough of the waffle - show me a unit test",id:"enough-of-the-waffle---show-me-a-unit-test",level:2}],c={toc:p};function h(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",o({},{id:"i-have-put-a-name-to-my-pain"}),"I have put a name to my pain..."),(0,r.kt)("p",null,"And it is unit testing ASP.Net MVC controllers."),(0,r.kt)("p",null,"Well perhaps that's unfair. I have no problem unit testing MVC controllers.... ",(0,r.kt)("strong",{parentName:"p"},"until"),' it comes to making use of the "innards" of MVC. Let me be more specific. This week I had a controller action that I needed to test. It looked a little like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using System.Collections.Generic;\nusing System.Linq;\nusing System.Web.Mvc;\n\nnamespace DemoApp.Areas.Demo.Controllers\n{\n    public class DemoController : System.Web.Mvc.Controller\n    {\n        //....\n\n        public JsonResult Edit(AnObject anObject)\n        {\n            //Indicate to the client we have saved and pass back the redirect URL\n            return Json(new {\n                Saved = true,\n                RedirectUrl = Url.Action("Details", anObject.AnotherTypeOfId)\n                });\n        }\n\n        //....\n    }\n}\n')),(0,r.kt)("p",null,"Looks fine right? It's an action that takes a simple object as an argument. That's ok. It returns a JsonResult. No worries. The JsonResult consists of an anonymous class. De nada. The anonymous class has one property that is driven by the controllers ",(0,r.kt)("inlineCode",{parentName:"p"},"UrlHelper"),". Yeah that shouldn't be an issue... ",(0,r.kt)("strong",{parentName:"p"},"Hold your horses sunshine - you're going nowhere!")),(0,r.kt)("h2",o({},{id:"getting-disillusioned"}),"Getting disillusioned"),(0,r.kt)("p",null,"Yup, the minute you start pumping in asserts around that ",(0,r.kt)("inlineCode",{parentName:"p"},"UrlHelper")," driven property you're going to be mighty disappointed. What, you didn't expect the result to be ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"? Damn shame."),(0,r.kt)("p",null,"Despite ",(0,r.kt)("a",o({parentName:"p"},{href:"http://msdn.microsoft.com/en-us/magazine/dd942838.aspx"}),"articles"),' on MSDN about how the intention is for MVC to be deliberately testable the sad fact of the matter is that there is a yawning hole around the testing support for controllers in ASP.Net MVC. Whenever you try to test something that makes use of controller "gubbins" you have ',(0,r.kt)("strong",{parentName:"p"},"serious")," problems. And unfortunately I didn't find anyone out there who could offer the whole solution."),(0,r.kt)("p",null,"After what I can best describe as a day of pain I found a way to scratch my particular itch. I found a way to write unit tests for controllers that made use of UrlHelper. As a bonus I managed to include the unit testing of Routes and Areas (well kind of) too."),(0,r.kt)("h2",o({},{id:"mvcmockcontrollers-updated"}),"MvcMockControllers updated"),(0,r.kt)("p",null,"This solution is heavily based on the work of Scott Hanselman who ",(0,r.kt)("a",o({parentName:"p"},{href:"http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx"}),"wrote and blogged about ",(0,r.kt)("inlineCode",{parentName:"a"},"MvcMockHelpers"))," back in 2008. Essentially I've taken this and tweaked it so I could achieve my ends. My version of ",(0,r.kt)("inlineCode",{parentName:"p"},"MvcMockHelpers")," looks a little like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using Moq;\nusing System;\nusing System.Collections.Specialized;\nusing System.Web;\nusing System.Web.Mvc;\nusing System.Web.Routing;\n\nnamespace UnitTest.TestUtilities\n{\n    /// <summary>\n    /// This class of MVC Mock helpers is originally based on Scott Hanselman\'s 2008 post:\n    /// http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx\n    ///\n    /// This has been updated and tweaked to work with MVC 3 / 4 projects (it hasn\'t been tested with MVC\n    /// 1 / 2 but may work there) and also based my use cases\n    /// </summary>\n    public static class MvcMockHelpers\n    {\n        #region Mock HttpContext factories\n\n        public static HttpContextBase MockHttpContext()\n        {\n            var context = new Mock<HttpContextBase>();\n            var request = new Mock<HttpRequestBase>();\n            var response = new Mock<HttpResponseBase>();\n            var session = new Mock<HttpSessionStateBase>();\n            var server = new Mock<HttpServerUtilityBase>();\n\n            request.Setup(r => r.AppRelativeCurrentExecutionFilePath).Returns("/");\n            request.Setup(r => r.ApplicationPath).Returns("/");\n\n            response.Setup(s => s.ApplyAppPathModifier(It.IsAny<string>())).Returns<string>(s => s);\n            response.SetupProperty(res => res.StatusCode, (int)System.Net.HttpStatusCode.OK);\n\n            context.Setup(h => h.Request).Returns(request.Object);\n            context.Setup(h => h.Response).Returns(response.Object);\n\n            context.Setup(ctx => ctx.Request).Returns(request.Object);\n            context.Setup(ctx => ctx.Response).Returns(response.Object);\n            context.Setup(ctx => ctx.Session).Returns(session.Object);\n            context.Setup(ctx => ctx.Server).Returns(server.Object);\n\n            return context.Object;\n        }\n\n        public static HttpContextBase MockHttpContext(string url)\n        {\n            var context = MockHttpContext();\n            context.Request.SetupRequestUrl(url);\n            return context;\n        }\n\n        #endregion\n\n        #region Extension methods\n\n        public static void SetMockControllerContext(this Controller controller,\n            HttpContextBase httpContext = null,\n            RouteData routeData = null,\n            RouteCollection routes = null)\n        {\n            //If values not passed then initialise\n            routeData = routeData ?? new RouteData();\n            routes = routes ?? RouteTable.Routes;\n            httpContext = httpContext ?? MockHttpContext();\n\n            var requestContext = new RequestContext(httpContext, routeData);\n            var context = new ControllerContext(requestContext, controller);\n\n            //Modify controller\n            controller.Url = new UrlHelper(requestContext, routes);\n            controller.ControllerContext = context;\n        }\n\n        public static void SetHttpMethodResult(this HttpRequestBase request, string httpMethod)\n        {\n            Mock.Get(request).Setup(req => req.HttpMethod).Returns(httpMethod);\n        }\n\n        public static void SetupRequestUrl(this HttpRequestBase request, string url)\n        {\n            if (url == null)\n                throw new ArgumentNullException("url");\n\n            if (!url.StartsWith("~/"))\n                throw new ArgumentException("Sorry, we expect a virtual url starting with \\"~/\\".");\n\n            var mock = Mock.Get(request);\n\n            mock.Setup(req => req.QueryString).Returns(GetQueryStringParameters(url));\n            mock.Setup(req => req.AppRelativeCurrentExecutionFilePath).Returns(GetUrlFileName(url));\n            mock.Setup(req => req.PathInfo).Returns(string.Empty);\n        }\n\n\n        /// <summary>\n        /// Facilitates unit testing of anonymouse types - taken from here:\n        /// http://stackoverflow.com/a/5012105/761388\n        /// </summary>\n        public static object GetReflectedProperty(this object obj, string propertyName)\n        {\n            obj.ThrowIfNull("obj");\n            propertyName.ThrowIfNull("propertyName");\n\n            var property = obj.GetType().GetProperty(propertyName);\n\n            if (property == null)\n                return null;\n\n            return property.GetValue(obj, null);\n        }\n\n        public static T ThrowIfNull<T>(this T value, string variableName) where T : class\n        {\n            if (value == null)\n                throw new NullReferenceException(\n                    string.Format("Value is Null: {0}", variableName));\n\n            return value;\n        }\n\n        #endregion\n\n        #region Private\n\n        static string GetUrlFileName(string url)\n        {\n            return (url.Contains("?"))\n                ? url.Substring(0, url.IndexOf("?"))\n                : url;\n        }\n\n        static NameValueCollection GetQueryStringParameters(string url)\n        {\n            if (url.Contains("?"))\n            {\n                var parameters = new NameValueCollection();\n\n                var parts = url.Split("?".ToCharArray());\n                var keys = parts[1].Split("&".ToCharArray());\n\n                foreach (var key in keys)\n                {\n                    var part = key.Split("=".ToCharArray());\n                    parameters.Add(part[0], part[1]);\n                }\n\n                return parameters;\n            }\n\n            return null;\n        }\n\n        #endregion\n    }\n}\n')),(0,r.kt)("h2",o({},{id:"what-i-want-to-test"}),"What I want to test"),(0,r.kt)("p",null,"I want to be able to unit test the controller ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," method I mentioned earlier. This method calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"Action")," method on the controllers ",(0,r.kt)("inlineCode",{parentName:"p"},"Url")," member (which is, in turn, a ",(0,r.kt)("inlineCode",{parentName:"p"},"UrlHelper"),") to generate a URL for passing pack to the client. The URL generated should fit with the routing mechanism I have set up. In this case the route we expect a URL for was mapped by the following area registration:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using System.Web.Mvc;\n\nnamespace DemoApp.Areas.Demo\n{\n    public class DemoAreaRegistration : AreaRegistration\n    {\n        public override string AreaName\n        {\n            get\n            {\n                return "DemoArea";\n            }\n        }\n\n        public override void RegisterArea(AreaRegistrationContext context)\n        {\n            context.MapRoute(\n                "DemoArea_default",\n                "Demo/{oneTypeOfId}/{anotherTypeOfId}/{controller}/{action}/{id}",\n                new { oneTypeOfId = 0, anotherTypeOfId = 0, action = "Index", id = UrlParameter.Optional }\n            );\n        }\n    }\n}\n')),(0,r.kt)("h2",o({},{id:"enough-of-the-waffle---show-me-a-unit-test"}),"Enough of the waffle - show me a unit test"),(0,r.kt)("p",null,"Now to the meat; here's a unit test which demonstrates how this is used:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-cs"}),'using System.Collections.Generic;\nusing System.Linq;\nusing System.Web.Mvc;\nusing System.Web.Routing;\nusing Microsoft.VisualStudio.TestTools.UnitTesting;\nusing Moq;\n\nnamespace UnitTest.Areas.Demo.Controllers\n{\n    [TestClass]\n    public class UnitTestingAnAreaUsingUrlHelper\n    {\n        private DemoController _controller;\n\n        [TestInitialize]\n        public void InitializeTest()\n        {\n            _controller = new DemoController();\n        }\n\n        [TestMethod]\n        public void Edit_updates_the_object_and_returns_a_JsonResult_containing_the_redirect_URL()\n        {\n            // Arrange\n            int anotherTypeOfId = 5332;\n\n            //Register the area as well as standard routes\n            RouteTable.Routes.Clear();\n            var areaRegistration = new DemoAreaRegistration();\n            var areaRegistrationContext = new AreaRegistrationContext(\n                areaRegistration.AreaName, RouteTable.Routes);\n            areaRegistration.RegisterArea(areaRegistrationContext);\n\n            RouteConfig.RegisterRoutes(RouteTable.Routes);\n\n            //Initialise the controller and setup the context so MVC can pick up the relevant route data\n            var httpContext = MvcMockHelpers.MockHttpContext(\n                "~/Demo/77969/" + anotherTypeOfId + "/Company/Edit");\n            var routeData = RouteTable.Routes.GetRouteData(httpContext);\n            _controller.SetMockControllerContext(\n                httpContext, routeData, RouteTable.Routes);\n\n            // Act\n            var result = _controller.Edit(\n                new AnObject{\n                    WithAProperty = "Something",\n                    AnotherTypeOfId = anotherTypeOfId });\n\n            // Assert\n            Assert.AreEqual("DemoArea", areaRegistration.AreaName);\n\n            Assert.IsInstanceOfType(result, typeof(JsonResult));\n\n            Assert.IsNotNull(result.Data,\n                "There should be some data for the JsonResult");\n            Assert.AreEqual(true,\n                result.Data.GetReflectedProperty("Saved"));\n            Assert.AreEqual("/Demo/77969/" + anotherTypeOfId + "/Company/Details",\n                result.Data.GetReflectedProperty("RedirectUrl"));\n        }\n\n    }\n}\n')),(0,r.kt)("p",null,"Let's go through this unit test and breakdown what's happening:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Arrange"),(0,r.kt)("li",{parentName:"ol"},"Act"),(0,r.kt)("li",{parentName:"ol"},"Assert")),(0,r.kt)("p",null,"The most interesting thing you'll note is the controller's UrlHelper is now generating a URL as we might have hoped. The URL is generated making use of our routing, yay! Finally we're also managing to unit test a route registered by our area."))}h.isMDXComponent=!0}}]);
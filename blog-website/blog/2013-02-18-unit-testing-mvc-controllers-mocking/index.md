---
slug: unit-testing-mvc-controllers-mocking
title: 'Unit testing MVC controllers / Mocking UrlHelper'
authors: johnnyreilly
tags: [asp.net]
hide_table_of_contents: false
description: 'This article presents a solution for testing ASP.net MVC controllers, including how to test controllers using UrlHelper.'
---

## I have put a name to my pain...

<!--truncate-->

And it is unit testing ASP.Net MVC controllers.

Well perhaps that's unfair. I have no problem unit testing MVC controllers.... **until** it comes to making use of the "innards" of MVC. Let me be more specific. This week I had a controller action that I needed to test. It looked a little like this:

```cs
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace DemoApp.Areas.Demo.Controllers
{
    public class DemoController : System.Web.Mvc.Controller
    {
        //....

        public JsonResult Edit(AnObject anObject)
        {
            //Indicate to the client we have saved and pass back the redirect URL
            return Json(new {
                Saved = true,
                RedirectUrl = Url.Action("Details", anObject.AnotherTypeOfId)
                });
        }

        //....
    }
}
```

Looks fine right? It's an action that takes a simple object as an argument. That's ok. It returns a JsonResult. No worries. The JsonResult consists of an anonymous class. De nada. The anonymous class has one property that is driven by the controllers `UrlHelper`. Yeah that shouldn't be an issue... **Hold your horses sunshine - you're going nowhere!**

## Getting disillusioned

Yup, the minute you start pumping in asserts around that `UrlHelper` driven property you're going to be mighty disappointed. What, you didn't expect the result to be `null`? Damn shame.

Despite [articles](http://msdn.microsoft.com/en-us/magazine/dd942838.aspx) on MSDN about how the intention is for MVC to be deliberately testable the sad fact of the matter is that there is a yawning hole around the testing support for controllers in ASP.Net MVC. Whenever you try to test something that makes use of controller "gubbins" you have **serious** problems. And unfortunately I didn't find anyone out there who could offer the whole solution.

After what I can best describe as a day of pain I found a way to scratch my particular itch. I found a way to write unit tests for controllers that made use of UrlHelper. As a bonus I managed to include the unit testing of Routes and Areas (well kind of) too.

## MvcMockControllers updated

This solution is heavily based on the work of Scott Hanselman who [wrote and blogged about `MvcMockHelpers`](http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx) back in 2008. Essentially I've taken this and tweaked it so I could achieve my ends. My version of `MvcMockHelpers` looks a little like this:

```cs
using Moq;
using System;
using System.Collections.Specialized;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace UnitTest.TestUtilities
{
    /// <summary>
    /// This class of MVC Mock helpers is originally based on Scott Hanselman's 2008 post:
    /// http://www.hanselman.com/blog/ASPNETMVCSessionAtMix08TDDAndMvcMockHelpers.aspx
    ///
    /// This has been updated and tweaked to work with MVC 3 / 4 projects (it hasn't been tested with MVC
    /// 1 / 2 but may work there) and also based my use cases
    /// </summary>
    public static class MvcMockHelpers
    {
        #region Mock HttpContext factories

        public static HttpContextBase MockHttpContext()
        {
            var context = new Mock<HttpContextBase>();
            var request = new Mock<HttpRequestBase>();
            var response = new Mock<HttpResponseBase>();
            var session = new Mock<HttpSessionStateBase>();
            var server = new Mock<HttpServerUtilityBase>();

            request.Setup(r => r.AppRelativeCurrentExecutionFilePath).Returns("/");
            request.Setup(r => r.ApplicationPath).Returns("/");

            response.Setup(s => s.ApplyAppPathModifier(It.IsAny<string>())).Returns<string>(s => s);
            response.SetupProperty(res => res.StatusCode, (int)System.Net.HttpStatusCode.OK);

            context.Setup(h => h.Request).Returns(request.Object);
            context.Setup(h => h.Response).Returns(response.Object);

            context.Setup(ctx => ctx.Request).Returns(request.Object);
            context.Setup(ctx => ctx.Response).Returns(response.Object);
            context.Setup(ctx => ctx.Session).Returns(session.Object);
            context.Setup(ctx => ctx.Server).Returns(server.Object);

            return context.Object;
        }

        public static HttpContextBase MockHttpContext(string url)
        {
            var context = MockHttpContext();
            context.Request.SetupRequestUrl(url);
            return context;
        }

        #endregion

        #region Extension methods

        public static void SetMockControllerContext(this Controller controller,
            HttpContextBase httpContext = null,
            RouteData routeData = null,
            RouteCollection routes = null)
        {
            //If values not passed then initialise
            routeData = routeData ?? new RouteData();
            routes = routes ?? RouteTable.Routes;
            httpContext = httpContext ?? MockHttpContext();

            var requestContext = new RequestContext(httpContext, routeData);
            var context = new ControllerContext(requestContext, controller);

            //Modify controller
            controller.Url = new UrlHelper(requestContext, routes);
            controller.ControllerContext = context;
        }

        public static void SetHttpMethodResult(this HttpRequestBase request, string httpMethod)
        {
            Mock.Get(request).Setup(req => req.HttpMethod).Returns(httpMethod);
        }

        public static void SetupRequestUrl(this HttpRequestBase request, string url)
        {
            if (url == null)
                throw new ArgumentNullException("url");

            if (!url.StartsWith("~/"))
                throw new ArgumentException("Sorry, we expect a virtual url starting with \"~/\".");

            var mock = Mock.Get(request);

            mock.Setup(req => req.QueryString).Returns(GetQueryStringParameters(url));
            mock.Setup(req => req.AppRelativeCurrentExecutionFilePath).Returns(GetUrlFileName(url));
            mock.Setup(req => req.PathInfo).Returns(string.Empty);
        }


        /// <summary>
        /// Facilitates unit testing of anonymouse types - taken from here:
        /// http://stackoverflow.com/a/5012105/761388
        /// </summary>
        public static object GetReflectedProperty(this object obj, string propertyName)
        {
            obj.ThrowIfNull("obj");
            propertyName.ThrowIfNull("propertyName");

            var property = obj.GetType().GetProperty(propertyName);

            if (property == null)
                return null;

            return property.GetValue(obj, null);
        }

        public static T ThrowIfNull<T>(this T value, string variableName) where T : class
        {
            if (value == null)
                throw new NullReferenceException(
                    string.Format("Value is Null: {0}", variableName));

            return value;
        }

        #endregion

        #region Private

        static string GetUrlFileName(string url)
        {
            return (url.Contains("?"))
                ? url.Substring(0, url.IndexOf("?"))
                : url;
        }

        static NameValueCollection GetQueryStringParameters(string url)
        {
            if (url.Contains("?"))
            {
                var parameters = new NameValueCollection();

                var parts = url.Split("?".ToCharArray());
                var keys = parts[1].Split("&".ToCharArray());

                foreach (var key in keys)
                {
                    var part = key.Split("=".ToCharArray());
                    parameters.Add(part[0], part[1]);
                }

                return parameters;
            }

            return null;
        }

        #endregion
    }
}
```

## What I want to test

I want to be able to unit test the controller `Edit` method I mentioned earlier. This method calls the `Action` method on the controllers `Url` member (which is, in turn, a `UrlHelper`) to generate a URL for passing pack to the client. The URL generated should fit with the routing mechanism I have set up. In this case the route we expect a URL for was mapped by the following area registration:

```cs
using System.Web.Mvc;

namespace DemoApp.Areas.Demo
{
    public class DemoAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "DemoArea";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "DemoArea_default",
                "Demo/{oneTypeOfId}/{anotherTypeOfId}/{controller}/{action}/{id}",
                new { oneTypeOfId = 0, anotherTypeOfId = 0, action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
```

## Enough of the waffle - show me a unit test

Now to the meat; here's a unit test which demonstrates how this is used:

```cs
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;

namespace UnitTest.Areas.Demo.Controllers
{
    [TestClass]
    public class UnitTestingAnAreaUsingUrlHelper
    {
        private DemoController _controller;

        [TestInitialize]
        public void InitializeTest()
        {
            _controller = new DemoController();
        }

        [TestMethod]
        public void Edit_updates_the_object_and_returns_a_JsonResult_containing_the_redirect_URL()
        {
            // Arrange
            int anotherTypeOfId = 5332;

            //Register the area as well as standard routes
            RouteTable.Routes.Clear();
            var areaRegistration = new DemoAreaRegistration();
            var areaRegistrationContext = new AreaRegistrationContext(
                areaRegistration.AreaName, RouteTable.Routes);
            areaRegistration.RegisterArea(areaRegistrationContext);

            RouteConfig.RegisterRoutes(RouteTable.Routes);

            //Initialise the controller and setup the context so MVC can pick up the relevant route data
            var httpContext = MvcMockHelpers.MockHttpContext(
                "~/Demo/77969/" + anotherTypeOfId + "/Company/Edit");
            var routeData = RouteTable.Routes.GetRouteData(httpContext);
            _controller.SetMockControllerContext(
                httpContext, routeData, RouteTable.Routes);

            // Act
            var result = _controller.Edit(
                new AnObject{
                    WithAProperty = "Something",
                    AnotherTypeOfId = anotherTypeOfId });

            // Assert
            Assert.AreEqual("DemoArea", areaRegistration.AreaName);

            Assert.IsInstanceOfType(result, typeof(JsonResult));

            Assert.IsNotNull(result.Data,
                "There should be some data for the JsonResult");
            Assert.AreEqual(true,
                result.Data.GetReflectedProperty("Saved"));
            Assert.AreEqual("/Demo/77969/" + anotherTypeOfId + "/Company/Details",
                result.Data.GetReflectedProperty("RedirectUrl"));
        }

    }
}
```

Let's go through this unit test and breakdown what's happening:

1. Arrange
2. Act
3. Assert

The most interesting thing you'll note is the controller's UrlHelper is now generating a URL as we might have hoped. The URL is generated making use of our routing, yay! Finally we're also managing to unit test a route registered by our area.

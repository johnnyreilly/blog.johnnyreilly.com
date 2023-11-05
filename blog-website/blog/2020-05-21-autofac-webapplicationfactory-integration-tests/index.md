---
slug: autofac-webapplicationfactory-integration-tests
title: 'Autofac, WebApplicationFactory and integration tests'
authors: johnnyreilly
tags: [asp.net, automated testing]
image: ./autofac-webapplicationfactory-tests.webp
hide_table_of_contents: false
description: 'A bug in ASP.NET Core v3.0 thwarts swapping in Autofac as an IOC container in WebApplicationFactory tests. A workaround exists.'
---

**Updated 2nd Oct 2020:** _for an approach that works with Autofac 6 and `ConfigureTestContainer` see [this post](../2020-10-02-autofac-6-integration-tests-and-generic-hosting/index.md)._

![A title image for the blog featuring the Autofac logo](autofac-webapplicationfactory-tests.webp)

<!--truncate-->

This is one of those occasions where I'm not writing up my own work so much as my discovery after in depth googling.

Integration tests with ASP.NET Core are the best. They spin up an in memory version of your application and let you fire requests at it. They've gone through a number of iterations since ASP.NET Core has been around. You may also be familiar with the `TestServer` approach of earlier versions. For some time, the advised approach has been using [`WebApplicationFactory`](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-3.1#basic-tests-with-the-default-webapplicationfactory).

What makes this approach particularly useful / powerful is that you can swap out dependencies of your running app with fakes / stubs etc. Just like unit tests! But potentially more useful because they run your whole app and hence give you a greater degree of confidence. What does this mean? Well, imagine you changed a piece of middleware in your application; this could potentially break functionality. Unit tests would probably not reveal this. Integration tests would.

There is a fly in the ointment. A hair in the gazpacho. ASP.NET Core ships with dependency injection in the box. It has its own Inversion of Control container which is perfectly fine. However, many people are accustomed to using other IOC containers such as [Autofac](https://autofac.org/).

What's the problem? Well, swapping out dependencies registered using ASP.NET Core's IOC requires using a hook called [`ConfigureTestServices`](https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-3.1#inject-mock-services). There's an equivalent hook for swapping out services registered using a custom IOC container: [`ConfigureTestContainer`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.testhost.webhostbuilderextensions.configuretestcontainer?view=aspnetcore-3.0). Unfortunately, there is a bug in ASP.NET Core as of version 3.0: [When using GenericHost, in tests `ConfigureTestContainer` is not executed](https://github.com/dotnet/aspnetcore/issues/14907)

This means you cannot swap out dependencies that have been registered with Autofac and the like. According to the tremendous [David Fowler](https://www.twitter.com/davidfowl) of the ASP.NET team, [this will hopefully be resolved](https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-592102145).

In the meantime, [there's a workaround thanks to various commenters on the thread](https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841). Instead of using `WebApplicationFactory` directly, subclass it and create a custom `AutofacWebApplicationFactory` (the name is not important). This custom class overrides the behavior of `ConfigureServices` and `CreateHost` with a `CustomServiceProviderFactory`:

```cs
namespace My.Web.Tests.Helpers {
    /// <summary>
    /// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample
    /// </summary>
    /// <typeparam name="TStartup"></typeparam>
    public class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class {
        protected override void ConfigureWebHost(IWebHostBuilder builder) {
            builder.ConfigureServices(services => {
                    services.AddSingleton<IAuthorizationHandler>(new PassThroughPermissionedRolesHandler());
                })
                .ConfigureTestServices(services => {
                }).ConfigureTestContainer<Autofac.ContainerBuilder>(builder => {
                    // called after Startup.ConfigureContainer
                });
        }

        protected override IHost CreateHost(IHostBuilder builder) {
            builder.UseServiceProviderFactory(new CustomServiceProviderFactory());
            return base.CreateHost(builder);
        }
    }

    /// <summary>
    /// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core
    /// </summary>
    public class CustomServiceProviderFactory : IServiceProviderFactory<CustomContainerBuilder> {
        public CustomContainerBuilder CreateBuilder(IServiceCollection services) => new CustomContainerBuilder(services);

        public IServiceProvider CreateServiceProvider(CustomContainerBuilder containerBuilder) =>
        new AutofacServiceProvider(containerBuilder.CustomBuild());
    }

    public class CustomContainerBuilder : Autofac.ContainerBuilder {
        private readonly IServiceCollection services;

        public CustomContainerBuilder(IServiceCollection services) {
            this.services = services;
            this.Populate(services);
        }

        public Autofac.IContainer CustomBuild() {
            var sp = this.services.BuildServiceProvider();
#pragma warning disable CS0612 // Type or member is obsolete
            var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<Autofac.ContainerBuilder>>>();
#pragma warning restore CS0612 // Type or member is obsolete

            foreach (var filter in filters) {
                filter.ConfigureContainer(b => { }) (this);
            }

            return this.Build();
        }
    }
}
```

I'm going to level with you; I don't understand all of this code. I'm not au fait with the inner workings of ASP.NET Core or Autofac but I can tell you what this allows. With this custom `WebApplicationFactory` in play you get `ConfigureTestContainer` back in the mix! You get to write code like this:

```cs
using System;
using System.Net;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.DependencyInjection;
using Xunit;
using Microsoft.Extensions.Options;
using Autofac;
using System.Net.Http;
using Newtonsoft.Json;

namespace My.Web.Tests.Controllers
{
    public class MyControllerTests : IClassFixture<AutofacWebApplicationFactory<My.Web.Startup>> {
        private readonly AutofacWebApplicationFactory<My.Web.Startup> _factory;

        public MyControllerTests(
            AutofacWebApplicationFactory<My.Web.Startup> factory
        ) {
            _factory = factory;
        }

        [Fact]
        public async Task My() {
            var fakeSomethingService = A.Fake<IMySomethingService>();
            var fakeConfig = Options.Create(new MyConfiguration {
                SomeConfig = "Important thing",
                OtherConfigMaybeAnEmailAddress = "johnny_reilly@hotmail.com"
            });

            A.CallTo(() => fakeSomethingService.DoSomething(A<string>.Ignored))
                .Returns(Task.FromResult(true));

            void ConfigureTestServices(IServiceCollection services) {
                services.AddSingleton(fakeConfig);
            }

            void ConfigureTestContainer(ContainerBuilder builder) {
                builder.RegisterInstance(fakeSomethingService);
            }

            var client = _factory
                .WithWebHostBuilder(builder => {
                    builder.ConfigureTestServices(ConfigureTestServices);
                    builder.ConfigureTestContainer<Autofac.ContainerBuilder>(ConfigureTestContainer);
                })
                .CreateClient();

            // Act
            var request = StringContent("{\"sommat\":\"to see\"}");
            request.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");
            var response = await client.PostAsync("/something/submit", request);

            // Assert
            response.StatusCode.Should().Be(HttpStatusCode.OK);

            A.CallTo(() => fakeSomethingService.DoSomething(A<string>.Ignored))
                .MustHaveHappened();
        }

    }
}
```

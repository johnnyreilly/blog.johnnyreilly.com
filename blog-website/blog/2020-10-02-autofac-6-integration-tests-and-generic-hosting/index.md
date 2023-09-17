---
slug: autofac-6-integration-tests-and-generic-hosting
title: 'Autofac 6, integration tests and .NET generic hosting'
authors: johnnyreilly
tags: [asp.net, automated testing]
image: ./autofac-integration-tests.webp
hide_table_of_contents: false
description: 'Integration tests using Autofac have been affected by a long-standing issue in .NET Core 3.0. Alternative approaches may not last long.'
---

I [blogged a little while ago around to support integration tests using Autofac](../2020-05-21-autofac-webapplicationfactory-integration-tests/index.md). This was specific to Autofac but documented a workaround for a [long standing issue with `ConfigureTestContainer` that was introduced into .NET core 3.0](https://github.com/dotnet/aspnetcore/issues/14907) which affects [all third-party containers](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#default-service-container-replacement) that use `ConfigureTestContainer` in their tests.

![A title image for the blog featuring the Autofac logo](autofac-integration-tests.webp)

<!--truncate-->

I'll not repeat the contents of the previous post - it all still stands. However, with Autofac 6 the approach documented there will cease to work. This is because the previous approach relied upon `ContainerBuilder` not being sealed. [As of Autofac 6 it is.](https://github.com/autofac/Autofac/issues/1120)

Happily the tremendous [Alistair Evans](https://twitter.com/evocationist) came up with an [alternative approach](https://github.com/autofac/Autofac/issues/1207#issuecomment-701961371) which is listed below:

```cs
/// <summary>
/// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample
/// </summary>
/// <typeparam name="TStartup"></typeparam>
public class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class
{
    protected override IHost CreateHost(IHostBuilder builder)
    {
        builder.UseServiceProviderFactory<ContainerBuilder>(new CustomServiceProviderFactory());
        return base.CreateHost(builder);
    }
}

/// <summary>
/// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core
/// </summary>
public class CustomServiceProviderFactory : IServiceProviderFactory<ContainerBuilder>
{
    private AutofacServiceProviderFactory _wrapped;
    private IServiceCollection _services;

    public CustomServiceProviderFactory()
    {
        _wrapped = new AutofacServiceProviderFactory();
    }

    public ContainerBuilder CreateBuilder(IServiceCollection services)
    {
        // Store the services for later.
        _services = services;

        return _wrapped.CreateBuilder(services);
    }

    public IServiceProvider CreateServiceProvider(ContainerBuilder containerBuilder)
    {
        var sp = _services.BuildServiceProvider();
#pragma warning disable CS0612 // Type or member is obsolete
        var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<ContainerBuilder>>>();
#pragma warning restore CS0612 // Type or member is obsolete

        foreach (var filter in filters)
        {
            filter.ConfigureContainer(b => { })(containerBuilder);
        }

        return _wrapped.CreateServiceProvider(containerBuilder);
    }
}
```

Using this in place of the previous approach should allow you continue running your integration tests with Autofac 6. Thanks Alistair!

## Concern for third-party containers

Whilst this gets us back up and running, [Alistair pointed out that this approach depends upon a deprecated interface](https://github.com/autofac/Autofac/issues/1207#issuecomment-702250044). This is the [`IStartupConfigureContainerFilter`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.hosting.istartupconfigurecontainerfilter-1.configurecontainer?view=aspnetcore-3.1) which [has been marked as `Obsolete` since mid 2019](https://github.com/dotnet/aspnetcore/pull/11505). What this means is, at some point, this approach will stop working.

The marvellous David Fowler has said that [`ConfigureTestContainer` issue should be resolved in .NET](https://github.com/autofac/Autofac/issues/1207#issuecomment-702361608). However it's worth noting that this has been an issue since .NET Core 3 shipped and unfortunately the wonderful [Chris Ross has advised that it's not likely to be fixed for .NET 5](https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-702287717).

I'm very keen this does get resolved in .NET. Building tests upon an `Obsolete` attribute doesn't fill me with confidence. I'm a long time user of Autofac and I'd like to continue to be. Here's hoping that's made possible by a fix landing in .NET. If this is something you care about, it may be worth upvoting / commenting on [the issue in GitHub](https://github.com/dotnet/aspnetcore/issues/14907) so the team are aware of desire around this being resolved.

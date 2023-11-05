---
slug: azure-easy-auth-and-roles-with-dotnet-and-core
title: 'Azure App Service, Easy Auth and Roles with .NET'
authors: johnnyreilly
tags: [azure, auth, easy auth]
hide_table_of_contents: false
description: '"Easy Auth" in Azure App Service doesnt currently work with .NET Core and .NET due to discrepancies. Open-source middleware can help solve the issue.'
---

Azure App Service has a feature which is intended to allow Authentication and Authorization to be applied outside of your application code. It's called ["Easy Auth"](https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization). Unfortunately, in the context of App Services it doesn't work with .NET Core and .NET. Perhaps it would be better to say: of the various .NETs, it supports .NET Framework. [To quote the docs](https://docs.microsoft.com/en-us/azure/app-service/overview-authentication-authorization#userapplication-claims):

> At this time, ASP.NET Core does not currently support populating the current user with the Authentication/Authorization feature. However, some [3rd party, open source middleware components](https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth) do exist to help fill this gap.

Thanks to [Maxime Rouiller](https://twitter.com/MaximRouiller) there's a way forward here. However, as I was taking this for a spin today, I discovered another issue.

<!--truncate-->

If this post is interesting to you, you may also want to [look at this one where we try to use Microsoft.Identity.Web for the same purpose.](../2021-01-17-azure-easy-auth-and-roles-with-net-and-microsoft-identity-web/index.md)

If you're looking for information about Easy Auth and authentication with .NET and Azure Container Apps, [you can find it here](../2023-06-11-azure-container-apps-easy-auth-and-dotnet-authentication/index.md).

## Where are our roles?

Consider the following .NET controller:

```cs
[Authorize(Roles = "Administrator,Reader")]
[HttpGet("api/admin-reader")]
public string GetWithAdminOrReader() =>
    "this is a secure endpoint that users with the Administrator or Reader role can access";

[Authorize(Roles = "Administrator")]
[HttpGet("api/admin")]
public string GetWithAdmin() =>
    "this is a secure endpoint that users with the Administrator role can access";

[Authorize(Roles = "Reader")]
[HttpGet("api/reader")]
public string GetWithReader() =>
    "this is a secure endpoint that users with the Reader role can access";
```

The three endpoints above restrict access based upon roles. However, even with Maxime's marvellous shim in the mix, authorization doesn't work when deployed to an Azure App Service. Why? Well, it comes down to how roles are mapped to claims.

Let's back up a bit. First of all we've added a dependency to our project:

```shell
dotnet add package MaximeRouiller.Azure.AppService.EasyAuth
```

Next we've updated our `Startup.ConfigureServices` such that it looks like this:

```cs
if (Env.IsDevelopment()) {
    services.AddMicrosoftIdentityWebAppAuthentication(Configuration);
else
    services.AddAuthentication("EasyAuth").AddEasyAuthAuthentication((o) => { });
```

With the above in place, either the Microsoft Identity platform will directly be used for authentication, or Maxime's package will be used as the default authentication scheme. The driver for this is `Env` which is an `IHostEnvironment` that was injected to the `Startup.cs`. Running locally, both authentication and authorization will work. However, deployed to an Azure App Service, only authentication will work.

It turns out that directly using the Microsoft Identity platform, we see roles claims coming through like so:

```json
[
  // ...
  {
    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "value": "Administrator"
  },
  {
    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "value": "Reader"
  }
  // ...
]
```

But in Azure we see roles claims showing up with a different `type`:

```json
[
  // ...
  {
    "type": "roles",
    "value": "Administrator"
  },
  {
    "type": "roles",
    "value": "Reader"
  }
  // ...
]
```

This is the crux of the problem; .NET and .NET Core are looking in a different place for roles.

## Role up, role up!

There wasn't an obvious way to make this work with Maxime's package. So we ended up lifting the source code of Maxime's package and tweaking it. Take a look:

```cs
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

/// <summary>
/// Based on https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth
/// Essentially EasyAuth only supports .NET Framework: https://docs.microsoft.com/en-us/azure/app-service/app-service-authentication-how-to#access-user-claims
/// This allows us to get support for Authentication and Authorization (using roles) with .NET
/// </summary>
namespace EasyAuth {
    public static class EasyAuthAuthenticationBuilderExtensions {
        public static AuthenticationBuilder AddEasyAuthAuthentication(
            this IServiceCollection services) =>
            services.AddAuthentication("EasyAuth").AddEasyAuthAuthenticationScheme(o => { });

        public static AuthenticationBuilder AddEasyAuthAuthenticationScheme(
            this AuthenticationBuilder builder,
            Action<EasyAuthAuthenticationOptions> configure) =>
                builder.AddScheme<EasyAuthAuthenticationOptions, EasyAuthAuthenticationHandler>(
                    "EasyAuth",
                    "EasyAuth",
                    configure);
    }

    public class EasyAuthAuthenticationOptions : AuthenticationSchemeOptions {
        public EasyAuthAuthenticationOptions() {
            Events = new object();
        }
    }

    public class EasyAuthAuthenticationHandler : AuthenticationHandler<EasyAuthAuthenticationOptions> {
        public EasyAuthAuthenticationHandler(
            IOptionsMonitor<EasyAuthAuthenticationOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock)
            : base(options, logger, encoder, clock) {
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {
            try {
                var easyAuthEnabled = string.Equals(Environment.GetEnvironmentVariable("WEBSITE_AUTH_ENABLED", EnvironmentVariableTarget.Process), "True", StringComparison.InvariantCultureIgnoreCase);
                if (!easyAuthEnabled) return Task.FromResult(AuthenticateResult.NoResult());

                var easyAuthProvider = Context.Request.Headers["X-MS-CLIENT-PRINCIPAL-IDP"].FirstOrDefault();
                var msClientPrincipalEncoded = Context.Request.Headers["X-MS-CLIENT-PRINCIPAL"].FirstOrDefault();
                if (string.IsNullOrWhiteSpace(easyAuthProvider) ||
                    string.IsNullOrWhiteSpace(msClientPrincipalEncoded))
                    return Task.FromResult(AuthenticateResult.NoResult());

                var decodedBytes = Convert.FromBase64String(msClientPrincipalEncoded);
                var msClientPrincipalDecoded = System.Text.Encoding.Default.GetString(decodedBytes);
                var clientPrincipal = JsonSerializer.Deserialize<MsClientPrincipal>(msClientPrincipalDecoded);
                if (clientPrincipal == null) return Task.FromResult(AuthenticateResult.NoResult());

                var mappedRolesClaims = clientPrincipal.Claims
                    .Where(claim => claim.Type == "roles")
                    .Select(claim => new Claim(ClaimTypes.Role, claim.Value))
                    .ToList();

                var claims = clientPrincipal.Claims.Select(claim => new Claim(claim.Type, claim.Value)).ToList();
                claims.AddRange(mappedRolesClaims);

                var principal = new ClaimsPrincipal();
                principal.AddIdentity(new ClaimsIdentity(claims, clientPrincipal.AuthenticationType, clientPrincipal.NameType, clientPrincipal.RoleType));

                var ticket = new AuthenticationTicket(principal, easyAuthProvider);
                var success = AuthenticateResult.Success(ticket);
                Context.User = principal;

                return Task.FromResult(success);
            } catch (Exception ex) {
                return Task.FromResult(AuthenticateResult.Fail(ex));
            }
        }
    }

    public class MsClientPrincipal {
        [JsonPropertyName("auth_typ")]
        public string? AuthenticationType { get; set; }
        [JsonPropertyName("claims")]
        public IEnumerable<UserClaim> Claims { get; set; } = Array.Empty<UserClaim>();
        [JsonPropertyName("name_typ")]
        public string? NameType { get; set; }
        [JsonPropertyName("role_typ")]
        public string? RoleType { get; set; }
    }

    public class UserClaim {
        [JsonPropertyName("typ")]
        public string Type { get; set; } = string.Empty;
        [JsonPropertyName("val")]
        public string Value { get; set; } = string.Empty;
    }
}
```

There's a number of changes in the above code to Maxime's package. Three changes that are not significant and one that is. First the insignificant changes:

1. It uses [`System.Text.Json`](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json-how-to?pivots=dotnet-5-0) in place of JSON.NET
2. It uses [C#s nullable reference types](../2020-12-20-nullable-reference-types-csharp-strictnullchecks/index.md)
3. It changes the extension method signature such that instead of entering `services.AddAuthentication().AddEasyAuthAuthentication((o) => { })` we now need only enter `services.AddEasyAuthAuthentication()`

Now the significant change:

Where the middleware encounters claims in the `X-MS-CLIENT-PRINCIPAL` header with the `Type` of `"roles"` it creates brand new claims for each, with the same `Value` but with the official `Type` supplied by `ClaimsTypes.Role` of `"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"`. The upshot of this, is that when the processed claims are inspected in Azure they now look more like this:

```json
[
  // ...
  {
    "type": "roles",
    "value": "Administrator"
  },
  {
    "type": "roles",
    "value": "Reader"
  },
  // ...
  {
    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "value": "Administrator"
  },
  {
    "type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "value": "Reader"
  }
]
```

As you can see, we now have both the originally supplied roles _as well_ as roles of the type that .NET and .NET Core expect. Consequently, roles based behaviour starts to work. Thanks to Maxime for his fine work on the initial solution. It would be tremendous if neither the code in this blog post nor Maxime's shim were required. Still, until that glorious day!

## Update: Potential ways forward

When I was tweeting this post, Maxime was good enough to respond and suggest that this may be resolved within Azure itself in future:

> Oh, so that's why they removed the name? 😲😜 Jokes aside, we hope that this package won't be necessary for the future. I know that [@mattchenderson](https://twitter.com/mattchenderson?ref_src=twsrc%5Etfw) is part of a working group to update Easy Auth. Might want to make sure you follow him as well. 😁
>
> — Maxime Rouiller (@MaximRouiller) [January 14, 2021](https://twitter.com/MaximRouiller/status/1349804324713615366?ref_src=twsrc%5Etfw)

There's a prospective PR that would add an event to Maxime's API. If something along these lines was merged, then my workaround would no longer be necessary. Follow the PR [here](https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth/pull/13).

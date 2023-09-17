---
slug: azure-easy-auth-and-roles-with-net-and-microsoft-identity-web
title: 'Azure App Service, Easy Auth and Roles with .NET and Microsoft.Identity.Web'
authors: johnnyreilly
tags: [azure, asp.net, easy auth, auth]
hide_table_of_contents: false
description: 'The `Microsoft.Identity.Web` library has authorization issues with roles. A `IClaimsTransformation` can map claims to fix the problem.'
---

[I wrote recently about how to get Azure App Service Easy Auth to work with roles](../2021-01-14-azure-easy-auth-and-roles-with-dotnet-and-core/index.md). This involved borrowing the approach used by [MaximeRouiller.Azure.AppService.EasyAuth](https://github.com/MaximRouiller/MaximeRouiller.Azure.AppService.EasyAuth).

As a consequence of writing that post I came to learn that official support for Azure Easy Auth had landed in October 2020 in v1.2 of [Microsoft.Identity.Web](https://github.com/AzureAD/microsoft-identity-web/wiki/1.2.0#integration-with-azure-app-services-authentication-of-web-apps-running-with-microsoftidentityweb). This was great news; I was delighted.

However, it turns out that the same authorization issue that `MaximeRouiller.Azure.AppService.EasyAuth` suffers from, is visited upon `Microsoft.Identity.Web` as well. This post shows hoew to resolve it with `IClaimsTransformation`.

<!--truncate-->

If you're looking for information about Easy Auth and authentication with .NET and Azure Container Apps, [you can find it here](../2023-06-11-azure-container-apps-easy-auth-and-dotnet-authentication/index.md).

## Getting set up

We're using a .NET 5 project, running in an Azure App Service (Linux). In our `.csproj` we have:

```xml
<PackageReference Include="Microsoft.Identity.Web" Version="1.4.1" />
```

In our `Startup.cs` we're using:

```cs
public void ConfigureServices(IServiceCollection services) {
    //...
    services.AddMicrosoftIdentityWebAppAuthentication(Configuration);
    //...
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
    //...
    app.UseAuthentication();
    app.UseAuthorization();
    //...
}
```

## You gotta `roles` with it

Whilst the authentication works, authorization does not. So whilst my app knows who I am - the authorization is not working with relation to **roles**.

When directly using `Microsoft.Identity.Web` when running locally, we see these claims:

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

However, we get different behaviour with EasyAuth; it provides roles related claims with a **different type**:

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

This means that roles related authorization _does not work_ with Easy Auth:

```cs
[Authorize(Roles = "Reader")]
[HttpGet("api/reader")]
public string GetWithReader() =>
    "this is a secure endpoint that users with the Reader role can access";
```

This is because .NET is looking for claims with a `type` of `"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"` and not finding them with Easy Auth.

## Claims transformation with `IClaimsTransformation`

There is a way to work around this issue .NET using `IClaimsTransformation`. This is a poorly documented feature, but fortunately [Gunnar Peipman's blog does a grand job of explaining it](https://gunnarpeipman.com/aspnet-core-adding-claims-to-existing-identity/).

Inside our `Startup.cs` I've registered a claims transformer:

```cs
services.AddScoped<IClaimsTransformation, AddRolesClaimsTransformation>();
```

And that claims transformer looks like this:

```cs
public class AddRolesClaimsTransformation : IClaimsTransformation {
    private readonly ILogger<AddRolesClaimsTransformation> _logger;

    public AddRolesClaimsTransformation(ILogger<AddRolesClaimsTransformation> logger) {
        _logger = logger;
    }

    public Task<ClaimsPrincipal> TransformAsync(ClaimsPrincipal principal) {
        var mappedRolesClaims = principal.Claims
            .Where(claim => claim.Type == "roles")
            .Select(claim => new Claim(ClaimTypes.Role, claim.Value))
            .ToList();

        // Clone current identity
        var clone = principal.Clone();

        if (clone.Identity is not ClaimsIdentity newIdentity) return Task.FromResult(principal);

        // Add role claims to cloned identity
        foreach (var mappedRoleClaim in mappedRolesClaims)
            newIdentity.AddClaim(mappedRoleClaim);

        if (mappedRolesClaims.Count > 0)
            _logger.LogInformation("Added roles claims {mappedRolesClaims}", mappedRolesClaims);
        else
            _logger.LogInformation("No roles claims added");

        return Task.FromResult(clone);
    }
}
```

The class above creates a new principal with `"roles"` claims mapped across to `"http://schemas.microsoft.com/ws/2008/06/identity/claims/role"`. This is enough to get .NET treating roles the way you'd hope.

[I've raised an issue against the `Microsoft.Identity.Web` repo](https://github.com/AzureAD/microsoft-identity-web/issues/881) about this. Perhaps one day this workaround will no longer be necessary.

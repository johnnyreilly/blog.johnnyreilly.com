---
title: 'Azure AD Claims with Static Web Apps and Azure Functions'
authors: johnnyreilly
tags:
  [Authorization, Azure Functions, Static Web Apps, Linked Backends, Azure AD]
image: ./title-image.webp
hide_table_of_contents: false
---

Authorization in Azure Functions is impaired by an issue with Azure Static Web Apps linked to Azure Functions. Azure AD app role claims are not supplied to Azure Functions. This post will demonstrate a workaround.

![title image reading "Azure AD Claims with Static Web Apps and Azure Functions" with Azure AD, Azure Functions and Static Web App logos](title-image.webp)

## Where's my claims?

There is a limitation around authorisation when having an Azure Function app as the linked backend to an Azure Static Web App. Essentially the Azure Function app _does not_ receive the claims that the Static Web App receives. [There's an issue tracking this on GitHub](https://github.com/Azure/static-web-apps/issues/988), and from the sounds of others experiences, it sounds like a general problem with Static Web Apps, Azure AD and linked backends.

We have a Static Web App, with an associated C# Function App (using the [Bring Your Own Functions](../2022-10-14-bicep-static-web-apps-linked-backends/index.md) approach). Both the Static Web App and Function App are associated with the same Azure AD app registration.

When we're authenticated with Azure AD and go to the auth endpoint: `/.auth/me` we see:

```json
{
  "clientPrincipal": {
    "identityProvider": "aad",
    "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",
    "userDetails": "johnny_reilly@hotmail.com",
    "userRoles": ["authenticated", "anonymous"],
    "claims": [
      // ...
      {
        "typ": "http://schemas.microsoft.com/identity/claims/objectidentifier",
        "val": "d9178465-3847-4d98-9d23-b8b9e403b323"
      },
      {
        "typ": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
        "val": "johnny_reilly@hotmail.com"
      },
      {
        "typ": "name",
        "val": "John Reilly"
      },
      {
        "typ": "roles",
        "val": "OurApp.Read"
      },
      // ...
      {
        "typ": "ver",
        "val": "2.0"
      }
    ]
  }
}
```

Note the claims in there. These include custom claims that we've configured such as roles with `OurApp.Read`.

So we can access claims successfully in the Static Web App (the front end). However, the associated Function App does not have access to the claims.

It's possible to see this by implementing a function which surfaces roles:

```cs
[FunctionName("GetRoles")]
public static async Task<IActionResult> Run(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "GetRoles")] HttpRequest req
)
{
    var roles = req.HttpContext.User?.Claims.Select(c => new { c.Type, c.Value });

    return new OkObjectResult(JsonConvert.SerializeObject(roles));
}
```

When this `/api/GetRoles` endpoint is accessed we see this:

```json
[
  {
    "Type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
    "Value": "d9178465-3847-4d98-9d23-b8b9e403b323"
  },
  {
    "Type": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
    "Value": "johnny_reilly@hotmail.com"
  },
  {
    "Type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "Value": "authenticated"
  },
  {
    "Type": "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
    "Value": "anonymous"
  }
]
```

At first look, this seems great; we have claims! But when we look again we realise that we have far less claims than we might have hoped for. Crucially, our custom claims / app roles like `OurApp.Read` are missing.

## Maybe they're hiding in `x-ms-client-principal`?

If we look directly at the `x-ms-client-principal` header, maybe we'll find what we need?

```cs
[FunctionName("GetRoles")]
public static async Task<IActionResult> GetRoles(
    [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "GetRoles")] HttpRequest req
)
{
    var header = req.Headers["x-ms-client-principal"];
    var data = header.FirstOrDefault();
    if (data == null)
    {
        return new OkObjectResult("nothing");
    }

    var decoded = System.Convert.FromBase64String(data);
    var json = System.Text.ASCIIEncoding.ASCII.GetString(decoded);

    return new OkObjectResult(json);
}
```

Alas not. We have the user's email and some simple roles ("authenticated" and "anonymous"), but no sign of our custom claims / app roles:

```json
{
  "identityProvider": "aad",
  "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",
  "userDetails": "johnny_reilly@hotmail.com",
  "userRoles": ["authenticated", "anonymous"]
}
```

This is the problem: we want our Azure Function App to be able to make use of the same custom claims / app roles that we use for authorization in the Static Web App. How can we achieve this?

## Microsoft Graph API

The answer lies with the Microsoft Graph API. We can interrogate it to get the app role assignments for the user. This will give us the same information that we have in the Static Web App. (Well to be strictly accurate, it will be a slightly different set of claims. But what matters is it will be the app role assignment claims that we want to use for authorization.)

We already have an Azure AD app registration. In order that we can interrogate the Microsoft Graph API, we'll need the following permissions:

![Screenshot of the Azure AD app registration API permissions screen](screenshot-azure-portal-azure-ad-app-registration-api-permissions.png)

- [Application.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#application-permissions-4) - to get more information about the app role assignments
- [User.Read](https://learn.microsoft.com/en-us/graph/permissions-reference#delegated-permissions-85) - to sign in
- [User.Read.All](https://learn.microsoft.com/en-us/graph/permissions-reference#application-permissions-81) - for acquiring the app role assignments

Of the above permissions, it's likely that you'll already have delegated `User.Read` in place; the other two you might need to add and ensure they're granted.

## Interrogating the Microsoft Graph API

Now we have an Azure AD app registration with sufficient permissions, we'll need a `GraphClient` to interrogate the Microsoft Graph API. To get that we're going to build an `AuthenticatedGraphClientFactory`:

```cs
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.Graph;
using Microsoft.Identity.Client;

namespace MyApp.Auth
{
    public interface IAuthenticatedGraphClientFactory
    {
        (GraphServiceClient, string) GetAuthenticatedGraphClientAndClientId();
    }

    public class AuthenticatedGraphClientFactory : IAuthenticatedGraphClientFactory
    {
        private GraphServiceClient? _graphServiceClient;
        private readonly string _clientId;
        private readonly string _clientSecret;
        private readonly string _tenantId;

        public AuthenticatedGraphClientFactory(
            string clientId,
            string clientSecret,
            string tenantId
        )
        {
            _clientId = clientId;
            _clientSecret = clientSecret;
            _tenantId = tenantId;
        }

        public (GraphServiceClient, string) GetAuthenticatedGraphClientAndClientId()
        {
            var authenticationProvider = CreateAuthenticationProvider();

            _graphServiceClient = new GraphServiceClient(authenticationProvider);

            return (_graphServiceClient, _clientId);
        }

        private IAuthenticationProvider CreateAuthenticationProvider()
        {
            // this specific scope means that application will default to what is defined in the application registration rather than using dynamic scopes
            string[] scopes = new string[]
            {
                "https://graph.microsoft.com/.default"
            };

            var confidentialClientApplication = ConfidentialClientApplicationBuilder.Create(_clientId)
                .WithAuthority($"https://login.microsoftonline.com/{_tenantId}/v2.0")
                .WithClientSecret(_clientSecret)
                .Build();

            return new MsalAuthenticationProvider(confidentialClientApplication, scopes); ;
        }
    }

    public class MsalAuthenticationProvider : IAuthenticationProvider
    {
        private readonly IConfidentialClientApplication _clientApplication;
        private readonly string[] _scopes;

        public MsalAuthenticationProvider(IConfidentialClientApplication clientApplication, string[] scopes)
        {
            _clientApplication = clientApplication;
            _scopes = scopes;
        }

        /// <summary>
        /// Update HttpRequestMessage with credentials
        /// </summary>
        public async Task AuthenticateRequestAsync(HttpRequestMessage request)
        {
            var token = await GetTokenAsync();

            request.Headers.Authorization = new AuthenticationHeaderValue("bearer", token);
        }

        /// <summary>
        /// Acquire Token
        /// </summary>
        public async Task<string?> GetTokenAsync()
        {
            var authResult = await _clientApplication.AcquireTokenForClient(_scopes).ExecuteAsync();

            return authResult.AccessToken;
        }
    }
}
```

When we execute `GetAuthenticatedGraphClientAndClientId` we'll get back a `GraphServiceClient` that we can use to interrogate the Microsoft Graph API. We'll also get back the client ID of the Graph API App. We'll need this later. Note that the `AuthenticatedGraphClientFactory` requires the client ID, client secret and tenant ID of the Azure AD App Registration.

Now we have the ability to interrogate the Microsoft Graph API, we can write a `UserClaimsParser.cs` class that will interrogate it and return the app role assignments for the user:

```cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Graph;

namespace MyApp.Auth
{
    public interface IUserClaimsParser
    {
        Task<ClaimsPrincipal> ParseClaimsPrincipal(HttpRequest req);
    }

    public class UserClaimsParser : IUserClaimsParser
    {
        readonly ILogger<UserClaimsParser> _log;
        readonly IAuthenticatedGraphClientFactory _graphClientFactory;

        public UserClaimsParser(
            IAuthenticatedGraphClientFactory graphClientFactory,
            ILogger<UserClaimsParser> log
        )
        {
            _graphClientFactory = graphClientFactory;
            _log = log;
        }

        public async Task<ClaimsPrincipal> ParseClaimsPrincipal(HttpRequest req)
        {
            try
            {
                MsClientPrincipal? principal = MakeMsClientPrincipal(req);

                if (principal == null)
                    return new ClaimsPrincipal();

                if (!principal.UserRoles?.Where(NotAnonymous).Any() ?? true)
                    return new ClaimsPrincipal();

                ClaimsIdentity identity = await MakeClaimsIdentity(principal);

                return new ClaimsPrincipal(identity);
            }
            catch (Exception e)
            {
                _log.LogError(e, "Error parsing claims principal");
                return new ClaimsPrincipal();
            }
        }

        MsClientPrincipal? MakeMsClientPrincipal(HttpRequest req)
        {
            MsClientPrincipal? principal = null;

            if (req.Headers.TryGetValue("x-ms-client-principal", out var header))
            {
                var data = header.FirstOrDefault();
                if (data != null)
                {
                    var decoded = Convert.FromBase64String(data);
                    var json = Encoding.UTF8.GetString(decoded);
                    _log.LogInformation($"x-ms-client-principal: {json}");
                    principal = JsonSerializer.Deserialize<MsClientPrincipal>(json, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
                }
            }

            return principal;
        }

        async Task<ClaimsIdentity> MakeClaimsIdentity(MsClientPrincipal principal)
        {
            var identity = new ClaimsIdentity(principal.IdentityProvider);

            identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, principal.UserId!));
            identity.AddClaim(new Claim(ClaimTypes.Name, principal.UserDetails!));

            if (principal.UserRoles != null)
                identity.AddClaims(principal.UserRoles
                    .Where(NotAnonymous)
                    .Select(userRole => new Claim(ClaimTypes.Role, userRole)));

            var username = principal.UserDetails;
            if (username != null)
            {
                var userAppRoleAssignments = await GetUserAppRoleAssignments(username);
                identity.AddClaims(userAppRoleAssignments
                    .Select(userAppRoleAssignments => new Claim(ClaimTypes.Role, userAppRoleAssignments)));
            }

            return identity;
        }

        static bool NotAnonymous(string r) =>
            !string.Equals(r, "anonymous", StringComparison.CurrentCultureIgnoreCase);

        async Task<string[]> GetUserAppRoleAssignments(string username)
        {
            try
            {
                var (graphClient, clientId) = _graphClientFactory.GetAuthenticatedGraphClientAndClientId();
                _log.LogInformation($"username: {username}");

                var userRoleAssignments = await graphClient.Users[username]
                    .AppRoleAssignments
                    .Request()
                    .GetAsync();

                var roleIds = new List<string>();
                var pageIterator = PageIterator<AppRoleAssignment>
                    .CreatePageIterator(
                        graphClient,
                        userRoleAssignments,
                        // Callback executed for each item in the collection
                        (appRoleAssignment) =>
                        {
                            if (appRoleAssignment.AppRoleId.HasValue && appRoleAssignment.AppRoleId.Value != Guid.Empty)
                                roleIds.Add(appRoleAssignment.AppRoleId.Value.ToString());

                            return true;
                        },
                        // Used to configure subsequent page requests
                        (baseRequest) =>
                        {
                            // Re-add the header to subsequent requests
                            baseRequest.Header("Prefer", "outlook.body-content-type=\"text\"");
                            return baseRequest;
                        });

                await pageIterator.IterateAsync();

                var applications = await graphClient.Applications
                    .Request()
                    .Filter($"appId eq '{clientId}'") // we're only interested in the app that we're running as
                    .GetAsync();

                var appRoleAssignments = applications
                    .FirstOrDefault()
                    ?.AppRoles
                    ?.Where(appRole => appRole.Id.HasValue && roleIds.Contains(appRole.Id!.Value.ToString()))
                    .Select(appRole => appRole.Value)
                    .ToArray();

                return appRoleAssignments ?? Array.Empty<string>();
            }
            catch (Exception e)
            {
                _log.LogError(e, "Error getting app role assignments");
                return Array.Empty<string>();
            }
        }

        class MsClientPrincipal
        {
            public string? IdentityProvider { get; set; }
            public string? UserId { get; set; }
            public string? UserDetails { get; set; }
            public IEnumerable<string>? UserRoles { get; set; }
        }
    }
}
```

Quite a lot of code! Let's walk through what it does:

1. It takes the `x-ms-client-principal` header and deserializes it into a `MsClientPrincipal` object - this is the cut down version of the `ClaimsPrincipal` object that we saw earlier:

```json
{
  "identityProvider": "aad",
  "userId": "d9178465-3847-4d98-9d23-b8b9e403b323",
  "userDetails": "johnny_reilly@hotmail.com",
  "userRoles": ["authenticated", "anonymous"]
}
```

2. It creates a new `ClaimsIdentity` using that information, but stripping out the `anonymous` role as it's superfluous.

3. Using the `userDetails` (email address) from the `MsClientPrincipal` object, it gets the app role assignments for that user from the Graph API. (We needed `User.Read.All` to do this.)

4. In a perfect world, we'd be able to use the `AppRoleAssignments` property on the `User` object to get the app role assignments for a user, but unfortunately that doesn't come with the human readable name you'd hope for; the `MyApp.Read`. So we have to interrogate the Graph API once more and use the `Application` that represents our Azure AD App Registration (we acquire this by filtering for an `appId` matching our `clientId`). Then we can get the human readable / `MyApp.Read` role assignment.

5. It adds the app role assignments as role claims to the `ClaimsIdentity` object.

6. It returns the `ClaimsIdentity` object wrapped in a `ClaimsPrincipal` object.

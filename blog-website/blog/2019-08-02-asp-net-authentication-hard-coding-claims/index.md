---
slug: asp-net-authentication-hard-coding-claims
title: 'ASP.NET Core authentication: hard-coding a claim in development'
authors: johnnyreilly
tags: [asp.net, auth]
hide_table_of_contents: false
description: 'The DevelopmentModeAuthenticationHandler allows ASP.NET Core developers to hard code user authentication claims during development, easing testing.'
---

This post demonstrates how you can hard code user authentication claims in ASP.NET Core; a useful technique to facilate testing during development.

<!--truncate-->

I was recently part of a hackathon team that put together an API in just 30 hours. We came second. (Not bitter, not bitter...)

We were moving pretty quickly during the hackathon and, when we came to the end of it, we had a working API which we were able to demo. The good news is that the API is going to graduate to be a product! We're going to ship this. Before we can do that though, there's a little tidy up to do.

The first thing I remembered / realised when I picked up the codebase again, was the shortcuts we'd made on the developer experience. We'd put the API together using ASP.Net Core. We're handling authentication using JWTs which is nicely supported. When we're deployed, an external facing proxy calls our application with the appropriate JWT and everything works as you'd hope.

The question is, what's it like to develop against this on your laptop? Getting a JWT for when I'm debugging locally is too much friction. I want to be able to work on the problem at hand, going away to get a JWT each time is a timesuck. So what to do? Well, during the hackathon, we just commented out `[Authorize]` attributes and hardcoded user ids in our controllers. This works, but it's a messy developer experience; it's easy to forget to uncomment things you've commented and break things. There must be a better way.

The solution I landed on was this: in development mode (which we only use whilst debugging) we hardcode an authenticated user. The way our authentication works is that we have a claim on our principal called something like `"our-user-id"`, the value of which is our authenticated user id. So in the `ConfigureServices` method of our `Startup.cs` we have a conditional authentication registration like this:

```cs
// Whilst developing, we don't want to authenticate; we hardcode to a particular users id
if (Env.IsDevelopment()) {
    services.AddAuthentication(nameof(DevelopmentModeAuthenticationHandler))
        .AddScheme<DevelopmentModeAuthenticationOptions, DevelopmentModeAuthenticationHandler>(
            nameof(DevelopmentModeAuthenticationHandler),
            options => {
                options.UserIdToSetInClaims = "this-is-a-user-id";
            }
        );
}
else {
    // The application typically uses this
    services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options => {
            // ...
        });
}
```

As you can see, we're using a special `DevelopmentModeAuthenticationHandler` authentication scheme in development mode, instead of JWT. As we register that, we declare the user id that we want to use. Whenever the app runs using the `DevelopmentModeAuthenticationHandler` auth, all requests will arrive using a principal with an `"our-user-id"` claim with a value of `"this-is-a-user-id"` (or whatever you've set it to.)

The `DevelopmentModeAuthenticationHandler` looks like this:

```cs
using System.Collections.Generic;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace OurApp
{
    public class DevelopmentModeAuthenticationOptions : AuthenticationSchemeOptions
    {
        public string UserIdToSetInClaims { get; set; }
    }

    public class DevelopmentModeAuthenticationHandler : AuthenticationHandler<DevelopmentModeAuthenticationOptions> {
        private readonly ILoggingService _loggingService;

        public DevelopmentModeAuthenticationHandler(
            IOptionsMonitor<DevelopmentModeAuthenticationOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            ISystemClock clock
        ) : base(options, logger, encoder, clock) {
        }

        protected override Task<AuthenticateResult> HandleAuthenticateAsync() {
            var claims = new List<Claim> { new Claim("our-user-id", Options.UserIdToSetInClaims) };

            var identity = new ClaimsIdentity(claims, nameof(DevelopmentModeAuthenticationHandler));
            var ticket = new AuthenticationTicket(new ClaimsPrincipal(identity), Scheme.Name);

            return Task.FromResult(AuthenticateResult.Success(ticket));
        }
    }
}
```

Now, developing locally is frictionless! We don't comment out `[Authorize]` attributes, we don't hard code user ids in controllers.

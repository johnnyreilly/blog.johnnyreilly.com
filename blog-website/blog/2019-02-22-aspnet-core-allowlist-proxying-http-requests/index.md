---
slug: aspnet-core-allowlist-proxying-http-requests
title: 'ASP.NET Core: Proxying HTTP Requests with an AllowList'
authors: johnnyreilly
tags: [asp.net]
image: ./hang-on-lads-ive-got-a-great-idea.webp
hide_table_of_contents: false
description: 'ASP.NET Core can proxy HTTP requests selectively, allowing only acceptable traffic via a middleware for specified paths.'
---

This post demonstrates a mechanism for proxying HTTP requests in ASP.NET Core. It doesn't proxy all requests; it only proxies requests that match entries on an "allowlist" - so we only proxy the traffic that we've actively decided is acceptable as determined by taking the form of an expected URL and HTTP verb (GET / POST etc).

<!--truncate-->

## Why do we need to proxy?

Once upon a time there lived a young team who were building a product. They were ready to go live with their beta and so they set off on a journey to a mystical land they had heard tales of. This magical kingdom was called "Production". However, Production was a land with walls and but one gate. That gate was jealously guarded by a defender named "InfoSec". InfoSec was there to make sure that only the the right people, noble of thought and pure of deed were allowed into the promised land. InfoSec would ask questions like "are you serving over HTTPS" and "what are you doing about cross site scripting"?

The team felt they had good answers to InfoSec's questions. However, just as they were about to step through the gate, InfoSec held up their hand and said "your application wants to access a database... database access needs to take place on our own internal network. Not over the publicly accessible internet."

The team, with one foot in the air, paused. They swallowed and said "can you give us five minutes?"

![image taken from the end of the classic movie "The Italian Job" of the bus hanging half off a mountainside](hang-on-lads-ive-got-a-great-idea.webp)

## The Proxy Regroup

And so it came to pass that the teams product (which took the form of ASP.Net Core web application) had to be changed. Where once there had been a single application, there would now be two; one that lived on the internet (the _web_ app) and one that lived on the companies private network (the _API_ app). The API app would do all the database access. In fact the product team opted to move all significant operations into the API as well. This left the web app with two purposes:

1. the straightforward serving of HTML, CSS, JS and images
2. the proxying of API calls through to the API app

## Proxy Part 1

In the early days of this proxying the team reached for [`AspNetCore.Proxy`](https://github.com/twitchax/AspNetCore.Proxy). It's a great open source project that allows you to proxy HTTP requests. It gives you complete control over the construction of proxy requests, so that you can have a request come into your API and end up proxying it to a URL with a completely different path on the proxy server.

## Proxy Part 2

The approach offered by `AspNetCore.Proxy` is fantastically powerful in terms of control. However, we didn't actually need that level of configurability. In fact, it resulted in us writing a great deal of boilerplate code. You see in our case we'd opted to proxy path for path, changing only the server name on each proxied request. So if a GET request came in going to https://web.app.com/api/version then we would want to proxy it to a GET request to https://api.app.com/api/version. You see? All we did was swap https://web.app.com for https://api.app.com. Nothing more. We did that as a rule. We knew we _always_ wanted to do just this.

So we ended up spinning up our own solution which allowed just the specification of paths we wanted to proxy with their corresponding HTTP verbs. Let's talk through it. Usage of our approach ended up as a middleware within our web app's `Startup.cs`:

```cs
public void Configure(IApplicationBuilder app) {
    // ...

    app.UseProxyAllowList(
        // where ServerToProxyToBaseUrl is the server you want requests to be proxied to
        // eg "https://the-server-we-proxy-to"
        proxyAddressTweaker: (requestPath) => $"{ServerToProxyToBaseUrl}{requestPath}",
        allowListProxyRoutes: new [] {
            // An anonymous request
            AllowListProxy.AnonymousRoute("api/version", HttpMethod.Get),

            // An authenticated request; to send this we must know who the user is
            AllowListProxy.Route("api/account/{accountId:int}/all-the-secret-info", HttpMethod.Get, HttpMethod.Post),
    });


    app.UseMvc();

    // ...
}
```

If you look at the code above you can see that we are proxing requests to a single server: `ServerToProxyToBaseUrl`. We're also only proxying requests which match an entry on our allowlist (as represented by `allowListProxyRoutes`). So in this case we're proxying two different requests:

1. `GET` requests to `api/version` are proxied through as _anonymous_`GET` requests.
2. `GET` and `POST` requests to `api/account/{accountId:int}/all-the-secret-info` are proxied through as `GET` and `POST` requests. These requests require that a user be authenticated first.

The `AllowListProxy` proxy class we've been using looks like this:

```cs
using System;
using System.Collections.Generic;
using System.Net.Http;

namespace My.Web.Proxy {
    public class AllowListProxy {
        public string Path { get; set; }
        public IEnumerable<HttpMethod> Methods { get; set; }
        public bool IsAnonymous { get; set; }

        private AllowListProxy(string path, bool isAnonymous, params HttpMethod[] methods) {
            if (methods == null || methods.Length == 0)
                throw new ArgumentException($"You need at least a single HttpMethod to be specified for {path}");

            Path = path;
            IsAnonymous = isAnonymous;
            Methods = methods;
        }

        public static AllowListProxy Route(string path, params HttpMethod[] methods) =>
            new AllowListProxy(path, isAnonymous: false, methods: methods);

        public static AllowListProxy AnonymousRoute(string path, params HttpMethod[] methods) =>
            new AllowListProxy(path, isAnonymous: true, methods: methods);
    }
}
```

The middleware for proxying (our `UseProxyAllowList`) looks like this:

```cs
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyModel;
using Microsoft.Extensions.DependencyInjection;
using Serilog;

namespace My.Web.Proxy {
    public static class ProxyRouteExtensions {
        /// <summary>
        /// Middleware which proxies the supplied allowlist routes
        /// </summary>
        public static void UseProxyAllowList(
            this IApplicationBuilder app,
            Func<string, string> proxyAddressTweaker,
            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction,
            IEnumerable<AllowListProxy> allowListProxyRoutes
        ) {
            app.UseRouter(builder => {
                foreach (var allowListProxy in allowListProxyRoutes) {
                    foreach (var method in allowListProxy.Methods) {
                        builder.MapMiddlewareVerb(method.ToString(), allowListProxy.Path, proxyApp => {
                            proxyApp.UseProxy_Challenge(allowListProxy.IsAnonymous);
                            proxyApp.UseProxy_Run(proxyAddressTweaker, preSendProxyRequestAction);
                        });
                    }
                }
            });
        }

        private static void UseProxy_Challenge(this IApplicationBuilder app, bool allowAnonymous) {
            app.Use((context, next) =>
            {
                var routePath = context.Request.Path.Value;

                var weAreAuthenticatedOrWeDontNeedToBe =
                    context.User.Identity.IsAuthenticated || allowAnonymous;
                if (weAreAuthenticatedOrWeDontNeedToBe)
                    return next();

                return context.ChallengeAsync();
            });
        }

        private static void UseProxy_Run(
            this IApplicationBuilder app,
            Func<string, string> proxyAddressTweaker,
            Action<HttpContext, HttpRequestMessage> preSendProxyRequestAction
            )
        {
            app.Run(async context => {
                var proxyAddress = "";
                try {
                    proxyAddress = proxyAddressTweaker(context.Request.Path.Value);

                    var proxyRequest = context.Request.CreateProxyHttpRequest(proxyAddress);

                    if (preSendProxyRequestAction != null)
                        preSendProxyRequestAction(context, proxyRequest);

                    var httpClients = context.RequestServices.GetService<IHttpClients>(); // IHttpClients is just a wrapper for HttpClient - insert your own here

                    var proxyResponse = await httpClients.SendRequestAsync(proxyRequest,
                            HttpCompletionOption.ResponseHeadersRead, context.RequestAborted)
                        .ConfigureAwait(false);

                    await context.CopyProxyHttpResponse(proxyResponse).ConfigureAwait(false);
                }
                catch (OperationCanceledException ex) {
                    if (ex.CancellationToken.IsCancellationRequested)
                        return;

                    if (!context.Response.HasStarted)
                    {
                        context.Response.StatusCode = 408;
                        await context.Response
                            .WriteAsync("Request timed out.");
                    }
                }
                catch (Exception e) {
                    if (!context.Response.HasStarted)
                    {
                        context.Response.StatusCode = 500;
                        await context.Response
                            .WriteAsync(
                                $"Request could not be proxied.\n\n{e.Message}\n\n{e.StackTrace}.");
                    }
                }
            });
        }

        public static void AddOrReplaceHeader(this HttpRequestMessage request, string headerName, string headerValue) {
            // It's possible for there to be multiple headers with the same name; we only want a single header to remain.  Our one.
            while (request.Headers.TryGetValues(headerName, out var existingAuthorizationHeader)) {
                request.Headers.Remove(headerName);
            }
            request.Headers.TryAddWithoutValidation(headerName, headerValue);
        }

        public static HttpRequestMessage CreateProxyHttpRequest(this HttpRequest request, string uriString) {
            var uri = new Uri(uriString + request.QueryString);

            var requestMessage = new HttpRequestMessage();
            var requestMethod = request.Method;
            if (!HttpMethods.IsGet(requestMethod) &&
                !HttpMethods.IsHead(requestMethod) &&
                !HttpMethods.IsDelete(requestMethod) &&
                !HttpMethods.IsTrace(requestMethod)) {
                var streamContent = new StreamContent(request.Body);
                requestMessage.Content = streamContent;
            }

            // Copy the request headers.
            if (requestMessage.Content != null)
                foreach (var header in request.Headers)
                    if (!requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray()))
                        requestMessage.Content?.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());

            requestMessage.Headers.Host = uri.Authority;
            requestMessage.RequestUri = uri;
            requestMessage.Method = new HttpMethod(request.Method);

            return requestMessage;
        }

        public static async Task CopyProxyHttpResponse(this HttpContext context, HttpResponseMessage responseMessage) {
            var response = context.Response;

            response.StatusCode = (int) responseMessage.StatusCode;
            foreach (var header in responseMessage.Headers) {
                response.Headers[header.Key] = header.Value.ToArray();
            }

            if (responseMessage.Content != null) {
                foreach (var header in responseMessage.Content.Headers) {
                    response.Headers[header.Key] = header.Value.ToArray();
                }
            }

            response.Headers.Remove("transfer-encoding");

            using(var responseStream = await responseMessage.Content.ReadAsStreamAsync().ConfigureAwait(false)) {
                await responseStream.CopyToAsync(response.Body, 81920, context.RequestAborted).ConfigureAwait(false);
            }
        }
    }
}
```

This works out to be a flexible and simple approach to allowlist proxying.

---
slug: safari-empty-download-content-type
title: 'Safari: The Mysterious Case of the Empty Download'
authors: johnnyreilly
tags: []
hide_table_of_contents: false
description: 'Safari requires a `Content-Type` header in responses to avoid empty downloads. Providing a `Content-Type` header resolved an authentication issue.'
---

Safari wants a `Content-Type` header in responses. Even if the response is `Content-Length: 0`. Without this, Safari can attempt to trigger an empty download. Don't argue; just go with it; some browsers are strange.

<!--truncate-->

## The longer version

Every now and then a mystery presents itself. A puzzle which just doesn't make sense and yet stubbornly continues to exist. I happened upon one of these the other day and to say it was frustrating does it no justice at all.

It all came back to the default iOS and Mac browser; Safari. When our users log into our application, they are redirected to a shared login provider which, upon successful authentication, hands over a cookie containing auth details and redirects back to our application. A middleware in our app reads what it needs from the cookie and then creates a cookie of its own which is to be used throughout the session. As soon as the cookie is set, the page refreshes and the app boots up in an authenticated state.

That's the background. This mechanism had long been working fine with Chrome (which the majority of our users browse with), Edge, Firefox and Internet Explorer. But we started to get reports from Safari users that, once they'd supplied their credentials, they'd not be authenticated and redirected back to our application. Instead they'd be prompted to download an empty document and the redirect would not take place.

As a team we could not fathom why this should be the case; it just didn't make sense. There followed hours of experimentation before [Hennie](https://twitter.com/hennie_spies) noticed something. It was at the point when the redirect back to our app from the login provider took place. Specifically the initial response that came back which contained our custom cookie and a `Refresh: 0` header to trigger a refresh in the browser. There was no content in the response, save for headers. It was `Content-Length: 0` all the way.

Hennie noticed that there was no `Content-Type` set and wondered if that was significant. It didn't seem like it would be a necessary header given there was no content. But Safari reckons not with logic. As an experiment we tried setting the response header to `Content-Type: text/html`. It worked! No mystery download, no failed redirect (which it turned out was actually a successful redirect which wasn't being surfaced in Safari's network request tab).

It appears that always providing a `Content-Type` header in your responses is wise if only for the case of Safari. In fact, it's generally unlikely that this won't be set anyway, but it can happen as we have experienced. Hopefully we've suffered so you don't have to.

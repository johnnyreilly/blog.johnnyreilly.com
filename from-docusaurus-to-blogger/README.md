# From Docusaurus to Blogger

This project does two things:

- publish blog posts to Blogger
- allows you to acquire a refresh token so that you may interact with the Blogger API (OAuth is necessary for post publication)

To do either of these, you'll first need to create an OAuth 2.0 Client ID here: https://console.cloud.google.com/apis/credentials

When you download it, it should look something like this:

```json
{
  "installed": {
    "client_id": "CLIENT_ID",
    "project_id": "PROJECT_ID",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_secret": "CLIENT_SECRET",
    "redirect_uris": ["urn:ietf:wg:oauth:2.0:oob", "http://localhost"]
  }
}
```

You'll need the `client_id`, `client_secret` and `redirect_uris` - but keep them in a safe place and don't commit them to source control!

## Getting a refresh token

To get a refresh token, run the following command:

`yarn get-refresh-token --clientId CLIENT_ID --clientSecret CLIENT_ID`

Click on the URL in the console, grant consent in the browser and then (quickly) paste the acquired code into the following command:

`yarn get-refresh-token --clientId CLIENT_ID --clientSecret CLIENT_ID --code THISISTHECODE`

The `refresh_token` will be printed to the console. Grab it and put it somewhere secure.

## Publishing to Blogger

This post takes the MarkDown blogs found in the [blogs directory of `blog-website`](../blog-website/blogs) and publishes them to Blogger. It updates posts that have already been published and it publishes brand new posts where it seems that it hasn't already been published.

It doesn't do this for the whole history of posts, purely for those created since `2021-03-07`. It would probably be fine if it did - but on the off chance it did bad things I don't want to have to repair 10 years of blog posts.

Regrettably, specifying `url` when publishing does not seem to work as the [docs suggest](https://developers.google.com/blogger/docs/3.0/reference/posts#resource). Consequently the tool attempts to lookup blogs by date and roughly match by name. This could possibly be replaced by storing a map of the published blogposts in the project instead.

To test publishing to Blogger, execute the following command:

`yarn publish-blogs --clientId CLIENT_ID --clientSecret CLIENT_ID --refreshToken THISISTHEREFRESHTOKEN --test`

To actually publish to Blogger, execute the following command:

`yarn publish-blogs --clientId CLIENT_ID --clientSecret CLIENT_ID --refreshToken THISISTHEREFRESHTOKEN`

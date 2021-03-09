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

The `refresh_token` will be printed to the console.  Grab it and put it somewhere secure.

## Publishing to Blogger

`yarn publish-blogs --clientId CLIENT_ID --clientSecret CLIENT_ID --refreshToken THISISTHECODE -test`

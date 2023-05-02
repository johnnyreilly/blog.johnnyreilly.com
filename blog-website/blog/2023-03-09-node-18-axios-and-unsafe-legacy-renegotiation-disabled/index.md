---
slug: node-18-axios-and-unsafe-legacy-renegotiation-disabled
title: 'Node.js 18, Axios and unsafe legacy renegotiation disabled'
authors: johnnyreilly
tags: [TLS, Node.js]
image: ./title-image.png
description: 'With Node.js 18, unsafe legacy renegotiation was disabled. However, there are APIs that still need it. This post shows how support them with Axios.'
hide_table_of_contents: false
---

Node.js 18 doesn't allow legacy TLS renegotion by default. But some APIs still need it. This post shows how to support them with Axios.

![title image reading "Node.js 18, Axios and unsafe legacy renegotiation disabled"](title-image.png)

<!--truncate-->

## The error

If you have code that uses Node.js and Axios, you may have encountered this error when you upgraded to Node.js 18:

```bash
EPROTO B8150000:error:0A000152:SSL routines:final_renegotiate:unsafe legacy renegotiation disabled
```

The source of this error is Node.js 18 disabling unsafe legacy TLS renegotiation. The motivation for this is noble; it's to mitigate [CVE-2009-3555](https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2009-3555) by all accounts. Alas, there are APIs that still use legacy TLS negotiation. It appears that one such API is the [Teams webhook API](../2019-12-18-teams-notification-webhooks/index.md).

## The fix

[I found the answer on Stack Overflow](https://stackoverflow.com/questions/74324019/allow-legacy-renegotiation-for-nodejs/74600467#74600467); but not immediately. So I'm going to record it here since I'm bound to need this again.

To cope with older APIs, making an Axios request ends up looking like this:

```ts
import crypto from 'crypto';
import https from 'https';

/**
 * Handle this problem with Node 18
 * write EPROTO B8150000:error:0A000152:SSL routines:final_renegotiate:unsafe legacy renegotiation disabled
 * see https://stackoverflow.com/questions/74324019/allow-legacy-renegotiation-for-nodejs/74600467#74600467
 **/
const allowLegacyRenegotiationforNodeJsOptions = {
  httpsAgent: new https.Agent({
    // for self signed you could also add
    // rejectUnauthorized: false,
    // allow legacy server
    secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
  }),
};

function makeRequest(url: string, data: object) {
  return axios({
    ...allowLegacyRenegotiationforNodeJsOptions,
    url,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    data: { some: 'data' },
  });
}
```

I'd imagine that you could use this pattern for the fetch API too, but I haven't tried it.

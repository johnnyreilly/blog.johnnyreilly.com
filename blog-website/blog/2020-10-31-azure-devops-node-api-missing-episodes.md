---
title: "Azure DevOps Node API: The missing episodes"
author: John Reilly
author_url: https://github.com/johnnyreilly
author_image_url: https://blog.johnnyreilly.com/img/profile.jpg
tags: [azure devops api, '203', node.js]
hide_table_of_contents: false
---
I've been taking a good look at the [REST API for Azure DevOps](<https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1>). I'm delighted to say that it's a very full API. However, there's quirks.

I'm writing a tool that interrogates Azure DevOps in order that it can construct release documentation. That release documentation we would like to publish to the project wiki.

To make integration with Azure DevOps even easier, the ADO team have put a good amount of work into [client libraries](<https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#client-libraries>) that allow you to code in your language of choice. In my case I'm writing a Node.js tool (using TypeScript) and happily the client lib for Node is written and published with TypeScript too. Tremendous! However, there is a "but" coming....

## Wiki got a big ol' "but"

As I've been using the Node client lib, I've found minor quirks. Such as the [`GitApi.getRefs` missing the pagination parts of the API](<https://github.com/microsoft/azure-devops-node-api/issues/415>).

Whilst the `GitApi` was missing some parameters on a method, the `WikiApi` was [missing whole endpoints, such as the Pages - Create Or Update](<https://github.com/microsoft/azure-devops-node-api/issues/416>) one. The various [client libraries are auto-generated](<https://github.com/microsoft/azure-devops-node-api/blob/master/CONTRIBUTING.md#general-contribution-guide>) which makes contribution a difficult game. The lovely [Matt Cooper](<https://github.com/vtbassmatt>) has [alerted the team](<https://github.com/microsoft/azure-devops-node-api/issues/415#issuecomment-717991914>)

> These clients are generated from the server-side controllers, and at a glance, I don't understand why those two parameters weren't included. Full transparency, we don't dedicate a lot of cycles here, but I will get it on the team's radar to investigate/improve.

In the meantime, I still had a tool to write.

## Handrolled Wiki API

Whilst the Node.js client lib was missing some crucial pieces, there did seem to be a way forward. Using the API directly; not using the client lib to do our HTTP and using [axios](<https://github.com/axios/axios>) instead. Happily the types we needed were still available for be leveraged.

Looking at the docs it seemed it ought to be simple:

[https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request](<https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request>)

But when I attempted this I found my requests erroring out with 203 Non-Authoritative Informations. It didn't make sense. I couldn't get a single request to be successful, they all failed. It occurred to me that the answer was hiding in `node_modules`. I'd managed to make successful requests to the API using the client lib. What was it doing that I wasn't?

The answer ended up being an authorization one-liner:

```ts
const request = await axios({
        url,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // This!
            Authorization: `Basic ${Buffer.from(`PAT:${adoPersonalAccessToken}`).toString('base64')}`,
            'X-TFS-FedAuthRedirect': 'Suppress',
        },
    });
}
```

With this in hand everything started to work and I found myself able to write my own clients to fill in the missing pieces from the client lib:

```ts
import axios from 'axios';
import { WikiPage, WikiPageCreateOrUpdateParameters, WikiType } from 'azure-devops-node-api/interfaces/WikiInterfaces';
import { IWikiApi } from 'azure-devops-node-api/WikiApi';

async function getWikiPage({
    adoUrl,
    adoProject,
    adoPat,
    wikiId,
    path,
}: {
    adoUrl: string;
    adoProject: string;
    adoPat: string;
    wikiId: string;
    path: string;
}) {
    try {
        const url = `${makeBaseApiUrl({
            adoUrl,
            adoProject,
        })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}&includeContent=True&recursionLevel=full`;
        const request = await axios({
            url,
            headers: makeHeaders(adoPat),
        });

        const page: WikiPage = request.data;
        return page;
    } catch (error) {
        return undefined;
    }
}

async function createWikiPage({
    adoUrl,
    adoProject,
    adoPat,
    wikiId,
    path,
    data,
}: {
    adoUrl: string;
    adoProject: string;
    adoPat: string;
    wikiId: string;
    path: string;
    data: WikiPageCreateOrUpdateParameters;
}) {
    try {
        const url = `${makeBaseApiUrl({
            adoUrl,
            adoProject,
        })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}`;

        const request = await axios({
            method: 'PUT',
            url,
            headers: makeHeaders(adoPat),
            data,
        });

        const newPage: WikiPage = request.data;
        return newPage;
    } catch (error) {
        return undefined;
    }
}

const apiVersion = "api-version=6.0";

/**
* Create the headers necessary to ake Azure DevOps happy
* @param adoPat Personal Access Token from ADO
*/
function makeHeaders(adoPat: string) {
    return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`PAT:${adoPat}`).toString('base64')}`,
        'X-TFS-FedAuthRedirect': 'Suppress',
    };
}

/**
* eg https://dev.azure.com/{organization}/{project}/_apis
*/
function makeBaseApiUrl({ adoUrl, adoProject }: { adoUrl: string; adoProject: string }) {
    return `${adoUrl}/${adoProject}/_apis`;
}
```

With this I was able to write code like this:

```ts
let topLevelPage = await getWikiPage({
        adoUrl,
        adoProject,
        adoPat,
        wikiId,
        path: config.wikiTopLevelName,
    });

    if (!topLevelPage)
        topLevelPage = await createWikiPage({
            adoUrl,
            adoProject,
            adoPat,
            wikiId,
            path: config.wikiTopLevelName,
            data: { content: '' },
        });
```

and the wikis were ours!



---
slug: microsoft-graphclient-endswith-consistencylevel-eventual-header
title: 'Microsoft Graph client: how to use endswith'
authors: johnnyreilly
tags: [microsoft graph, typescript]
image: ./title-image.png
hide_table_of_contents: false
description: 'Learn how to list the Azure Pipelines in a project using the Azure DevOps REST API with TypeScript and the continuation token.'
---

In this post we're going to look at filtering using `endswith` with the [Microsoft Graph client](https://learn.microsoft.com/en-us/graph/sdks/create-client?tabs=typescript).

![title image reading "List Pipelines with the Azure DevOps API" with the relevant logos](title-image.png)

This shouldn't be difficult (and in fact isn't) but the method isn't obvious.  If you've encountered this message:

> Operator 'endsWith' is not supported because the 'ConsistencyLevel:eventual' header is missing. Refer to https://aka.ms/graph-docs/advanced-queries for more information

Then this blog post is for you.

<!--truncate-->

We'll make it concrete by having a meaningful example of querying the Graph client. We'll query for Entra ID / Azure AD groups.

> Operator 'endsWith' is not supported because the 'ConsistencyLevel:eventual' header is missing. Refer to https://aka.ms/graph-docs/advanced-queries for more information

pieced it together from here:

https://learn.microsoft.com/en-us/graph/sdks/create-requests?tabs=typescript#use-http-headers-to-control-request-behavior

https://learn.microsoft.com/en-us/graph/sdks/create-requests?tabs=typescript#provide-custom-query-parameters

```ts
import { DefaultAzureCredential } from "@azure/identity";
import { Client, type PageCollection } from "@microsoft/microsoft-graph-client";

export interface AzureADGroup {
  /** eg name-of-group */
  displayName: string;
  /** eg GUID-GUID-GUID-GUID-GUID */
  id: string;
}

export async function getMyAzureADGroups(): Promise<AzureADGroup[]> {
  return getAzureADGroupsImpl({
    queryProvider: async (graphClient: Client) => {
      return (
        (await graphClient
          .api("/me/memberOf")
          .select(["displayName", "id"])
          .get()) as PageCollection
      );
    },
  });
}

export async function getAzureADGroups(): Promise<AzureADGroup[]> {
  return getAzureADGroupsImpl({
    queryProvider: async (graphClient: Client) => {
      return (await graphClient
        .api("/groups")
        .query({
          $count: "true",
        })
        .header("ConsistencyLevel", "eventual")
        .filter(`startsWith(displayName, 'startfilter-')`)
        .filter(`endsWith(displayName, '-endfilter')`)
        .select(["displayName", "id"])
        .get()) as PageCollection;
    },
  });
}

async function getAzureADGroupsImpl({
  queryProvider,
}: {
  queryProvider: (graphClient: Client) => Promise<PageCollection>;
}): Promise<AzureADGroup[]> {
  // Use DefaultAzureCredential to authenticate
  const credential = new DefaultAzureCredential();

  // Initialize the Graph client
  const graphClient = Client.initWithMiddleware({
    authProvider: {
      getAccessToken: async () => {
        const tokenResponse = await credential.getToken([
          "https://graph.microsoft.com/.default",
        ]);
        return tokenResponse.token;
      },
    },
  });

  const groups: AzureADGroup[] = [];
  try {
    let response = await queryProvider(graphClient);

    while (response.value.length > 0) {
      for (const group of response.value as AzureADGroup[]) {
        // {
        //   '@odata.type': '#microsoft.graph.group',
        //   displayName: 'azure-our-engteam',
        //   id: 'GUID-GUID-GUID-GUID-GUID'
        // }
        groups.push(group);
      }

      if (response["@odata.nextLink"]) {
        response = (await graphClient
          .api(response["@odata.nextLink"])
          .get()) as PageCollection;
      } else {
        break;
      }
    }

    return { data: groups };
  } catch (err) {
    const errorMessage = `Error listing Entra ID / Azure AD groups: ${err instanceof Error ? err.message : "UNKNOWN"}`;
    console.error(errorMessage);
    throw new Error(errorMessage, { cause: err });
  }
}
```
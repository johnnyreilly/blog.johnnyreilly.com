---
slug: private-bicep-registry-authentication-azureresourcemanagertemplatedeployment
title: 'Private Bicep registry authentication with AzureResourceManagerTemplateDeployment@3'
authors: johnnyreilly
tags: [Bicep]
image: ./title-image.png
description: 'If you deploy Bicep to Azure with the Azure DevOps task AzureResourceManagerTemplateDeployment@3, you can't authenticate to private registries.  This post shares a workaround.'
hide_table_of_contents: false
---

write something related to https://github.com/microsoft/azure-pipelines-tasks/issues/18426

![title image reading "Private Bicep registry authentication with AzureResourceManagerTemplateDeployment@3" with the Bicep, Azure and Azure DevOps logos](title-image.png)

### Task name

AzureResourceManagerTemplateDeployment@3 - supports bicep deployment - but not with private registries. Would be awesome if it did.

### Describe your feature request here

Whilst AzureResourceManagerTemplateDeployment@3 supports Bicep deployment, it doesn't support authenticating for private Bicep registries. Consider the following:

```yml
- task: AzureResourceManagerTemplateDeployment@3
  name: DeployInfra
  displayName: Deploy infra
  retryCountOnTaskFailure: 3
  inputs:
    deploymentScope: Resource Group
    azureResourceManagerConnection: ${{ variables.serviceConnection }}
    subscriptionId: $(subscriptionId)
    action: Create Or Update Resource Group
    resourceGroupName: $(resourceGroupName)
    location: $(location)
    templateLocation: Linked artifact
    csmFile: 'infra/main.bicep'
```

We see the following when we attempt to execute it:

```bash
/home/vsts/work/1/s/infra/database/cosmos.bicep(57,17) : Error BCP192: Unable to restore the module with reference "br:icebox.azurecr.io/bicep/ice/providers/document-db/database-accounts:v1.3": Service request failed.
Status: 401 (Unauthorized)

Content:
{"errors":[{"code":"UNAUTHORIZED","message":"authentication required, visit https://aka.ms/acr/authorization for more information."}]}

Headers:
Server: openresty
Date: Fri, 02 Jun 2023 13:11:24 GMT
Connection: keep-alive
X-Ms-Correlation-Request-Id: b1ac068c-f69d-4495-90c3-302ff1c93ff6
x-ms-ratelimit-remaining-calls-per-second: 333.066667
Strict-Transport-Security: REDACTED
Content-Type: text/plain; charset=utf-8
Content-Length: 134

/home/vsts/work/1/s/infra/database/cosmos.bicep(72,25) : Error BCP192: Unable to restore the module with reference "br:icebox.azurecr.io/bicep/ice/providers/document-db/sql-databases:v1.2": Service request failed.
Status: 401 (Unauthorized)

```

## Workaround

If you want to use this at present, you're required to manually restore the Bicep modules first. We've found it's possible to achieve this by using the `AzureCLI@2` task first and triggering a restore like so:

```yml
- task: AzureCLI@2
  displayName: Bicep restore
  inputs:
    azureSubscription: service-connection-with-access-to-registry
    scriptType: bash
    scriptLocation: inlineScript
    inlineScript: |
      bicep restore infra/main.bicep
```

Where `service-connection-with-access-to-registry` is an Azure Resource Manager service connection using service principal authentication which has access to the private Bicep registry.

<img width="320" alt="screenshot of service connection" src="https://github.com/microsoft/azure-pipelines-tasks/assets/1010525/6895a255-1ade-4c6c-80a8-78b7377fd1d1">

## Design thoughts

I'm actually not sure what support for the private registries should look like; if you look at the service connections we're using here; we have 2:

1. with permissions to deploy to Azure used by AzureResourceManagerTemplateDeployment@3
2. with permissions to read from our Bicep registry, used by our restore workaround

It's probably not unusual to have distinct service connections covering different concerns. This makes me wonder if maybe a dedicated `registryServiceConnection` property might be a good idea.

## See also

Mentioned here also:

https://github.com/microsoft/azure-pipelines-tasks/issues/15337#issuecomment-1573744989

---
title: 'Azure Functions: Resource should exist before deployment'
authors: bob
tags: [Azure Functions, Azure, Deployment]
image: https://avatars.githubusercontent.com/u/31248736
hide_table_of_contents: false
---

This post demonstrates a speculative workaround for the Azure deployment issue that results in the error `Resource should exist before deployment`. This may not be accurate, but it does seem to work.

## The error

A common error that presents itself when deploying Azure Functions is: `Resource should exist before deployment`. And it rights itself in the longer term. Eventual consistency means the function appears in the end and deployment to it can succeed. But it's annoying. Your pipeline fails, you have to rerun failed jobs until it succeeds. It's a pain.

You can see people talking about this issue here: https://github.com/microsoft/azure-pipelines-tasks/issues/15532

## The workaround

The workaround is an extra step in your pipeline that you put in place _after_ you've deployed your infrastructure, but _before_ you've deployed your function. It's a bit of a hack, but it seems to work:

```yml
- task: AzurePowerShell@4
  displayName: InitResource
  inputs:
    azureSubscription: ${{ parameters.serviceConnection }}
    ScriptType: inlineScript
    Inline: |
      $context = Get-AzContext
      $token = Get-AzAccessToken
      $authHeader = @{
          'Content-Type'='application/json'
          'Authorization'='Bearer ' + $token.Token
      }
      $locations = @(
        # https://learn.microsoft.com/en-us/azure/availability-zones/az-overview#azure-regions-with-availability-zones
        # Europe
        "westeurope", "northeurope", "francesouth", "francecentral", "ukwest", "uksouth", "germanywestcentral", "norwayeast", "swedencentral", "switzerlandnorth",
        # Americas
        "brazilsouth", "canadacentral", "centralus", "eastus", "eastus2", "southcentralus", "westus2", "westus3",
        # Middle East
        "qatarcentral", "uaenorth",
        # Africa
        "southafricanorth",
        # Asia Pacific
        "australiaeast", "centralindia", "japaneast", "koreacentral", "southeastasia", "eastasia"
      )
      $locations | foreach-Object -Parallel {
          $restUrl = "https://$_.management.azure.com/subscriptions/$(subscriptionId)/resourceGroups/$(azureResourceGroup)/providers/Microsoft.Web/sites/$(namerWapiFunctionApp)?api-version=2022-03-01";
          ((((Invoke-WebRequest -Uri $restUrl -Method GET -Headers $($using:authHeader)).Headers).GetEnumerator() | Where-Object {$_.Key -ieq "x-ms-routing-request-id"}).Value).Split(":")[0]
      }
    azurePowerShellVersion: 'LatestVersion'
```

## The explanation

Based upon repeated testing, this appears to work. Why? There's a theory:

- Azure does not immediately replicate metadata of the Azure app/function to all its regions, so when you provision a new resource its metadata is only present in the region that it was provisioned (eg north europe).

- the Azure Resource Manager API (which is what the deploy task uses to publish the zip file) does not always direct the request to the north europe region (it will try to but quite often routes you off to another region)

- the "resource not found" error is the result of publish zip task hitting a regional endpoint of the Azure Resource Manager API that does not have the resource metadata

- the fix above is to _force the metadata replication to all regions prior to running the publish zip_, so no matter which regional endpoint you hit the resource is available

## Conclusion

Should we need to do this? No. But it does seem to work. If you're facing this issue, give it a try.

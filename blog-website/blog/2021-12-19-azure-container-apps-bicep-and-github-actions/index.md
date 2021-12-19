---
title: 'Azure Container Apps, Bicep and GitHub Actions'
authors: johnnyreilly
tags: [Azure Container Apps, Bicep, GitHub Actions]
image: title-image.png
hide_table_of_contents: false
---

Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to deploy the infrastructure for an Azure Container App to Azure using Bicep and GitHub Actions. The [Azure Container App documentation](https://docs.microsoft.com/en-us/azure/container-apps/) features quickstarts for deploying your first container app using both the Azure Portal and the Azure CLI. These are great, but there's a gap if you prefer to deploy using Bicep and you'd like to get your CI/CD setup right from the beginning. This post aims to fill that gap.

![title image reading "Azure Container Apps, Bicep and GitHub Actions" with the Bicep, Azure Container Apps and GitHub Actions logos](title-image.png)

## Bicep

Let's begin with the Bicep required to deploy an Azure Container App.

In our new repository we'll create an `infra` directory, into which we'll place a `main.bicep` file which will contain our Bicep template.

I've pared this down to the simplest Bicep template that I can; it only requires a name and the subscription to which it's going to be deployed:

```bicep
param subscriptionId string
param name string
param secrets array = []

var location = resourceGroup().location
var kubeEnvironmentId = '/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup().name}/providers/Microsoft.Web/kubeEnvironments/Production'
var environmentName = 'Production'
var workspaceName = '${name}-log-analytics'

resource workspace 'Microsoft.OperationalInsights/workspaces@2020-08-01' = {
  name: workspaceName
  location: location
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    workspaceCapping: {}
  }
}

resource environment 'Microsoft.Web/kubeEnvironments@2021-03-01' = {
  name: environmentName
  location: location
  properties: {
    type: 'managed'
    internalLoadBalancerEnabled: false
    appLogsConfiguration: {
      destination: 'log-analytics'
      logAnalyticsConfiguration: {
        customerId: workspace.properties.customerId
        sharedKey: listKeys(workspace.id, workspace.apiVersion).primarySharedKey
      }
    }
  }
}

resource containerApp 'Microsoft.Web/containerapps@2021-03-01' = {
  name: name
  kind: 'containerapps'
  location: location
  properties: {
    kubeEnvironmentId: kubeEnvironmentId
    configuration: {
      secrets: secrets
      registries: []
      ingress: {
        'external':true
        'targetPort':80
      }
    }
    template: {
      containers: [
        {
          'name':'simple-hello-world-container'
          'image':'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'
          'command':[]
          'resources':{
            'cpu':'.25'
            'memory':'.5Gi'
          }
        }
      ]
    }
  }
  dependsOn: [
    environment
  ]
}
```

Some things to note from the template:

- We're deploying three resources; a container app, a kube environment and an operational insights.
- Just like the official quickstarts we're going to use the `containerapps-helloworld` image.

## Setting up a resource group

In order that you can deploy your Bicep, we're going to need a resource group to send it to. Right now, Azure Container Apps aren't available everywhere. So we're going to create ourselves a resource group in North Europe which does support ACAs:

```shell
az group create -g rg-aca -l northeurope
```

## Deploying with the Azure CLI

With this resource group in place, we could simply deploy using the Azure CLI like so:

```shell
az deployment group create \
  --resource-group rg-aca \
  --template-file ./infra/main.bicep \
  --parameters \
    subscriptionId='your-subscription-id-here' \
    name='container-app'
```

## Deploying with GitHub Actions

However, we're aiming to set up a GitHub Action to do this for us. We'll create a `.github/workflows/deploy.yaml` file in our repository:

```yaml
name: Deploy
on:
  push:
    branches: [main]
  workflow_dispatch:

env:
  RESOURCE_GROUP: rg-aca

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Deploy bicep
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az deployment group create \
              --resource-group ${{ env.RESOURCE_GROUP }} \
              --template-file ./infra/main.bicep \
              --parameters \
                subscriptionId='${{ secrets.SUBSCRIPTION_ID }}' \
                name='container-app'
```

The above GitHub action is very simple. It:

1. Logs into Azure using some `AZURE_CREDENTIALS` we'll set up in a moment.
2. Invokes the Azure CLI to deploy our Bicep template, passing the `SUBSCRIPTION_ID` which is (as the name suggests) the Azure subscription id.

Let's create those two secrets in GitHub:

![Screenshot of GitHub Secrets in the GitHub website that we need to create](screenshot-github-secrets.png)

The subscription id can be found by looking up your subscription inside the Azure Portal:

![Screenshot of the Azure Portal displaying the subscription id](screenshot-azure-portal-subscription.png)

Save that away as the `SUBSCRIPTION_ID` secret in GitHub.

Then you need create the `AZURE_CREDENTIALS`, for which we'll use the Azure CLI once more:

```shell
az ad sp create-for-rbac --name "myApp" --role contributor \
    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \
    --sdk-auth
```

Remember to replace the `{subscription-id}` with your subscription id and `{resource-group}` with the name of your resource group (`rg-aca` if you're following along). This command will pump out a lump of JSON that looks something like this:

```json
{
  "clientId": "a-client-id",
  "clientSecret": "a-client-secret",
  "subscriptionId": "a-subscription-id",
  "tenantId": "a-tenant-id",
  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",
  "resourceManagerEndpointUrl": "https://management.azure.com/",
  "activeDirectoryGraphResourceId": "https://graph.windows.net/",
  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",
  "galleryEndpointUrl": "https://gallery.azure.com/",
  "managementEndpointUrl": "https://management.core.windows.net/"
}
```

Take this and save it as the `AZURE_CREDENTIALS` secret in Azure.

## Running it

When the GitHub Action has been run you'll find that Azure Container App is now showing up inside the Azure Portal:

![screenshot of the Azure Container App in the Azure Portal](screenshot-azure-portal-container-app.png)

You'll see a URL is displayed, when you go that URL you'll find the hello world image is running!

![screenshot of the running Azure Container App](screenshot-of-running-container-app.png)

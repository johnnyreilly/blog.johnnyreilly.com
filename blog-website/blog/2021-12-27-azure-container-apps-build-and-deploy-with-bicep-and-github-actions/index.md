---
title: 'Azure Container Apps: build and deploy with Bicep and GitHub Actions'
authors: johnnyreilly
tags: [Azure Container Apps, Bicep, GitHub Actions, GitHub container registry]
image: ./title-image.png
hide_table_of_contents: false
---

Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to build and deploy a simple web application to Azure Container Apps using Bicep and GitHub Actions. It follows on from the [previous post](../2021-12-19-azure-container-apps-bicep-and-github-actions/index.md) which deployed infrastructure and a "hello world" container, this time introducing the building of your container and storing it in the [GitHub container registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

![title image reading "Azure Container Apps: build and deploy with Bicep and GitHub Actions" with the Bicep, Azure Container Apps and GitHub Actions logos](title-image.png)

## The containerised convent

I learn the most about a technology when I'm using it to build something. I have an aunt that's a nun, and long ago she persuaded me to build her convent a website. Since that time I've been merrily overengineering it for fun and non-profit.

My aunts website is a node app that is containerised and runs on [Azure App Service Web App for Containers](https://azure.microsoft.com/en-gb/services/app-service/containers/). Given that it is already in a container, this makes it a great candidate for porting to Azure Container Apps.

So that's what we'll do in this post. But where I'm dropping in my aunts container, you could equally be dropping in your own.

## Bicep

Let's begin with the Bicep required to deploy our Azure Container App.

In our repository we'll create an `infra` directory, into which we'll place a `main.bicep` file which will contain our Bicep template:

```bicep
param nodeImage string
param nodePort int
param nodeIsExternalIngress bool

param containerRegistry string
param containerRegistryUsername string
@secure()
param containerRegistryPassword string

param tags object

@secure()
param APPSETTINGS_API_KEY string
param APPSETTINGS_DOMAIN string
param APPSETTINGS_FROM_EMAIL string
param APPSETTINGS_RECIPIENT_EMAIL string

var location = resourceGroup().location
var environmentName = 'env-${uniqueString(resourceGroup().id)}'
var minReplicas = 0

var nodeServiceAppName = 'node-app'
var workspaceName = '${nodeServiceAppName}-log-analytics'
var appInsightsName = '${nodeServiceAppName}-app-insights'

var containerRegistryPasswordRef = 'container-registry-password'
var mailgunApiKeyRef = 'mailgun-api-key'

resource workspace 'Microsoft.OperationalInsights/workspaces@2020-08-01' = {
  name: workspaceName
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: 30
    workspaceCapping: {}
  }
}

resource appInsights 'Microsoft.Insights/components@2020-02-02-preview' = {
  name: appInsightsName
  location: location
  tags: tags
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Bluefield'
  }
}

resource environment 'Microsoft.Web/kubeEnvironments@2021-03-01' = {
  name: environmentName
  location: location
  tags: tags
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
    containerAppsConfiguration: {
      daprAIInstrumentationKey: appInsights.properties.InstrumentationKey
    }
  }
}

resource containerApp 'Microsoft.Web/containerapps@2021-03-01' = {
  name: nodeServiceAppName
  kind: 'containerapps'
  tags: tags
  location: location
  properties: {
    kubeEnvironmentId: environment.id
    configuration: {
      secrets: [
        {
          name: containerRegistryPasswordRef
          value: containerRegistryPassword
        }
        {
          name: mailgunApiKeyRef
          value: APPSETTINGS_API_KEY
        }
      ]
      registries: [
        {
          server: containerRegistry
          username: containerRegistryUsername
          passwordSecretRef: containerRegistryPasswordRef
        }
      ]
      ingress: {
        'external': nodeIsExternalIngress
        'targetPort': nodePort
      }
    }
    template: {
      containers: [
        {
          image: nodeImage
          name: nodeServiceAppName
          transport: 'auto'
          env: [
            {
              name: 'APPSETTINGS_API_KEY'
              secretref: mailgunApiKeyRef
            }
            {
              name: 'APPSETTINGS_DOMAIN'
              value: APPSETTINGS_DOMAIN
            }
            {
              name: 'APPSETTINGS_FROM_EMAIL'
              value: APPSETTINGS_FROM_EMAIL
            }
            {
              name: 'APPSETTINGS_RECIPIENT_EMAIL'
              value: APPSETTINGS_RECIPIENT_EMAIL
            }
          ]
        }
      ]
      scale: {
        minReplicas: minReplicas
      }
    }
  }
}
```

Let's talk through this template. First of all, let's consider the parameters:

```bicep
param nodeImage string
param nodePort int
param nodeIsExternalIngress bool
```

The above parameters relate to the node application that represents the website. The `nodeImage` is the container image which should be deployed to a container app. The `nodePort` is the port from the app which should be exposed (`3000` in our case). `nodeIsExternalIngress` is [whether the container should be accessible on the internet](https://docs.microsoft.com/en-us/azure/container-apps/ingress?tabs=bash#configuration). (Always `true` in this case.)

```bicep
param containerRegistry string
param containerRegistryUsername string
@secure()
param containerRegistryPassword string

param tags object
```

With the exception of the `tags` object which is metadata to apply to resources, these parameters are related to the container registry where our images will be stored. What we deploy to Azure Container Apps is container images. There's a multitude of container registries out there, we're going to be using the one directly available in GitHub.

fdsf

```bicep
@secure()
param APPSETTINGS_API_KEY string
param APPSETTINGS_DOMAIN string
param APPSETTINGS_FROM_EMAIL string
param APPSETTINGS_RECIPIENT_EMAIL string
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
                name='container-app'
```

The above GitHub action is very simple. It:

1. Logs into Azure using some `AZURE_CREDENTIALS` we'll set up in a moment.
2. Invokes the Azure CLI to deploy our Bicep template.

Let's create that `AZURE_CREDENTIALS` secret in GitHub:

![Screenshot of `AZURE_CREDENTIALS` secret in the GitHub website that we need to create](screenshot-github-secrets.png)

We'll use the Azure CLI once more:

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

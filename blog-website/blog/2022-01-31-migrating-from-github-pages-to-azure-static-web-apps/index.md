---
title: 'Migrating from GitHub Pages to Azure Static Web Apps'
authors: johnnyreilly
tags: [Azure Static Web Apps, Bicep, GitHub Actions, GitHub Pages]
image: ./title-image.png
hide_table_of_contents: false
---

This post uses Bicep and GitHub Actions to show how to migrate from hosting a static website on GitHub Pages to Azure Static Web Apps .

![title image reading "Migrating from GitHub Pages to Azure Static Web Apps" with GitHub and Azure Static Web Apps logos](title-image.png)

## Why migrate?

This blog has been hosted on GitHub Pages for some time. It also makes use of Netlify for deployment previews. [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) supports both hosting static websites and deployment previews (known as "staging environments"). It's generally desirable to simplify.

This post looks at migrating across to use Static Web Apps in place of both of GitHub Pages and Netlify, in order this blog has a unified deployment story. I'm choosing to use Bicep to do this as I tend towards using infrastructure as code. If you wanted to roll with a more "point and click" approach in the Azure Portal, you could do that too.

## Bicep

The first thing we're going to need is a Bicep template to deploy our SWA. In our GitHub repo we're going to add a `infra` folder, and in there we'll create a `main.bicep` file:

```bicep
param location string
param branch string
param name string
param tags object
@secure()
param repositoryToken string

resource staticWebApp 'Microsoft.Web/staticSites@2021-02-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/johnnyreilly/blog.johnnyreilly.com'
    repositoryToken: repositoryToken
    branch: branch
    provider: 'GitHub'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    buildProperties:{
      skipGithubActionWorkflowGeneration: true
    }
  }
}

output staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name
```

Most of the Bicep template above is self-explanatory. There's a few things to highlight:

- We're using the "Free" SKU which means we don't have to pay to run our website.
- We need to provide a `repositoryToken` - this is a little surprising as you'll see later in the template that we supply the `skipGithubActionWorkflowGeneration: true` which means we're _not_ requiring our SWA to interact with GitHub on our behalf - but it seems that there's a requirement for a GitHub token anyway. We'll roll with it.
- We're enabling deployment previews / staging environments with `stagingEnvironmentPolicy: 'Enabled'`
- The `branch` is always set to `main` - we have to let Azure know this so it knows which branch is the primary branch and hence which other ones will have staging environments.

## Setting up a resource group

With our Bicep in place, we're going to need a resource group to send it to. We're going to create ourselves a resource group in North Europe:

```shell
az group create -g rg-blog-johnnyreilly-com -l westeurope
```

## Secrets for GitHub Actions

We're aiming to set up a GitHub Action to handle our deployment which depends upon some secrets.

### `AZURE_CREDENTIALS` - GitHub logging into Azure

First a `AZURE_CREDENTIALS` secret that facilitates GitHub logging into Azure. We'll use the Azure CLI to create this:

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

### `WORKFLOW_TOKEN` - Azure accessing the GitHub container registry

We also need a secret for updating workflows from Azure. Azure Static Web Apps can update your workflow - they need access to do this when we're deploying. To facilitate this we'll set up a `WORKFLOW_TOKEN` secret. This is a GitHub personal access token with the `workflow` scope. [Follow the instructions here to create the token.](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

Ironically, we're not planning to use this functionality, but the validation for the Bicep template will fail if it isn't supplied.

## Deploying with GitHub Actions

With our secrets configured, we're now well placed to update our GitHub Action. We'll tweak the content of `.github/workflows/build-and-deploy.yaml` file in our repository to the following:

```yaml
name: Build and Deploy

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

env:
  RESOURCE_GROUP: rg-blog-johnnyreilly-com
  LOCATION: westeurope
  STATICWEBAPPNAME: blog.johnnyreilly.com
  TAGS: '{"owner":"johnnyreilly", "email":"johnny_reilly@hotmail.com"}'

jobs:
  build_and_deploy_swa_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name: Build and deploy
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: true

      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Set Deployment Name
        id: deployment_name
        run: |
          REF_SHA='${{ github.ref }}.${{ github.sha }}'
          DEPLOYMENT_NAME="${REF_SHA////-}"
          echo "::set-output name=DEPLOYMENT_NAME::$DEPLOYMENT_NAME"

      - name: Static Web App - change details
        id: static_web_app_what_if
        if: github.event_name == 'pull_request'
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az deployment group what-if \
              --resource-group ${{ env.RESOURCE_GROUP }} \
              --name "${{ steps.deployment_name.outputs.DEPLOYMENT_NAME }}" \
              --template-file ./infra/main.bicep \
              --parameters \
                  branch='main' \
                  location='${{ env.LOCATION }}' \
                  name='${{ env.STATICWEBAPPNAME }}' \
                  tags='${{ env.TAGS }}' \
                  repositoryToken='${{ secrets.WORKFLOW_TOKEN }}'

      - name: Static Web App - deploy infra
        id: static_web_app_deploy
        if: github.event_name != 'pull_request'
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az deployment group create \
              --resource-group ${{ env.RESOURCE_GROUP }} \
              --name "${{ steps.deployment_name.outputs.DEPLOYMENT_NAME }}" \
              --template-file ./infra/main.bicep \
              --parameters \
                  branch='main' \
                  location='${{ env.LOCATION }}' \
                  name='${{ env.STATICWEBAPPNAME }}' \
                  tags='${{ env.TAGS }}' \
                  repositoryToken='${{ secrets.WORKFLOW_TOKEN }}'

      - name: Static Web App - get API key for deployment
        id: static_web_app_apikey
        uses: azure/CLI@v1
        with:
          inlineScript: |
            APIKEY=$(az staticwebapp secrets list --name '${{ env.STATICWEBAPPNAME }}' | jq -r '.properties.apiKey')
            echo "::set-output name=APIKEY::$APIKEY"

      - name: Static Web App - build and deploy
        id: static_web_app_build_and_deploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ steps.static_web_app_apikey.outputs.APIKEY }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: 'upload'
          ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
          # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
          app_location: '/blog-website' # App source code path
          api_location: '' # Api source code path - optional
          output_location: 'build' # Built app content directory - optional
          ###### End of Repository/Build Configurations ######

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Cleanup Pull Request staging environment
    steps:
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}

      - name: Get API key for deployment
        id: apikey
        uses: azure/CLI@v1
        if: github.event_name != 'pull_request'
        with:
          inlineScript: |
            APIKEY=$(az staticwebapp secrets list --name $(staticWebAppName) | jq -r '.properties.apiKey')
            echo "::set-output name=APIKEY::$APIKEY"

      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ steps.apikey.outputs.APIKEY }}
          action: 'close'
```

The above workflow does the following:

-

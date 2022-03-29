---
title: 'Azure DevOps: Consume a private artifact feed'
authors: johnnyreilly
tags: [Azure Static Web Apps, GitHub Actions, Docusaurus]
image: ./title-image.png
hide_table_of_contents: false
---

Lighthouse is a tremendous tool for auditing the performance and usability of websites. Rather than having to perform these audits manually, it's helpful to be able to plug it into your CI pipeline. This post illustrates how to integrate Lighthouse into a GitHub Actions workflow for an Azure Static Web App, and report findings directly in pull requests that are raised.

![title image reading "Lighthouse meet GitHub Actions" with the Lighthouse logo and a screenshot of the results in a GitHub comment`](title-image.png)

## `nuget.config`

To consume a private feed, you'll likely want to create a `nuget.config` file in the root of your repo.  Here you list the package sources you want to consume, typically all of NuGet as well as your private feed; shown below as `my-nuget-packages`:

```xml
<?xml version="1.0" encoding="utf-8"?>
  <configuration>
    <packageSources>
      <add key="NuGet official package source" value="https://api.nuget.org/v3/index.json" />
      <add key="my-nuget-packages" value="https://pkgs.dev.azure.com/my-org/_packaging/my-nuget-packages/nuget/v3/index.json" />
    </packageSources>
  </configuration>
```

## Consuming a private feed locally with the Azure Artifacts Credential Provider

If you're consuming from a private feed, you may experience 401's when you run `dotnet restore` like so:

```shell
error : Unable to load the service index for source https://pkgs.dev.azure.com/my-org/_packaging/not-there/nuget/v3/index.json. [/dev.azure.com/project/repo/src/App.csproj]
error : Response status code does not indicate success: 401
```

A way to resolve this is to install the [Azure Artifacts Credential Provider](https://github.com/Microsoft/artifacts-credprovider) so that you are able to restore nuget packages. See instructions [here](https://github.com/Microsoft/artifacts-credprovider#setup).

On a Mac this is as simple as running `sh -c "$(curl -fsSL https://aka.ms/install-artifacts-credprovider.sh)"` in your terminal.

Subsequently, running `dotnet restore --interactive` should trigger an authentication flow in the terminal, and subject to successful authentication, restore packages from the private feed.

## Consuming a private feed in Azure Pipelines

You will need to authenticate within your pipeline before you can acquire your private feed packages. This is as simple as this:

```yml
    - task: NuGetAuthenticate@0
```

Then you must explicitly `dotnet restore` and provide the path to the `nuget.config`. You can do this with the dedicated task like so:

```yml
    - task: DotNetCoreCLI@2
      displayName: 'dotnet restore tests'
      inputs:
        command: 'restore'
        projects: '**/src/**/*.Tests.csproj'
        nugetConfigPath: 'nuget.config'
        feedsToUse: config
```

## The publish gotcha

On occasion, it can happen that Azure Pipelines doesn't seem to be happy running a publish task with private feeds. Consider, a task like this:

```yml
     - task: DotNetCoreCLI@2
       displayName: 'dotnet publish'
       inputs:
         command: publish
         arguments: '--configuration Release --output $(Build.ArtifactStagingDirectory)/${{parameters.artifactName}} /p:SourceRevisionId=$(Build.SourceVersion)'
         zipAfterPublish: true
         publishWebProjects: false
         workingDirectory: src/App
```

This may result in non-actionable errors like this:

> `##[error]Error: There was an error when attempting to execute the process '/opt/hostedtoolcache/dotnet/dotnet'. This may indicate the process failed to start. Error: spawn /opt/hostedtoolcache/dotnet/dotnet ENOENT`

A workaround in this situation is to invoke .NET through a bash script directly like so:

```yml
      - bash: |
          cd src/App
          pwd
          dotnet --list-sdks
          echo ""
          echo "**************"
          echo "dotnet restore --configfile ../../nuget.config"
          dotnet restore --configfile ../../nuget.config
          echo ""
          echo "**************"
          echo "dotnet build --configuration Release --no-restore"
          dotnet build --configuration Release
          echo ""
          echo "**************"
          echo "dotnet publish --configuration Release --no-restore --output $(Build.ArtifactStagingDirectory)/App /p:SourceRevisionId=$(Build.SourceVersion)"
          dotnet publish --configuration Release --no-restore --output $(Build.ArtifactStagingDirectory)/App /p:SourceRevisionId=$(Build.SourceVersion)
        displayName: 'dotnet publish'
```

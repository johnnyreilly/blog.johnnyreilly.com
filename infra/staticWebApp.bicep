param location string
param branch string
param staticWebAppName string
param tags object
@secure()
param repositoryToken string
param rootCustomDomainName string
param blogCustomDomainName string
param appInsightsId string
param appInsightsInstrumentationKey string
param appInsightsConnectionString string

var tagsWithHiddenLinks = union({
  // 'hidden-link: /app-insights-resource-id': '/subscriptions/26178455-cfd9-4d36-bab5-35896b6d2dd1/resourceGroups/rg-blog-johnnyreilly-com/providers/microsoft.insights/components/blog.johnnyreilly.com'
  'hidden-link: /app-insights-resource-id': appInsightsId
  'hidden-link: /app-insights-instrumentation-key': appInsightsInstrumentationKey
  'hidden-link: /app-insights-conn-string': appInsightsConnectionString
}, tags)

resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: staticWebAppName
  location: location
  tags: tagsWithHiddenLinks
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

resource staticWebAppAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {
  name: 'appsettings'
  kind: 'string'
  parent: staticWebApp
  properties: {
    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey
    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString
  }
}

resource staticWebAppFunctionAppSettings 'Microsoft.Web/staticSites/config@2022-03-01' = {
  name: 'functionappsettings'
  kind: 'string'
  parent: staticWebApp
  properties: {
    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey
    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString
  }
}

resource rootCustomDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  parent: staticWebApp
  name: rootCustomDomainName
  properties: {}
}

resource blogCustomDomain 'Microsoft.Web/staticSites/customDomains@2022-03-01' = {
  parent: staticWebApp
  name: blogCustomDomainName
  properties: {}
}

output staticWebAppDefaultHostName string = staticWebApp.properties.defaultHostname // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.id
output staticWebAppName string = staticWebApp.name

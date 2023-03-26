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

resource telemetryDbAccountDb 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' existing = {
  name: telemetryDbAccountName
}

var tagsWithHiddenLinks = union({
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
  kind: 'config'
  parent: staticWebApp
  properties: {
    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsInstrumentationKey
    APPLICATIONINSIGHTS_CONNECTION_STRING: appInsightsConnectionString
    DatabaseKey: telemetryDbAccountDb.listKeys().primaryMasterKey
    DatabaseName: telemetryDbDatabaseName
    DatabaseContainerName: telemetryDbContainerName
    DatabaseEndpoint: telemetryDbAccountDb.properties.documentEndpoint

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

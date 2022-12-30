param location string
param branch string
param staticWebAppName string
param tags object
@secure()
param repositoryToken string
param rootCustomDomainName string
param blogCustomDomainName string
param workspaceName string = 'appInsightsWorkspace'
param appInsightsName string = 'appInsights'

module appInsights './appInsights.bicep' = {
  name: 'appInsights'
  params: {
    location: location
    tags: tags
    workspaceName: workspaceName
    appInsightsName: appInsightsName
  }
}

var tagsWithHiddenLinks = union({
  'hidden-link: /app-insights-resource-id': appInsights.outputs.appInsightsId
  'hidden-link: /app-insights-instrumentation-key': appInsights.outputs.appInsightsInstrumentationKey
  'hidden-link: /app-insights-conn-string': appInsights.outputs.appInsightsConnectionString
}, tags)

module staticWebApp './staticWebApp.bicep' = {
  name: 'staticWebApp'
  params: {
    location: location
    branch: branch
    staticWebAppName: staticWebAppName
    tags: tagsWithHiddenLinks
    repositoryToken: repositoryToken
    rootCustomDomainName: rootCustomDomainName
    blogCustomDomainName: blogCustomDomainName
  }
}

output staticWebAppDefaultHostName string = staticWebApp.outputs.staticWebAppDefaultHostName // eg gentle-bush-0db02ce03.azurestaticapps.net
output staticWebAppId string = staticWebApp.outputs.staticWebAppId
output staticWebAppName string = staticWebApp.outputs.staticWebAppName

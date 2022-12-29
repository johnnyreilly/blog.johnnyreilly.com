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
  name: staticWebAppName
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
  name: staticWebAppName
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

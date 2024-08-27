using './main.bicep'

param envName = readEnvironmentVariable('AZURE_ENV_NAME', '')
param location = readEnvironmentVariable('AZURE_LOCATION', '')
param branch = readEnvironmentVariable('REPOSITORY_BRANCH', '')
param staticWebAppName = readEnvironmentVariable('STATIC_WEB_APP_NAME', '')

param tags = {
  owner: readEnvironmentVariable('TAGS_OWNER', '')
  emain: readEnvironmentVariable('TAGS_EMAIL', '')
}

param rootCustomDomainName = readEnvironmentVariable('ROOT_CUSTOM_DOMAIN_NAME', '')
param blogCustomDomainName = readEnvironmentVariable('BLOG_CUSTOM_DOMAIN_NAME', '')
@minLength(3)
@maxLength(11)
param location string

@description('Tags that our resources need')
param tags object

@description('CosmosDb account name')
param cosmosDbAccountName string

@description('CosmosDb database name')
param cosmosDbDatabaseName string

@description('AD object id of user with access to CosmosDb')
param userId string

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

module cosmos 'cosmos.bicep' = {
  name: '${deployment().name}-cosmos'
  params: {
    location: location
    tags: tags
    cosmosDbAccountName: cosmosDbAccountName
    cosmosDbDatabaseName: cosmosDbDatabaseName
    isCosmosDbZoneRedundant: isCosmosDbZoneRedundant
  }
}

module roles 'roles.bicep' = {
  name: '${deployment().name}-roles'
  params: {
    userId: userId
    cosmosDbAccountName: cosmos.outputs.cosmosDbAccountName
  }
  dependsOn: [
    cosmos
  ]
}

output cosmosDbAccountName string = cosmos.outputs.cosmosDbAccountName
output cosmosDbDatabaseName string = cosmosDbDatabaseName

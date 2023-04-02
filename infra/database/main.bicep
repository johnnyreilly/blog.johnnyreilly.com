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

@description('ip address of folk who will run queries in the portal')
param allowedIPAddress string

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

module cosmos 'cosmos.bicep' = {
  name: 'cosmos'
  params: {
    location: location
    tags: tags
    cosmosDbAccountName: cosmosDbAccountName
    cosmosDbDatabaseName: cosmosDbDatabaseName
    allowedIPAddress: allowedIPAddress
    isCosmosDbZoneRedundant: isCosmosDbZoneRedundant
  }
}

module roles 'roles.bicep' = {
  name: 'roles'
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

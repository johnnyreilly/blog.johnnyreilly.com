@minLength(3)
@maxLength(11)
param location string

@description('The hashed value of the branch name. Is an empty string when on the main branch.')
param branchHash string

@description('Tags that our resources need')
param tags object

@description('CosmosDb account name')
param cosmosDbAccountName string

@description('CosmosDb Containers')
param cosmosDbContainers array

@description('CosmosDb Database Name')
param cosmosDbDatabaseName string

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

@description('The object representing the policy for taking backups on an account.')
param isContinuousBackupEnabled bool = false

param deploymentPrefix string

var locations = [
  {
    locationName: location
    failoverPriority: 0
    isZoneRedundant: isCosmosDbZoneRedundant
  }
]

var backupPolicy =  {
  type: isContinuousBackupEnabled ? 'Continuous': 'Periodic'
  periodicModeProperties: isContinuousBackupEnabled ? null: {
    backupIntervalInMinutes: 240
    backupRetentionIntervalInHours: 8
  }
}

var allowedIpAddresses = [
  // magic IP to allow requests from Azure
  '0.0.0.0'
]

module cosmosDb 'shared/database-accounts.bicep' = {
  name: '${deploymentPrefix}-cosmosdb-${branchHash}'
  params: {
    cosmosDbAccountName: cosmosDbAccountName
    accountApi: 'Sql'
    defaultConsistencyLevel: 'Session'
    location: location
    tags: tags
    allowedIpAdresses: allowedIpAddresses
    advancedThreatProtectionEnabled: false
    locations: locations
    backupPolicy: backupPolicy
  }
}

module cosmosDbDatabase 'shared/sql-databases.bicep' = {
  name: '${deploymentPrefix}-cosmosdb-database-${branchHash}'
  params: {
    cosmosDbAccountName: cosmosDb.outputs.cosmosDbAccountName
    databaseName: cosmosDbDatabaseName
    tags: tags
  }
}

module cosmosDbContainer 'br:icebox.azurecr.io/bicep/ice/providers/document-db/sql-databases-containers:v1.2' = [for container in cosmosDbContainers: {
  name: '${deploymentPrefix}-container-${container.name}-${branchHash}'
  params: {
    tags: tags
    databaseName: cosmosDbDatabase.outputs.sqlDatabaseName
    cosmosDbAccountName: cosmosDb.outputs.cosmosDbAccountName
    containerName: container.name
    partitionKey: container.partitionKey
    indexingPolicy: container.indexingPolicy
    uniqueKeyPolicy: container.uniqueKeyPolicy
  }
}]

output cosmosDbAccountName string = cosmosDb.outputs.cosmosDbAccountName

@minLength(3)
@maxLength(11)
param location string

@description('The hashed value of the branch name. Is an empty string when on the main branch.')
param branchHash string

@description('Tags that our resources need')
param tags object

@description('CosmosDb account name')
param cosmosDbAccountName string

@description('Engineering team AD group object id')
param engGroupObjectId string

// @description('Cosmos DB read only ad group object id')
// param cosmosDbReadOnlyGroupObjectId string

@description('The service principal')
param principalId string

@description('Specifies if Az is enabled for Cosmos')
param isCosmosDbZoneRedundant bool = false

@description('The object representing the policy for taking backups on an account.')
param isContinuousBackupEnabled bool = false

param deploymentPrefix string

var cosmosDbDatabaseName = 'telemetry'
var cosmosDbContainerName = 'releases'

var containers = [
  {
    name: cosmosDbContainerName
    partitionKey: {
      paths:[
        '/adoProject'
      ]
      kind: 'Hash'
    }
    indexingPolicy: {
      indexingMode: 'consistent'
      includedPaths: [
        {
          path: '/*'
        }
      ]
      excludedPaths: [
        {
          path: '/_etag/?'
        }
      ]
      compositeIndexes:[
        [
          {
            path: '/adoProject'
            order: 'ascending'
          }
          {
            path: '/adoRepository'
            order: 'ascending'
          }
          {
            path: '/buildId'
            order: 'ascending'
          }
        ]
      ]
    }
    uniqueKeyPolicy: {}
    // uniqueKeyPolicy: {
    //   uniqueKeys: [
    //     {
    //       paths: [
    //         '/AggregateId'
    //         '/Version'
    //         '/Source'
    //       ]
    //     }
    //   ]
    // }
  }
]

module cosmos 'cosmos.bicep' = {
  name: '${deploymentPrefix}-cosmos-${branchHash}'
  params: {
    branchHash: branchHash
    location: location
    tags: tags
    cosmosDbAccountName: cosmosDbAccountName
    cosmosDbDatabaseName: cosmosDbDatabaseName
    cosmosDbContainers: containers
    isContinuousBackupEnabled: isContinuousBackupEnabled
    isCosmosDbZoneRedundant: isCosmosDbZoneRedundant
    deploymentPrefix: deploymentPrefix
  }
}

module roles 'roles.bicep' = {
  name: '${deploymentPrefix}-roles-${branchHash}'
  params: {
    branchHash: branchHash
    engGroupObjectId: engGroupObjectId
    // cosmosDbReadOnlyGroupObjectId: cosmosDbReadOnlyGroupObjectId
    cosmosDbAccountName: cosmos.outputs.cosmosDbAccountName
    principalId: principalId
    deploymentPrefix: deploymentPrefix
  }
  dependsOn: [
    cosmos
  ]
}

module atp 'atp.bicep' = {
  name: '${deploymentPrefix}-atp-${branchHash}'
  params: {
    cosmosDbAccountName: cosmos.outputs.cosmosDbAccountName
  }
  dependsOn: [
    roles
  ]
}

output cosmosDbAccountName string = cosmos.outputs.cosmosDbAccountName
output cosmosDbDatabaseName string = cosmosDbDatabaseName
output cosmosDbContainerName string = cosmosDbContainerName

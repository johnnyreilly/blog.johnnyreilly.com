@description('Tags that our resources need')
param tags object

@description('Cosmos DB account name to add the SQL container into')
param cosmosDbAccountName string

@description('Cosmosdb database name to add the SQL container into')
param databaseName string

@description('ContainerPartitionKey: The configuration of the partition key to be used for partitioning data into multiple partitions')
param partitionKey object = {
  paths: [
    '/id'
  ]
  kind: 'Hash'
}

@description('IndexingPolicy: Cosmos DB indexing policy')
param indexingPolicy object = {
  indexingMode: 'consistent'
  includedPaths: [
    {
      path: '/*'
    }
  ]
}

@description('The unique key policy configuration for specifying uniqueness constraints on documents in the collection in the Azure Cosmos DB service.')
param uniqueKeyPolicy object = {}

@description('Name of Container')
param containerName string

@description('Container level time to live, default set to infinite')
param defaultTtlSeconds int = -1

resource databaseAccount 'Microsoft.DocumentDB/databaseAccounts@2021-04-15' existing = {
  name: cosmosDbAccountName
}

resource sqlDatabase 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2021-04-15' existing = {
  name: databaseName
  parent: databaseAccount
}

resource container 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2021-04-15' = {
  parent: sqlDatabase
  name: containerName
  tags: tags
  properties: {
    resource: {
      id: containerName
      partitionKey: partitionKey
      indexingPolicy: indexingPolicy
      uniqueKeyPolicy: empty(uniqueKeyPolicy) ? null : uniqueKeyPolicy
      defaultTtl: defaultTtlSeconds
    }
  }
}

output sqlContainerName string = container.name
output sqlContainerId string = container.id

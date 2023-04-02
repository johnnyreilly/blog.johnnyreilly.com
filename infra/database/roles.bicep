// useful ref https://github.com/Azure/azure-quickstart-templates/blob/master/quickstarts/microsoft.documentdb/cosmosdb-sql-rbac/main.bicep
@description('Name of the cosmosdb account')
param cosmosDbAccountName string

@description('AD object id of user with access to CosmosDb')
param userId string

// Azure Cosmos DB exposes two built-in role definitions: https://learn.microsoft.com/en-us/azure/cosmos-db/how-to-setup-rbac#built-in-role-definitions
var roleDefinitionCosmosDbDataReader = '00000000-0000-0000-0000-000000000001'
var roleDefinitionCosmosDbContributor = '00000000-0000-0000-0000-000000000002'

// grant access to the cosmos db account to your user
var roleAssignments = [
  {
    name: 'eng-contributor'
    principalId: userId
    roleDefinitionId: roleDefinitionCosmosDbContributor
  }
  {
    name: 'eng-reader'
    principalId: userId
    roleDefinitionId: roleDefinitionCosmosDbDataReader
  }
]

@batchSize(1) 
module cosmosRole './roles-assignments.bicep' = [for roleAssignment in roleAssignments : {
  name: '${roleAssignment.name}-${roleAssignment.principalId}'
  params: {
    cosmosDbAccountName: cosmosDbAccountName
    principalId: roleAssignment.principalId
    roleDefinitionId: roleAssignment.roleDefinitionId
  }
}]


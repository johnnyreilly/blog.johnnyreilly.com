@description('Name of the lens cosmosdb account')
param cosmosDbAccountName string

@description('Engineering team ad group object id')
param engGroupObjectId string

// @description('Cosmos DB read only ad group object id')
// param cosmosDbReadOnlyGroupObjectId string

@description('The service principal')
param principalId string

@description('The hashed value of the branch name. Is an empty string when on the main branch.')
param branchHash string

param deploymentPrefix string

// role ids are from here: https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-setup-rbac#built-in-role-definitions
var roleDefinitionCosmosDbDataReader = '00000000-0000-0000-0000-000000000001'
var roleDefinitionCosmosDbContributor = '00000000-0000-0000-0000-000000000002'

var roles = [
  {
    name: 'eng-contributor'
    principalId: engGroupObjectId
    roleDefinitionName: roleDefinitionCosmosDbContributor
    scopeType: 'DatabaseAccount'
  }
  {
    name: 'eng-reader'
    principalId: engGroupObjectId
    roleDefinitionName: roleDefinitionCosmosDbDataReader
    scopeType: 'DatabaseAccount'
  }
  {
    name: 'pipeline-contributor'
    principalId: principalId
    roleDefinitionName: roleDefinitionCosmosDbContributor
    scopeType: 'DatabaseAccount'
  }
  {
    name: 'pipeline-reader'
    principalId: principalId
    roleDefinitionName: roleDefinitionCosmosDbDataReader
    scopeType: 'DatabaseAccount'
  }
]

module cosmosRole 'shared/roles.bicep' = {
  name: '${deploymentPrefix}-cosmos-role-${branchHash}'
  params: {
    cosmosDbAccountName: cosmosDbAccountName
    roleAssignments: roles
  }
}

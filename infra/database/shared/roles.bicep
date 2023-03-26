@description('Name of the cosmosdb account')
param cosmosDbAccountName string

//CosmosDB Data Plane Roles
// role ids are from here: https://docs.microsoft.com/en-us/azure/cosmos-db/how-to-setup-rbac#built-in-role-definitions
@description('An array of role assignment objects. Format: [{ name: xxx, principalId: xxx, roleDefinitionName: xxx, databaseName: xxx, containerName: xxx, scopeType: xxx }]')
param roleAssignments array
// E.g.
// [
//   {
//     name: 'replace'
//     principalId: 'replace'
//     roleDefinitionName: 'replace'
//     databaseName: 'replace'
//     containerName: 'replace'
//     scopeType: 'replace'
//   }
// ]

@batchSize(1) 
module cosmosRole 'role-assignments.bicep' = [for role in roleAssignments : {
  name: guid(role.name, role.roleDefinitionName, role.principalId)
  params: {
    cosmosDbAccountName: cosmosDbAccountName
    principalId: role.principalId
    roleDefinitionName: role.roleDefinitionName
    databaseName: (role.scopeType == 'SqlDatabase' || role.scopeType == 'Container') ? role.databaseName : ''
    containerName: (role.scopeType == 'Container') ? role.containerName : ''
    scopeType: role.scopeType
  }
}]

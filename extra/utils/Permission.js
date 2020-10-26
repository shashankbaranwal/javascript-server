const permissions =
{
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainer'],
        write: ['trainee'],
        Delete: [],
    },
    'getUser1': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        Delete: ['trainee'],
    }
}

function hasPermissions (moduleName, role, permissionType) {
    try
    {
      if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)){
        console.log(`${role} has ${permissionType} permissions`)
        return true
    }
    console.log(`${role} does not has ${permissionType} permissions`)
    return false
    }
    catch(err) {
      console.log(`Error: ${moduleName} is not a valid module Name`)
      }
    }
hasPermissions("getUsers", "trainer", "read")
hasPermissions("getUsers", "head-trainer", "write")
hasPermissions("getUsers", "trainee", "all")

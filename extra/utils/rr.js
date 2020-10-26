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
function hasPermissions (moduleName, role, permissionType){
    if(permissions[moduleName].all.include(role)){
        return true;
    }
    if(permissions[moduleName][permissionType].include(role)){
        return true;
    }
    else{
        console.log(`${role} does not has ${permissionType} permissions`)
        return false
    }
}

hasPermissions("getUsers", "trainer", "read")
hasPermissions("getUsers", "head-trainer", "write")
hasPermissions("getUsers", "trainee", "all")
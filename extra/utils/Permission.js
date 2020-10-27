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

function hasPermission(moduleName,role,permissionType)
{
    const temp = permissions[moduleName];

    if(!temp || !temp[permissionType] ){
        return false;
    }
    if(temp['all'].includes(role)){
        return true;
    }

    if(!temp[permissionType].includes(role)){
        return false;
    }
    return true;
}
console.log(hasPermission('getUsers','head-trainer','all'));
console.log(hasPermission('getUser1','trainer','all'));
console.log(hasPermission('getUsers','trainee','write'));
console.log(hasPermission('getUsers','trainee','read'));  
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
        const { all, read, write, Delete} = moduleName;
        const temp = permissions[moduleName];
        if(!temp)
        {
            return false;
        }
        else{
            if(permissionType == "all"){
                type = all;
            }
            if(permissionType == "read"){
                type = read;
            }
            if(permissionType == "write"){
                type = write;
            }
            if(permissionType == "Delete"){
                type = Delete;
            }
            if(role == 'head-trainer'){
                return true;
            }
            else{
                if(type.includes(role)){
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    }
let result = hasPermission('getUsers','head-trainer','all');
console.log(result);
let result_1 = hasPermission('getUser1','trainer','Delete');
console.log(result_1);
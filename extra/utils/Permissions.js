import {permissions} from '../constant'
export default function hasPermission(moduleName, role, permissionType) {
    const { all, read, write, Delete } = moduleName;
    console.log("--------",moduleName);
    // const temp = permissions[moduleName];
    // console.log("--------",temp);
    let type;
    if (type = all.includes(role))
    {
        return true;
    }
    else{
        if (permissionType == 'read'){
            type = read.includes(role)
            return type;
        }
        else if(permissionType=="write"){
            type = write.includes(role);
            return type;
        }
        else if(permissionType=="Delete"){
            type = Delete.includes(role)
            return type;
        }
    }
}
// let result = hasPermission(permissions.getUsers,"head-trainer","all");
// console.log(result);
// let result_1 = hasPermission(permissions.getUsers,"trainee","read");
// console.log(result_1);

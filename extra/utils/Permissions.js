import { permissions } from '../constant';
export default function hasPermission(moduleName,role,permissionType)
{
    console.log(permissions);
    console.log(moduleName);
    const temp = permissions[moduleName];
    if(!temp || !temp[permissionType]){
        return false
    }
    if(temp['all'].includes(role)){
        return true;
    }
    if(!temp[permissionType].includes(role)){
        return false;
    }
    return true;
}
// console.log(hasPermission('getUsers','head-trainer','all'));
// console.log(hasPermission('getUser1','trainer','all'));
// console.log(hasPermission('getUsers','trainee','write'));
// console.log(hasPermission('getUsers','trainee','read'));
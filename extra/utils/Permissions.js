import permissions from '../constant';
export default function hasPermission(moduleName,role,permissionType)
{
    if(!moduleName.hasOwnProperty(permissionType)){
        console.log('false');
    }
    else if(moduleName[permissionType].includes(role) || (role=='head-trainer')){
        console.log('true');
    }
    else{
        console.log('false');
    }
}
// console.log(hasPermission('getUsers','head-trainer','all'));
// console.log(hasPermission('getUser1','trainer','all'));
// console.log(hasPermission('getUsers','trainee','write'));
// console.log(hasPermission('getUsers','trainee','read'));
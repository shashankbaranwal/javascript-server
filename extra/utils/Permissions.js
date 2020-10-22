import {permissions} from "../constants"

export default function hasPermission(moduleName, role, permissionType){
    console.log(permissions[moduleName][permissionType].includes(role));
};
    
/*hasPermission('getUsers1', 'trainee', 'all');
hasPermission('getUsers', 'trainee', 'read');
hasPermission('getUsers2', 'trainee', 'delete');
hasPermission('getUser2', 'trainee', 'write');*/

export default function hasPermission(moduleName,role:string,permissionType:string) {
    let type;
    const { all, read, write, Delete } = moduleName;
    if (permissionType == 'all')
        type = all;
    if (permissionType == 'read')
        type = read;
    if (permissionType == 'write')
        type = write;
    if (permissionType == 'Delete')
        type = Delete;

    if (role == 'head-trainer') {
        return true;
    }
    else {
        if (type.includes(role))
            return true
        else
            return false;
    }
}
// const { getUsers, getUser } = permissions;
// let result = hasPermission(getUsers, 'head-trainer', 'Delete');
// let result_1 = hasPermission(getUsers, 'trainer', 'all');
// console.log(result);
// console.log(result_1);
let permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'getUsers1': {
        all: ['head-trainer','trainee',],
        read: [ 'trainer'],
        write: ['trainer'],
        delete: ['trainer'],
    },
    'getUsers2': {
        all: ['head-trainer'],
        read: ['trainee'],
        write: ['trainer', 'trainer'],
        delete: [],
    }
}
function hasPermission(moduleName, role, permissionType){
    console.log(permissions[moduleName][permissionType].includes(role));
};
    
hasPermission('getUsers1', 'trainee', 'all');
hasPermission('getUsers', 'trainee', 'read');
hasPermission('getUsers2', 'trainee', 'delete');
hasPermission('getUser2', 'trainee', 'write');

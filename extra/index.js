import { creatediamond , createequilatral } from './patterns'
import {hasPermission,validateUsers} from './utils'
import {permissions , users} from './constant'

creatediamond(5)
createequilatral(6)
// import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

validateUsers(users);
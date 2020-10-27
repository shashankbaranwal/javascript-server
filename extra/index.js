import { creatediamond , createequilatral } from './patterns'
import {hasPermission,validateUsers} from './utils'
import {users, permissions } from './constant';

creatediamond(5)
createequilatral(6)

let result = hasPermission(permissions.getUsers,'head-trainer','all');
console.log(result)
validateUsers(users);
import { creatediamond , createequilatral } from './pattern'
import {hasPermission,validateUsers} from './utils'
//import {permissions , users} from './constant'
import { Iusers } from './interfaces'
import { permissions } from './constant'

creatediamond(5)
createequilatral(6)
// import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);

//move users from permissions to extra.index
const users: Iusers[] = [{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },
    {
        traineeEmail:'urvashi.chaudhary@successive.tech',
        reviewerEmail:'mohammad.adil@successive.tech',
    },
    {
        traineeEmail:'trainee@gmail.com',
        reviewerEmail:'user@gmail.com',
    },
];
validateUsers(users);
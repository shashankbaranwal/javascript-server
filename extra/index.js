import { creatediamond , createequilatral } from './patterns'
import {hasPermission,validateUsers} from './utils'


creatediamond(5)
createequilatral(6)
// import {permissions , user} from './constants';
let result = hasPermission(permissions.getUsers, 'head-trainer', 'Delete');
console.log(result);


const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
}];
validateUsers(users);
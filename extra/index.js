import { creatediamond , createequilatral } from './patterns'
import {hasPermission,validateUsers} from './utils'


creatediamond(5)
createequilatral(6)
// import {permissions , user} from './constants';
let result = hasPermission('getUsers','head-trainer','all');
console.log(result);
console.log(hasPermission('getUser1','trainer','all'));


const user =[{
    traineeEmail: 'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
    },{
        traineeEmail: 'trainee1@succssive.tech',
        reviewerEmail: 'reviewer1@successive.tech',
}];
validateUsers(users);
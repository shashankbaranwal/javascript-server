import validateEmail from './helpers'

//console.log(validateEmail(users[0]["traineeEmail"]))
// let a =[];
// let b =[];
export default function validateUsers(users){

    let countValid=0;
    let countInvalid=0;
    users.forEach(function(item){
        if(validateEmail(item.traineeEmail)===true && validateEmail(item.reviewerEmail)===true){
            countValid++;
        }
        else{
            countInvalid++;
        }
    })
    // console.log("Valid is :"+a);
    // console.log("invalid is :" +b);
    console.log("Valid: "+countValid+" , Invalid: "+countInvalid);
}
//validateUsers(users);

//validateUsers(users);


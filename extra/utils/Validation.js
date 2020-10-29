import validateEmail from './helpers'
export default function validateUsers(users){

    let countValid=0;
    let countInvalid=0;
    let a =[];
    let b =[];
    users.forEach(function(item){
        const {traineeEmail, reviewerEmail} = item;
        if(validateEmail(traineeEmail)){
            a.push(traineeEmail);
            countValid++;
        }
        else{
            b.push(traineeEmail);
            countInvalid++;
        }
        if(validateEmail(reviewerEmail)){
            a.push(reviewerEmail);
            countValid++;
        }
        else{
            b.push(reviewerEmail);
            countInvalid++;
        }
    })
    console.log("Valid is :"+a);
    console.log("invalid is :" +b);
    console.log("Valid: "+countValid+" , Invalid: "+countInvalid);
};

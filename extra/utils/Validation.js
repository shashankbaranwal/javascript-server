import validateEmail from './helpers';
//console.log(validateEmail(users[0]["traineeEmail"]))

export default function validateUsers(users){
    let countValid=0;
    let countInvalid=0;
    users.forEach(function(item) {
        const {traineeEmail,reviewerEmail}= item;
        if(validateEmail(item.traineeEmail)=== true && validateEmail(item.reviewerEmail)===true){
            countValid++;
        }
        else{
            countInvalid++;
        }
        // if(validateEmail(reviewerEmail)){
        //     a.push(reviewerEmail);
        //     countValid++;
        // }
        // else{
        //     b.push(reviewerEmail);
        //     countInvalid++;
        // }
    })
    // console.log("Valid is :"+a);
    // console.log("invalid is :" +b);
    console.log("Valid: "+countValid+" , Invalid: "+countInvalid);
};
    
//validateUsers(users);
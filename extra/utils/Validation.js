import validateEmail from './helpers.js';



/* function validateEmail(email){
    const regix = /\w+.\w+@successive.tech$/i;
    return regix.test(email)
}
*/


export function validateUsers(users){
    let a = [];
    let b = [];
    let countValid=0;
    let countInvalid=0;
    users.forEach(item => {
        const {TraineeEmail}= item;
        const {ReviewerEmail}= item;
        if(validateEmail(TraineeEmail)){
            a.push(TraineeEmail);
            countValid++;
        }
        else{
            b.push(TraineeEmail);
            countInvalid++;
        }
        if(validateEmail(ReviewerEmail)){
            a.push(ReviewerEmail);
            countValid++;
        }
        else{
            b.push(ReviewerEmail);
            countInvalid++;
        }
    })
    console.log("Valid is :"+a);
    console.log("invalid is :" +b)
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
};
    
// validateUsers(users);
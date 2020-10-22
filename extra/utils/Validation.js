let users = [
    {
        TraineeEmail : 'shashank.baranawal@successive.tech',
        ReviewerEmail : 'naman.parashar@successive.tech',
    },
    {
        TraineeEmail : 'shashank.baranwal@gmail.com',
        ReviewerEmail : 'naman.parashar@gmail.com'
    }
]

/* function validateEmail(email){
    const regix = /\w+.\w+@successive.tech$/i;
    return regix.test(email)
}
*/
function validateEmail(email){
    const regex = /\w+.\w+@successive.tech$/i;
    if(regex.test(email))
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(validateEmail(users[0]["TraineeEmail"]))

function validateUsers(users){
    let countValid=0;
    let countInvalid=0;
    users.forEach(item => {
        const {TraineeEmail}= item;
        const {ReviewerEmail}= item;
        if(validateEmail(TraineeEmail)){
          countValid++;
        }
        else{
            countInvalid++;
        }
        if(validateEmail(ReviewerEmail)){
            countValid++;
        }
        else{
            countInvalid++;
        }
    })
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
};
    
validateUsers(users);
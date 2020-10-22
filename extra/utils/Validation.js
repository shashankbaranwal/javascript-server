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

let a = [];
let b = [];

/*function validateEmail(email){
    const regix = /\w+.\w+@successive.tech$/i;
    return regix.test(email)
}*/

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
        const {TraineeEmail,ReviewerEmail}= item;
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
    console.log("invalid is :" +b);
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
};
    
validateUsers(users);
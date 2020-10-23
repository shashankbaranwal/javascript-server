let users = [
    {
        traineeEmail : 'shashank.baranawal@successive.tech',
        reviewerEmail : 'naman.parashar@successive.tech',
    },
    {
        traineeEmail : 'shashank.baranwal@gmail.com',
        reviewerEmail : 'naman.parashar@gmail.com'
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
console.log(validateEmail(users[0]["traineeEmail"]))

function validateUsers(users){
    let countValid=0;
    let countInvalid=0;
    users.forEach(item => {
        const {traineeEmail,reviewerEmail}= item;
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
    console.log("Valid: "+countValid+" Invalid: "+countInvalid);
};
    
validateUsers(users);
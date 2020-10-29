
export default function validateEmail(email){
    const regex = /\w+.\w+@successive.tech$/i;
    if(regex.test(email))
    {
        return true;
    }
    else{
        return false;
    }
}
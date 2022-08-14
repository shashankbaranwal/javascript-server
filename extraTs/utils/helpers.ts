
export default function validateEmail(email) {
    const regx = /^([a-zA-z0-9/.-]+)@(successive).(tech)$/;
     return regx.test( email );
}
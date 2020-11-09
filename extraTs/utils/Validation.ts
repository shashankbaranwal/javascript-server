import validateEmail from './helpers';
export const validateUsers = (users) => {

    let countValid = 0;
    let countInvalid = 0;
    const validUsers: string[] = [];
    const invalidUsers: string[] = [];
    users.forEach((item) => {
        const { traineeEmail, reviewerEmail } = item;
        if (validateEmail(traineeEmail)) {
            validUsers.push(traineeEmail);
            countValid++;
        }
        else {
            invalidUsers.push(traineeEmail);
            countInvalid++;
        }
        if (validateEmail(reviewerEmail)) {
            validUsers.push(reviewerEmail);
            countValid++;
        }
        else {
            invalidUsers.push(reviewerEmail);
            countInvalid++;
        }
    });
    console.log('Valid is :' + validUsers);
    console.log('invalid is :' + invalidUsers);
    console.log('Valid: ' + countValid + ' , Invalid: ' + countInvalid);
};
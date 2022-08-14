// # ForEach : Calls a Function for each array element
// Create an array
const myNumbers = [1, 42, 35, 24, 75];

for(i = 0; i <= myNumbers.length; i++)
{
    console.log(myNumbers[i]);
}

myNumbers.forEach((myNumber, index, array) => {
    console.log(array);
});
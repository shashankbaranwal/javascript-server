export default function createequilatral(n : number) : void
{
    // using for white space
    let s = "";
    // using for rows
    let j = n;
    for(let i=1;i<=n;i++){
        s=" ".repeat(j);
        console.log(s,'* '.repeat(i));
        s="";
        j--;
    }
}

//createequilatral(10)
function employee(name,jobtitle,born)
{
    this.name=name;
    this.jobtitle=jobtitle;
    this.born=born;
}
let fred = new employee("Fred Flintstone","Caveman",1970);

console.log(fred.toSource());
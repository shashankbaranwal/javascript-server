
// Initialize the array list

let games = [3,"cricket", 2,8,3,1,0,4,"football", "tennis", "Playstations", "Hockey"];

// initilaizing filter method
let res = games.filter(function(element) {
    return element > 4;
});

console.log(res);
console.log(res.length);
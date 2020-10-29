let array = [1, 2, 3, 4, 5, 6];

// target: from second-to-last element, start: 0, end: array.length
let returned_arr = array.copyWithin(-2);
console.log(returned_arr); 
// modifies the original array
console.log(array); 

array = [1, 2, 3, 4, 5, 6];
// target: 0, start copying from 5th element
array.copyWithin(0, 4);
console.log(array);

array = [1, 2, 3, 4, 5, 6];
// target: 1, start copying from 3rd element to second-to-last element
array.copyWithin(1, 2, -1);
console.log(array);
// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
const numbers1 = numbers.pop()
console.log(numbers1);
// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift()
console.log(numbers);
// Use the slice() method to exclude the first 3 elements and return a new array
numbers.slice(0,3)
console.log(numbers);
// Set the value of the outputfield inner html to the new array
let outfield = document.getElementById("OutputField");
// outfield.innerHTML = newArray;
let newArray = outfield.innerHTML;
console.log(newArray);
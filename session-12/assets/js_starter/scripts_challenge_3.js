// Challenge 3 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Check if the array includes the number 5
let a = numbers.includes(5)
// If true, filter out numbers less than 5
let b = numbers.filter(item=> item < 5)
// Then square each number in the resulting array
let c = b.map(item=> Math.pow(item, 2))
// Output the final array
console.log(c)
// Output a message if the number 5 is not in the array
console.log('the number ' + 5 + ' is not in the array')
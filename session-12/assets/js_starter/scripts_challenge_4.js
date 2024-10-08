// Challenge 4 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5, 6];

// Find the index of the number 5 in the array
itemindex = numbers.findIndex(number => number === 5);
// If the number 5 is found in the array
if (numbers.includes(5)) {
    nums = numbers.slice(0, itemindex + 1);
    nums.forEach(num=> {console.log(num)})
}
// Console log each number in the array up to and including 5

// Output a message if the number 5 is not in the array
if (!numbers.includes(5)) {
    console.log("yo num 5 doesn't exist");
}
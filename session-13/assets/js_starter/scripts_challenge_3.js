// Challenge 3 Starter
function safeDivide(a, b) {
    try {
        if (b === 0) throw "Zero division error";
        if (a === 0) throw "Zero division error";
        return a / b;
    } catch(e) {
        console.log("enter no zeros", e);
    }

}

console.log(safeDivide(10, 0)); // Expected Output: "An error occurred: Division by zero is not allowed."
console.log(safeDivide(10, 2)); // Expected Output: 5



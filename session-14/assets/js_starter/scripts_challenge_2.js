// Challenge 2 Starter
const userObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isStudent: false,
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    skills: ["JavaScript", "HTML", "CSS"],
    socialProfiles: {
        twitter: "@johndoe",
        linkedIn: "linkedin.com/in/johndoe"
    },
    isEmployed: true,
    // deepClone(obj) {
    //     return JSON.parse(JSON.stringify(obj));
    // }
};

// Deep clone the complexObject three times using the spread operator for shallow cloning

function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
let clone1 = deepClone(userObject);
let clone2 = deepClone(userObject);
let clone3 = deepClone(userObject);
console.log(userObject);
console.log(clone1);

// Store the cloned objects in an array

let cloneArray = [clone1, clone2, clone3];

// Sort the  array of cloned objects based on the 'age' property in ascending order

cloneArray.sort((a, b) => a.age - b.age);

// Log the sorted array to the console

console.log(cloneArray);


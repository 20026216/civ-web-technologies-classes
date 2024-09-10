// Put your challenge code here

// challenge 2
// let length = 5.342342
// let width = 10.1341234
//
// let area = length * width
//
// area = Math.round(area)
//
// console.log(area)


// challenge 3

let min = 1
let max = 100


let random5 = [];

for (let i = 0; i <= 9; i++) {
    random5.push(Math.floor(Math.random() * (max - min)) + min)
}

let sumofrandom = 0;

for (let i = 0; i < random5.length; i++) {
    sumofrandom += random5[i];
}

const average = sumofrandom / random5.length;

let Maxnumber = Math.max(...random5);
const Squareroot = Math.sqrt(average);

var maxfactorial = Maxnumber;

while (Maxnumber>1){
    Maxnumber--;
    maxfactorial = maxfactorial * Maxnumber;
}

console.log("Maxfactorial =" + maxfactorial);

console.log("Squareroot =" + Squareroot);

console.log("Max Number =" + Maxnumber);
console.log("average =" + average);

console.log("sum of random numbers=" + sumofrandom);

console.log("all numbers="+random5)
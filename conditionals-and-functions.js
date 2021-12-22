/*
 *  Conditionals, Functions, Scope and Loops.
 */

// Equals
let equals = 1 === 1;

// Greater than
let greaterThan = 5 > 1;

// Less than
let lessThan = 2 < 10;

// Greater than or = to
let greaterThanEq = 5 >= 5;

// Less than or = to
let LessThanEq = 4 <= 9;

// Not Equals
let notEquals = 5 !== 2;


let storeA = 4.40;
let storeB = 3.40;
let storeAIsLower = storeA < storeB;
// An if block is a control statement. Meaning: it allows us to control the flow through our program
// Functions are ways for us to encapsulate our code so that it is reusable
/*
function compareStorePrices (storeA, storeB) {
    if (storeAIsLower) {
        console.log("Store A has a lower price.")
    } else if (storeB < storeA) {
        console.log("Store B has a lower price.")
    } else {
        console.log("Their prices are equal.")
    }
}

compareStorePrices(10, 5)
compareStorePrices(7, 10)

function squareNum (number) {
    return number * number;
}

let squareNumber= squareNum(4);
console.log(squareNumber);
*/

// Scope is the idea that certain variables are only accesible within certain levels of your code - {}
// JS has 3 levels of scope 1. Global, 2. Function, 3. Block scope
/*
let x = 10;

function addNumber (n, m) {
    console.log(x);
    if (1===1) {
        let b = 8;
    }
    return n + m;
}
*/

// Arrays
// Arrays are a type of data structure - which organize pieces of data
// Arrays are a special type of object
// JS sets keys for us called indexes

//keys          0  1  2  3  4  5  6
let ourArray = [1, 2, 3, 4, 5, 6, 7];

// Loops are a structure like an if block that repeat a section of code until a condition is met
// FOR LOOP:  for(counter; comparison; incrementer)
/*

let arrLen = ourArray.length;
for(let i = 0; i<arrLen; i++){
    //console.log("i is equal to: " + i);
    console.log(ourArray[i]);
    for(let j = 0; j<10; j++) {
        console.log('J is equal to: ' + j);
    }
}
*/

//While loop runs until a conditional is false
let x = 0;
while (x < 10) {
    console.log('Ran');
    x = x + 1;
}

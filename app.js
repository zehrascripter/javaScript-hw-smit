//======================================= Question no 1: 
// Show alert and write your name in alert

alert("Hareem Zehra");

//======================================= Question no 2: 
// First you need to store your name in a variable . Then show your name in alert and console.log also 
// In alert you show your name and message with concatenation
// And print your name and message with ternary operators.

// Step 1: Store your name in a variable
let myName = "Hareem Zehra";

// Step 2: Show name in alert with a message using concatenation
alert("Hello, my name is " + myName + "!");
console.log(myName);


// Step 3: Print name and message using ternary operator
let message = (myName === "Hareem Zehra") ? "Welcome, John!" : "Name is not recognized";
console.log(message);

//======================================= Question no 3:
// Question no 3: 
// Write a variable which name is a and the value of this variable is 4
// And write second variable which is b and the value of second variable which is 2
// And make third variable which is result and the value of this (a++ + --b  - --a + b++ + a + b)
// And show the answer of this equation in console
// Declare the variables a and b  
let a = 4;
let b = 2;

// Declare the result variable and calculate the expression
let result = (a++ + --b - --a + b++ + a + b);
//             4 + 1   -  4  +  1  + 4 + 2 = 8


// Show the result in the console
console.log(result);


//======================================= Question no 4:
// Question no 5 
// Write any if else statement 
// It's totally up to you 
// How you can write functionality .and what you want to write 
//you just write one example in  if , else and else if


let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature > 20) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's cold outside.");
}


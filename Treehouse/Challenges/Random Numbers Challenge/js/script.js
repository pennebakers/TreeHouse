//collect a user's input 
const input = prompt("Enter a positive whole number");

//convert that input from a string to a number. This will be the highest possible random number in the range of numbers starting from 1.
const highNumber = parseInt(input);

//Use math.random() method to create a random number using the number provided by the user.
const randomNumber = Math.floor(Math.random() * highNumber) + 1 ;

//log to console
console.log(`${randomNumber} is a random number between 1 and ${highNumber}.`);
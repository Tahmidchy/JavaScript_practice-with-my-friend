/*
TODO: Problem-28: Create a function that takes a number n and returns double the number if n is positive. And triple it if n is negative.
*/

// Solution:

function processNumber(n) {
    // Check if the input is a valid number
    if (typeof n !== 'number') {
        return "Invalid input. Please provide a number.";
    }
    // If n is positive, return double the number
    if (n > 0) {
        return n * 2;
    } 
    // If n is negative, return triple the number
    else if (n < 0) {
        return n * 3;
    } else {
        // If n is zero, return 0
        return 0;
    }
};
    
// Example usage:
let num1 = 5;
let num2 = -3;
let num3 = 0;
console.log(processNumber(num1)); // Output: 10
console.log(processNumber(num2)); // Output: -9
console.log(processNumber(num3)); // Output: 0
// Explanation:
// The function processNumber takes a number n as input and returns double the number if n is positive, triple it if n is negative, and 0 if n is zero. The example usage demonstrates how to call the function with different numbers and print the results.
// The function also checks if the input is a valid number and returns an error message if it is not.
/*
TODO: Problem-18: You write a function that takes a number and then returns true if that number is evenly divisible by 13, otherwise it returns false.
*/

// Solution:
function isDivisibleBy13(number) {
    // Check if the number is evenly divisible by 13
    if (number % 13 === 0) {
        return true; // Return true if the number is divisible by 13
    } else {
        return false; // Return false if the number is not divisible by 13
    }
};
// Test the function
console.log(isDivisibleBy13(26));  // Expected output: true
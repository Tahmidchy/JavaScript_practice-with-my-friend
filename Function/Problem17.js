/*
TODO: Problem-17: Write a function that, based on a condition, returns true if the number is greater than 10. Otherwise, it returns false.
*/

// Solution:
function isGreaterThanTen(number) {
    // Check if the number is greater than 10
    if (number > 10) {
        return true; // Return true if the condition is met
    } else {
        return false; // Return false if the condition is not met
    }
};
// Test the function
const testNumber1 = 15; // Example: 15 is greater than 10
const testNumber2 = 8; // Example: 8 is not greater than 10
console.log(`Is ${testNumber2} greater than 10? ${isGreaterThanTen(testNumber2)}`); // Output: false
console.log(`Is ${testNumber1} greater than 10? ${isGreaterThanTen(testNumber1)}`); // Output: true
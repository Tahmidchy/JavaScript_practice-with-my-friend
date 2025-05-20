/*
TODO: Problem-23: Write a function that checks whether a number is negative or not, if it is a negative number, then multiply that negative number by -1 and return the result.
*/

// Solution: 
function checkNegative(num) {
    // Check if the number is negative
    if (num < 0) {
        // If negative, multiply by -1 to make it positive
        return num * -1; // Return the positive value
    } else {
        // If not negative, return the number as is
        return num; // Return the original number
    }
};
// Test the function with some sample values
const number1 = -10;
const number2 = 20;
const number3 = -30;
console.log(checkNegative(number1)); // Expected output: 10
console.log(checkNegative(number2)); // Expected output: 20
console.log(checkNegative(number3)); // Expected output: 30
// Test with zero
const number4 = 0;
console.log(checkNegative(number4)); // Expected output: 0
// Test with large negative number
const number5 = -1000000;
console.log(checkNegative(number5)); // Expected output: 1000000
// Test with large positive number
const number6 = 1000000;
console.log(checkNegative(number6)); // Expected output: 1000000
// Test with small negative number
const number7 = -5;
console.log(checkNegative(number7)); // Expected output: 5
// Test with small positive number
const number8 = 5;
console.log(checkNegative(number8)); // Expected output: 5
// Test with negative decimal number
const number9 = -3.14;
console.log(checkNegative(number9)); // Expected output: 3.14
// Test with positive decimal number
const number10 = 3.14;
console.log(checkNegative(number10)); // Expected output: 3.14
// Test with negative number close to zero
const number11 = -0.1;
console.log(checkNegative(number11)); // Expected output: 0.1
// Test with positive number close to zero
const number12 = 0.1;
console.log(checkNegative(number12)); // Expected output: 0.1
// Test with negative number in scientific notation
const number13 = -1e3; // -1000
console.log(checkNegative(number13)); // Expected output: 1000
// Test with positive number in scientific notation
const number14 = 1e3; // 1000
console.log(checkNegative(number14)); // Expected output: 1000
// Test with negative number in string format
const number15 = "-10"; // String representation of -10
console.log(checkNegative(Number(number15))); // Expected output: 10
/*
TODO: Problem-22: You write a function that returns the average of 3 numbers.
*/

// Solution:
function calculateAverage(num1, num2, num3) {
    // Calculate the average of the three numbers
    const sum = num1 + num2 + num3; // Sum of the numbers
    const average = sum / 3; // Average calculation
    return average; // Return the average
};
// Test the function with some sample values
const number1 = 10;
const number2 = 20;
const number3 = 30;
console.log(calculateAverage(number1, number2, number3)); // Expected output: 20
// Test with negative numbers
const number4 = -10;
const number5 = -20;
const number6 = -30;
console.log(calculateAverage(number4, number5, number6)); // Expected output: -20
// Test with decimal numbers
const number7 = 10.5;
const number8 = 20.5;
const number9 = 30.5;
console.log(calculateAverage(number7, number8, number9)); // Expected output: 20.5
// Test with zero
const number10 = 0;
const number11 = 0;
const number12 = 0;
console.log(calculateAverage(number10, number11, number12)); // Expected output: 0
// Test with large numbers
const number13 = 1000000;
const number14 = 2000000;
const number15 = 3000000;
console.log(calculateAverage(number13, number14, number15)); // Expected output: 2000000
// Test with small numbers
const number16 = 0.0001;

const number17 = 0.0002;
const number18 = 0.0003;
console.log(calculateAverage(number16, number17, number18)); // Expected output: 0.0002
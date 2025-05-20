/*
TODO:Problem-13: Write a function that calculates the average of four numbers.
*/

// Solution: 
function calculateAverage(num1, num2, num3, num4) {
    const sum = num1 + num2 + num3 + num4;
    const average = sum / 4;
    return average;
};
// Example usage:
const number1 = 10;
const number2 = 20;
const number3 = 30;
const number4 = 40;
const average = calculateAverage(number1, number2, number3, number4);
console.log(`The average of ${number1}, ${number2}, ${number3}, and ${number4} is ${average}.`);

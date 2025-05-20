/*
TODO: Problem-26: You create a function that, given a number, checks whether the number is greater than 10. If it is greater, it divides it by 10, and if it is less than 10, it multiplies it by 10. Then it returns that number.
*/

// Solution: 

function checkNumber(num) {
    if (typeof num !== 'number') {
        return "Invalid input. Please provide a number.";
    }
    if (num > 10) {
        return num / 10;
    } else {
        return num * 10;
    }
};
// Example usage:
let num1 = 15;
let num2 = 5;
console.log(checkNumber(num1)); // Output: 1.5
console.log(checkNumber(num2)); // Output: 50
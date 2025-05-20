/*
TODO: Problem-30: You write a function that takes two numbers and returns their product. However, if the product is greater than 100, it will only return half of it.
*/

// Solution: 
function calculateProduct(num1,num2) {
    // Check if the inputs are valid numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return "Invalid input. Please provide two numbers.";
    }
    // Calculate the product of the two numbers
    let product = num1 * num2;
    // If the product is greater than 100, return half of it
    if (product > 100) {
        return product / 2;
    } else {
        return product;
    }
};
// Example usage:
let number1 = 150;
let number2 = 10;
console.log(calculateProduct(number1, number2)); // Output: 750
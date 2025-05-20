/*
TODO: Problem-9: Your friend asked you to build a calculator using functions. A calculator that would not only add or subtract numbers, but also multiply and display them.
*/

// Solution :

function calculator(num1, num2, operation) {
    // Perform the specified operation
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Cannot divide by zero';
            }
        default:
            return 'Invalid operation';
    }
};
// Example usage
const num1 = 20;
const num2 = 15;
const operation = 'multiply'; // Change this to 'add', 'subtract', or 'multiply' as needed
// Call the calculator function with the numbers and operation
const result = calculator(num1, num2, operation);
console.log(`The result of the ${operation} operation is: ${result}`); // Output: The result of the multiply operation is: 300

/*
TODO: Problem-21: Write a function that takes a variable as a string and returns its length.
*/

// Solution:
function getLength(varStr) {
    // Check if the input is a string
    if (typeof varStr === 'string') {
        return varStr.length; // Return the length of the string
    } else {
        return "Input is not a string"; // Return an error message if not a string
    }
};
// Test the function with some sample values
const str1 = "Hello, World!";
const str2 = "JavaScript";
console.log(getLength(str1)); // Expected output: 13
console.log(getLength(str2)); // Expected output: 10
// Test with a non-string input
const num = 12345;
console.log(getLength(num)); // Expected output: Input is not a string
// Test with an empty string
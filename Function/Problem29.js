/*
TODO: Problem-29: You will write a function that takes two names, a first name and a second name. If the length of the first name is greater than the length of the second name, it will return true, otherwise it will return false.
*/

// Solution: 

function compareNameLengths(firstName, secondName) {
    // Check if the inputs are valid strings
    if (typeof firstName !== 'string' || typeof secondName !== 'string') {
        return "Invalid input. Please provide two names as strings.";
    }
    // Compare the lengths of the two names
    if (firstName.length > secondName.length) {
        return true;
    } else {
        return false;
    }
};
// Example usage:
let name1 = "Alexander";
let name2 = "John";
console.log(compareNameLengths(name1, name2)); // Output: true
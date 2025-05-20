/*
TODO: Problem-25: Suppose you need to create a function that, when passed a name, returns the first letter of that name. Suppose, if given "Raju", it returns "R".
*/

// Solution: 
function getFirstLetter(name) {
    if (typeof name !== 'string' || name.length === 0) {
        return "Invalid input. Please provide a non-empty string.";
    }
    return name.charAt(0);
};
// Example usage:
let name1 = "Raju";
let name2 = "John";
console.log(getFirstLetter(name1)); // Output: R
console.log(getFirstLetter(name2)); // Output: J

// The function getFirstLetter takes a name as input and checks if it is a non-empty string. If the input is valid, it returns the first letter of the name using the charAt method. If the input is invalid, it returns an error message. The example usage demonstrates how to call the function with different names and print the results.

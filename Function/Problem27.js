/*
TODO: Problem-27: Create a function that takes an array and adds the first and second elements of the array together and returns the sum.
*/

// Solution: 

function addFirstTwoElements(arr){
    // Check if the input is a valid array and has at least two elements
    if (!Array.isArray(arr) || arr.length < 2) {
        return "Invalid input. Please provide an array with at least two elements.";
    }
    // Check if the first two elements are numbers
    // If not, return an error message
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "Invalid input. The first two elements must be numbers.";
    }
    return arr[0] + arr[1];
};
// Example usage:
let arr1 = [5, 10, 15];
let arr2 = [1, 2, 3, 4];

console.log(addFirstTwoElements(arr1)); // Output: 15
console.log(addFirstTwoElements(arr2)); // Output: 3
// Explanation:
// The function addFirstTwoElements takes an array as input and checks if it is a valid array with at least two elements. If the first two elements are numbers, it returns their sum. Otherwise, it returns an error message.
// The example usage demonstrates how to call the function with different arrays and print the results.
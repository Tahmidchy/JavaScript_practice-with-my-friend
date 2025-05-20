/*
TODO: Problem-32: Write a function that returns the smaller of the first two elements of an array. For example, if the array is passed [20,45,78], the function will return 20.
*/

// Solution:

function findSmallerOfFirstTwo(arr) {
    // Check if the array has at least two elements
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }
    // Check if the first two elements are numbers
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        return "The first two elements must be numbers.";
    }
    // Return the smaller of the first two elements
    return Math.min(arr[0], arr[1]);
};
// Example usage:
let numbersArray = [45, 30, 78];
console.log(findSmallerOfFirstTwo(numbersArray)); // Output: 30
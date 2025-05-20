/*
TODO: Problem-24: You are given an array, it will check whether the number of elements in it is even or odd and return whether the elements are even or odd. Now solve this problem using the function.
*/

// Solution:
function checkArray(arr) {
    let count = arr.length;
    if (count % 2 === 0) {
        return "The number of elements in the array is even.";
    } else {
        return "The number of elements in the array is odd.";
    }
};
// Example usage:
let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];
console.log(checkArray(arr1)); // Output: The number of elements in the array is even.
console.log(checkArray(arr2)); // Output: The number of elements in the array is odd.
// The function checkArray takes an array as input and checks the number of elements in it. If the number of elements is even, it returns a message indicating that the number of elements is even. If the number of elements is odd, it returns a message indicating that the number of elements is odd. The example usage demonstrates how to call the function with different arrays and print the results.
// The function checkArray takes an array as input and checks the number of elements in it. If the number of elements is even, it returns a message indicating that the number of elements is even. If the number of elements is odd, it returns a message indicating that the number of elements is odd. The example usage demonstrates how to call the function with different arrays and print the results.
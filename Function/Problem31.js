/*
TODO: Problem-31: You write a function where you have some numbers [5,15,8,7] now you will find the sum of the odd numbers and return it.
*/
// Solution:

function sumOfOddNumbers(numbers) {
    let sum = 0;
    // Check the odd numbers in the array
    for (const number of numbers) {
        if (number % 2 !== 0) {
            sum +=number;
        }
    }
    return sum;
};
// Example usage:
let numbersArray = [5, 15, 8, 7];
console.log(sumOfOddNumbers(numbersArray)); // Output: 27
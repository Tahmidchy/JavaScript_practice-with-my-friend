/*
TODO: Problem-35: Write a function that takes a number and if it is less than 20, doubles the number, otherwise divides it by 20.
*/
// Solution: 

function CheckNumberUpper20(num) {
    if (num < 20) {
        return num * 2;
    } else {
        return num / 20;
    }
};
// Test the function with a number less than 20
console.log(CheckNumberUpper20(10)); // Output: 20
// Test the function with a number greater than or equal to 20
console.log(CheckNumberUpper20(25)); // Output: 1.25
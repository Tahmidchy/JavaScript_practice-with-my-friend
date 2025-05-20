/*
TODO: Problem-37: Write a function that takes an array and returns the product of the numbers in the array that are divisible by 3.
*/
//Solution: 

function productOfDivisibleByThree(arr) {
    return arr
    .filter(num => num % 3 === 0) //filter numbers divided by three
    .reduce((product,num) => product * num,1);
};
//Test the function
const numbers = [1,3,6,9,12,15];
console.log(productOfDivisibleByThree(numbers)); // Output: 5832
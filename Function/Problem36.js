/*
TODO: Problem-36: 
*/

// Solution: 

function sumOfNegatives(arr){
    return arr.filter(num => num < 0).reduce((sum,num)=> sum + num, 0);
}
const numbers = [-1,-2,-3,-4,-5];
console.log(sumOfNegatives(numbers)); // Output: -15
// Time complexity: O(n) where n is the number of elements in the array. The filter
// method creates a new array with all elements that pass the test implemented by the provided function. Th

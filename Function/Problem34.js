/*
TODO: Problem-34:  You have an array like [2, 4, 5, 7, 8, 32,45]. Now create a function that will only return the sum of the numbers in the array that are divisible by 4.
*/

// Solution: 

function sumDivisibleByFour(numbers) {
    let sum = 0;
    for(let number of numbers) {
        if (number % 4 === 0) {
            sum += number;
    } else{
        continue;
    }
}
return sum;
};
// Test the function with an array of numbers
console.log(sumDivisibleByFour([2, 4, 5, 7,8,32,45]));
// Output: 40
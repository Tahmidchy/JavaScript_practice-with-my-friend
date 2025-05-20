/*
TODO: Problem-15: Write a function and give it your birth year as a parameter. It will then tell you which year will be your 100th birth year.
*/

// Solution:
function calculate100thBirthYear(birthYear) {
    const hundredthBirthYear = birthYear + 100; // calculate the 100th birth year
    return hundredthBirthYear; // return the result
};
// Example usage:
const birthYear = 1996; // example birth year
const hundredthYear = calculate100thBirthYear(birthYear); // calculate the 100th birth year
console.log(`Your 100th birth year will be ${hundredthYear}.`); // output the  result 
// Output: Your 100th birth year will be 2096.
// Note: You can change the birth year in the example usage to test with different values.
// The function takes the birth year as input and adds 100 to it to calculate the 100th birth year.
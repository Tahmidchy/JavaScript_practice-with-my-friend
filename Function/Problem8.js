/*
TODO: Problem-8: Write a function to find the sum of the ages of the father and son.
*/

// Solution :

function sumofAges(fatherAge, sonAge) {
  
    
    // Calculate the sum of ages
    const sum = fatherAge + sonAge;
    
    // Return the result
    return sum;
};
// Example usage
const fatherAge = 40;
const sonAge = 10;
const result = sumofAges(fatherAge, sonAge);
console.log(`The sum of the ages of the father and son is: ${result}`); // Output: The sum of the ages of the father and son is: 50
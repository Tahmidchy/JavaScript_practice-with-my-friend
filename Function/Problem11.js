/*
TODO: Problem-11: Creating a function that will allow you to find out your age, meaning subtracting the current year from your birth year will tell you how old you are.
*/

// Solution :

function calculateAge(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Calculate the age
    const age = currentYear - birthYear;

    // Return the result
    return age;
}
// Test the function
const birthYear = 1996; // Replace with your actual birth year
const age = calculateAge(birthYear);
console.log(`You are ${age} years old.`); // Output: You are 27 years old.
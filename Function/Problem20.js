/*
TODO: Problem-20:Write a function that returns eligible for voting if the age is over 18, and not eligible if not.
*/

// Solution:
function checkVotingEligibility(age) {
    // Check if the age is greater than or equal to 18
    if (age >= 18) {
        return "Eligible for voting"; // Return eligible message
    } else {
        return "Not eligible for voting"; // Return not eligible message
    }
};
// Test the function with some sample values
const age1 = 20;
const age2 = 16;
console.log(checkVotingEligibility(age1)); // Expected output: Eligible for voting
console.log(checkVotingEligibility(age2)); // Expected output: Not eligible for voting
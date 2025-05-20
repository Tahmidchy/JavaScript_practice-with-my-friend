/*
TODO: Problem-12: You have gone to a shop where each gourd costs 35 taka. Now write a function that takes as a parameter the amount you are willing to pay for the gourd and tells you how many gourds you can buy divided by the amount you are willing to pay.
*/

// Solution: 
function gourdCalculator(amount) {
    const gourdPrice = 35; // price of one gourd
    const gourds = Math.floor(amount / gourdPrice); // calculate the number of gourds
    const remainingAmount = amount % gourdPrice; // calculate the remaining amount

    return {
        gourds: gourds,
        remainingAmount: remainingAmount
    };
};
// Example usage:
const amount = 100; // amount you are willing to pay
const result = gourdCalculator(amount);
console.log(`You can buy ${result.gourds} gourds and you will have ${result.remainingAmount} taka left.`);
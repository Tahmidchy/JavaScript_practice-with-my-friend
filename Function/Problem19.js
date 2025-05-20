/*
TODO: Problem-19: You went to a restaurant, where you had rice, curry and drinks. Now write a function that adds up the prices of all the items you ordered and returns the total bill.
*/

//  Solution: 

function calculateTotalBill(ricePrice, curryPrice, drinksPrice) {
    // Calculate the total bill by adding the prices of all items
    const totalBill = ricePrice + curryPrice + drinksPrice;
    return totalBill; // Return the total bill
};
// Test the function with some sample values
const ricePrice = 10;
const curryPrice = 15;
const drinksPrice = 5;
console.log(calculateTotalBill(ricePrice, curryPrice, drinksPrice)); // Output: 30
// You can change the values of ricePrice, curryPrice, and drinksPrice to test with different prices
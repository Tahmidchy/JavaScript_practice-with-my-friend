/*
TODO: Problem-14: A shopkeeper earns 250 taka on each item. Now write a function where if you give the purchase price of an item, it will give the selling price.
*/

// Solution:
function calculateSellingPrice(purchasePrice) {
    const profitPerItem = 250; // profit earned on each item
    const sellingPrice = purchasePrice + profitPerItem; // selling price calculation
    return sellingPrice; // return the selling price
};
// Example usage:
const purchasePrice = 1000; // example purchase price
const sellingPrice = calculateSellingPrice(purchasePrice); // calculate selling price
console.log(`The selling price of the item with a purchase price of ${purchasePrice} is ${sellingPrice}.`); // output the result
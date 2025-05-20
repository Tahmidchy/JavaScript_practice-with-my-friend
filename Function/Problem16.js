/*
TODO: Problem-16: Write a function that takes as a parameter the number of hours you use your mobile phone. Then, that function will calculate how many hours you use your mobile phone in a month. Assume that 1 month is equal to 30 days.
*/

// Solution: 
function calculateMonthlyUsage(hoursPerDay) {
    // Calculate the number of hours in a month
    const hoursInMonth = hoursPerDay * 30; // 30 days in a month
    return hoursInMonth;
};
// Example usage:
const dailyUsage = 2 // Example: 2 hours per day
const monthlyUsage = calculateMonthlyUsage(dailyUsage);
console.log(`You use your mobile phone for ${monthlyUsage} hours in a month.`);
/*
TODO: Problem-33: You want to hide your age. Suppose if your age is less than 18 you will return 18. If it is more than 45 you will return 45 and if there is any number between these two numbers then write a function that will directly return that number.
*/

// Solution: 

function hideAge(age) {
    // Check if the input is a valid number 
    if (typeof age !== 'number') {
        return "Invalid input. Please provide a number.";
    }
    
    if(age < 18) {
        return 18;
    } else if (age > 45) {
        return 45;
    } else {
        return age;
    }
};
// Example usage:
let userAge = 30;
console.log(hideAge(userAge)); // Output: 25
/*
TODO: Problem-10: Write a function that will give you the sum of your 3 subject test marks.
*/

// Solution :

function sunOfMarks(subject1,subject2,subject3) {
    // Calculate the sum of marks
    const sum = subject1 + subject2 + subject3;

    // Return the result
    return sum;
};
// Test the function
const subject1 = 85;
const subject2 = 90;
const subject3 = 78;
const result = sunOfMarks(subject1, subject2, subject3);
console.log(`The sum of the marks in the 3 subjects is: ${result}`); // Output: The sum of the marks in the 3 subjects is: 253
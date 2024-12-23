// Javascript Math Method

// javascript PI method

const  PI = Math.PI
console.log(PI) // 3.141592653589793

// javascript Round to Integer Method

/* There are 4 common methods to round a number to an integer.
* The Math.round() Method:
এটা কাছাকাছি Integer Value কে return করে।
Syntax: round(x)*/

const number1 = Math.round(4.4);
console.log(number1); //

const number2 = Math.round(4.5);
console.log(number2); //

const number3 = Math.round(4.6);
console.log(number3); //

const number4 = Math.round(-4.6);
console.log(number4);

// *The Math.trunc() Method:
//এটা Integer Value কে return করে।
//Syntax: trunc(x)

const number5 = Math.trunc(4.6);
console.log(number5); // 4

const number6 = Math.trunc(-4.2);
console.log(number6); // 4

//* The Math.sign() Method:
//এটাতে পাস করা Value Positive হলে 1, negative হলে -1 এবং Null হলে 0 return করে।
//Syntax: sign(x)

const number7 = Math.sign(4);
console.log(number7); // 1

const number8 = Math.sign(-5);
console.log(number8); // -1

const number9 = Math.sign();
console.log(number9); // 0

//* The Math.pow() Method:
//Syntax: pow(x,y)
//এটার মাধ্যমে আমরা কোন Value এর Power নির্ণেয় করতে পারি। এখানে x হচ্ছে value আর y হচ্ছে Value এর power ।

const number10 = Math.pow(4,2);
console.log(number10); // 16

//* The Math.sqrt() Method:
//Syntax: sqrt(x)
//এটার মাধ্যমে আমরা কোন Value এর Square Root নির্ণেয় করতে পারি।

const number11 = Math.sqrt(64);
console.log(number11); // 8

//* The Math.abs() Method:
//Syntax: abs(x)
//এটার মাধ্যমে আমরা কোন Value এর Positive Absolute মান নির্ণেয় করতে পারি।

const number12 = Math.abs(-64.236);
console.log(number12); // 64.236

//* The Math.min() Method:
//Syntax: min(x,...)
//এটার মাধ্যমে আমরা কোন list of Values থেকে সর্বনিম্ন মান নির্ণেয় করতে পারি।

const number13 = Math.min(0,150,30,20,-8,-200);
console.log(number13); // -200

//* The Math.max() Method:
//Syntax: max(x,....)
//এটার মাধ্যমে আমরা কোন list of Values থেকে সর্বোচ্চ মান নির্ণেয় করতে পারি।

const number14 = Math.max(0,150,30,20,10,-5,-100);
console.log(number14); // 150

//* The Math.random() Method:
//Syntax: random()
//এটার মাধ্যমে আমরা 0 এবং 1 এর মধ্যে random value নির্ণেয় করতে পারি।

const number15 = Math.random();
console.log(number15); // 0.12345678901234567

// JavaScript Random Integers
//আমরা যদি নির্দিষ্ট একটা Range এর মধ্যে Integer Random Number পেতে চাই তাহলে Math.random() এর result কে সর্বোচ্চ সংখ্যা দ্বারা গুণ করতে হবে এবং সম্পুর্ণ Result কে Math.floor() এর মধ্যে দিইয়ে পাস করে দিতে হবে।
// Returns a random integer from 0 to 9:

const random_Number1 = Math.floor(Math.random() *10);
console.log(random_Number1); // 0,1,2,3,4,5,6

// Returns a random integer from 0 to 10:

const random_Number2 = Math.floor(Math.random() * 11);
console.log(random_Number2); // 0,1,2,3,4,5,

// Returns a random integer from 0 to 100:

const random_Number3 = Math.floor(Math.random() *101);
console.log(random_Number3); // 0,1,2,3,4,5,

// Returns a random integer from 0 to 10:

const random_Number4 = Math.floor(Math.random() *10)+1;
console.log(random_Number4); // 1,2,3,4,5,6,

// Returns a random integer from 0 to 100:

const random_Number5 = Math.floor(Math.random()*100)+1;
console.log(random_Number5); // 1,2,3,4,5,6,

// *A Proper Random Function
//এছাড়া আমরা চাইলে একটা Random Function ব্যবহার করতে পারি।
//এই Javascript Function একটি random Number return করে between min(included) এবং max(excluded) ।

function getRndInteger(min,max){
  return Math.floor(Math.random() * (max - min)) + min;
}
const result = getRndInteger(20,30);
console.log(result); // 20,21,22,23,24,25,26,

//এই Javascript Function একটি random Number return করে between min(included) এবং max(included) ।

function getRndInteger1(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const result1 = getRndInteger1(50,100);
console.log(result1); // 50,51,52,53,54,55,56
//* JavaScript Map: একটি Map key-value pairs data hold করে থাকে যেখানে keys যেকোন datatype হতে পারে। এছাড়া Map, Keys এর Orginal insertion order মনে রাখে।
//Map এর Method গুলো হলঃ
/**
 *  new Map()
 *  set()
 *  get()
 *  delete()
 *  has()
 *  forEach()
 *  entries()
 *  clear()
 */

//* Maps property:  size

//* The new Map() Method
// আমরা new Map() constructor এর মধ্যে একটা Array Pass করে Map তৈরি করতে পারি।

// Create a map

const fruits1 = new Map([
  ["apple", 500],
  ["banana", 300],
  ["orange", 200],
]);
console.log(fruits1); // Map(3) { 'apple' => 500, '

//* The set() Method:
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে Elements add করতে পারি।

// Create a Map
    const fruits2 = new Map();

    // Set Map Values
    fruits2.set("apples", 500);
    fruits2.set("bananas", 300);
    fruits2.set("oranges", 200);

    console.log(fruits2);

    //এছাড়া এই Method existing Map Values কে change করতে পারে।
    fruits2.set('apples', 200)
    console.log(fruits2);


    //* The get() Method
// এই Method এর মাধ্যমে আমরা Map এর ভিতর থেকে key এর মাধ্যমে Value কে Access করতে পারি।

// create a Map

const fruits3 = new Map();
//set values
fruits3.set("apple", 600);
fruits3.set("banana", 400);
fruits3.set("orange", 700);

console.log(fruits3.get("banana"));

//* The delete() Method
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে থাকা কোন Element remove করে দিতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে।

//create Map

const fruits4 = new Map();

// set values
fruits4.set("apple", 500);
fruits4.set("banana", 300);
fruits4.set("orange", 200);
console.log(fruits4);
// delete a value
fruits4.delete("banana");
console.log(fruits4);

//* The has() Method
// এই Method এর মাধ্যমে আমরা Map এর মধ্যে Element টি exixts করে কিনা দেখতে পারি। এই Method return value হিসেবে Boolean true/false দিয়ে থাকে।

// create a Map

const fruits5 = new Map();

//set values
fruits5.set("apple", 500);
fruits5.set("banana", 300);
fruits5.set("orange", 200);
console.log(fruits5.has("apple"));
console.log(fruits5.has("Lemon"));

//* The forEach() Method
// forEach() Method প্রতিটি Map Element এর জন্য key/value pair এর একটি Function call করে থাকে।

// create Map
const fruits6 = new Map();
//set values
fruits6.set("apples",500);
fruits6.set("banana",300);
fruits6.set("orange",200);
//list all entries
let text1 = "";
fruits6.forEach(function(value,key){
  text1 += key + " = " + value + ", ";
});
console.log(text1);

//* The Clear() Method
//এই Method এর মাধ্যমে আমরা Map এর সকল Element কে একসাথে Remove করে দিতে পারি।

const fruits7 = new Map([
  ["Mango",800],
  ["Banana",600],
  ["Apple",700],
  ["Orange",500],
  ["WaterMellon",500],
]);
console.log(fruits7);
//clear all elements
fruits7.clear();
console.log(" After All element are clear: " + fruits7);

//* The size Property
// এই Property এর মাধ্যমে আমরা Map এর মধ্যে থাকা Element এর সংখ্যা জানতে পারি।

const fruits8 = new Map([
  ['Watermelon',500],
  ['Pineapple',500],
  ['Grapes',500],
  ['Banana',500],
  ['Apple',500],
]);
const results = fruits8.size;
console.log(results);

//* Javascript Object vs Map
//? Object
/**
 * Directly iterable করা যায় না।
 * এটাতে কোন size property নেই।
 * keys অবশ্যই String (বা Symbol) হতে হবে।
 * keys গুলো ভালভাবে সাজানো থাকে না।
 * default keys থাকে।
 */
//? Map
/**
 * Directly iterable করা যায়।
 * এটাতে size property আছে।
 * keys যেকোন datatype হতে পারে।
 * keys গুলো ভালভাবে insertion অনুসারে সাজানো থাকে।
 * default keys থাকে না।
 */
//* JavaScript Modules
// Javascript Module আমাদের code কে আলাদা file এ বিভক্ত করতে সাহায্য করে। এতে করে আমরা code-base সহজে maintain করতে পারি। 'import' statement এর মাধ্যমে আমরা external files কে imported করতে পারি। এক্ষেত্রে <script> tag এর মধ্যে type="module" লিখে দিতে হবে।

{
    //<script type="module">
    //import message from "./message.js";
    // </script>
}

//* Export
// Module ব্যবহার করে আমরা function অথবা variable গুলোকে external file এ stored করে রাখতে পারি। সেই file এর function অথবা variable গুলোকে অন্য file এ ব্যবহার করতে চাইলে মূল file থেকে অবশ্যই সেগুলোকে export করতে হবে। Javascript Module এ আমরা দুইভাবে File Export করতে পারি। Named Exports এবং Default Exports.

//? Named Exports
//Name export এর ক্ষেত্রে আমরা নাম ধরে ধরে অর্থাৎ প্রতিটি Variable এবং Function কে আলাদা আলাদা ভাবে export করতে পারি। এক্ষেত্রে import করার সময় যেই মানে export করা হয়েছে সেই নামেই import করতে হবে। অন্যথায় এটা কাজ করবে না। Name Exports ও আমরা দুইটা way তে করতে পারি। In-Line Individually অথবা All at once at the bottom.

//* In-line Individually
//এক্ষেত্রে আমরা প্রতিটি variable বা function কে Individually in-line এ export করতে পারি।
//person.js file
{
    //export const name = "Shahid";
    //export const age = 30;
}

//* All at once at the bottom
// এক্ষেত্রে আমরা individually না করে সবগুলোকে একসাথে file এর শেষে export করতে পারি।
//person1.js file
{
    // const name = "Shahid";
    // const age = 30;

    // export {name, age};
}

//? Default Exports
//আমরা চাইলে কোন file কে default ভাবে ও export করতে পারি। এইক্ষেত্রে import করার সময় যেকোন নামে import করতে পারব। মনে রাখতে হবে একটা file এ মাত্র একটাই default export থাকতে পারবে।
//index.js file
{
    // const message = () => {
    //     const name = "Shahidul Islam";
    //     const age = 30;
    //     return name + ' is ' + age + 'years old.';
    // };

    // export default message;
}

//* Import
// Export করা function অথবা variable গুলোকে অন্য file এ ব্যবহার করতে চাইলে অবশ্যই আগে সেগুলোকে import করে নিতে হবে। Import ও আমরা দুইভাবে করতে পারি। Import from named exports এবং Import from default exports.

//? Import from named exports
//Named exports import করার সময় অবশ্যই Second Bracket({}) ব্যবহার করতে হবে। নিচে person.js file থেকে import করার নিয়মটা দেখানো হল। এক্ষেত্রে যেই নামে export করা হয়েছে সেই নামেই import করা হবে।
{
    //import { name, age } from "./person.js";
}

//? Import from default exports
// যেহেতু একটা file এ একটাই default export থাকে সেহেতু এটা import করার সময় Second Bracket({}) ব্যবহার করতে হবে না। এক্ষেত্রে ওই file কে আমরা যেকোন নামে import করতে পারি।
//Example: Same Name এ import.
{
    //import message from "./index.js";
}
//Example: Another Name এ import.
{
    //import myMessage from "./index.js";
}

//! Note: Module শুধুমাত্র HTTP(s) protocol এর সাথে কাজ করতে পারে। একটি web page এর file যদি // protocal দ্বারা opened করা হয় সেই ক্ষেত্রে import/export ব্যবহার করা যাবে না। 
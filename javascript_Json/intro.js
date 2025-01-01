//* JSON Data Format
//? JSON format ta specified করে 'Douglas Crockford'
// JSON এর পূর্ণ্রুপ হচ্ছে JavaScript Object Notation. এটা হচ্ছে একটা Text format যেটা ব্যবহার কয়ার হয় data store এবং transport করতে। এটা lightweight data-interchange format. কারণ javascript object কিন্তু অনেক বড় একটা Object যেটাকে store করা বা send করা সহজ কোন কাজ না। কিন্তু JSON হচ্ছে Javascript Object notation এ লেখা একটা plain text. যা সহজে computer to computer এ send করা যায়। এছাড়া text format data যেকোন programming language এ ব্যবহার করা যায়। তাই JSON language independent হয়ে থাকে।

//* Why Use JSON?
// JSON Format টি javascript object তৈরির জন্য Syntactically Code এর মতো। এই কারণে, একটি javascript প্রোগ্রাম সহজেই JSON Data javascript object এ convert করতে পারে। যেহেতু format টি শুধুমাত্র Text, তাই JSON Data সহজেই কম্পিউটারের মধ্যে পাঠানো যায় এবং যেকোনো Programming language এটা ব্যবহার করতে পারে। Javascript এ build-in function আছে যার মাধ্যমে আমরা সহজেই একটা JSON String কে Javascript Object এ convert করতে পারি। function টি হচ্ছে:
{
    JSON.parse();
}
//Same ভাবে আরেকটা build-in function আছে যার মাধ্যমে আমরা একটা javascript object কে খুব সহজে JSON String এ convert করতে পারি। function টি হচ্ছে:
{
    JSON.stringify();
}
// সুতরাং আমরা চাইলে খুব সহজেই server থেকে একটা Valid JSON received করতে পারি এবং এটাকে Javascript Object হিসাবে ব্যবহার করতে পারি। এছাড়া আমরা চাইলে Javascript object কে Valid JSON format এ convert করে server এ send করতে পারি খুব সহজেই। আমরা খুব সহজেই Javascript object নিয়ে কাজ করতে পারি কোনরুপ জটিল parsing এবং translations ছাড়া।

//* Storing Data
// JSON Text format হওয়ায় এটা খুব lightweight হয়ে থাকে। তাই এটাকে আমরা খুব সহজেই Store করতে পারি। Data Store করার সময় data একটা নির্দিষ্ট format এ Store করতে হয় যেখানেই Store করি না কেন text format ই হচ্ছে একটা legal format. যা সকল Programming Language support করে থাকে। JSON এর মাধ্যমেই আমরা JavaScript এর Object কে Text এ convert করে Store করতে পারি।

//* JSON Example:
//নিচের উদাহরণটা একটা JSON String এর যেটা defined করে Object এর তিনটা Properties কে। name, age এবং car । প্রত্যেক property এর একটা করে value আছে। আমরা JSON.parse() function এর মাধ্যমে এটাকে Javascript object এ convert করতে পারি এবং Object এর মত করে data গুলোকে access করতে পারি।
{
    '{"name":"John", "age":30, "car":null}'
}
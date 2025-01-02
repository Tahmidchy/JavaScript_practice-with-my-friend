//* JavaScript Hoisting
//Hoisting হল Javascript এর Default আচরণ যা declaration কে top এ নিয়ে যায়। Javascript এ declaration গুলো Hoisted হয়ে থাকে। Javascript এ, একটি variable ব্যবহার করার পরে declared করা যেতে পারে। যেমনঃ

{
  num = 5; // Assign number
  console.log(num);
  var num; // declare number
}

// এটা কিভাবে হচ্ছে সেটা বুঝতে হলে আমাদের hoisting কিভাবে হচ্ছে সেটা বুঝতে হবে। javascript এর একটা by default behavior হচ্ছে এই hosting যা সকল declarations কে top এ নিয়ে যায়। অর্থাৎ javascript code execute করার আগে প্রথমে এক পলকে সকল declaration গুলোকে top এ নিয়ে যায়। যার কারণে আমরা কোন error পায় না এবং আমাদের code কাজ করে।

//* The var Keyword:
// var keyword দিয়ে কোন variable declared করা হলে hoisting হওয়ার সময় যেটা হয়ে থাকে সেটা হল declaration টা top এ নিয়ে যায় এবং এর value undefined initialize করা হয়ে থাকে। অর্থাৎ memory তে একটা space তৈরি করা হয়ে থাকে variable টার জন্য। যার কারণে এটা কোন error প্রধান করে না।


//* The let Keyword:
// let keyword দ্বারা কোন variable declared করা হলে সেটা hoisted হয়ে top এ উঠে ঠিকই কিন্তু কোন value initialize করা হয় না। অর্থাৎ memory তে কোন space তৈরি করে না। যার জন্য এটা Reference error প্রদান করে থাকে।

/*
{
  userName1 = "John Smith";
  console.log(userName1);
  let userName1;
}
  */

//উপরে কোড গুলো কমেন্ট করে রাখা হয়েছে কারণ কোড টি এরর দিচ্ছে |

//* The const Keyword:
// const keyword দ্বারা কোন variable declared করার সাথে সাথে value initialize করে দিতে হয়। তাই এটাতে hoisting নিয়ে কোন problem হয় না। তবে আমরা যদি declaration আর initialize আলাদা করে লিখতে চাই সেইক্ষেত্রে এটা Syntax Error প্রধান করবে।
/*
{
  userName2 = "John Smith";
  //**here intialization const
  const userName2;
  console.log(userName2);
}
  */

// উপরে কোড টি কমেন্ট করে রাখা হয়েছে কারণ কোড টি syntax  এরর দিচ্ছিলো

//* JavaScript Initializations are Not Hoisted
//Javascript শুধু declaration গুলোকে hoisted করে থাকে। কিন্তু initialization গুলোকে hoisted করে না।
//? Example 1:

{
  var x = 5;
  var y = 10;

  console.log("the sum is: ", x+y);
}

//? Example 2:

{
  var a = 10;
  console.log("this sum is NaN :",a+b);
  var b = 20;
}

//* Declare Your Variables At the Top !
// Hoisting হল (অনেক ডেভেলপারদের কাছে) Javascript এর একটি unknown বা overlooked আচরণ। যদি একজন Developer Hoisting বুঝতে না পারে, তাহলে প্রোগ্রামে Bug (error) থাকতে পারে। Bug এড়াতে, সর্বদা শুরুতে সমস্ত variables declared করা ভাল। যেহেতু এইভাবে Javascript কোড ব্যাখ্যা করে, এটি সর্বদা একটি ভাল নিয়ম হবে।

//* Javascript Strict Mode:
//Javascript Strict Mode এ কোন variable declared না করে সেটা ব্যবহার করার যায় না।

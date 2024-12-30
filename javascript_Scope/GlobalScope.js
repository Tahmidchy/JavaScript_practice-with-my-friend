//* Global Scope
//function এর বাহিরে কোন variable declared করা হলে সেটা global variable হয়ে থাকে। আর global variable এর global Scope হয়ে থাকে। global variable কে javascript program এর সব জায়গা থেকে access করা যায়। Javascript এ variable declare করা সকল keyword এর global Scope আছে।

{
  let BusName = "VolVo";
  // code here use BusName.
  console.log(BusName);

  function MyFunction1(){
    //code here can also use BusName.
    console.log(BusName);
  }
  MyFunction1();
  //code here can also use BusName.
  console.log(BusName);
}

//* Automatically Global
// আমরা যদি declared করা হয়নি এমন একটি variable এর জন্য একটি value নির্ধারণ করি তবে এটি স্বয়ংক্রিয়ভাবে একটি Global variable হয়ে যাবে। এমনকি যদি একটি function এর ভিতরে মানটি assigned করা হয়।

{
  MyFunction2();
  //code here used
  console.log(BusName1);
  function MyFunction2(){
    BusName1 = "Hino";
  }
}

//* Global Variables in HTML
// Html বা browser এর মধ্যে global scope হচ্ছে window object.
// var keyword দিয়ে সংজ্ঞায়িত global variable window object এর অন্তর্গত.
// let keyword দিয়ে সংজ্ঞায়িত global variable window object এর অন্তর্গত নয়.
//! Note: দরকার না থাকলে global variable তৈরি করা উচিত না।

//* Strict Mode
//'Strict Mode' এ undeclared variable automatically global হয় না।

//* The Lifetime of JavaScript Variables
// Javascript variable এর lifetime শুরু হয় যখন এটা declear করা হয় তখন।
// Function বা Local variable delete হয়ে যায় তখন যখন function এর কাজ completed হয়ে যায়।
// Web Browser এ Global variable delete হয়ে যায় তখন, যখন browser window(tab) close হয়ে যায়।

//* Function Arguments
//Function arguments(parameters) function এর মধ্যে local Variable হিসেবে কাজ করে।

let number1 = 20;
console.log(number1);

function MyFunction3(){
  console.log(number1);
}
MyFunction3();
// we can use number here
console.log(number1);

if(true){
  console.log(number1);
}

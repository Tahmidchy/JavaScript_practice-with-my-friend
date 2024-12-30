//*JavaScript Scope Definitions
/*

এখানে Scope বলেতে বুঝাছে, আমরা যখন variable তৈরি করি তখন এই variable গুলো Access করার কিছু নির্দিষ্ট Boundary আছে যার বাহিরে আমরা variable গুলোকে আর access করতে পারি না।
Javascript এ three type Scope আছে। সেগুলো হলঃ
/*Block Scope
/* Function Scope
/* Global Scope

*/

//* Block Scope
// Javascript variable এ ES6(2015) এর আগে শুধুমাত্র দুইটা Scope ছিল। Global Scope এবং Function Scope । ES6 এ দুইটা keywords এর সাথে আমরা পরিচিত হয়। এই keywords দুইটা হচ্ছে let এবং const । এই keywords দুইটা হচ্ছে Block Scope. অর্থাৎ ({...}) এই Bracket এর ভিতরে আমরা let এবং const দিয়ে কোন variable Declare করলে সেটা এর বাহিরে কোনভাবে access করা যাবে না।
{
  let x = 2;
console.log(x);
}
//console.log(x);


//x এখানে ব্যবহার করা যাবে না।
    // console.log(x);
{ const a = 3;
    console.log(a);
  }
  //console.log(x);


    //a এখানে ব্যবহার করা যাবে না।
    // console.log(a);

    // কিন্তু var keyword এর মাধ্যমে কোন variable declare করলে সেটা block Scope হবে না। অর্থাৎ  ({...}) এই Bracket এর ভিতরে আমরা var দিয়ে কোন variable declare করলে সেটা এর বাহিরে access করা যাবে।

    {
      var z = 5;
      console.log(z);
    }
    //z এখানে ব্যবহার করা যাবে।
    console.log("Global call", z);

    //* BlockScope more programming......

    var number1 = 20;
    console.log(number1);

    if(true){
      let number = 50;
      console.log(number);
    }
    if(true){
      const number = 50.2;
      console.log(number);

    }
    // এইখানে আমি দেখতে পাচ্ছি যে const ও let দিয়ে কল করা ভ্যালু ব্লক স্কোপ এর বাহিরে কাজ করছেন না।
    console.log(number);

    if(true){
      var number = 100;
      console.log(number);
    }
    console.log(number);

    //* Function Scope
//Function এর ভিতরে কোন variable declared করা হলে সেটা ওই function এর local variable হয়ে থাকে। আর local variable এর Function Scope হয়ে থাকে। অর্থাৎ এটার access শুধুমাত্র এর ভিতরেই করা যাবে বাহিরে থেকে access করা যাবে না। যেহেতু local variable গুলি শুধুমাত্র তাদের function এর মধ্যে স্বীকৃত হয়, তাই একই নামের variable গুলি বিভিন্ন function এ ব্যবহার করা যেতে পারে। এছাড়া একটা function start হলে local variable তৈরি করা হয় আর function completed হলে সেটা delete করে দেওয়া হয়।

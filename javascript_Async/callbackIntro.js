//* JavaScript Callbacks:  "I will call back later!"
// Callback হচ্ছে একটি Technique যা একটি function কে Another function এর argument হিসেবে পাঠানো হয় এবং সেই Another function থেকেই এটাকে Call করা হয়।


//* Wy use a Callback?
// আমরা Javascript এর Asynchronous Behavior সম্পর্কে জানি। Normal ই Javascript Code Synchronous Behavior করলেও কিছু কিছু ক্ষেত্রে Asynchronous Behavior করে থাকে। যেমন, নিচের example টিতে Asynchronous Behavior এর জন্য পরেরটা আগে, আর আগেরটা পরে দেখাবে।
//Example:

{
  function getDate(){
    setTimeout(function(){
      console.log("A function that takes some time");
    },3000)
  }
  function showDate(){
    console.log("Another function");
  }
  getDate();
  showDate();
}

//এখন এটার জন্য আমাদের কি সমস্যা হতে পারে সেটা আমরা জানি। যদি আমরা কোন remote server থেকে data এনে দেখাতে চাই তাহলে, Javascript এর Asynchronous Behavior এর জন্য Data Remote Server থেকে আসার আগেই Data দেখানোর Operation এ চলে যাবে। Remote Server থেকে Data আসতে সময় লাগতে পারে সেজন্য পরের Line এ চলে গেলে আমরা কোন Data পাব না অর্থাৎ আমরা যেইরকম Output দেখতে চাইছিলাম সেইরকম Output দেখতে পাব না। এছাড়া এটার কারণে অনেক সময় Error ও আসতে পারে। আর এই সমস্যা সমাধান করতে আমরা callback Technique এর Help নিতে পারি। Callback এ যেহেতু একটা function, Another function এর মধ্যে পাঠিয়ে দিতে পারছি এবং Another function ই সেই function কে call করবে, সেহেতু callback এর মাধ্যমে আমরা কাজটা খুব সহজেই করতে পারব। নিচের উদাহারণটা দেখলেই আমরা বুঝতে পারব।
//Example:

{
  function getDate(callback){
    let Data = "";
    setTimeout(function(){
      Data = "A function that takes some time";
      callback(Data);
    },3000)
  }
  function showData(Data){
    console.log(Data);
  }
  getDate(showData);
}

// এখানে getData function এর মধ্যে আমরা showData function টা callback হিসেবে পাঠিয়ে দিয়েছি। এই showData function তখনই call হবে যখন remote server থেকে data চলে আসবে। সুতরাং আর data না পাওয়ার কোন জামেলা এখানে নেই। অর্থাৎ Data না আসার আগে showData function call হবে না।

// উপরের example এ showData হচ্ছে callback function কারণ এটা getData function এর argument হিসেবে passed করা হয়েছে। তবে মনে রাখতে হবে function এর agrument হিসেবে pass করার সময় paraenthesis ব্যবহার করা যাবে না। যেমন:
//* Right: getData(showData);
//! Wrong: getData(showData());

//আমরা Callback এবং Asynchronous Behavior সম্পর্কে জেনেছি। এখন এগুলো ব্যবহার করে আমরা একটা example দেখব:


{
  const PaymentSuccessful = true;
  const mark1 = 80;

  function emroll(callback){
    console.log('Course enrollment is in progress');
    setTimeout(function(){
      if(PaymentSuccessful){
        callback();
      }else{
        console.log("Payment Failed!");
      }
    },4000)
  }
}

{
  function progress(callback){
    console.log('Course progress is in progress...');
    setTimeout(function(){
      if(mark>=80){
        callback();
      }else{
        console.log("You need to score more than 80 to progress");
      }
    },5000)
  }

  function getCertificate(){
    console.log('preparing your certificate');
    setTimeout(function(){
      console.log('Your certificate is ready');
    },1000)
  }

 /* enroll(function(){
    progress(getCertificate);
  })*/
}

// এখানে আমরা course enroll করার কাজটাকে আমরা তিনটা function এ ভাগ করে নিয়েছি। enroll function payment successful আছে কিনা সেটা check করবে। check করার পরে যদি payment successful true হয়ে থাকে তাহলে দুই second পর এই function, progress function কে call করে দিবে। কারণ progress function টা enroll function এ callback হিসেবে received করা হয়েছে। এরপর progress function mark check করে যদি true পেয়ে থাকে তাহলে পাঁচ second পর getCertificate function কে call করে দিবে। কারণ এটাকেও callback function হিসেবে received করার হয়েছে। এরপরে এক second পর getCertificate function টা execute হয়ে সম্পূর্ণ কাজটা Complete হয়ে যাবে। এইভাবে আমরা চাইলে callback function ব্যবহার করে Sequence টা control করতে পারি। কিন্তু এখানেও একটা Problem আছে। সেটা হচ্ছে আমাদের function যদি আর বেশি হত সেই ক্ষেত্রে কিন্তু callback এর ভিতরে callback, callback এর ভিতরে callback এইভাবে অনেক জটিল হয়ে যেত। এটাকে Javascript এর ভাষায় বলা হয় callback hell । এই সমস্যা থেকে বাঁচার জন্য আমরা পরবর্তিতে আরেকটা topic সম্পর্কে জানব। সেটা হচ্ছে Promise । Promise এর মধ্যে এই কাজটাকে আমরা সুন্দরভাবে control করতে পারি। Promise নিয়ে আমরা পরের অধ্যায়ে জানব। 

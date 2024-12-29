//* JavaScript Promises: "I Promise a Result!"
//আমরা Asynchronous Behavior এবং Callback সম্পর্কে জেনেছি। এছাড়া callback hell সম্পর্কেও জেনেছি। Javascript Callback hell থেকে কিছুটা better solution হিসেবে এই Promise কে নিয়ে আসে।

//* What is Promise?
//Javascript এ Promise হচ্ছে একটা object যা Asynchronous operation গুলোকে handle করে থাকে এবং শেষে একটা result বা Error return করে থাকে। আমরা যখন একটা remote server থেকে Data আনার জন্য operation run করি, তখন data না আসা পর্যন্ত কিন্তু আমরা বলতে পারব না যে operation টা success হবে কি হবে না? আর এটা handle করার জন্যই Promise কাজ করে থাকে।

//* Create a Promise.
//Promise এর মূলত তিনটা state আছে। সেগুলো হল:
// Unresolved => Operation শেষ হওয়ার জন্য অপেক্ষা করছে।
// Resolved => Operation শেষ হয়েছে এবং সফল হয়েছে।
// Rejected => Operation শেষ হয়েছে, কিন্তু একটা সমস্যা হয়েছে।
// Promise তৈরি করতে হয় new Keyword এর মাধ্যমে এবং Promise দুইটা argument নেয়, resolve এবং reject. এই argument এর নাম আমরা যেকোন কিছু দিতে পারি তবে sequence টা maintain করতে হবে। প্রথমে resolve তারপর reject. যদি Operation success হয় তাহলে resolve call হয়ে থাকে আর যদি Operation fail হয় তাহলে reject call হয়ে থাকে। নিচে একটা example দেওয়া হল:
//Example:

{
  const aPromise = control =>{
    return new Promise(function(resolve,reject){
      setTimeout(()=>{
        if(control){
          resolve();
        }else{
          reject();
        }
      },2000)
    })
  }
}

// এখানে আমরা একটা function তৈরি করেছি, যেটা একটা argument নিবে। এখন এই function একটা Promise return করবে। এর ভিতরে setTimeout() function দিয়ে একটা fake time লাগতে পারে এমন operation তৈরি করেছি। এখন promise তখনই success হবে যখন আমাদের চাওয়া result টা পাব। এখানে setTimeout() function এর ভিতরে argument এর উপর ভিত্তি করে condition তৈরি করেছি। যদি argument এর value true হয় তাহলে promise success হবে এবং আমরা resolve() call করব। আর যদি argument এর value false হয় তাহলে reject() call করার মাধমে promise fail হয়ে যাবে। অধিকাংশ ক্ষেত্রেই আমাদের Promise নিজেদের তৈরি করতে হয় না। আমাদের জাস্ট Promise Handle করতে হয়। Promise এর মূল Structure আমরা যে Library দিয়ে কাজ করব বা যে System থেকে করব সেখানেই Implement করা থাকে। আমাদেরকে জাস্ট Promise টাকে Handle করতে হয়।

//* Handle A Promise
// এখন আমাদের Promise success হয়েছে নাকি fail হয়েছে সেটা handle করব। এখন promise যদি success হয় আমাদের aPromise() function এর সঙ্গে .then() chain করে এখানে একটা callback function দিতে পারব, যেটা Promise success হলে বা resolved হলে run করবে। আর যদি Promise reject হয় তাহলে আরেকটা cahin option .catch() এর মধ্যে callback function দিয়ে handle করতে হবে।
//Example:

{
  const aPromise = control =>{
    return new Promise(function(resolve, reject){
      setTimeout(()=>{
        if(control){
          resolve();
        }else{
          reject();
        }
      },2000)
    })
  }

  aPromise(true)
  .then(()=>{
    console.log("Promise Success");
  })
  .catch(()=>{
    console.log("Promise Fail");
  })
}

// আমরা বেশির ভাগ ক্ষেত্রে Promise ব্যবহার করি Remote server এ data আদান প্রধান করার জন্য। আমরা .then() ও .catch() এর মধ্যে যে callback গুলো ব্যবহার করেছি, সেসব callback এ বেশির ভাগ ক্ষেত্রে আমাদের remote server থেকে যে data চাই সেগুলো argument হিসেবে আসে। আমরা callback এর ভিতর থেকে সেই data argument এর সাহায্যে Access করতে পারি।
//Example:

{
  const aPromise = control =>{
    return new Promise(function(resolve,reject){
      setTimeout(()=>{
        if(control){
          resolve("your code is resolve");
        }else{
          reject("your code is reject");
        }
      },2000)
    })
  }

  aPromise(true)
  .then((date)=>{
    console.log(date);
  })
  .catch((error)=>{
    console.log(error);
  })
}

//* Handle many Promise
// কোন কোন সময় আমাদের একসাথে একাধিক promise handle করতে হতে পারে। এইক্ষেত্রে আমরা Promise.all() এই method টি ব্যবহার করতে পারি। এই method parameter হিসেবে একটি promises array নেয় আর return হিসেবে একটা Promise return করে।
// Example:

{
  const promise1 = new Promise(function(resolve, reject) {
    setTimeout (()=>{
      if(true){
        resolve("Promise 1 Success");
      }else{
        reject("Promise 1 Fail");
      }
    },2000)
  });

  const promise2 = new Promise(function(resolve, reject){
    setTimeout(()=> {
          if(true){
            resolve('Promise2 is Resolved');
          }else{
            reject('Promise2 is failed');
          }
        },2000)
    })

  Promise.all([promise1,promise2])
  .then ((dataArray)=>{
    console.log(dataArray);
  })
  .catch((err)=>{
    console.log(err);
  })
}

// এখন আমরা Promise কিভাবে তৈরি করতে হয়, কিভাবে Handle করতে হয় সে সম্পর্কে জানি। এখন callback এর example টাকে Promise দিয়ে কিভাবে handle করতে পারি সেটা দেখব।
/*
{
  const PaymentSuccessful = true;
  const mark = 70;

  function enroll(){
    console.log("course enrollment is in progress.");
    const promise = new Promise(function(resolve, reject){
      setTimeout(function(){
        if(PaymentSuccessful){
          resolve();
        }else{
          reject('payment failed!');
        }
      },2000)
    })
    return Promise;
  }

  function progress(){
    console.log("course progress is in progress");
    const promise = new Promise(function(resolve,reject){
      setTimeout(function(){
        if(marks>=80){
          resolve();
        }else{
          reject('marks is not sufficient!');
        }
      },5000)
    })
    return promise;
  }

  function getCertificate(){
    console.log("Preparing certificate");
    const promise = Promise.resolve("Congratulations you have successfully");
    return promise;
  }

  enroll()
   .then(progress)
   .then(getCertificate)
   .then(function(value){
    console.log(value);
  })
  .catch(function(err){
    console.log(err);
  })
}*/

//এখানে আমরা প্রতিটি Promise শেষ হওয়ার পর পরবর্তী Promise check করার জন্য .then() chain এর মাধ্যমে বাকি Promise গুলোকে Add করেছি। এখানে প্রথমে progress Promise resolved হলে তারপর getCertificate Promise run হবে। এরপর getCertificate Promise থেকে যেহেতু data পাব, তাই callback function এর মাধ্যমে আমরা সেই Data টা received করলাম। এখন আমাদের code আগের থেকে অনেকটা better মনে হচ্ছে। কিন্তু এখানেও একটা problem আছে সেটা হচ্ছে যদি বেশি chain করার লাগে তাহলে আমাদের এই code টাও বুঝতে বা Manage করা অনেক জটিল হয়ে যাবে। তাই Javascript আমাদের কাজ আরেকটু সহজ করার জন্য পরবর্তীতে async এবং await দুইটা keyword এর সাথে পরিচয় করিয়ে দেয়। এই keyword দুইটার মাধ্যমে আমরা Asynchronous কাজগুলো খুব সহজেই করতে পারি। এটা নিয়ে পরবর্তীতে আলোচনা করা হবে।
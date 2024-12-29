//* JavaScript Async and Await
// আমরা Javascript এর callback এবং Promise সম্পর্কে জানি। Promise কিভাবে Handle করতে হয়, promise থেকে data পেতে কিভাবে callback ব্যবহার করতে হয় এইটা আমরা জানি। এইভাবে আমাদের কাজ করতে হচ্ছে শুধুমাত্র Javascript Asynchronous Behavior এর জন্য। Asynchronous Behavior না থাকলে কিন্তু আমরা line by line code লিখে সুন্দর করে কাজটা করে ফেলতে পারতাম। এখন আমরা যদি Asynchronous কাজটাকে এইভাবে করতে পারতাম যেখানে একটা function থাকবে, function এর ভিতরে একটা variable নিয়ে সেখানে promise থেকে data রাখব তারপর সেটা print করে দিব নিচের example এর মত:
// Example:

{
  function getData(){
    const data = aDemoPromise;
    console.log(data);
  }
}

//এইভাবে হলে কিন্তু কাজটা অনেক সহজ হয়ে যেত। এইভাবে আমরা চাইলে কাজটা করতে পারব async এবং await keyword এর মাধ্যমে। async এবং  await keyword আমাদের promise কে সহজভাবে লিখতে সাহায্য করে। Async keyword একটা function কে promise হিসেবে return করে। Await Keyword একটা promise এর জন্য Wait করে থাকে। Async এবং Await অব্যশই একটা function এর মাধ্যমে ব্যবহার করতে হবে। Async keyword ব্যবহার করতে হবে কোন function এর আগে আর Await keyword ব্যবহার করতে পারব শুধুমাত্র async function এর ভিতরে। এখানে Promise এর Error handle এর জন্য try...catch ব্যবহার করা হয়।
// Example:

{
  const aPromise = control => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                if (control) {
                    resolve('Your code is Resolved');
                } else {
                    reject('Your code is failed');
                }
            }, 2000)
        })
    }

    async function getData() {
        try {
            const data = await aPromise(true);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    getData();
}

// এখন আমরা Promise এর Example টা Async এবং Await Keyword এর মাধ্যমে handle করব।

{
  const paymentSuccessful = true;
  const mark = 70;

  function enroll(){
    console.log('course enrollment is in progress.');
    const promise = new Promise(function(resolve,reject){
      setTimeout(function(){
        if(paymentSuccessful){
          resolve();
        }else{
          reject('payment failed');
        }
      },2000)
    })
    return promise;
  }

  function progress() {
    console.log('Course on progress...');
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (mark >= 80) {
                resolve();
            } else {
                reject('You could not enough marks to get the certificate.');
            }
        }, 5000)
    })
    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate.');
    const promise = Promise.resolve("Congrats! You got the certificate");
    return promise;
}

async function course(){
      try {
        await enroll();
        await progress();
        const result = await getCertificate();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
}
course()

}

//এখন আমাদের Code টা অনেকটা Simple হয়ে গেছে আগের Code থেকে এবং কোন Line কি হচ্ছে সেটা ভালভাবে বুঝা যাচ্ছে। এখন অনেক Promise একসাথে handle করতে হলেও আমরা সুন্দরভাবে handle করতে পারব।
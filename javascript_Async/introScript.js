//* Asynchronous JavaScript - "I will finish later!"
// Javascript Synchronous নাকি Asynchronous? এটা নিয়ে আমাদের একটা confusion থাকলেও Javascript Normal ই Synchronous Programming Language. তবে আমরা যখন Remote Server থেকে Data নিয়ে এসে কোন Operation করতে চাই বা Input/Output Type এর কোন Operation করতে চাই, যেটাকে আসলে AJAX Call ও বলে থাকে, তখন আসলে Javascript Asynchronous আচরণ করে থাকে। এখন প্রথম কথা হচ্ছে Asynchronous বলতে কি বুঝাচ্ছে? তবে Asynchronous জানার আগে Synchronous সম্পর্কে আগে জানতে হবে। যত programming language আছে সবগুলো By Default Synchronous ভাবে কাজ করে থাকে।

//* Synchronous Behavior
// Synchronous বলতে বুঝাচ্ছে ধাপে ধাপে কোন কাজ execute বা সম্পাদন হওয়া। অর্থাৎ কোন একটা কাজ এ যদি তিনটা ধাপ থাকে, তাহলে সেই কাজ গুলো পর্যায়ক্রমে প্রথমে ধাপ-১, তারপর ধাপ-২ এবং শেষে ধাপ-৩ এর কাজ শেষ হবে। Sequence অনুসারে কাজগুলো শেষ হবে। কখনো ধাপ-১ এর পরে ধাপ-৩ চলে যাবে না। Programming এর ক্ষেত্রেও কাজগুলো এইভাবে হয়ে থাকে। প্রতিটি Statement Line By Line Execute হয়ে থাকে। একটা Line Execute না হয়ে পরের Line এ যায় না। যেমন, নিচের Example টা দেখলে আমরা দেখতে পারব Code টা Sequence অনুসারে Execute হয়েছে। এখানে কিন্তু প্রথমে "Line 2 Code" এটা Execute হয় নাই। যেভাবে code টা লেখা আছে ওইভাবে Sequence অনুসারে Execute হয়েছে। আর এটাই হচ্ছে Synchronous Behavior.
// Example:

{
  function a(){
    console.log("Line 2 code :");
  }
  console.log("Line 1 code :");
  a()
  console.log("Line 3 code :");
}

//* Asynchronous Behavior
// Asynchronous বলতে বুঝাছে এখানে কাজগুলো একটু এলোমেলোভাবে হবে। অর্থাৎ এই ক্ষেত্রে কাজগুলো Sequently হবে না। Remote server থেকে  data আনার ক্ষেত্রে বা একটু সময় লাগে এইরকম কোন Operation এর ক্ষেত্রে Javascript Synchronous Behavior না করে Asynchronous Behavior করে থাকে। অর্থাৎ একটু সময় লাগে এইরকম কোন Operation শেষ করার জন্য অপেক্ষা না করে Javascript পরের Operation এ চলে যায়। এই ধরণের Behavior ই হচ্ছে Asynchronous Behavior । যেমন, Javascript এ দুইটা build-in function আছে, setTimeout() এবং setInterval() । এই দুইটা function Asynchronous Behavior করে থাকে। Javascript Code এর মধ্যে যখনই এই দুইটা function কে দেখে তখন এই কাজটা Background এ Process এ দিয়ে পরের কাজগুলো Execute করে ফেলে এবং যখন background এর কাজ শেষ হয় তখন এর ভিতরে থাকা function টা call হয়ে যায় এবং আমরা এর output টা দেখতে পায়। যেমন নিচের উদাহারণগুলো দেখলে বুঝতে পারব।
// Example:

{
  function a(){
       setTimeout(function(){
            console.log("Line 2 Code");
       },1000)
    }
    console.log("Line 1 Code");
    a()
    console.log("Line 3 Code");
}

//or
{
    function a(){
       setInterval(function(){
            console.log("Line 2 Code");
       },1000)
    }
    console.log("Line 1 Code");
    a()
    console.log("Line 3 Code");
}

//* setTimeout() Function: "Waiting for a Timeout"
//Syntax: setTimeout(callback,dealy, ...arguments )
// একটা নির্দিষ্ট সময় এর পর যদি কোন কাজ execute করতে চাই সেই ক্ষেত্রে setTimeout() fucntion ব্যবহার করতে পারি। এই function এ প্রথম Parameter হিসেবে একটা callback function দিতে হবে যেটা একটা নির্দিষ্ট সময় পর call হবে। দ্বিতীয় parameter হচ্ছে dealy অর্থাৎ কত সময় পর callback function টা call হবে সেই সময়টা দিতে হবে। তৃতীয় Parameter এ আমরা চাইলে function এর জন্য বিভিন্ন argument দিতে পারি। এখানে দ্বিতীয় এবং তৃতীয় Parameter optional ।

//* setInterval() Function: "Waiting for Intervals"
//Syntax: setInterval(callback,dealy, ...arguments )
// একটা নির্দিষ্ট সময় পর পর যদি কোন কাজ execute করতে চাই সেই ক্ষেত্রে setInterval() fucntion ব্যবহার করতে পারি। এই function এ প্রথম Parameter হিসেবে একটা callback function দিতে হবে যেটা একটা নির্দিষ্ট সময় পর পর call হতে থাকবে। দ্বিতীয় parameter হচ্ছে dealy অর্থাৎ কত সময় পর পর callback function টা call হবে সেই সময়টা দিতে হবে। তৃতীয় Parameter এ আমরা চাইলে function এর জন্য বিভিন্ন argument দিতে পারি। এখানে দ্বিতীয় এবং তৃতীয় Parameter optional ।

//* In Programming, Asynchronous Behavior good or bad?
// Asynchronous Behavior আসলে খারাপ কিছু না। এটাতে সময় অনেক কম অপচয় হয়। এছাড়া এটাকে Handle করার জন্য Javascript এ অনেকগুলো Technique আছে তাই কোন জামেলা নাই। এইগুলো নিয়ে পরে আলোচনা করা হবে।

//clearInterval()
//clearTimeout()
//* JSON Syntax
//JSON Syntax হচ্ছে Javascript syntax এর একটি subset. অর্থাৎ JSON syntax নেওয়া হয়েছে JavaScript object notation syntax থেকে। তবে JSON syntax লেখার এর কিছু rules আছে। তা হল:
/**
  1. সম্পূর্ণ Object বা Array কে Single quotes('') এর মধ্যে রাখতে হবে এবং কোন new line দেওয়া যাবে না।
  2. Data গুলো Javascript object এর মত name/value বা key/value pairs এ হবে। তবে JSON এর ক্ষেত্রে key অবশ্যই String value হতে হবে এবং double quotes(" ") এর মধ্যে থাকতে হবে।  অর্থাৎ Javascript object এর ক্ষেত্রে key quotes এর মধ্যে না রাখলেও চলে কিন্তু JSON এ অবশ্যই double quotes(" ") এর মধ্যে রাখতে হবে। Single quotes এর মধ্যে রাখলে এটা কাজ করবে না যেহেতু বাহিরে Single quotes আছে।
  3. JSON Value এর Data types হতে পারবে String, Number, Object, Array, Boolean, Null এবং যেকোন valid javascript expression. তবে function, Date, undefined হতে পারবে না। অর্থাৎ এই type গুলো Allow না। এছাড়া JSON Value String হলে অবশ্যই double quotes(" ") এর মধ্যে রাখতে হবে, Single quotes এর মধ্যে রাখলে এটা কাজ করবে না।
  4. Javascript এর object এর মত key এর value colon(:) দ্বারা যুক্ত থাকবে এবং প্রতিটি Data commas দ্বারা আলাদা আলাদা থাকবে। তবে Javascript এর ক্ষেত্রে last Data এর পরে comma দিতে পারলেও JSON এর ক্ষেত্রে last Data এর পরে কোন comma দেওয়া যাবে না।
  5. curly brackets ({}) object কে hold করে থাকে। আর Square Brackets([]) array কে hold করে থাকে।
 */

//* Valid JSON Example:
{
    //object syntax:
  '{"firstName":"Shahidul", "lastName":"Islam", "age":28, "dateOfBirth":"01/01/1996", "fullName":null}'
    //array syntax:
  '[{"firstName":"Shahidul", "lastName":"Islam", "age":28, "dateOfBirth":"01/01/1996", "fullName":null}]'
}

//* JSON Files
// JSON Files এর type হচ্ছে ".json". অর্থাৎ JSON কোন file নিলে সেটা (fileName.json) এইভাবে নিতে হবে। এবং JSON Text এর জন্য এর MIME Type হবে "application/json"
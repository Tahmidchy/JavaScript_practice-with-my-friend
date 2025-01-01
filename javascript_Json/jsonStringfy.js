//* JSON.stringify()
// JSON এর একটি সাধারণ ব্যবহার হচ্ছে Web server এ data পাঠানো বা data নিয়ে আসা। যখন আমাদের web server এ data send করতে হয় তখন আমাদের data কে string এ convert করে পাঠাতে হয়। JSON.stringify() function এর মাধ্যমে javascript object কে একটা valid JSON String এ convert করতে পারি।
{
    const obj = {name: "Shahidul Islam", age: 30, city: "Chittagong",skill: ['HTML','CSS','JavaScript']};
    const jsonString = JSON.stringify(obj);

    console.log(jsonString);
}
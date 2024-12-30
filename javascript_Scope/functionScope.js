//* Function Scope
//Function এর ভিতরে কোন variable declared করা হলে সেটা ওই function এর local variable হয়ে থাকে। আর local variable এর Function Scope হয়ে থাকে। অর্থাৎ এটার access শুধুমাত্র এর ভিতরেই করা যাবে বাহিরে থেকে access করা যাবে না। যেহেতু local variable গুলি শুধুমাত্র তাদের function এর মধ্যে স্বীকৃত হয়, তাই একই নামের variable গুলি বিভিন্ন function এ ব্যবহার করা যেতে পারে। এছাড়া একটা function start হলে local variable তৈরি করা হয় আর function completed হলে সেটা delete করে দেওয়া হয়।

{
  //Code cann't use user name
  function MyFunction(){
    let userName = "Tony";
    //code here use user name
    console.log("User Name: " + userName);
  }
  MyFunction()
  //code here can not used user name
  //console.log(userName);

  function MyFunction1(){
    var userName = "Stark";
    //code here use user name
    console.log("User Name: " + userName);
  }
  MyFunction1()
  //code here can not used user name
  //console.log(userName);
}

//Code More....
{
  let numberOfUsers = 20;
console.log("Number of Users: " + numberOfUsers);

function MyFunction2() {
  let numberOfUsers1 = 30;
  console.log("Number of Users: " + numberOfUsers1);
}
MyFunction2();

}

// JavaScript if, else, and else if
//* Conditional Statements: Code করার সময় আমাদের অনেক ক্ষেত্রে বিভিন্ন সিদ্ধান্তের জন্য বিভিন্ন actions নিতে হয়। এই ক্ষত্রে আমারা Conditional Statement ব্যবহার করতে পারি।
// Javascript এ চার ধরণের conditional statements আছে। যথাঃ
/**
 *  if
 *  else
 *  else if
 *  switch
 */

//* The if Statement
//Syntax:
//  if (condition) {
//  block of code to be executed if the condition is true
//  }

// If statement

let mark1 = 60;
if(mark1 >= 40){
  console.log('You are passed the exam');
}

// if and else statement

let mark2 = 30;
if(mark2 >= 40){
  console.log('You are passed the exam');
}else{
  console.log('You are failed the exam');
}

//* The else if Statement
//Use the else if statement to specify a new condition if the first condition is false.
//Syntax:
//if (condition1) {
//  block of code to be executed if condition1 is true
//  } else if (condition2) {
//  block of code to be executed if the condition1 is false and condition2 is true
//  } else {
//  block of code to be executed if the condition1 is false and condition2 is false
//  }

let mark3 = 80;
if(mark3 >= 80){
  console.log('You result are excellent');
}else if(mark3 >= 40){
  console.log('You result are good');
}else{
  console.log('You result are bad');
}

//* JavaScript Switch Statement
//switch statement বিভিন্ন conditions উপর ভিত্তি করে বিভিন্ন actions সম্পাদন করতে ব্যবহৃত হয়। switch statement ব্যবহার করে অনেকগুলো কোড ব্লকের মধ্যে একটি নির্বাচন করতে হবে।
//Syntax:
/**
 * switch(expression) {
    case x:
      // code block
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
 */

  let day;
  switch (new Date().getDay()){
    case 0:
      day = 'Sunday';
      break;
      case 1:
        day = 'Monday';
        break;
        case 2:
          day = 'Tuesday';
          break;
          case 3:
            day = 'Wednesday';
            break;
            case 4:
              day = 'Thursday';
              break;
              case 5:
                day = 'Friday';
                break;
                case 6:
                  day = 'Saturday';
                  break;
  }
  console.log(day);

  //* The break Keyword
// এখানে break অর্থ হচ্ছে থেমে যাওয়া। অর্থাৎ কোন Block এর মধ্যে যদি break keyword থাকে, এই keyword এ পৌছানোর সাথে সাথে ওই switch block থেকে বের হয় যাবে। switch block এর শেষ Block এ break keyword ব্যবহার করতে হয় না। কারণ এটা যেকোন ভাবে break হয়ে যাবে।

// The default Keyword
// কোন block match না করলে এর ভিতরের code run হবে।


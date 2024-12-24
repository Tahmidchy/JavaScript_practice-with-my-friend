//Javascript New Date - Current Date and time show

const date1 = new Date();
console.log(date1); // Date always an object when we are check typeof date.
console.log(typeof date1); // see this is object.

// javascript date are string to converted to object

const date2 = new Date("October 13, 2014 11:13:00");
console.log(date2);
console.log(typeof date2); // string to convert to object.

/* Javascript new Date(year,month,day,hours,minutes,seconds,ms): এইক্ষেত্রে serial অনুযায়ী year, month, hours, minutes,seconds, millisecond দিয়ে দিতে পারি। new Date(year, month, ...) আমাদেরকে এই মান অনুযায়ী একটা  specific date object তৈরি করে দিবে। এখানে year, month parameter কিন্তু অব্যশই দিতে হবে। আর বাকিগুলো হচ্ছে Optional. মনে রাখতে হবে এখানে month গণ্না শুরু হয় 0 থেকে। অথাৎ January = 0, December = 11 ।*/

// with two parameters

const date3 = new Date(2018,11);
console.log(date3);

// with three parameters

const date4 = new Date(2018,5,24);
console.log(date4);

//with four parameters

const date5 = new Date(2018,5,24,12);
console.log(date5);

// with five parameters

const date6 = new Date(2018, 5, 24, 10, 33);
console.log(date6);

// with six parameters

const date7 = new Date(2018, 5, 24, 10, 33, 30);
console.log(date7);

// With Seven parameters

const date8 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(date8);

//এখানে আমরা 11-এর থেকে বেশি মাস উল্লেখ করলে, কোনো্ error হবে না কিন্তু পরবর্তী বছরে overflow যোগ হবে।

const date9 = new Date(2018, 15, 24, 12, 33, 30);
console.log(date9);

//এছাড়া দিনের ক্ষেত্রেও সেইম বিষয়টা হয়ে থাকে।

const date10 = new Date(2018, 5, 35, 10, 33, 30);
console.log(date10);

/* new Date(milliseconds): এটাতে আমরা যেই Millisecond দিব সেই অনুসারে আমাদেরকে একটা date object তৈরি করে দিবে। এখানে milliseconds count শুরু হয় January 01, 1970 00:00:00 UTC time থেকে।
 1 millisecond = 1000s.
One day (24 hours) is 86400000 milliseconds(24 * 60 * 60 * 1000).*/

const date11 = new Date(100000000000);
console.log(date11);

const date12 = new Date(0);
console.log(date12);

const date13 = new Date(-100000000000);
console.log(date13);

/* the Date.UTC() Method:
এই Method January 1, 1970 থেকে আজকের Date পর্যন্ত DateTime কে Milliseconds(UTC Time অনুসারে) এ return করে থাকে।
Syntax: Date.UTC(year, month, day, hours, minutes, seconds, milliseconds) */

const date14 = Date.UTC(2020,2,30);
console.log(date14);

// Javascript ISO date format

const ISO_DATE1 = new Date("2024-11-17");
console.log(ISO_DATE1);

// javascript short date format

const shortDate = new Date('2024-11-17');
console.log(shortDate);

// javascript long date format

const longDate = new Date('Nov 17 2024');
console.log(longDate);

/*  Date Input - Parsing Dates
 আমরা Date.parse() এর মাধ্যমে একটা Valid String কে Milliseconds এ Convert করতে পারি। এই Method January 1, 1970 থেকে আমাদের দেওয়া Date পর্যন্ত number of milliseconds return করে থাকে।
ভুল Date দিলে এটি NaN return করে থাকে। */

const msec = Date.parse("April 05, 1995");
console.log(msec);

// getFullYear() Method:
// এটি Date object থেকে four digit number year কে return করে থাকে।

const date15 = new Date()
console.log(date15.getFullYear());

// getFullMonth Method

const Month1 = new Date();
console.log(Month1.getMonth());

//getMinute() Method

const Minutes1 = new Date();
console.log(Minutes1.getMinute());

//getSecond() Method

const seconds1 = new Date();
console.log(seconds1.getSeconds());

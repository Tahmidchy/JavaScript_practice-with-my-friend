//chart at Method

let myName1 ="Volvo";
console.log(myName1.charAt(1));

//ChartCodeAt and At() method

let myName2 = "Tony Stark was Iron Man this Universe but another Universe he is now Dr.Dom";
console.log(myName2.charCodeAt(2));
console.log(myName2.at(2));

// property access Method

let MyMessage ="Tony Stark was Iron Man this Universe";
console.log(MyMessage[2]);
console.log(MyMessage[700]);

// Slice Method

let TextSlice1 = "Apple,Banana,kiwi,orange";
console.log(TextSlice1.slice(7));
console.log(TextSlice1.slice(7,12));
console.log(TextSlice1.slice(-12));

// Substring Method

let Text1 = "Apple,Banana,kiwi,orange";
console.log(Text1.substring(7));
console.log(Text1.substring(7,12));

// substr method

let text2 = "Apple,Banana,kiwi,orange";
console.log(text2.substr(7,12));

// ToUpper case method

let text3 ="hello tony stark";
console.log(text3.toUpperCase());

// ToLower case method

let text4 ="HELLO TONY STARK";
console.log(text4.toLowerCase());

//Concatenate method

let text5 ="hello Iron man";
let text6 ="your are also tony stark";
console.log(text5.concat("",text6));

// trim method

let guestName1 = "   Tony";
console.log(guestName1.trim());

//trimStart method

let guestName2 ="             stack";
console.log(guestName2.trimStart());

// trimEnd method

let guestName3 = "stack             ";
console.log(guestName3.trimEnd());

//padStart method

let guestName4 = "5";
console.log(guestName4.padStart(4,"0"));

//padEnd method

let guestName5 = "6";
console.log(guestName5.padEnd(5,"0"));

// repeat method

let guestName6 = " Tony Stark ";
console.log(guestName6.repeat(3));

//replace method

let guestName7 = " Tony Stack ";
console.log(guestName7.replace("Stack","Stark"));

// replaceAll method

let MyArticle = "I think Ruth's dog is cuter than your dog!.";
console.log(MyArticle.replaceAll("dog", "cat"));

// split method

let Test1 = "Hello world!";
let MyArray1 = Test1.split(" ");
console.log(MyArray1);

// Indexof method

let Test2 ="Please located where you want to";
console.log(Test2.indexOf("want")); // here [ want ] word to use so we can this word so slow the position.
console.log(Test2.indexOf("Located")); // here this word not used anymore so that returns negative value.

// lastIndexOf method

let Test3 = "Please located where 'Located' access";
console.log(Test3.lastIndexOf("Located")); // here we find the last word)
console.log(Test3.lastIndexOf("Tony")); // this word not found in Test3 so give negative value return.

//   Search Method

let Test4 = "Please located where 'LOCATED' access 2025";
console.log(Test4.search("located"));
console.log(Test4.search("2025")) ;// here we find the word so return the position of word

// Match Method

let Test5 = "The rain is SPAIN stays mainly in the plain";
let ArrayMatch1 = Test5.match("ain");
console.log(ArrayMatch1);

// Array Method work here

const car =["Toyota","BMW","Honda","Lexus","Nissan GT-R"];
console.log(car[3]);
console.log(car.length);

const motorbike =["HONDA","Yemaha","Ducati","Royal Enfield"];
motorbike[4] ="TVS";
console.log(motorbike);

const arr =[1,2,3];
const arr1 =[1,2,3];
console.log(arr === arr1);
console.log(typeof arr);
console.log(arr instanceof Array);
console.log(arr.toString());

const arr2 =['Banana', 'Apple', 'Orange', 'Lemon'];
console.log(arr2.join('**')); // join method

// Array Method at()

const arr3 =['Banana', 'Apple', 'Orange', 'Lemon'];
console.log(arr3.at(2)); // at method

const arr4 =['Banana', 'Apple', 'Orange', 'Lemon']; //push method
let newArry=arr4.push('Grapes');
console.log(arr4);

const arr5= ['Banana', 'Apple', 'Orange', 'Lemon', 'Grapes'];// pop method
let removedArry=arr5.pop();
console.log(arr5);

// shift method

const arr6 = ['Banana', 'Apple', 'Orange', 'Lemon', 'Grapes'];// shift method remove 1st element.
let removedArry1=arr6.shift();
console.log(arr6);


//unshift method

const arr7 = [ 'Orange', 'Lemon', 'Grapes'];
let newArryLength = arr7.unshift('Banana', 'Apple'); // add element to array the 1st.
console.log(arr7);

// fill method

const arr8 = [ 'Orange', 'Lemon', 'Grapes'];
console.log(arr8.fill('Hello')); // in here we can see we can define which want are actually changed

const arr9 = [ 'Orange', 'Lemon', 'Grapes'];
console.log(arr9.fill('Hello',1));   // in here we can see we can define 1st element not changed

// Splice Method

const arr10 =['Banana','Orange', 'Lemon', 'Grapes'];
let deleteItems = arr.splice(1,0,'lemon','Mango');
console.log(arr10);
console.log(deleteItems);

// Array Concat Methods

const items1 = [1,2,3,4];
const items2 = [5,6,7,8];
const items3 = [9,10,11,12];
const MargeItems1 = items1.concat(items2, items3);
console.log(MargeItems1); // in here items1+items2

//Array CopyWithin Methods

const Items4 =['A','B','C','D','E'];
Items4.copyWithin(2);
console.log(Items4); // in here Items duplicated

const Items5 =['A','B','C','D','E'];
Items5.copyWithin(3,1,2);
console.log(Items5); // in here Items duplicated

// Array Copywithin negative value also accepted

const Items6 = ['a', 'b', 'c', 'd', 'e', 'f'];
Items6.copyWithin(-2,-3);
console.log(Items6); // in here Items duplicated but that's duplicated from backwards

// Array flat method

const Items7 = [[1,2],[3,4],[5,6],[7,8]];
const NewItems = Items7.flat();
console.log(NewItems); // in here multi level items converted into single array

// Array flat method also we can select how many level can convert into single array

const Items8 = [[1,2],[3,4],[5,6],[7,[8,[9,10],[11,12]]]];
const NewItems1 = Items8.flat(5);
console.log(NewItems1); // in here multi level items converted into single array we and also use flat(Infinity) just do this.

// Array Method reverse
// we can an Array can be reversed just use array.reverse method instead

const Items9 = [1,2,3,4,5];
const NewItems2 = Items9.reverse();
console.log(NewItems2); // in here array reversed

//Array Method toReversed method in here original array are okay new array create which array are reversed it's different reversed and toReversed.

const Items10 = ['a','b','c','d','e','f','g','h','i','j'];
const NewItems3 = Items10.toReversed();
console.log(Items10); // in here array original
console.log(NewItems3); // in here array reversed

// Array Method sort() we can our array can be sorted by ascending order and descending order.
// Array sort by ascending order

const Items11 = [5,2,8,1,9];
const NewItems4 = Items11.sort((a,b) => a-b);
console.log(NewItems4);

// Array sort by descending order

const Items12 = [5,2,8,1,9];
const NewItems5 = Items12.sort((a,b) => b-a);
console.log(NewItems5);

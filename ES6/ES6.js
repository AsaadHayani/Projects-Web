// const SETTINGS = {
// 	'name': 'asaad',
// 	'age': '22'
// }
// console.log(SETTINGS);
// SETTINGS.name = 'ahmed';
// console.log(SETTINGS);
// Object.freeze(SETTINGS);
// console.log(SETTINGS);

// Arrow Function

// let arrowTestOne = () => 1;
// let arrowTestTwo = _ => 2;
// let arrowTestThree = (param) => param * 2;
// let arrowTestFour = (param1, param2) => param1 * param2;
// document.write('arrowTestOne :', arrowTestOne + "<br>");
// document.write('arrowTestTwo :', arrowTestTwo + "<br>");
// document.write('arrowTestThree :', arrowTestThree(16) + "<br>");
// document.write('arrowTestFour :', arrowTestFour(16, 2) + "<br>");

// ===========================================================

// Arrow Function => this

// let test = () => document.getElementById("show").innerHTML = this;
// window.onload = test;
// document.getElementById('button').addEventListener('click', test);

// ===========================================================

// Template Literals

// const str = "Bassam";
// let oldWay = "Asaad \n" + (str === "Bassam" ? 'Mr' : 'Mrs') +
//       str + "\n" +
//       "Hayani";
// let newWay = `Asaad ${(str === "Bassam" ? 'Mr' : 'Mrs')}
//       ${str}
//       Hayani`;
// console.log('newWay :', oldWay);
// console.log('oldWat :', newWay);

// let name = 'Asaad',
//       age = 21;
// const text = `
// <h2 class="name">${name}</h2>
// <span class="age">${age}</span>
// `;
// document.body.innerHTML = text;

// ===========================================================

// Spread Operator

// let arr1 = [1, 2, 3],
// 	arr2 = [4, 5];
// console.log(arr1.concat(arr2));
// let all = [arr1, arr2]; // Counting The Item
// let all = [...arr1, ...arr2]; // Marge
// console.log(all);

// let arr1 = [1, 2, 3],
// 	arr2 = [4, 5],
// 	arr3 = [...arr2];
// let allarr = [...arr1, ...arr2, 6, 7]
// console.log('arr1 :', arr1);
// console.log('arr1 :', Math.min(...arr1));
// console.log('arr2 :', arr2);
// console.log('arr3 :', arr3);
// console.log('allArr :', allarr);

// let arr1 = [1, 2, 3],
// 	arr2 = arr1,
// 	arr3 = [...arr1];
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// ===========================================================

// Default Parameter

// function my(username='Asaad',lastname='Hayani'){
//       return `Username: ${username},LastName: ${lastname}`;
// }
// console.log('my :', my());
// console.log('my :', my('Ahmed'));
// console.log('my :', my('Ahmed','Rami'));

// ===========================================================

//  Rest Parameter

// function addAll(a, b, c, ...myParams) {
// 	console.log('Param a ' + a);
// 	console.log('Param b ' + b);
// 	console.log('Param c ' + c);
// 	console.log('Param myParams ' + myParams);

// 	return 'console';
// }
// console.log(addAll('a', 'b', 'c', 'e', 'f', 'g', 'h'));

// function addAll(...myParams){
//       myNumber=0;

//       for(let myParam of myParams)myNumber+=myParam;

//       return myNumber;
// }
// console.log('addAll() :', addAll(1));
// console.log('addAll() :', addAll(1,2,3));
// console.log('addAll() :', addAll(1,2,3,4,5,6));

// ===========================================================

//  startsWith endsWith

// let x = 'Asaad Bassam Hayani Is My Name';
// console.log(x.length);
// console.log(x.startsWith('Bassam', 6)); // Search String, Position Starts From 0
// console.log(x.endsWith('My', 25)); // Search String, Position Starts From string.length

// ===========================================================

//  includes repeate

// let x = 'Asaad Bassam Hayani Is My Name';
// console.log(x.length);
// console.log(x.includes('Bassam', 6)); // Search String, Position Starts From 0
// console.log(x.repeat(5));

// ===========================================================

// Destructuring for object

// const user = {
// 	name: 'Asaad',
// 	bigname: 'Bassam',
// 	lastname: 'Hayani',
// 	borns: {
// 		one: 'Emad',
// 		two: 'Sara',
// 		three: 'Habeb',
// 		four: 'Salem'
// 	}
// };
// const { name: theName, bigname, lastname, fullname: theFullName = "Asaad Bassam Hayani", borns: { one, two, three, four = 'Default', five = "Hamza" } } = user;
// console.log(`My Name is : ${theName}${bigname}${lastname}
// My Name is : ${theFullName}
// My first Child is : ${one}
// My last Child is : ${four}
// My last Child is : ${five}`);

// ===========================================================

// Destructuring for Array

// const food = ['Burgur', 'Pizza', 'Chicken', 'Meat', 'Rice', ["Banana", "Apple", "Mango", "Orang", "Lemon"]];

// [one, two, three, four, , [fr1, fr2, , fr4 = "Default", ...otherfruit]] = food;

// console.log(`I Love Food :, ${one},${two},${three},${four} 

// & I Love Fruit : ${fr1} ,${fr2} ,${fr4} ,${otherfruit} `);

// ===========================================================

// Destructuring for object Example

// const user = {
//       name: 'Asaad',
//       city: 'Syria',
//       skills: {
//             html: "80%",
//             css: "60%",
//       js: {
//             framevue: 'Vuejs',
//             frameang: 'Angularjs',
//             framereact: 'Reactjs'
//       }
//       }
// };

// const { name, city, skills: { html, css, js: { framevue: vue, frameang: angular, framereact: react }} } = user;
// console.log(`${user.name}`);
// console.log(`${user.city}`);
// console.log(`${user.skills.html},    ${user.skills.css}`);
// console.log(`${user.skills.js.framevue},     ${user.skills.js.frameang},      ${user.skills.js.framereact}`);

// ===========================================================

// Destructuring for Params

// const user = {
//       name: 'Asaad',
//       city: 'Syria',
//       skills: {
//             html: "80%",
//             css: "60%"
//       },
//       js: {
//             framevue: 'Vuejs',
//             frameang: 'Angularjs',
//             framereact: 'Reactjs'
//       }
// };

// function myInfo({ name, city, skills: { html, css}, js: { framevue: vue, frameang: angular, framereact: react } }) {
//       console.log(`${name}`);
//       console.log(`${city}`);
//       console.log(`${html},    ${css}`);
//       console.log(`${vue},     ${angular},      ${react}`);
// }
// myInfo(user);

// ===========================================================

// Enhanced object Literals

// const myVariable = "Key";

// const myObject = {
//       myProperty: 'myValue',
//       [myVariable]: "Value"
// };
// console.log(myObject);

// ===========================================================

// Set: new Set (Itrable)

// let myArray = [1, 2, 3, 4, 3, 2, 1];
// let myBook = new Set(myArray);

// console.log(myArray);
// console.log(myBook);

// ===========================================================

// Set: new Set (Itrable)

// let myBook = new Set('Asaad');//addedasitrable
// myBook.add('Asaad');//addedasvalue
// myBook.delete('a');

// console.log(myBook);
// console.log(myBook.size);
// console.log(myBook.has('Asaad'));
// myBook.clear();
// console.log(myBook.size);

// ===========================================================

// Map: new Map (Itrable)

// let myMap = new Map([
//       ["Asaad", "String"],
//       [10, "Number"],
//       [false, "Boolean"],
//       [{ a: 1, b: 2 }, "Object"],
//       [function f() { }, "Function"],
// ]);

// console.log(`My Map Elements is: ${myMap.size}`);
// console.log(`Using get Method: ${myMap.get(10)}`);
// console.log(`Using has Method: ${myMap.has(false)}`);
// console.log(`Using delete Method: ${myMap.delete(false)}`);
// console.log(`My Map Elements is: ${myMap.size}`);
// myMap.clear();
// console.log(`My Map Elements is: ${myMap.size}`);

// ===========================================================

// Symbol 

// const mySymbol = Symbol();
// console.log(`Typeof: ${typeof mySymbol}`);

// const mySymbol1 = Symbol("Testing");
// const mySymbol2 = Symbol("Testing");
// console.log(mySymbol1 === mySymbol2);

// const myNewSymbol = Symbol();
// const myObject = {
//       username: 'Asaad Bassam Hayani',
//       website: "WhiteTech.com",
//       [myNewSymbol]: "Hidden"
// };
// for (let val of Object.entries(myObject)) {
//       console.log(val);
// }

// console.log(Object.getOwnPropertyNames(myObject));
// console.log(Object.keys(myObject));
// console.log(Object.getOwnPropertyNames(myObject));
// console.log(JSON.stringify(myObject));

// const mySymbol3 = Symbol.for("Testing");
// const mySymbol4 = Symbol.for("Testing");
// console.log(mySymbol3 === mySymbol4);
// console.log(mySymbol3.description);

/*
  forEach(CurrentValue, index, array)
*/

// const arr = ["A", "B", "C", "D", , "F"];

// for (let i = 0; i < arr.length; i++) {

// 	console.log(`${i} - ${arr[i]}`);

// }

// console.log(`${"#".repeat(30)}`);

// arr.forEach((el, i) => {

// 	console.log(`${i} - ${el}`);

// });

// console.log(`${"#".repeat(30)}`);

// let callbacks = 0;

// arr.forEach((el, i) => {

// 	console.log(`${i} - ${el}`);

// 	callbacks++;

// });

// console.log(callbacks);

// console.log(`${"#".repeat(30)}`);

// function makeTheLoop(element, index) {

// 	console.log(`${index} - ${element}`);

// }

// arr.forEach(makeTheLoop);

/*
  forEach(currentKey, currentValue, Set)
*/

// const mySet = new Set([1, 1, 1, 2, 2, 2, 3, 4, 5]);

// mySet.forEach((item1, item2) => {

// 	console.log(`${item1} - ${item2}`);

// });

// console.log(`${"#".repeat(20)}`);

/*
  forEach(Value, Key, Map)
*/

// const myMap = new Map([["A", 1], ["C", 3], ["B", 2], ["X", {}]]);

// myMap.forEach((v, k) => {

// 	console.log(`${k} => ${v}`);

// });

/*
  Set vs WeakSet
  ======================

  Set
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakSet
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys

*/

// let mainObject = { A: 1 };

// let mySet = new Set([mainObject]);

// let objectOne = { B: 2 };
// let objectTwo = { C: 3 };

// mySet.add(objectOne);
// mySet.add(objectTwo);

// console.log(mySet);

// console.log(mySet.has(objectOne));
// console.log(mySet.has(objectTwo));

// console.log(mySet.size);
// console.log(mySet.keys());

// mySet.delete(objectOne);
// console.log(mySet.has(objectOne));

// objectTwo = null;
// console.log(mySet.has(objectTwo));

// console.log(mySet);

// mySet.add("String");
// mySet.add(12);

// console.log(mySet);

// mySet.forEach(v => {

// 	console.log(v);

// });


// let mainObject = { A: 1 };

// let myWeakSet = new WeakSet([mainObject]);

// let objectOne = { B: 2 };
// let objectTwo = { C: 3 };

// myWeakSet.add(objectOne);
// myWeakSet.add(objectTwo);

// console.log(myWeakSet);

// console.log(myWeakSet.has(objectOne));
// console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet.size);
// console.log(myWeakSet.keys());

// myWeakSet.delete(objectOne);
// console.log(myWeakSet.has(objectOne));

// objectTwo = null;
// console.log(myWeakSet.has(objectTwo));

// console.log(myWeakSet);

// myWeakSet.add("String");
// myWeakSet.add(12);

// myWeakSet.forEach(v => {

//   console.log(v);

// });

/*

  Map vs WeakMap
  ======================

  Map
  - Contain Any Type Of Values
  - Get Elements Count With .size
  - forEach Available To Iterate
  - You can Get Its Keys

  WeakMap
  - Contains Only Object
  - You Can't Use Size To Get Elements Count
  - forEach Not Available To Iterate
  - You Cant Get Keys

*/

// let myMap = new Map();
// let objectOne = { a: 1 };
// myMap.set(objectOne, "Test");
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.set(1, 15);

// console.log(myMap);
// console.log(myMap.get("c"));
// console.log(myMap.get(objectOne));

// console.log(myMap.has("b"));
// myMap.delete("b");
// console.log(myMap.has("b"));

// objectOne = null;
// console.log(myMap.get(objectOne));

// console.log(myMap.size);

// let myWeakMap = new WeakMap();
// let objectOne = { a: 1 };
// let objectTwo = { b: 2 };
// myWeakMap.set(objectOne, "Test1");
// myWeakMap.set(objectTwo, "Test2");
// myWeakMap.set("b", 2);
// myWeakMap.set("c", 3);
// myWeakMap.set(1, 15);

// console.log(myWeakMap);

// console.log(myWeakMap.get(objectOne));

// console.log(myWeakMap.has(objectTwo));
// myWeakMap.delete(objectTwo);
// console.log(myWeakMap.has(objectTwo));

// objectOne = null;
// console.log(myWeakMap.get(objectOne));

// console.log(myWeakMap);

// console.log(myWeakMap.size);

/*

  Symbol Iterator & For Loop

  Iterable => Object Has Symbol.Iterator
  Iterator
  - Object With Interface Designed For Iteration
  - All Iterators Has Next() Method That Return Result Object
  - The Result Object Has Two Props
  --- [1] Value => The Next Value
  --- [2] Done => Boolean Value To Tell If The Next Value Exists Or No

  For ... Of Loop

  [1] Call Symbol.Iterator With Next Method
  [2] Save Value Inside Variable
  [3] Check For Done If Its True => Exit The Loop

*/

// let myArray = [1, 2, 3];
// let myName = "Osama";
// let myNumber = 1000;
// let myObject = {};

// console.log(typeof(myArray[Symbol.iterator]));
// console.log(typeof(myName[Symbol.iterator]));
// console.log(typeof(myNumber[Symbol.iterator]));
// console.log(typeof(myObject[Symbol.iterator]));

// let theIterator = myName[Symbol.iterator]();

// console.log(theIterator);
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());
// console.log(theIterator.next());

// for (let char of myName) {

//   console.log(char);

// }

// for (let num of myNumber) {

//   console.log(num);

// }

// for (let a of myObject) {

//   console.log(a);

// }

/*
  Custom Iterable Object
*/

// const myObject = {
//   name: "Osama",
//   age: 36,
//   country: "Egypt",
//   favSkill: "JavaScript",
//   [Symbol.iterator]() {
//     let step = 0;
//     let properties = Object.keys(this);
//     // console.log(properties);
//     return {
//       next() {
//         return {
//           value: myObject[properties[step]],
//           done: step++ === properties.length
//         }
//       }
//     }
//   }
// }

// for (let prop of myObject) {
//   console.log(prop);
// }

// console.log(myObject['favSkill']);

/*
  Generators Part 1
  Intro And What's Generators
*/

// function* generateTickets() {

//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;

// }

// let iterator = generateTickets();

// console.log(typeof (iterator));
// console.log(iterator.next().value);

// console.log(`${"#".repeat(20)}`);
// console.log(`We Will Do Something Before Yielding The Next Ticket`);

// console.log(iterator.next().value);

// console.log(`${"#".repeat(20)}`);
// console.log(`Function Stop Execution After Each Yield`);

// console.log(iterator.next().value);

// console.log(`${"#".repeat(20)}`);
// console.log(`Function Give You The Control To Yield`);

// console.log(iterator.next().value);

// console.log(`${"#".repeat(20)}`);

// let myNumbers = [10, 20, 30, 40, 50];

// function* generateNumbers(nums) {

//   for (let i = 0; i < nums.length; i++) {

//     yield nums[i];

//   }

// }

// let generator = generateNumbers(myNumbers);

// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// console.log(`${"#".repeat(20)}`);

// function* generateNums() {

//   yield* [1, 2, 3, 4, 5, 6];
//   yield 7;

// }

// let theGenerator = generateNums();

// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);
// console.log(theGenerator.next().value);

/*
  Generators Part 2
  Functionality & Return
*/

// function orderBook() {

//   window.alert("You Clicked On Button To Order A Book");
//   console.log("You Clicked On Button To Order A Book");

//   window.alert("You Added The Book To Cart");
//   console.log("You Added The Book To Cart");

//   window.alert("Payment Is Done");
//   console.log("Payment Is Done");

// }

// let ordering = orderBook();

// function* orderBook() {

//   window.alert("You Clicked On Button To Order A Book");
//   console.log("You Clicked On Button To Order A Book");

//   window.alert("You Added The Book To Cart");
//   console.log("You Added The Book To Cart");

//   window.alert("Payment Is Done");
//   console.log("Payment Is Done");

// }

// let ordering = orderBook();

// function* mySkills() {

//   yield "HTML";
//   yield "CSS";
//   yield "PHP";
//   yield "Python";
//   yield "JavaScript";

// }

// let theSkills = mySkills(); // Iterator

// for (let skill of theSkills) {

//   console.log(skill);

// }

// for (let s of mySkills()) {

//   console.log(s);

// }

// // Test Return

// function* sayNames() {

//   yield "Osama";
//   yield "Ahmed";
//   return "Sayed";
//   yield "Eman";

// }

// let theNames = sayNames();

// console.log(theNames.next());
// console.log(theNames.next());
// console.log(theNames.next());
// console.log(theNames.next());

/*
  Generators Part 3
  Create Infinite Numbers
*/

// function* createInfinite() { // DO NOT LOOP ON THIS

//   let i = 0;

//   while (true) {

//     yield i++;

//   }

// }

// let infiniteIterator = createInfinite();

// console.log(infiniteIterator.next());
// console.log(infiniteIterator.next());
// console.log(infiniteIterator.next());
// console.log(infiniteIterator.next());
// console.log(infiniteIterator.next());
// console.log(infiniteIterator.next());

// for (let number of infiniteIterator) {

//   if (number > 20) {

//     break;

//   }

//   console.log(number);

// }

/*
  Generators Part 4
  Delegating Generators
*/

// function* generateNumbers() {

//   yield 1;
//   yield 2;
//   yield 3;

// }

// function* generateNames() {

//   yield "Osama";
//   yield "Ahmed";
//   yield "Sayed";

// }

// function* generateAll() {

//   yield* generateNumbers();
//   yield* generateNames();

// }

// let genAll = generateAll();

// console.log(genAll.next());
// console.log(genAll.next());
// console.log(genAll.next());
// console.log(genAll.next());
// console.log(genAll.next());
// console.log(genAll.next());

/*
  New Array Methods
  Array.of
  Array.from
  Array.fill
*/

// Array.of(Elements To Create The Array)

// let oldArray = Array(100);
// console.log(oldArray);
// console.log(oldArray.length);

// let newArray = Array.of(100);
// console.log(newArray);
// console.log(newArray.length);

// Array.from(Iterable, Mapfn, This)

// let myName = "Osama";
// let arrayOfLetters = Array.from(myName);

// console.log(myName);
// console.log(arrayOfLetters);

// let myNumbers = [10, 20, 30, 15, 18, 100, 60];

// let numbersMinusTen = Array.from(myNumbers, (number) => number - 10);

// console.log(numbersMinusTen);

// Array.fill(Value To Fill, Start Default 0, End Default Array.length)

// let theNumbers = [1, 10, 30, 70, 90];

// theNumbers.fill(100); // All Will Be 100
// theNumbers.fill(100, 2); // From 30
// theNumbers.fill(100, 1, 3); // Will Fill 10 And 30

// console.log(theNumbers);

/*
  New Array Methods
  Array.find()
  Array.findIndex()
  Array.copyWithin()
*/

// Array.find() Not Returning All Values

// let myNumbers1 = [1, 10, 20, 30, 40];
// let found1 = myNumbers1.find(el => el > 10);
// console.log(found1);

// console.log(`${"#".repeat(20)}`);

// Array.findIndex() Not Returning All Values

// let myNumbers2 = [1, 10, 20, 30, 40];
// let found2 = myNumbers2.findIndex(el => el > 10);
// console.log(found2);

// console.log(`${"#".repeat(20)}`);

// Array.copyWithin(Target, Start Default 0, End Default Array.length)

// "A", "F", "G", "D", "E", "F", "G", "H"
// let myLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
// myLetters.copyWithin(1, 5, 7);
// console.log(myLetters);

/*
  OOP => Classes Part 1
  Old and New Class Syntax
*/

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getInfo() {
//     console.log(`Hello ${this.name} Your Age Is ${this.age}`);
//   }
//   getDays() {
//     console.log(`You Lived For ${this.age * 365} Days`);
//   }
// }

// const firstUser = new User("Osama", 36);

// firstUser.getInfo();
// firstUser.getDays();

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   getInfo() {
//     console.log(`Hello ${this.name} Your Email is ${this.email}`);
//   }
// }

// export default User;

// main.js

/*
  OOP => Classes Part 2
  Extend Class From Another Module
*/

// import User from './app.js';

// class Admin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
// }

// let firstAdmin = new Admin("Osama", "o@nn.sa");
// firstAdmin.getInfo();

/*
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
*/

// Example One

// let i = 10;
// let j = 20;
// console.log(i + j);

// function first() {
//   console.log("Hello First");
// }

// function second() {
//   first();
//   console.log("Hello Second");
// }

// second();

// Example Two

// window.setTimeout(() => console.log("Last"), 1000);
// console.log("One");
// window.setTimeout(() => console.log("Two"), 0);
// console.log("Three");

// // Example Three

// window.setTimeout(() => console.log(myVariable), 0);

// let myVariable = 100;

// myVariable += 200;

/*
  Important Knowledge
  For Promises
  - Call Stack
  --- Mechanism To Make Interpreter Track Your Calls
  --- When You Call A Function Its Added To The Stack
  --- When Function Executed Its Removed From The Stack
  --- The Interpreter Continue Calling From The Last Point Reached
  --- Call Stack Detect Web API And Leave It To The Browser To Handle It
  - Web API
  --- Methods Available From Environment => Browser
  --- When Complete It Add The Callback To The Callback Queue
  - Event Loop
  --- Wait The Call Stack To Finish
  --- Get Callback From Callback Queue
  --- Add Callback To Call Stack
  - Callback Queue
  =============================================
  Asynchronous Vs Synchronous Programming
*/

// Example One

// console.log("One");
// window.alert("Bad");
// console.log("Two");

// Example Two

// console.log("Function To Do Something");

// window.setTimeout(() => console.log("Get Friends List"), 1000);

// window.setTimeout(() => console.log("Get Latest News"), 2000);

// console.log("Do Important Things, Waiting Is A Big Problem");

/*
  Promise Intro
  - Promise Is One Of The Best Features In ES6
  - Promise Make It Easy To Support Asynchronous Programming
  - Promise in JavaScript Is Like Promise in Real Life
  - Promise Is Something That Will Happen in The Future
  - Promise Is A Placeholder For A Future Value
  - You Booked A Cinema Ticket, You Have A Promise From Cinema Owner 2 Have A Seat
  - You Got Task To Do, U Promised Your Boss To Do The Task
  - You Ordered Food From Restaurant
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The Food You Will Receive
  - You Ordered iPhone From Souq Shop
  --- [ Promise ] Is The Order Record
  --- [ The Future Value ] Is The iPhone You Will Receive
  - Promise Is An Object
  - Promise Is The Event Completion Or Failure of Async Operation & Its Resulting Value.
  - JavaScript Use Callbacks For Asynchronous Programming
  --- [1] Function Called And Do The Task
  --- [2] Action Complete
  --- [3] Another Function Called
  --- [4] Action Complete
  --- [5] Another Function Called
  - In Complex Cases => Every Call Add Nesting Level
  - http://callbackhell.com/
  - Promise Avoiding Callback Hell Or Pyramid Of Doom
  - Promise Is One Of This States
  [1] Pending => Not Fulfilled Or Rejected
  [2] Fulfilled => Operation Succeeded
  [3] Rejected => Operation Failed
*/

// const myPromise = new Promise((resolve, reject) => {
  // console.log("Welcome To My First Promise");
  /*
    Asynchronous Operation
    Fulfilled => resolve
    Rejected => reject
  */

//   let connect = true;
//   if (connect) {
//     resolve("Connection Established");
//   } else {
//     reject(Error("Connection Failed"));
//   }
// }).then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

// console.log(typeof myPromise);

// Another Syntax

// const theResolved = (resolved) => console.log(resolved);
// const therejected = (rejected) => console.log(rejected);

// myPromise.then(theResolved, therejected);

// First Example

// const myPromise = new Promise((resolve, reject) => {
  // Only One State Allowed
  // resolve("Resolved");
  // reject("Rejected"); // Ignored

//   if (Math.random() * 100 < 50) {
//     resolve("Good");
//   } else {
//     reject("Bad");
//   }
// });

// myPromise.then(
//   (resolved) => console.log(resolved),
//   (rejected) => console.log(rejected)
// );

// Other Syntax

// myPromise.then(null, (rejected) => console.log(rejected));
// myPromise.catch((rejected) => console.log(rejected));

// Second Example

// firstRequest(function (response) {
//   secondRequest(
//     response,
//     function (nextResponse) {
//       thirdRequest(
//         nextResponse,
//         function (finalResponse) {
//           console.log("Final response: " + finalResponse);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// firstRequest()
//   .then((response) => secondRequest(response))
//   .then((nextResponse) => thirdRequest(nextResponse))
//   .then((finalResponse) => console.log("Final response: " + finalResponse))
//   .catch(failureCallback);

// Without Promise

// function getFirstRepo(apiURL) {
//   let myRequest = new XMLHttpRequest();

//   myRequest.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
      /*
        Ready State => The Status Of The Request
        [0] Request Not Initialized
        [1] Server Connection Established
        [2] Request Recieved
        [3] Processing Request
        [4] Request Is Finished And Response Is Ready
        Status => Response Status Code
        [200] Ok
        [404] Not Found
      */

      // console.log(this.responseText);
  //     console.log(JSON.parse(this.responseText)[0].name);
  //   }
  // };

  // XMLHttpRequest.open(Method, URL, Async, User, Pass)
  // myRequest.open("GET", apiURL, true);

  // Send The Request
//   myRequest.send();
// }

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos");

// With Promise

// const getFirstRepo = (apiURL) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText)[0].name);
//       } else {
//         reject(Error(this.statusText));
//       }
//     };
//     myRequest.open("GET", apiURL, true);
//     myRequest.send();
//   });
// };

// getFirstRepo("https://api.github.com/users/ElzeroWebSchool/repos").then(
//   (result) => {
//     let newElement = document.createElement("div");
//     let elementText = document.createTextNode(result);
//     newElement.appendChild(elementText);
//     document.body.appendChild(newElement);
//   },
//   (error) => console.log(error)
// );

// const myPromise = new Promise((resolve, reject) => {
//   let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//   resolve(thePosts);
// });

// myPromise
//   .then((result) => {
//     console.log(`Total Number Of Posts Is ${result.length} Posts`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`The First Post Is ${result[0]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`The Last Post Is ${result[result.length - 1]}`);
//     return result;
//   })
//   .then((result) => {
//     console.log("#".repeat(15));
//     console.log(`Every Page Has 2 Posts`);
//     console.log(`Application Has ${result.length / 2} Pages`);
//   });

// fetch("https://api.github.com/users/ElzeroWebSchool/repos")
//   .then((result) => {
//     let allRepos = result.json();
//     console.log(allRepos);
//     return allRepos;
//   })
//   .then((repos) => {
//     console.log(`Total Number Of Repos Is ${repos.length}`);
//     return repos;
//   })
//   .then((repos) => {
//     console.log(`First Repo Is ${repos[0].name}`);
//     return repos;
//   })
//   .then((repos) => {
//     console.log(`Last Repo Is ${repos[repos.length - 1].name}`);
//     return repos;
//   })
//   .then((repos) => {
//     for (let i = 0; i < repos.length; i++) {
//       let newElement = document.createElement("div");
//       let elementText = document.createTextNode(repos[i].name);
//       newElement.appendChild(elementText);
//       document.body.appendChild(newElement);
//     }
//   });

// Promise All

// const myFirstPromise = new Promise((resolve, reject) => {
//   let connect = true;
//   if (connect) {
//     resolve("First Promise Resolved");
//   } else {
//     reject("First Promise Rejected");
//   }
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//   let settings = true;
//   if (settings) {
//     resolve("Second Promise Resolved");
//   } else {
//     reject("Second Promise Rejected");
//   }
// });

// Promise.all([myFirstPromise, mySecondPromise]).then((result) => {
//   console.log(result);
// });

// Promise Race

// const myFirstPromise = new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     resolve("First Promise Resolved");
//   }, 50);
// });

// const mySecondPromise = new Promise((resolve, reject) => {
//   window.setTimeout(() => {
//     resolve("Second Promise Resolved");
//   }, 100);
// });

// myFirstPromise.then((result) => console.log(result));
// mySecondPromise.then((result) => console.log(result));

// Promise.race([myFirstPromise, mySecondPromise]).then((result) => {
//   console.log(result);
// });
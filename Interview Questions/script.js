// let parent = document.getElementById("parent");
// parent.addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("class"));
//   console.log(e.target.getAttribute("id"));
//   console.log(e.target.textContent);
// });
// freeze()||seal()
// let obj = {
//   name: "asaad",
// };

// Object.freeze(obj);
// Object.seal(obj);

// obj.name = "ahmed";
// obj.title = "front-end";

// console.log(obj);

//////====================================================///////
// Immediatly Invoke FunctionExpression(IIFE)
// isworkwithrunthepage(withoutcall up)
// (function x() {
//   console.log("x");
// })();

//////====================================================///////
// newwayforfuntion
// function data(test) {
//   return test;
// }
// let x = data`code`;
// console.log(x);

//////====================================================///////
// dealingwithreturninfunction
// let fun1 = function () {
//   return {
//     a: 1,
//   };
// };

// let fun2 = function () {
//   return;
//   {
//     a: 1;
//   }
// };
// console.log(fun1()); //a:1
// console.log(fun2()); //undefined

//////====================================================///////

// let C = {
//   a: function () {
//     console.log('a');
//     return this//Back on C
//   }
//   b: function () {
//     console.log('b');
//     return this//Back on C
//   }
// }
// C.a().b().a()//C.a()=C

//////====================================================///////

// let myObj = {
//   foo: "bar",
//   func: function () {
//     let self = this; //Back on myObj
//     console.log("Welcome " + this.foo); //bar
//     console.log("Welcome " + self.foo); //bar
//     (function () {
//       console.log("Welcome " + this.foo); //undefined
//       console.log("Welcome " + self.foo); //bar
//     })();
//   },
// };
// myObj.func();

//////====================================================///////

// (function () {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   }, 1000);
//   setTimeout(() => {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();
// 1,4,3,2

//////====================================================///////

// console.log(1 + "2" + "2"); //122
// console.log(1 + +"2" + "2"); //32
// console.log(1 + -"1" + "2"); //02
// console.log(+"1" + "1" + "2"); //112
// console.log("A" - "B" + "2");//NAN2
// console.log("A" - "B" + 2);//NAN

//////====================================================///////

// var x = 22;
// function fun() {
//   console.log(x); //undefined
//   var x = 20;
// }
// fun();

//////====================================================///////

//firstclassfunction
let arr = [
  1,
  2,
  3,
  function () {
    console.log("function from array");
  },
];
arr[3]();

let obj = {
  a: function () {
    console.log("function from object");
  },
};
obj.a();

function x() {
  return function () {
    console.log("function from function");
  };
}
console.log(x()());
let func = x();
func();

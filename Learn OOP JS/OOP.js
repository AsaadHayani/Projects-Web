// let user = {
//   firstName: 'asaad',
//   lastName: "Hayani",
//   age: 22,
//   1: "One",
//   "Tow!": 2,
//   name: "Asaad",
//   addresses: {
//     sy: "Idlib",
//     usa: "Jadda",
//     getAddress: () => `Your Address: ${user.addresses.sy}`,
//   },
//   getName: () => {
//     return `full Name: ${this.firstName} ${this.lastName} and your age: ${this.age}`;
//   },
//   getDays: () => {
//     return `your age in Days: ${this.age * 365}`;
//   },
// };
// console.log(user.getName());
// console.log(user.getDays());
// console.log(user.addresses.sy);
// console.log(user["addresses"]["usa"]);
// console.log(user.addresses.getAddress());
// console.log(user["1"]);
// console.log(user["Tow!"]);
// let myVar = "name";
// console.log(user[myVar]);

////////////////////////////////////////

// let user = new Object();
// user.firstName = "Asaad";
// user.lastName = "Hayani";
// user["age"] = 22;
// user.getFullName = () => `full Name: ${user.firstName} ${user.lastName} and your age: ${user.age}`;
// console.log(user.firstName);
// console.log(user["lastName"]);
// console.log(user.age);
// console.log(user.getFullName());

// let mainObj = {
//   hasDiscount: true,
//   showMsg: function () {
//     return `you${this.hasDiscount ? "" : " Don't"} Have Discount`;
//   },
// }
// console.log(mainObj.hasDiscount);
// console.log(mainObj.showMsg());

// let otherObj = Object.create(mainObj);
// otherObj.hasDiscount = false;
// console.log(otherObj.hasDiscount);
// console.log(otherObj.showMsg());

//////////////////// Assign ////////////////////

// const src1 = {
//   prop1: "1",
//   prop2: "2",
//   method1: function () {
//     return "method1";
//   },
// }
// const src2 = {
//   prop3: "3",
//   prop4: "4",
//   method2: function () {
//     return "method2";
//   },
// }
// const target = {
//   prop: "5",
// }
// Object.assign(target, src1, src2, { prop6: "6" });
// console.log(target);
// const myObj = Object.assign({}, target, { prop7: "7" });
// console.log(myObj);
// console.log(myObj.prop1);
// console.log(myObj.prop7);
// console.log(myObj.prop6);
// console.log(myObj.prop4);
// console.log(myObj.method1());
// console.log(myObj.method2());

//////////////////// Delete & Freeze ////////////////////

// const user = {
//   name: "Asaad",
//   age: 22,
// }
// console.log(user);
// console.log(user.name);
// console.log(user.age);
// // delete user; // Delete Property Not Object
// delete user.name;
// console.log(delete user["age"]);
// console.log(user);
// console.log(user.name);
// console.log(user.age);

// const username = 22;
// console.log(username);
// console.log(delete username);
// console.log(username);

// const freezedObj = Object.freeze({ age: 22 });
// console.log(freezedObj);
// console.log(freezedObj.age);
// console.log(delete freezedObj.age);
// console.log(freezedObj);
// console.log(freezedObj.age);

//////////////////// Constructor ////////////////////

// function Phone(serial, color, price) {
//   this.serial = serial;
//   this.color = color;
//   this.price = price - 100;
//   this.model = "Samsung";
//   this.Info = function () {
//     return `the Device Color is ${this.color} and the price ${this.price} and the model ${this.model}`;
//   }
// }
// let phone1 = new Phone(123, "Red", 500);
// let phone2 = new Phone(456, "Black", 600);
// let phone3 = new Phone(789, "Silver", 700);
// let phone4 = Phone(135, "Blue", 700);

// console.log(phone1);
// console.log(phone1.serial);
// console.log(phone1.color);
// console.log(phone1.model);
// console.log(phone1.Info());

// console.log(phone2);
// console.log(phone2.serial);
// console.log(phone2.color);
// console.log(phone2.price);
// console.log(phone2.model);
// console.log(phone2.Info());

// console.log(phone3);
// console.log(phone3.serial);
// console.log(phone3.color);
// console.log(phone3.price);
// console.log(phone3.model);
// console.log(phone3.Info());

// console.log(phone1 instanceof Phone);
// console.log(phone2 instanceof Phone);
// console.log(phone3 instanceof Phone);
// console.log(phone4 instanceof Phone);


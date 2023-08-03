// Primitive

// 7 types : String, Number, Boolearn, null, Undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3

console.log(typeof scoreValue); // return data type number 

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 356795316849846519848468415644n
console.log(typeof bigNumber); // return data type bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shakitiman","Naagraj","Doga"]
let myObj = {
    name: "Gautam Singh",
    age:  22,
}

const myFunction = function(){
    console.log("Hello Gautam Singh");
}
console.log(typeof myFunction); // return data type function
console.log(myFunction);
console.log(typeof heros); // return data type object

// Stack (Primitive), Heap (Non-Primitive)

let myUserName = "gautamsingh1998"

let anotherName = myUserName
anotherName = "gautamsingh"
console.log(myUserName);
console.log(anotherName);

let userOne = {
    email: 'gautamsinghcpj@gmail.com',
    upi: "gautam@ybl"
}

let userTwo = userOne
userTwo.email = "krishna@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


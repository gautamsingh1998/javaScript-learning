// singleton

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Gautam",
    "full name":"Gautam Singh",
    [mySym]: "myKey1",
    age : 18,
    location: "Gorakhpur",
    email: "gauatmsinghcpj@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "gautamsingh@luminoguru.com"
//Object.freeze(JsUser)
JsUser.email = "gautamsingh@microsoft.com"

console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS User , ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

// Object singlton

//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1213abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Gautam",
            lastName: "Singh"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

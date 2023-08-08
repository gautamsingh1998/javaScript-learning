const isUserLoggedIIn = true

if (isUserLoggedIIn) {
    console.log("User is login ");
}

// <, >, <=, >=, == != ,===

if (2 == "2") {
    console.log("executed");
}

if (2 === "2") {
    console.log("executed");
}

const temperature = 41

if (temperature === 41) {
    console.log("less than 50");
} else {
    console.log("temperature is greater");
}

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`User power: ${power}`);
} 

const balance = 1000

// if (balance === 1000) console.log("test");
 if (balance < 500) {
    console.log("less than 500");
 } else if (balance < 750) {
    console.log("less than 750");
 } else if (balance < 900) {
    console.log("less than 900");
 } else {
    console.log("less than 1200");
 }

 const userLoggedIIn = true
 const debitCard = true
 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if (userLoggedIIn && debitCard && 2==3) {
    console.log("Allow to buy course");
 }

 if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User login");
 }

 const month = 3
 switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Default case Match");
        break;
 }

 const userEmail = "h@hitesh.ai"

 if (userEmail) {
    console.log("Got user email");
 } else {
    console.log(" Don't have user email");
 }

 // false values
 // false , 0 , -0, BigInt 0n, "",null, undefined, Nan

 // true value
 // "0", "false", " ", [], {}, function(){} 

 if (userEmail.length === 0) {
    console.log("Array is empty");
 }


 const emptyObj = {} 
 if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
 }

 //Nullish Coalescing operator (??): null undefined

 let val1;
 /* val1 = 5 ?? 10
 val1 = null ?? 10 */

 //val1 = undefined ?? 15
 
 val1 = null ?? 10 ?? 15

 console.log(val1);

 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");;
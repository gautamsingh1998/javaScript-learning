

function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("T");
    console.log("A");
    console.log("M");

}

sayMyName()

/* function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

addTwoNumbers(5,10) */

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(5,10)
console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

console.log(loginUserMessage("Gautam Singh"));

function calculationCartPrice(...num1) {
    return num1

}
console.log(calculationCartPrice(200,400,500));

const user = {
    username: "gautam",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]

}
console.log(returnSecondValue(myNewArray));

function one() {
    const username =  "Gautam"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    two()
}
one()


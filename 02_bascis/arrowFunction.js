const user = {
    username: "gautam",
    price: 999,

    welcomeMessaage: function() {
        console.log(`${this.username.toLocaleUpperCase()}, Welcome to website`);
        console.log(this);
    }

}
/* 
user.welcomeMessaage()

user.username = "Sam"
user.welcomeMessaage()
 */
//console.log(this);

/* function chai() {
    let username = "Gautam"
    console.log(this.username);
}
chai()
 */
/* 
const chai = function () {
    let username = "Gautam"
    console.log(this.username);
}

chai() */


const chai = () => {
    let username = "Gautam"
    console.log(this.username);
}

//chai()

/* const addTwo = (num1, num2) => {
    return num1 + num2
} */

//const addTwo = (num1, num2) => num1 + num2

//const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Gautam"})

console.log(addTwo(3,4));

const name = "Gautam Singh"
const repoCount = 50

console.log(name+ repoCount+"Value");
console.log(`Hello my name is ${name} and my repo count is ${ repoCount}`);

const gameName = new String('gautam-singh')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('a'));
console.log(gameName.charAt(3));

const newString = gameName.substring(2,4)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "    gautam   "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove the space

const url = "https://gautam.com/gautam%20singh"
console.log(url.replace("%20", '-'));
console.log(url.includes('sundar')); // false


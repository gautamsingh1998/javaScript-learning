console.log("Array");

const myArr = [0,1,2,3,4,5,6,7,8,9]
console.log(myArr);

const myHeors = ["Ram","Krishna","Radaha","Gautam","Ravi"]
console.log(myHeors);

const myArr2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(myArr2[5]);

// Array Methods

//myArr.push(6) // add the value
//myArr.push(11)

//myArr.pop() // remove the element last index

//myArr.unshift(9) // add the element first index 
//myArr.shift() // remove the element first index


console.log(myArr.includes(9));

console.log(myArr.indexOf(9));

console.log(myArr);

const newArr = myArr.join() // change the data type array to string
console.log(newArr);
console.log(typeof newArr);

// Slice and Splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["Thor", "Ironman","Captain","Spiderman"]
const dc_heros = ["Superman","Flash","Batman"]
//marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros) // two array merged and return the single array
console.log(allHeros);

const all_new_heros = [... marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Gautam")); // false
console.log(Array.from("Gautam")); // convert the array from
console.log(Array.from({name: "Gautam"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

//First Method
let arr = [1, 2, 3, [4, 5], [6, 7, [9, 10]]];
let f1Array = arr.flat(Infinity);
let f2Array = arr.flat(2);
console.log(f1Array);
console.log(f2Array);

// Second Method
let arr1 = [1, 2, 3, [4, 5], [6, 7, [9, 10]]];

function flattenArray(arr) {
  let flattened = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      flattened = flattened.concat(flattenArray(element));
      console.log()
    } else {
      flattened.push(element);
    }
  });

  return flattened;
}

let flattenedArray = flattenArray(arr1);
console.log(flattenedArray);
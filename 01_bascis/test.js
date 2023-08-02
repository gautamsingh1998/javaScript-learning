console.log("Hello, Gautam Singh");
const str = "Gautam Singh"
console.log(str);


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
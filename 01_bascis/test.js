console.log("Hello, Gautam Singh");
const str = "Gautam Singh"
console.log(str);


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
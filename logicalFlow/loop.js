// For Loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        console.log(" 5 is best number");
    }
   console.log(element);
}

/* let array = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log( element);
    
} */

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        
    }
    
}
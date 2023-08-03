console.log(Date); // return  data type function

let myDate = new Date()
console.log(myDate); // return 2023-08-03T12:35:13.497Z
console.log(myDate.toDateString()); // return Thu Aug 03 2023
console.log(myDate.toString()); // return Thu Aug 03 2023 12:33:29 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString()); // return 8/3/2023, 12:35:13 PM

console.log(typeof myDate);  // return data type object.

let myCreateDate = new Date(2023,0,23)
console.log(myCreateDate.toDateString()); // return Mon Jan 23 2023

let myTimeStamp = Date.now()
console.log(myTimeStamp); // return 1691066627495

console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
})




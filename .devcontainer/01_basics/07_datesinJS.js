// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 4, 22)
// let myCreatedDate = new Date(2024, 4, 22, 6, 4)
// let myCreatedDate = new Date("2024-04-22")
let myCreatedDate = new Date("04-22-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is ${newDate.getTime()}`

newDate.toLocaleString('default', {
    weekday: "long"
})
// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

// const bigNumber = 34563438898877668877n

// Referencen(Non primitive) 
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "saurabh",
    age: 24,
}

const myFunction = function() {
    console.log("Hello saurabh!");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);
// console.log(typeof id);

// Memory:

// Stack (Primitive), Heap (Non-Primtive)

let myName = "SaurabhKumar"

let anothername = myName
anothername = "Chaiorcode"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "saurabhrajgupta587@gmail.com",
    upi: "rajsaurabh225@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
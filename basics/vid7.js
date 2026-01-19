// primitive                   // JAVASCRIPT is a dynamically typed language

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id === anotherId); // false


const bigNumber = 3456789012345678901234567890n


// Reference (Non Primitive) 

//  Object, Array, Function 

const heroes = ["shaktiman", "naagraj", "doga"]

 let myObj = {
    name: "hiren",
    age: 21,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof id);
// ******************/////////////objects////////////////////

// singleton ';- made by constructor

// WHEN WE DECLARE IT LIKE LIERALS IT IS NOT A SINGLETON


// Object.create //// constructor method makes  a singleton

// OBJECT LITERALS

const mySym = Symbol("key1");


const JsUser = {
    name: "hiren",
    'full  name': "hiren dadhwal",
    [mySym]: "mykey1value",
    age: 20,
    location: "Jaipur",
    email: "hiren@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full  name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "hiren@xyz.com"
// Object.freeze(JsUser); // it will make object immutable
JsUser.email = "hiranium@xyz.com" // it will not change the email as object is freezed
// console.log(JsUser.email); 

JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





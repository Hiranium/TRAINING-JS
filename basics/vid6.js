// comparison operators


// console.log(5 > 3); 
// console.log(2 < 4); 
// console.log(7 >= 7); 
// console.log(6 <= 5); 
// console.log(10 == 10); // equal to
// console.log(8 != 3); // not equal to

// strict equality and inequality
// console.log(5 === '5'); // false
// console.log(5 !== '5'); // true

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
                                            //    very less preffered comparison shouldn't be done like this              
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined <= 0); // false

// === strict check (checks value and datatype) ///// best practice to use this// most preferred way
console.log("5" === 5); // false
console.log(5 === "5"); // false
// *******************Immediately Invoked Function Expressions IIFE****************************************
  
// *****TO PREVENT POLLUTIONN OF GLOBAL SPACE IFFE IS USED 

 (function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
 })();

( (name)  => {
    console.log(`DB CONNECTED TWO ${name}`);   
} )('hiren')



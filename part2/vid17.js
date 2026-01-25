// *******************************************FUNCTIONS AND PARAMETERS********************************************/


function sayMyName(){ 
    console.log("H");
    console.log("I");
    console.log("R");
    console.log("E");
    console.log("N");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
    // console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result // result ke baad any line of code will not be executed
       return number1 + number2
}
// addTwoNumbers(Infinity, undefined)//NaN not a number

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "Raju"){
    if(username === undefined)// can also be written as (!username)
    {
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("hiren"))
console.log(loginUserMessage("hiren"))







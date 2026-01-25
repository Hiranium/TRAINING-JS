// ***********************Functions and Objects ******************

//  function calculateCartPrice(val1,val2 ,...num1){
    //  return num1
// }

//  console.log(calculateCartPrice(200,400,500))

const user = {
    username: "hiren",
    price: 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.usrename} and price is ${anyobject.price}`)       
}

// handleObject(user)
handleObject({
    username: "hiren",
    price: 499
})

const myNewArray = [200, 300, 400, 555]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 555]));

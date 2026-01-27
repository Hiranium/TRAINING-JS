// ************************Scope level and mini hoisting****************************************


function one (){
    const username = "hiren"

    function two (){
        const website = "youtube"
         console.log(username);

    }
    // console.log(website);

    two()

}

one()
if (true) {
    const username = "hiren"
    if (username === "hiren") {
        const website = " youtube"
        console.log(username + website);
    }   
    // console.log(website);
}

//  console.log(username)


// ********************************INTRESTING****************************************




console.log(addone(5))
function addone(num){
    return num  + 1
}



const addTwo = function (num){
    return num + 2
}
// addtwo(5)


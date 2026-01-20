//********************const and variables******************//


const accountId = 47220
let accountEmail = "hiren@google.com"
var accountPassword =  "46290"
accountCity = "Jaipur"   
let accountState;

// accountID = 2 // not allowed

accountEmail = Process.env.EMAIL_USER
accountPassword = Process.env.EMAIL_PASS
accountCity = "bengaluru"

EMAIL_USER=dummy
EMAIL_PASS=dummy


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
comment space -> prefer not use  var
because of issue in block scope and functional scope 
*/ 



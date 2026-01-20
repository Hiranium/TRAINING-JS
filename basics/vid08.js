// Stack (Primitive),   //Heap memory(Non primitive)

let myYouTubename  = "Tasmanian husky"  // Stack

let anothername = myYouTubename
anothername = "German shepherd"

console.log(myYouTubename);  // Tasmanian husky
console.log(anothername);   // German shepherd

let user1 = {
    email: "user@example.com",
    upi: "user@bank"
}

let user2 = user1

user2.email = "user2@example.com"|

console.log(user1.email);  
console.log(user2.email); 
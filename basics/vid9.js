//  Strings in javaScript
 const name = "hiren"
 const repoCount = 50


//  console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
 

 const gameName = new String("CALL of Duty")

    // console.log(gameName[0]);
    // console.log(gameName.__proto__);


    // console.log(gameName.length);
    // console.log(gameName.toUpperCase());
    // console.log(gameName.charAt(5));
    // console.log(gameName.indexOf("f"));

    // const newString = gameName.substring(0, 4); // 0-1-2-3 last not included i.e 4
    // console.log(newString);

// const anotherString = gameName.slice(-9, 4);    
// console.log(anotherString);
//  -9 means start from last 9th index and go to 4th index but not include 4th index

const newStringOne = "  hiren  "
console.log(newStringOne);
console.log(newStringOne.trim()); // removes spaces from starting and ending

const url = "https://www.youtube.com/hiren%20raj"

url.replace("%20", "-");

console.log(url.replace("%20", "-"));

console.log(url.includes("youtube"));

console.log(url.split("/")); // splits the string into array wherever / is found


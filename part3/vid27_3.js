const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(  function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })   

// function printMe(item){
//     console.log(item);
// }


// codingt.forEach(printMe);


// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })


const myCoding = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "java",
        langFile: "java"
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.langName, item.langFile);
})
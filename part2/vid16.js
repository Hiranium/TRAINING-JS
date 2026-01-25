//**************************Object de-structure and JSON API intro ****************************/

const course = {
    coursename: "JavaScript in hindi",
    price: 999,
    courseInstructor: "Hitesh Choudhary",
}


// course.courseInstructor = "Code with Harry"

const {courseInstructor: instructor} = course;

// console.log(courseInstructor);  // Hitesh Choudhary
console.log(instructor);  // Hitesh Choudhary

// const navbar = ({company}) => {

// }
// navbar(company = "hiren")

// {
//    "name": "hiren",
//    "age": "21",
//    "company": "Microsoft"
// }

[
    {},
    {},
    {}
]
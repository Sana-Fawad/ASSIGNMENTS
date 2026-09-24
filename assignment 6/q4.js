const studentList = ["Ali", "Ahmed", "Sara"];

const courseName = "JavaScript Programming";

const totalStudents = 25;
console.log(Array.isArray(studentList));
console.log(Array.isArray(totalStudents));
console.log(Array.isArray(courseName));
const showArray = () =>studentList;
console.log(showArray());

const displayValue = (value) => console.log(value);

let userInput = prompt("Enter something:");


displayValue(userInput);



const students = ["ali", "ahmed", "hammad", "lily", "liba"];

// 1. Push
students.push("kiwi");
console.log(students); 

// 2. Pop
console.log(students.pop()); 
console.log(students); 

// 3. Unshift
students.unshift("sara");
console.log(students);
// 4. Shift
let remove = students.shift();
console.log(remove); 
console.log(students);

// 5. Final Length
console.log(students.length); 
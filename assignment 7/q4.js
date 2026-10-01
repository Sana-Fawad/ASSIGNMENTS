let employee1 = {
  id: 101,
  firstName: "John",
  lastName: "Doe",
  department: "IT",
  designation: "Developer",
  salary: 4000,
  officeLocation: "Building A" 
};
console.log(employee1.firstName);
console.log(employee1.department);
console.log(employee1['designation']);
console.log(employee1['salary']);
employee1.email ='io@gmail.com'
employee1.salary=5400;
delete employee1.officeLocation;
console.log("Final Employee 1 Object:", employee1);
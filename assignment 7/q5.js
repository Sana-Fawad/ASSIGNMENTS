
let employee1 = {
  id: 101,
  firstName: "John",
  lastName: "Doe",
  department: "IT",
  designation: "Developer",
  salary: 4500
};


employee1.completeName = function() {
  return this.firstName + " " + this.lastName;
};


employee1.idAndDept = function() {
  return "Employee " + this.id + " works in the " + this.department + " department.";
};


console.log(employee1.completeName());
console.log(employee1.idAndDept());



let employee2 = {
  id: 102,
  firstName: "Jane",
  lastName: "Smith",
  department: "HR",
  designation: "Manager",
  salary: 5000,
  
  completeName: function() {
    return this.firstName + " " + this.lastName;
  },

  idAndDept: function() {
    return "Employee " + this.id + " works in the " + this.department + " department.";
  }
};


console.log(employee2.completeName());
console.log(employee2.idAndDept());
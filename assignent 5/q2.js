function greet() {
    let message = "welcome!";
    console.log(message);
}


let name = sayHello("ali");
function sayHello(name) {
    return "welcome " + name;
}


function addNumbers(num1, num2) {
    return num1 + num2;
}


let result = addNumbers(10, 5);
console.log("The sum is:", result);
greet();
console.log(name);
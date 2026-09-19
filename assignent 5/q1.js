function add() {

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
// 1. ADDITION FUNCTION
  let result = num1 + num2;

  
  console.log("Result: " + result);
}

// 2. SUBTRACTION FUNCTION
function subtract() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let result = num1 - num2;

  console.log("Result: " + result);
}

// 3. MULTIPLICATION FUNCTION
function multiply() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let result = num1 * num2;

  console.log("Result: " + result);
}

// 4. DIVISION FUNCTION
function divide() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);


  if (num2 === 0) {
    alert("Cannot divide by zero");
  } else {
    let result = num1 / num2;
    console.log("Result: " + result);
  }
}
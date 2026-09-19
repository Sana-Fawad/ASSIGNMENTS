let n = parseInt(prompt("Enter a number:"));


console.log("Row \t Output");

for (let row = 1; row <= n; row++) {
    let output = "";
    

    for (let col = 1; col <= row; col++) {
        output += col;
    }
    

    console.log(row + " \t " + output);
}
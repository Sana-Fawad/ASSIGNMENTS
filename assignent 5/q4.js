let totalCalled = 0; 
for (let rollNumber = 1; rollNumber <= 20; rollNumber++) {
    

    if (rollNumber === 13) {
        continue; 
    }
    
 
    if (rollNumber === 18) {
        console.log(" Stopping attendance.");
        break; 
    }
 
    console.log("Teacher calls out: Roll Number " + rollNumber);
    totalCalled++; 
}
console.log("total numbers called:" +totalCalled);
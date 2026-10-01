
const group1 =[78, 45, 92, 66, 88, 54, 91, 73];


const manageMarks = (marksArray) => {

 
  let group2 =[63,44,56,67,88,32]
  let a = [...marksArray, ...group2];
  console.log("1. Combined List:", a);

  
  let b = a.slice(2, 5);
  console.log("2. Selected Portion:", b);

  let c = [...a];
  c[4] = 77;
  console.log("3. Modified List:", c);

  
  console.log("4. Total Marks Count:", c.length);

 
  let d = [...c].sort((a, b) => a - b);
  console.log("5. Lowest to Highest:", d);

  let e = [...d].reverse();
  console.log("6. Reversed Highest to Lowest:", e);
};


manageMarks(group1);

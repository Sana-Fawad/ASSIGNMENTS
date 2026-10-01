const prices =[1200, 450, 3000, 750, 1500, 250];

let a = [...prices].sort((a, b) => a - b);
console.log(a);

let b = [...prices].sort((a, b) => b - a);
console.log(b);

console.log(prices);

let c = [...prices].reverse();
console.log(c);


let d = [...prices].sort((a, b) => Math.random() - 0.5);
console.log(d);
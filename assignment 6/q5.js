const products= ['Laptop', 'Mouse', 'Keyboard', 'Monitor',
'Headphones'];


console.log(products.length);
console.log(products.at(0));
console.log(products.at(4))
products.push('printer')
console.log(products);
products.unshift('phone');
console.log(products);
products.pop();
console.log(products);
products.shift();
console.log(products);
const prod = ["tomato","potato"]

const combine = products.concat(prod);
console.log("combined array:" + combine);

const list = products.slice(2);
console.log(list);
products.splice(0,2,'laptop2','ipad');
console.log(products);
console.log(products.join("*"));
console.log(Array.isArray(products))

const display = arr => console.log(arr);


display(products);
const strings = ["ali", "ahmed", "lila"];
const strings1 = ["hiba", "aisha", "liba"];

const children = strings.concat(strings1);
console.log("Combined Array:", children);

const slicedPortion = children.slice(0, 2);
console.log("Sliced Portion (0 to 2):", slicedPortion);

children.splice(2, 1); 
console.log("Array after removing with splice:", children);


children.splice(2, 0, "ok", "okay"); 
console.log("Array after adding with splice:", children);

delete children[4]; 


console.log("Array after delete:", children);
console.log("Length after delete:", children.length);
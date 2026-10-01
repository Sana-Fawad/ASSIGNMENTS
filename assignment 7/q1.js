const students= ['Ali', 'Sara', 'Ahmed', 'Ayesha', 'Hamza',
'Sara', 'Bilal'];
let v = students.includes('Ayesha'); 
console.log(v);
let Postion= students.indexOf('Sara') + 1 ;
console.log("POsition of sara :  " + Postion);
let postiotn2=students.lastIndexOf('Sara') + 1 ;
console.log("last index of sara is : " +postiotn2);
let a = students.find(name=>name.startsWith('A'));
console.log(a);
let h= students.findIndex(name=> name.startsWith('A'));
console.log(h);
let b = students.findLast(name=>name.startsWith('A'));
console.log(b);
let i= students.findLastIndex(name=> name.startsWith('A'));
console.log(i);

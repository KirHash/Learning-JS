console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
The reason equality check and comparisions work different is because,
comparisions convert null to a number and treating it as 0
Thats why 1st case is false and 3rd case is true
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

console.log("2" === 2);



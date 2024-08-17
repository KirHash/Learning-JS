//****************************** Numbers ***********************************************************

const score = 400
console.log(typeof (score));
 
const bal = new Number(100)
console.log(bal);

balStr = bal.toString()
console.log(balStr.length);
console.log(bal.toFixed(1));

const num1 = 23.6783
console.log(num1.toPrecision(3));

const num2 = 124.7593
console.log(num2.toPrecision(3));

const num3 = 1234.8369
console.log((num3.toPrecision(3)));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-ID")); //Indian Standards of counting


//******************************* Maths ***********************************************************

console.log(Math);
console.log(Math.abs(-4));  //Absolute values
console.log(Math.round(4.34)); //Round-off
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3))
console.log(Math.min(4, 6, 8, 9, 1))
console.log(Math.max(4, 6, 8, 9, 1))

console.log(Math.random()); //Gives random values between 0 to 1
console.log((Math.floor(Math.random()*10)) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);







 




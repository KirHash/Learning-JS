// ******************************Conversions***************************************
// let score = "45"
// let score = "45xga"
// let score = null
// let score = undefined
// let score = true
let score = "kirhash"
console.log(typeof score);
console.log(typeof (score));

let valueOfNumber = Number(score)
console.log(typeof valueOfNumber);
console.log(valueOfNumber);

// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "kirhash"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let num = 45
let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);

// ******************************Operations***************************************
let value = 4
let negValue = -value
console.log(negValue);

let str1 = "hello"
let str2 =" world"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Postfix increment
let a = 2
const b = a++;

console.log("a:",a, "b:",b);

// Prefix increment
let x = 2
const y = ++x;

console.log("x:",x, "y:",y);



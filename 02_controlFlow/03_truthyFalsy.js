// When we assume the statement is true or false, it becomes truthy or falsy

// Truthy Case
const userEmail1 = "kirhash@google.com"

if(userEmail1){
    console.log("Got user email");
    
}
else{
    console.log("Do not have user email");
}

if (userEmail1.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
    
}

// Falsy Case
const userEmail2 = ""

if(userEmail2){
    console.log("Got user email");
    
}
else{
    console.log("Do not have user email");
}


// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
"0", 'false', " ", [], {}, function(){}

// Nullish Coalescing Operator (??)

// Works on null & undefined as a safety check
// By Default it return the first value that is not null or undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

let val2;
val2 = null ?? 10
console.log(10);

let var3;
var3 = undefined ?? 15
console.log(var3);

let var4
var4 = undefined ?? 10 ?? 20
console.log(var4);

// Terniary Operator

// Syntax -> condition ? true : false
const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");






// Primitive or basic types
// They are generally call by value, when they are copied then the value is not referenced but a copy is formed and the changes are made in that copied value 
/*
Types:
String
Number
Boolean
Null
Undefined
Symbol
BigInt
*/

// JS is a dynamically typed langauge as it doesnt hold information about the typed value while declaration

//Non-Primitive or reference types
// These types of values can be directly allocated to the memory through reference
/*
Types:
Array
Objects
Functions
*/

// **********************************************************************************************************************

/* 
1. Stack is used for Primitive type. 
   We get a copy of the variable that is declared

2. Heap is used for Non-Primitive type. 
   We get a reference of the variable declared
*/

// Stack Example
let myName = "kirhash"

let anotherName = myName
anotherName = "gravitas"

console.log(myName);
console.log(anotherName);
/*
When the variable is declared, 
you are not given the variable itself but a copy of the variable and the changes are made in that copy 
*/

// Heap Example
let userOne = {
    email: "username@google.com",
    id: "userid@xyz"
}

let userTwo = userOne
/*
When a variable that is non primitive in nature is declared,
the heap stores the value and the variable's value is referenced from the heap by the variable in stack
*/
userTwo.email = "kirhash@google.com"

console.log(userOne.email);
console.log(userTwo.email);

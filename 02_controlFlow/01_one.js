// if Statements

const temp = 41
if (2 == '2') {
    console.log("executed");
}

if (2 === '2') {
    console.log("executed");
}
else{
    console.log("not executed");
    
}

if (temp < 50){
    console.log("less than 50");
    
}
else{
    console.log("tempretuare is greater than 50");
}
console.log("Execute");

// <, >, <=, =>, ==, !=, ===, !==

const balance = 1000

// Implicit If-Statement
// if (balance > 500) console.log("test"), console.log("test2"); //Bad 

if (balance < 500){
    console.log("less than 500");
    
}
else if (balance < 750){
    console.log("less than 750");
}
else if (balance < 900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// Logical Operators

// and Operator
if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
    
}

// or Operator
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
    
}


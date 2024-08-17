// let a = 10
// const b = 20
// var c = 30

/*
1. Global Scope: A variable that is defined outside of all functions in a program
2. Local or Block Scope: A variable whose visibilty is limited to a specific block such as function
*/

// var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // d = 50
    console.log("INNER: ", a);
}

console.log("OUTER: ", a);
// console.log(b);
// console.log(c);
// console.log(d);

// Nested Scope
function one() {
    const username = "kirhash"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //Returns Error

    two()
}
// one()

// Child.variable can access parent.variable but not otherwise

if (true){
    const username1 = "kirhash"
    if (username1 === "kirhash"){
        const website1 = " google"
        console.log(username1 + website1);
        
    }
    // console.log(website1); //Returns Error
    
}
// console.log(username1); //Returns Error

// ************************************Interesting****************************************************************
console.log(addOne(5))
function addOne(num){ //addOne is a function
    return num + 1
}


addTwo(5)
const addTwo = function(num){ //addTwo is a function as well as an expression
    return num + 2
}

function myName(){
    console.log("K");
    console.log("I");
    console.log("R");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    
}

myName //Reference of the function
myName() //Calling of the function

function addition(num1, num2) {
    console.log(num1 + num2);
    
}

addition(2, 4)
addition(2, "4")
addition(2, "a")

const res = addition(3, 5)
console.log("Result:", res);

function addition(num3, num4) {
    // let res1 = num3 + num4
    // return res1  
    return num3 + num4
}

const res1 = addition(5, 4)
console.log("Result:", res1);

// function loginUser(username) {
//     return `${username} has logged in`
// }

// console.log(loginUser("kirhash"));

function loginUser(username) {
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
    // }
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} has just logged in`
}

console.log(loginUser());

//Use of rest operator
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400)); //Only returns the first value

function calculateCartPrice1(...num) {
    return num
}
console.log(calculateCartPrice1(200, 300, 400));

function calculateCartPrice2(val1, val2, ...nums) {
    return nums
}
console.log(calculateCartPrice2(200, 300, 400, 500, 600));

// Accessing object in functions
const user = {
    username: "kirhash",
    price: 99
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

// Accessing array in functions
const myNewArr = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([100, 200, 300, 400]));

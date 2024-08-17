// this keyword refers to the current context

const user = {
    username: "kirhash",
    price: 199,

    welcomeMesage: function () {
        console.log(`${this.username}, welcome to the website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMesage()

// user.username = "sam"
// user.welcomeMesage()

console.log(this); //Return empty object since "this" keyword is accessing global scope

// Note: When running the "console.log(this)" on a browser console environment, it returns Window object
// For example(fetched from browser console):
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

function chai() {
    let username2 = "kirhash"
    console.log(this.username2); //Returns undefined
    
}
// chai()

const chai2 = function () {
    let username3 = "kirhash"
    console.log(this.username3);
    
}
// chai2()

// Arrow Function
const chai3 = () => {
    let username3 = "kirhash"
    console.log(this); //Returns empty object
    
}
// chai3()

// Basic Arrow function with Explicit Return
const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(4, 7));

// Implicit Return (without the use of return keyword)
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
// console.log(addThree(4, 7, 5));

const sumThree = (num1, num2, num3) => ({username: "kirhash"})
console.log(sumThree());



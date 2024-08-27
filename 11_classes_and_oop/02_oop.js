// Object literal
const user = {
    username: "krihash",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user deatils fom minecarft");
        // console.log(`Username: ${username}`); // Throws an error as it doesnt understand the variable "username"
        // console.log(`Username: ${this.username}`);
        console.log(this); // Prints the current context
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

// Constructor function: It provides the user with the ability to create multiple instance using one object literal
// const promiseOne = new Promise()
// const date = new Date()

// this.username provides the current context and username is the value we are passing
function User(username, loginCount, isLoggedIn){
    this.username = username; 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

// const userOne = User("kirhash", 12, true)
const userOne = new User("kirhash", 12, true)
// const userTwo = User("ChaiAurJS", 8, false)
const userTwo = new User("ChaiAurJS", 8, false) // `new` instances are added because when not used the values will be overwritten of one object literal by another one. So to keep both of the objects seperate `new ` is used
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // Constructor property returns the reference of the User itself


/*
When we use `new` keyword, an empty object is created called an instance 
1. A new object is created
2. A constructor function is called because of the `new` keyword. It packs all the arguments inside it and returns it.
3. `this` keyword injects all the arguments inside it
4. Then the function is returned
*/

// instanceof
// It is an operator that is used to check that if an object is an instance of a specified object
console.log(userOne instanceof User);
console.log(userTwo instanceof Object);


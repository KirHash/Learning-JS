
/*
        Function-----------
                          |
                          |
                          |
                          v
         Array--------->Object------->null
                          ^
                          |
                          |
         String------------
*/

function multBy5(num){
    return num*5
}

console.log(multBy5(5));
console.log(multBy5.power);
console.log(multBy5.prototype);
// Prototype doesn't only provide methods but also internal properties related to it


// In JS, everything is an object. Even an object can act like an object while being a function as well.

function createUser(username, score){
    this.username = username;
    this.score = score;

}

// Injecting a function in prototype
createUser.prototype.increment = function(){
    this.score++ //Jisne bhi bulaya hai, uska score badha do
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
    
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object and that new object should have reference.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function(`new` keyword). This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

// Prototype

// let myName = "kirhash     "

// console.log(myName.truelength);

let myHeroes = ['thor', 'spiderman', 'superman', 'drStrange']
let heroPower = {
    thor: "hammer",
    spiderman: "web",
    superman: "superhuman",
    drStrange: "magic",

    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.kirhash = function(){
    console.log(`Kirhash is present in all objects`);
    
}

// If we inject a power to Array. Will it by default will also be available to an Object
Array.prototype.heyKirhash = function(){
    console.log(`Kirhash says hello`);
    
}
myHeroes.heyKirhash()
// heroPower.heyKirhash() //No, the power is not transferred top to bottom in a path but bottom to top

// heroPower.kirhash()
myHeroes.kirhash()

// Prototypal Inheritance
const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChairAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);
    
}
anotherUsername.trueLength()
"Kirhash".trueLength()
"iceTea".trueLength()
Object.create // Constructor method

// object literals

const mySym = Symbol("key1") //To insert a symbol in the object with a given key

const jsUser = {
    name: "Kirhash",
    "full name": "Kirhash Github",
    age: 16,
    [mySym]: "mykey1",
    location: "Varanasi",
    email: "kirhash@google.com",
    isLoggedin: false,
    lastLoginDays: ["Tuesday", "Thursday"]
} 

console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "kirhash@yahoo.com" // How to change the values in object
// Object.freeze(jsUser) // How to lock the values of the object
jsUser.email = "kirhash@microsoft.com"
console.log(jsUser); // Will not be able to change the value of the email since the values of the object are freezed

jsUser.greeting = function(){
    console.log("Hello World!");
    
}

console.log(jsUser.greeting); //Returns a reference of the function, not the function itself
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());

// Singleton or Constructor Object

// const tinderUser = new Object() //Singleton Object
const tinderUser = {} //Non-Singleton Object

tinderUser.id = "123abs"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regUser = {
    email: "sam@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sam",
            lastName: "Charan"
        }
    }

}

console.log(regUser.fullName.userFullName.firstName);

// Combining Objects
const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj3 = {
    5: "e",
    6: "f"
}

// const obj4 = {obj1, obj2}

const obj4 = Object.assign({}, obj1, obj2, obj3) //{} is a optional parameter, but it combines all the given values and gaurentees a result
console.log(obj4);


const obj5 = Object.assign(obj1, obj2, obj3)
console.log(obj1); //Here, obj1 becomes the target for the remaining sources i.e obj2 & obj3
console.log(obj5 === obj1);

const objNew = {...obj1, ...obj2, ...obj3}
console.log(objNew);

const users = [
    {
        id: 1,
        email: "b@gmail.com"
    },
    {
        id: 2,
        email: "c@gmail.com"
    },
    {
        id: 3,
        email: "d@gmail.com"
    }
]

console.log(users[1].email)

console.log((Object.keys(tinderUser)));
console.log((Object.values(tinderUser)));

console.log((Object.entries(tinderUser)));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //Determines whether or not the object has the mentioned value

// Destructuring Objects
const course = {
    courseName: "JavaScript",
    coursePrice: "499",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: teacher} = course
console.log(teacher);

// JSON Format API

// {
//     "name": "hitesh",
//     "courseName": "JavaScript",
//     "coursePrice": "free"

// }

[
    {},
    {},
    {}
]



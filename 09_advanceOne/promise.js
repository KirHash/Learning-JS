/*
Promise: The task given to promise will not be completed after getting into queue. It is in the queue but not loaded to be completed but eventually complete later
          It is an object
          It takes a callback

There are three states of Promise:
    `pending`: Initial state (neither fulfilled nor rejected)
    `fulfilled`: The operation was completed sucessfully
    `rejected`: The operation failed





*/

// Mostly promises are seen to be consumed, not created
// fetch('http://www.github.com').then().catch().finally()

// Creation of promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task:
                    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve() //This call connects resolve() with .then()
    } ,1000)
})

//Consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
    
}) //resolve is connected with .then() 

// Single program of Promise(without storing in a variable)
new Promise(function(resolve, reject){
    setTimeout( function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

// Passing data from the network
const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username: "kirhash",
                 email: "kirhash@example.com", 
                })
    },1000)    
})

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "kirhash", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

//catch method
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((myUsername) => {
    console.log(myUsername);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log("The promise is either resolved or rejected");
    
})

// trycatch method
const promiseFive = new Promise(function(resolve, reject){
    setTimeout( () => {
        let error = true
        if(!error){
            resolve({username: "javascript", password: "js123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
} //async,await waits for the task completion, if completed only then it moves forward otherwise it gives error

consumePromiseFive()

// trycatch method
// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error: ", error);
        
//     }
    
// }
// getAllUsers()

// catch method with chaining
fetch("https://api.github.com/users/kirhash")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log("Error: ", error);
    
})

// When you send a request to promise but recieve an error 404. Will you get it in resolve or reject ?
// You will always get it as a response because it is not an error. It will be only considered an error when it is not able to request browser   
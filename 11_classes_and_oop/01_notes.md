# Javascript and Classes
No, it is primarily a prototype-based language. It just provides a class-based experience with the help of syntax. 

## OOP
It is a process in Javascript which provides objects. 

## Object
- collection of properties and methods
- toUpperCase

## Why need OOP
Sometimes the code gets messed up in such a way that it becomes a sphagetti code. OOP provides reusing of some resources without the need to create new resource everytime for the same task. 

## Parts of OOP
Object literal

- Constructor function
- Prototype or Proto
- Classes
- Instances (new, this)

## 4 Pillars of OOP
1. Abstraction
- It hides the internal details of the code or program and only shows only the functionality or required details

// API for get requests
let fetchRes = fetch(
"https://jsonplaceholder.typicode.com/todos/1");
    
// FetchRes is the promise to resolve
// it by using.then() method
fetchRes.then(res =>
    res.json()).then(d => {
        console.log(d)
    })

2. Encapsulation
- Properties and method related to JS are binded together under a single wrapper. 

const car = {
   Brand: "Honda city",
   model: "sx",
   year: 2016,
}
console.log(car.Brand)

3. Inheritance
- It is the passing down of characteristics from parent to a child so that the code can reuse features of an existing one.

4. Polymorphism
- It means the ability to call the same method on different object
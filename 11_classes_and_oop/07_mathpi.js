const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")    // Defines the property of an property of an object

console.log(descriptor);


// console.log(Math.PI);

const chai = {
    name: 'masalaChai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
        
    }
}
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {    // Changes the properties of the property of an object
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }    
}
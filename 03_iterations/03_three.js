// for of loop

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    console.log(num); 
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " " || greet == "!"){
        continue;
    }
    console.log(`Each char is ${greet}`);
    
}

// Maps and for-off loop on map

/*
It is an object that holds key-value pair and remembers the order in which original insertion is done. 
All the values in the Map's collection are unique
*/

const map = new Map()

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const [key, value] of map) {
    console.log(`The international code of ${value} is ${key}`);
    
}

// for-off loop on objects

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Forza Horizon'
}

// for (const [key, value] of myObject) { //Not iteratable
//     console.log(key, ':-', value);
    
// }

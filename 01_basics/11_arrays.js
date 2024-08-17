const myArr = [0, 1, 2, 3, 4, 5, 6, 7, true, "kirhash"]

const marvelArr = ['iron-man', 'spider-man', 'thor', 'sentry', 'doom']
const dcArr = ['supes', 'flash', 'aquaman', 'cyborg', 'batman']

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7)
/*
JavaScript arrays are mutable
JS Arrays can store a mix of data types
*/   

console.log(myArr[0]);

// Javascript arrays-copy operations create shallow copies (the changes made are also made in the original array)

// Array methods
myArr.push(8)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)         //Not much used
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(5))
console.log(myArr.indexOf(5))

const newArr = myArr.join()
console.log(newArr);
console.log(typeof newArr);

// slice
console.log("Before Slicing:", myArr);

const myNewArray1 = myArr.slice(1, 3)

console.log(myNewArray1);
console.log("After Slicing:", myArr);

// splice
console.log("Before Splicing:", myArr);

const myNewArray2 = myArr.splice(1, 3)

console.log(myNewArray2);
console.log("After Splicing:", myArr);

// More array methods
// marvelArr.push(dcArr) //Pushes data or array on the existing array

// console.log(marvelArr);
// console.log(marvelArr[5][1]);

const newMarvelArr = marvelArr.concat(dcArr) //Returns a new array with the previous two arrays combined in it
console.log(newMarvelArr);

//Spread operator (...)
const newSupes = [...marvelArr, ...dcArr] //Spread operator works like breaking of a glass
console.log(newSupes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

let useable_another_arr = another_arr.flat(Infinity)
console.log(useable_another_arr);

console.log(Array.isArray('Kirhash'));
console.log(Array.from('Kirhash')); //Converts the input values into an array
console.log(Array.from({name: 'kirhash'})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from the given values















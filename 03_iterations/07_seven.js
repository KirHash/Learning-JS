// Map function

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) => {
    return (num + 10)
})
console.log("newNums: ", newNums);

// Using For-Each loop adding 10 to every num in the array
const myNums1 = []

myNums.forEach( (num) => {
    num = num+10
    return myNums1.push(num)
})
console.log("myNums1: ", myNums1);

// Chaining
const newNums1 = myNums
                .map( (num) => {
                    return (num*10) //In chaining, these returned num values are passed on to the another chain
                })
                .map( (num) => {
                    return (num+1)
                })
                .filter( (num) => {
                    return (num >= 40)
                })
console.log("newNums1: ", newNums1);




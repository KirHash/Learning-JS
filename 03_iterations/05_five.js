// For Each loop
// It is a higher order function and a callback function
// Since it is a callback function, the function doesnt require a `name`
// It does not return values

const code = ["ruby", "js", "C++", "python", "java"]

code.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

// Case 1
code.forEach( function (items) {
    console.log(items);
    
} )

// Case 2
code.forEach( (val) => {
    console.log(val);
})

// Case 3
function printMe(value){
    console.log(value);
    
}
code.forEach(printMe)

// Case 4(Objects in an array)
const myCode = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "ruby",
        langFileName: "rb"
    }
]

myCode.forEach( (item) => {
    console.log(item.langName);
})
    

    
 
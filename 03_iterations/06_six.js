// Filter function

// Filtering using filter method

const code = ["ruby", "js", "C++", "python", "java"]

const values = code.forEach( (item) => {
   // console.log(item);  
    return item 
})

console.log("Values: ", values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// const newNums = myNums.filter( (num) => {
//     num > 4
// }) //Returns an empty array, due to explicit return

const newNums = myNums.filter( (num) => {
    return num > 4
})

console.log("newNums: ", newNums);

//Filtering using For-Each loop

const newNums1 = []

myNums.forEach( (num) => {
    if (num > 4){
        newNums1.push(num)
    }
})

console.log("newNums1: ", newNums1);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// Exercise 1
  const userBooks1 = books.filter( (book) => {
    return (book.genre === "History")
  })
  console.log("userBooks1: ", userBooks1);

// Exercise 2
  const userBooks2 = books.filter( (book) => {
    return (book.publish >= 2000)
  })
  console.log("userBooks2: ", userBooks2);

// Exercise 3
  const userBooks3 = books.filter( (book) => {
    return (book.publish >= 1995 && book.genre === "History")
  })
  console.log("userBooks3: ", userBooks3);


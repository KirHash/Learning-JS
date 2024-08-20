// reduce

const myNums = [1, 2, 3, 4]

// const total = myNums.reduce(function (accumulator, current_val){
//     console.log(`accumulator: ${accumulator} and current_val: ${current_val}`);
//     return accumulator + current_val
// }, 0)
// console.log(`The sum of the values in myNums is "${total}"`);

const total1 = myNums.reduce( (accumulator, current_val) => {
    return accumulator + current_val
}, 0)
console.log(`The sum of the values in myNums is "${total1}"`);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "web dev course",
        price: 4999
    },
    {
        itemName: "machine learning course",
        price: 5999
    }
]

const totalPriceList = shoppingCart.reduce( (acc, item) => {
    return (acc + item.price)
}, 0)
console.log(`The total price of all the courses sums upto Rs.${totalPriceList}`);

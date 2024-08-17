// Dates

let myDate = new Date()

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let specificDate1 = new Date(2024, 0, 23)
console.log(specificDate1.toDateString());

let specificDate2 = new Date(2024, 0, 23, 6, 4)
console.log(specificDate2.toLocaleString());

let specificDate3 = new Date("01-24-2024")
console.log(specificDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(specificDate3.getTime());

console.log(Math.floor(Date.now()/1000)); //Converting milliseconds into seconds

console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
console.log(myDate.getFullYear());

myDate.toLocaleString('default', {
    weekday: "long"
})









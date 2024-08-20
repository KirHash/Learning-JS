// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is the best number");
        
    }
    console.log(element);    
}

for (let j = 1; j <= 10; j++) {
    console.log(`Outer loop value ${j}`);
    
    for (let k = 1; k <= 10; k++) {
        // console.log(`Inner loop value ${k} and inner loop ${j}`);
        console.log(j + '*' + k + ' = ' + j*k);
        
    }
    
}

let mySupes = ["Flash", "Batman", "Iron-Man", "Hawkeye", "Superman"]
console.log(mySupes.length);

for (let index = 0; index < mySupes.length; index++) {
    const element = mySupes[index];
    console.log(element); 
}

// break and continue

//break keyword stops or interrupts the loop once the give conditiion is fullfilled 
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`5 is Detected`);
        break;
    }
    console.log(`Value of index is ${index}`);
    
    
}

// continue keyword skips the condition for once and carries on with the loop
for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`5 is Detected`);
        continue;
    }
    console.log(`Value of index is ${index}`);
    
    
}
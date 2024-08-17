// Immediately Invoked Function Expressions (IIFE)

// To remove the pollution caused by the variable or declarations of the global scope

// Named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
    
})();

// Simple IIFE
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('kirhash');


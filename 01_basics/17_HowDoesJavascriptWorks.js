// Javascript Execution Context
// It simply means that how a file will execute or run, that is created in JS

// JavaScript is a single-threaded, everything in JS is considered as a process

/*
Execution Contexts

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
*/

/*
JavaScript runs a file in two phases
a) Memory Creation Phase or Creation Phase
b) Execution Phase
*/

let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1+ num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
/*
Code execution in JS step-wise (as per lines)
1. Global Execution or Environment is excuted and it is allocated in `this`
2. Memory Phase: All variables are taken and the value 'undefined' is allocated to them.
                 a) val1 -> undefined
                 b) val2 -> undefined
                 c) The function is defined in this line 3
                    i) addNum
                 d) result1 -> undefined
                 e) result2 -> undefined
   The first cycle is completed
3. Execution Phase: The input values are given to the variables
                    a) val1 <- 10
                    b) val2 <- 5
                    c) As we reach line 7, result1 have its input values as addNum. So addNum creates its own Execution Context
                       i) A new variable environment and execution thread is created for addNum (New EC)
                      ii) Memory Phase and Excution Phase will occur again, but for addNum
                     iii) Memory Phase: 
                                        val1 -> undefined
                                        val2 -> undefined
                                        total -> undefined
                      iv) Execution Phase:
                                            num1 -> 10 (as, val1 is num1)
                                            num2 -> 5 (as, val2 is num2)
                                            total -> 15
                          The `total` is returned to Global Execution Context
                      After completing its work, the new Execution Context gets deleted as well 
                    d) After `total` is returned, we reach line 7 and value are alloted to result
                       i) result1 -> 15
                    e) When we reach line 8, the function `addNum` is being executed in result2
                       i) Another new variable with execution thread is created
                      ii) Memory Phase:
                                        val1 -> undefined
                                        val2 -> undefined
                                        total -> undefined
                     iii) Execution Phase:
                                            num1 -> 10
                                            num2 -> 2
                                            total -> 12
                          The `total` is returned to Global Execution Context
                      After completing its work, the new Execution Context gets deleted as well
                    f) After `total` is returned, we reach line 8 and value are alloted to result
                       i) result1 -> 12
*/                      

/*
Whenever a code is created, Global Execution Context is generally always created.
This Global EC is generally referred by `this`
All of this executes under a thread
*/

/*
Call Stack

    |                      |
    |                      |
    |                      |
    |______________________|
    |         three()      |
    |          two()       |
    |          one()       |
    |                      |
    |______________________|
    |    Global Execution  |
    |______________________|

Call Stack works on the principle of LIFO, that is Last In First Out.
The function went inside the stack at the last that same function comes out first after the call
Function three() went inside the stack last after the call and it will be popped out of the stack first
*/
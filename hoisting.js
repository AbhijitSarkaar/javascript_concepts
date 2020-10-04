/*
    Resources
    1. https://stackoverflow.com/questions/15311158/javascript-hoisting
    2. https://stackoverflow.com/questions/7506844/javascript-function-scoping-and-hoisting
    5. https://codeburst.io/javascript-demystified-02-function-hoisting-b83dcaeb265
    
    Concepts
    1. Javascript engine runs in two phases, creation and execution phase
    2. The creation phase of JavaScript where the interpreter saves the memory of the variables, but do not perform the assignments 
    3. Temporal Dead Zone 
       (Applicable for let and const. It's the time where variable exist because of hoisting, but can't access them untill they are defined (ReferenceError))
    4. Function hoisting (function declarations are hoisted, function expressions are not hoisted)
    5. hoisting is done for each scope
    6. function declaration such as function a() {} is hoisted as var a = function () {}
*/

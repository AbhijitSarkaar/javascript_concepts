/**
 * Functional programming
 * 1. Isolated functions: abstracting a computation from a program flow
 * 2. Pure functions: The function returning the same output to same input format
 * 3. Limited side effects: Side effects are function doing some activity which is not aligned to the result it needed to complete.
 *      Side effects make a function difficult to reuse. that's why pure functions are preferred.
 *      for e.g a function (method) changing some other property value (part of state) of the same object
 * 4. First class functions: Functions that can be assigned to a variable, passed into another function,
 *    or returned from another function just like any other normal value, are called first class functions.
 *      In JavaScript, all functions are first class functions
 * 5. Higher order functions: The functions that take a function as an argument, or return a function as a return value are called higher order functions.
 *    for e.g map, filter
 * 6. Lambda: When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda
 * 7. One of the core idea of functional programming is not to change things. Changing arguments passed to the functions
 *      Or changing the global variables can lead to bugs which will be difficult to detect
 * 8. In Functional programming, it's best practice to not make a function dependent on external factors. The best case is to pass
 *      a set of input and expect a output. In this case the function does not depend on anything else apart from the input/arguments
 * 
 * In Essence: 
 *  1) Don't alter a variable or object - create new variables and objects and return them if need be from a function. 
 *     Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. 
 *     So changing a value in newArr would change the value in arrVar.

    2) Declare function parameters - any computation inside a function depends only on the arguments passed to the function, 
        and not on any global object or variable
 */

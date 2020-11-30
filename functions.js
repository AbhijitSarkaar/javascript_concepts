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
 */

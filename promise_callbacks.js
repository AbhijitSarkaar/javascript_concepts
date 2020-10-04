/*

Concepts

1. promise, some brief intro, promise object (resolve, reject)
    https://javascript.info/promise-basics
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    1. promise is an object. It represents the results of eventual completion of asynchronous operation
    2. promise can be in three states, pending, fullfilled, rejected
    3. resolve method is called when the async operation was successfull
    4. reject method is called when the async operation failed
    5. new Promise takes two callback functions resolve and reject

2. promise apis
3. async await
4. fetch implementation   
5. error handling
6. promisfication  

current
2. promise chain (then, catch, finally)
    https://javascript.info/promise-chaining
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

    1. then() method takes up to two arguments: callback functions for the success and failure. each call back function takes corresponding
    fullfilled value or the rejected value
    2. then() returns a promise
    3. then() is called asynchronously (i.e it's executed after all the js sync statements are executed )
    
*/

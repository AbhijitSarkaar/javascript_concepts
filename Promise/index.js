/**
 * frontend masters promise notes
 * once promise is ready, the handlers (.then, .catch) are put inside microtask queue
 * if microtask queue is empty, then if there's any promise in rejected state, then the window event 'unhanddledpromiserejection'
   gets called
 * promise callback notes
 * fetch inside promise
 */

scenarios

---------------------------------------------------------------------------------------
promise initialization without return value
---------------------------------------------------------------------------------------

new Promise(() => {})
returns a promise object with value undefined and state pending

---------------------------------------------------------------------------------------
promise initialization with return value
---------------------------------------------------------------------------------------

new Promise(() => {
    return 3
})
returns a promise object with value undefined and state pending

---------------------------------------------------------------------------------------
promise with resolve
---------------------------------------------------------------------------------------

new Promise((res, rej) => {
    res(100)
})
returns a promise object with value 100 and state fulfilled

---------------------------------------------------------------------------------------
promise with return resolve
---------------------------------------------------------------------------------------

new Promise((res, rej) => {
    return res(100)
})
returns a promise object with value 100 and state fulfilled

----------------------------------------------------------------------
promise with return resolve with then without return value
----------------------------------------------------------------------

new Promise((res, rej) => {
    return res(100)
}).then(res => console.log('value inside then', res))
consoles => value inside then 100
returns a promise object with value undefined and state fulfilled

----------------------------------------------------------------------
promise with return resolve with then with return value
----------------------------------------------------------------------

new Promise((res, rej) => {
    return res(100)
}).then(res => {
  console.log('value inside then', res)
  return res + 3
})
consoles => value inside then 100
returns a promise object with value 103 and state fulfilled

---------------------------------------------------------------------------------------
promise with return resolve with then with return value and then with console
---------------------------------------------------------------------------------------

new Promise((res, rej) => {
    return res(100)
}).then(res => {
  console.log('value inside then', res)
  return res + 3
}).then(res => console.log('chained then'))

consoles => value inside then 100
chained then
returns a promise object with value undefined and state fulfilled

---------------------------------------------------------------------------------------
promise.resolve(value)
---------------------------------------------------------------------------------------
it returns a resolved promise if the value is not a promise. if the value is a promise then that promise is returned

Promise.resolve()
returns a promise object with value undefined and state fulfilled

Promise.resolve(1)
returns a promise object with value 1 and state fulfilled

Promise.resolve(new Promise(res, rej) => {}))
returns a promise object with value undefined and state pending

Promise.resolve(new Promise(res, rej) => {res(1002)}))
returns a promise object with value 1002 and state fulfilled

---------------------------------------------------------------------------------------
promise.reject(value)
---------------------------------------------------------------------------------------
returns a promise object with state rejected and value with whatever value is provided

Promise.reject()
returns a promise object with value undefined and state rejected 

Promise.reject(1)
returns a promise object with value undefined and state rejected 

Promise.reject(new Promise((res, rej) => {res(1021)}))
returns a promise object with value a promise object (state fulfilled, value 1021) and state rejected 

Promise.reject(new Promise((res, rej) => {rej(1021)}))
returns a promise object with value a promise object (state rejected, value 1021) and state rejected 

---------------------------------------------------------------------------------------
promise with reject
---------------------------------------------------------------------------------------

new Promise((res, rej) => {
  rej(1)
})
returns a promise object with value 1 and state rejected 

new Promise((res, rej) => {
    throw new Error('Error value')
}).catch(err => {
    console.log('value inside catch: ', err)
})
consoles => value inside catch:  Error: Error value

new Promise((res, rej) => {
    rej('rejected string value')
}).catch(err => {
    console.log('value inside catch: ', err)
})
consoles => value inside catch:  rejected string value

------------------------------------------------
promise with reject with Error object 
------------------------------------------------

new Promise((res, rej) => {
    return new Error('error string value without throw')
}).then(res => {console.log('value inside then: ', res); return 100})
.catch(err => {
    console.log('value inside catch: ', err)
    return 99
})

returns promise with value undefined and state pending

new Promise((res, rej) => {
    throw new Error('error string value with throw')
}).then(res => {console.log('value inside then: ', res); return 100})
.catch(err => {
    console.log('value inside catch: ', err)
    return 99
})
consoles => value inside catch:  Error: error string value with throw
returns promise with value 99 and state fulfilled

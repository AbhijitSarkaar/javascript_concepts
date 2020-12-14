let p = async function foo() {
    let promise = new Promise((res, rej) => setTimeout(() => res('resolved value'), 1000))
    return await promise
}

let p1 = p().then(res => console.log(res))



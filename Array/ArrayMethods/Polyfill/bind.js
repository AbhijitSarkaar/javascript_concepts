let user = {
    name: 'Elon'
}

function printName() {
    console.log('Hi ' + this.name)
}

Function.prototype.myBind = function(...args) {
    let obj = this;
    return function() {
        obj.call(args[0])
    }
}
// printName.call(user)

let print1 = printName.bind(user)
let print2 = printName.myBind(user)

print2()
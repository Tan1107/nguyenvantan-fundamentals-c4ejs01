// khai bao ham


function calc(op, a, b) {  //ten ham
    //process
    let result
    if(op == '-')
    {
        result = a - b
    }
    else if(op == '+')
    {
        result = a + b
    }
    else if(op == '*')
    {
        result = a * b
    }
    else if(op == '/')
    {
        result = a / b
    }
    else
    {
        console.log('do not exist calculate');
    }
    return result
}
// goi ham

let random1 = Math.random(0, 10)
let random2 = Math.random(0, 10)
let random3 = Math.random(0, 10)
let a =Math.floor(random1 * 10)
let b = Math.floor(random2 * 10)
let resul = Math.floor(random3 * 10)
console.log(a, '+', b, '=', resul);
let c = a + b
console.log(a);
console.log(b);
console.log(c);







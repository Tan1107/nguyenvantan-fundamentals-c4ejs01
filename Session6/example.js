//ikhai bao ham

function calc(op, number1, number2) { //pramatter tham so dau vao
    // input
    //process  chi thuc hien 1 chuc nang duy nhat, khong lam input out put
    let result = 0
    if(op == '+'){
        result = number1 + number2
    }else if (op == '-'){
        result = number2 - number2
    }else if (op == '*'){
        result = number1 * number2
        
    }else if (op == '/'){
        result = number1 / number2
    }
    return result
}
// goi ham
let  res = calc("+", 3, 5)
let res2 = calc("+", res, 4)
console.log(res);
console.log(res2);


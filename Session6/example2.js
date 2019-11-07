function filteOdd(array) {
    let newArray = []
    for(let i = 0; i < array.length; i+=1) {
        if(array[i] % 2 == 0) {
            newArray.push(array[i])
        }
    }
    return newArray
}
let res  = filteOdd([1,3,4,5,6,7,9])
console.log(res);
console.log(filteOdd([33,35,34,4,3,2,3,12121]));


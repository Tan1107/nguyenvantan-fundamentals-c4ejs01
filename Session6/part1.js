let listNumbers = [];
let number = "";

let inputNumbers = prompt("Enter your list number, separated by space:");

for (let index = 0; index < inputNumbers.length; index++) {
    
    if (inputNumbers[index] !== " ") {
        number += inputNumbers[index];
    } else {
        number = "";
    }

    if (number !== "") {
        listNumbers.push(parseInt(number));
    }        
}

// Phần code tìm giá trị lớn nhất
let maxNumber = -999999;
for (let index = 0; index < listNumbers.length; index++) {
    if (listNumbers[index] > maxNumber) {
        maxNumber = listNumbers[index];
    }
}

console.log(maxNumber);

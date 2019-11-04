// Sequence input - Thực hiện lại bài 4 với danh sách các số nhập từ người dùng, các số cách nhau bởi dấu phẩy ‘,’
// Ví dụ:
// Enter a list of numbers, separated by ‘,’: 5, 12, 6, 61, 124
// All even numbers from entered list: 12, 6, 124
let array = prompt('moi ban nhap chuoi so cach nhau bang dau cach');
let newArray =array.split(' ').map(Number);
console.log(newArray);
let evenArray = []
for(let i = 0; i < newArray.length; i++)
{
    let n = newArray[i]%2
    if(n == 0)
    {
        evenArray.push(newArray[i])

    }
}
console.log(evenArray);



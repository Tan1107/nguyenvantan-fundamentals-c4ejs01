// Filter even - Tạo 1 list chứa trên 5 số không cách đều. Lọc ra tất cả những số chẵn trong dãy này và in ra màn hình. 
// Ví dụ: Giả sử list cho sẵn là 5, 1, 8, 92, 7, 30
// All even numbers: 8, 92, 30
let array = [5, 1, 8, 92, 7, 30]
console.log(array);

let newArray = [ ]
for(let i = 0; i < array.length; i++)
{
    let  n = array[i]%2
    if(n == 0)
    {
     newArray.push(array[i])
    }
}
console.log(newArray);

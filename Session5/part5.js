let priceTable = 
{
    HP: 600,
    DELL: 650,
    MACBOOK: 12000,
    ASUS: 400,
    ACER: 350,
    TOSHIBA: 600,
    FUJITSU: 900,
    ALIENWARE: 1000    
}
//14. tinh tong gia tri don hang voi may ASUS so luong la 5
// console.log('invoice ASUS: ', priceTable.ASUS * 5);

//15.  Lặp lại bài 14 với hãng máy và số lượng nhập từ người dùng
// let nameUserEnter = prompt('enter name table')
// let numberUserEnter = Number(prompt('enter number table'))
// console.log('invoice user enter: ', priceTable[nameUserEnter] * numberUserEnter);

//16.  Kết hợp với dữ liệu về kho bài 9 ở PART 2, thực hiện xuất kho bằng cách trừ đi số máy của hãng có trong kho với số lượng máy trong đơn hàng
let count = 
{
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30,
    ACER: 3,
    TOSHIBA: 10,
    FUJITSU: 15,
    ALIENWARE: 5      
}
// count.ASUS = count.ASUS - 5
// for(let k in count)
// {
//     console.log(k, count[k]);
// }
//17. Thực hiện lại bài 16 với hãng máy và số lượng nhập trong 1 dòng, cách nhau bởi dấu hai chấm (:)
let userEnter = prompt('enter name and number table')
let userTable = userEnter.split(':')
console.log(userTable);
count[userTable[0]] = count[userTable[0]] - userTable[1]
 for(let k in count)
 {
     console.log(k, count[k]);
     
 }
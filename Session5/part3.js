let count = 
{
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}
let userTable = prompt('enter you name table')
let numberTable = Number(prompt('enter number tbale'))
count[userTable] = numberTable

//7. in ra toan bo thong tin Object 5 moi loai may 1 dong cach nhau bang dau hai cham :
for( let k in count)
{
    console.log(k, ':', count[k]);
}

//8. tinh tong so may, bao gom tat cac loai hang trong kho
let sumTable = 0
for(let k in count)
{
    sumTable = sumTable + count[k]
}
console.log('sum table: ', sumTable);

//9. Không thay đổi khai báo, thêm 2 loại máy mới vào trong kho, FUJITSU với số lượng 15, ALIENWARE với số lượng 5
count.FUJITSU = 15
count.ALIENWARE = 5

//10. self check 
for( let k in count)
{
    console.log(k, ':', count[k]);
}

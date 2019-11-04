//18.  Sử dụng dữ liệu của kho ở PART 3 và bảng giá ở PART 4, dùng for, tính tổng giá trị của từng loại máy
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
let sumEveryTable = {}
for( let k in count)
{
    sumEveryTable[k] = count[k] * priceTable[k]
}
for( let i in sumEveryTable)
{
    console.log(i, sumEveryTable[i]);
    
}
//19. Tính tổng giá trị toàn bộ các máy trong kho
let sumTable = 0
for( let k in sumEveryTable)
{
    sumTable = sumTable + sumEveryTable[k]
}
console.log('sum table', sumTable);



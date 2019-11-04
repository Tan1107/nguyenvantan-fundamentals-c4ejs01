//11. tao thm object gia cua sp o bai 1
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

//12. in ra gia cua 1 may ASUS
console.log('price ASUS: ', priceTable.ASUS);

//13. in ra gia cua 1 may nhap tu ban phim
let nameTableUserEnter = prompt('enter name table')
console.log('price user enter: ', priceTable[nameTableUserEnter]);

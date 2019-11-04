//1.khai bao 1 object
let count = 
{
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}

//2.read - hien thi so luong MACBOOK
console.log('print number MACBOOK:' ,count.MACBOOK);

//3.read - hang may tinh nhap boi nguoi dung
let nameTable = prompt('enter you name table')
console.log('print number table your enter: ', count[nameTable]);


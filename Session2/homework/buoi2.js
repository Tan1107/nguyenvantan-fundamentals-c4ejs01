// bai tap ve nha so 1
/* Viết một chương trình yêu cầu nhập vào một tháng trong năm, sau đó in ra tháng này là mùa nào của năm: Xuân, Hạ, Thu hay Đông */
// let month = prompt('moi ban nhap thang')
// console.log(month)

if(month <= 3 && month >= 1 ) {
    console.log('thang nay thuoc mua xuan');
    
}
else if(4 <= month && month <= 6 )
{
    console.log('thang nay thuoc mua ha')
}
else if( 7 <= month && month <= 9 )
{
    console.log('thang nay thuoc mua thu')
}
else if( 10 <= month && month <= 12 )
{
    console.log('thang nay thuoc mua dong') 
}
else
{
    console.log('ban da nhap sai thang trong mot nam, moi nhap lai')
}
// done

// bai tap ve nha so 2
/* Search number in list - Tạo 1 list chứa trên 5 số nguyên không cách đều, 
sau đó yêu cầu nhập vào một số, thực hiện tìm kiếm số mà người dùng nhập vào trong list vừa khởi tạo, 
trả lời câu hỏi: “Số này có trong list không, nếu có thì có đứng thứ mấy trong dãy?”
Ví dụ: Giả sử list cho sẵn là 5, 1, 8, 92, -1, 30
Lần chạy 1:
Enter a number: -99
Not found in our list
Lần chạy 2:
Enter a number: 8
Found, position 2
*/
let chuoi = [5, 1, 8, 92, -1, 30]
let nhap = prompt('enter a number: ')
let exits = false
for(let i = 0; i < chuoi.length; i++)
{
    if(nhap == chuoi[i])
    {
        console.log('found, position: ' + i);
        exits = true
    }
}
    if(exits == false)
    {
        console.log('not found in out list');
        
    }
// done

// bai tap ve nha so 3
/* Sum number in list - Tạo 1 list chứa trên 5 số không cách đều. Tính tổng dãy này và in ra kết quả. 
Ví dụ: Giả sử list cho sẵn là 5, 1, 8, 92, -1, 30
Sum of all numbers: 135
*/
let chuoi = [5, 1, 8, 92, -1, 30]
let sum = 0
for( let i = 0; i < chuoi.length; i++)
{
    sum = chuoi[i] + sum
}
console.log(sum);
// done

// bai tap ve nha so 4
/* Sum number in list (2) - Thực hiện lại bài 2 với danh sách các số nhập từ người dùng, các số cách nhau bởi dấu cách ‘ ‘
Ví dụ:
Enter a list of numbers, separated by ‘ ‘: 5 12 6 61 124
Sum of all entered numbers: 208
*/
let nhap = prompt('moi ban nhap chuoi so cach nhau bang dau cach');
let so = nhap.split(' ');
console.log(so);
let sum = 0
for(let i = 0; i < so.length; i++)
{
    sum = Number(so[i]) + sum
}
console.log(sum);




// bai tap ve nha so 5
/* Lệnh Math.floor() trong JS có tác dụng lấy phần nguyên của một số thực
Ví dụ: Math.floor(12.4) -> 12 
Dùng lệnh trên để làm tròn kết quả của phép tính sau: 1234 / 10.
*/
console.log(Math.floor(94/10));
// done

// bai tap ve nha so 6
/* Viết một chương trình yêu cầu người dùng nhập vào một số, đếm số chữ số của số vừa được nhập vào
Ví dụ:
Enter a number: 14680
The number you entered has 5 digits
*/
let nhap = prompt('enter your number')
console.log(nhap);
let tach = nhap.split('')
console.log('the number you entered has: ' + tach.length);


// bai tap ve nha so 7
/* Một phương trình bậc hai có dạng như sau:
ax^2 + bx +  c = 0
Trong đó a, b, c thay đổi theo từng phương trình
Học viên google để nhớ / biết cách giải
Yêu cầu: Viết một chương trình cho người dùng lần lượt nhập vào ba số a, b, c. Từ đó đưa ra kết quả:
Phương trình vô nghiệm, có 1 nghiệm kép, hay 2 nghiệm phân biệt?
Nếu có nghiệm thì các nghiệm này là bao nhiêu?
*/
let a = prompt('mời bạn nhập hệ số của x^2, điều kiện phải khác 0')
let b = prompt('mòi bạn nhập hệ số của x')
let c = prompt('mời bạn nhập hệ số của x^0')
let delta = b**2 - 4*a*c
console.log(delta);
if(delta < 0)
{
    console.log('phuong trinh vo nghiem');  
}
else if(delta == 0)
{
    console.log('phuong trinh co nghiem kep')
    console.log('nghiem kep la : ',-b/(2*a));    
}
else
{
    console.log('phuong trinh co 2 nghiem x1, x2');
    console.log('nghiem x1 la: ', (-b+(delta**(1/2)))/(2*a));
    console.log('nghiem x2 la: ', (-b-(delta**(1/2)))/(2*a)); 
}





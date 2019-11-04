let count = 
{
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30
}
//4. them loai may moi TOSHIBA voi so luong 10 vao Object
    count.TOSHIBA = 10

//5 lap lai 4 voi loai may va so luong nhap tu nguoi dung
    let userTable = prompt('enter you name table')
    let numberTable = Number(prompt('enter number tbale'))
    count[userTable] = numberTable

//6.tang so luong may DELL len 10 va giam MACBOOK ve 2
    count.DELL = count.DELL + 10
    count.MACBOOK = 2

    for(let k in count)
    {
        console.log(k, count[k]);
    }
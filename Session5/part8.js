//24. Khởi tạo một danh sách bao gồm các skill
let skillList = 
[
    {
        Name: 'Tackle',
        'Minimum level': 1,
        Damage: 5,
        'Hit rate': 0.3
    },
    {
        Name: 'Quick attack',
        'Minimum level': 2,
        Damage: 3,
        'Hit rate': 0.5        
    },
    {
        Name: 'Strong Kick',
        'Minimum level': 4,
        Damage: 9,
        'Hit rate': 0.2
    }
]

//25. Hiện ra thông tin skill của nhân vật
for( let k in skillList)
{
    console.log(k, skillList[k])
}


//26. Hiện ra thông tin skill của nhân vật, chỉ hiện tên kèm số thứ tự ở đằng trước

for( let i = 0; i < skillList.length; i++)
{
    console.log(i, skillList[i].Name)
}

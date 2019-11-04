//27. Mô phỏng 1 tình huống trong combat,
//  hiện các skill có thể thực hiện trong combat, 
//  và cho người dùng chọn theo thứ tự, 
//  kiểm tra xem level của nhân vật có cho phép hay không, 
//  nếu không in ra thông báo, nếu có in ra damage tương ứng

let skillList = 
[
    {
        Name: 'Tackle',
        Minimum_level: 1,
        Damage: 5,
        Hit_rate: 0.3
    },
    {
        Name: 'Quick attack',
        Minimum_level: 2,
        Damage: 3,
        Hit_rate: 0.5        
    },
    {
        Name: 'Strong Kick',
        Minimum_level: 4,
        Damage: 9,
        Hit_rate: 0.2
    }
]
for( let i = 0; i < skillList.length; i ++)
{
    console.log(i, skillList[i].Name);
}
    let skillUser = Number(prompt('enter your number skill 0 or 1 or 2'))
    if(skillUser < skillList.length)
    {
        console.log('skill your select:', skillList[skillUser].Name);
        let levelSkill = Number(prompt('enter your level skill'))
        console.log('level skill select', skillList[skillUser].Minimum_level);
    if(levelSkill >= skillList[skillUser].Minimum_level)
    {
        console.log('Damage your skill: ', skillList[skillUser].Damage);
    }
    else
    {
        console.log('not dame');
    }
    }
    else
    {
        console.log('skill is not exist');
    }


//28. Thực hiện lại bài 27, 
// thêm xác xuất đánh trúng bằng cách tại thời điểm sử dụng skill, 
// sinh 1 số ngẫu nhiên từ 0 đến 1, 
// nếu số sinh ra nhỏ hơn Hi rate của skill, 
// hiện ra damage, 
// nếu số sinh ra lớn hơn Hit rate của skill, 
// thông báo skill đã không trúng mục tiêu



//20. su dung 1 object de mo ta nhan vat
let characterObject = 
{
Name: 'Light',
Age: 17,
Strength: 8,
Defense: 10,
HP: 100,
Backpack: 'Shield'+',' +'Bread Loaf',
Gold: 100,
Level: 2
}
// for(let k in characterObject)
// {
//     console.log(k, characterObject[k]);
    
// }

//21. Không chỉnh sửa khai báo, thêm 50 Gold cho nhân vật này
// characterObject.Gold = characterObject.Gold + 50
// for(let k in characterObject)
// {
//     console.log(k, characterObject[k])
// }

//22.  Không chỉnh sửa khai báo, thêm FlintStone vào Backback của nhân vật này

characterObject.Backpack = characterObject.Backpack + ', ' + 'MonsterDex' + ', ' + 'Flashlight'
characterObject.Gold = characterObject.Gold + 50
// for(let k in characterObject)
// {
//     console.log(k, characterObject[k])
// }

//23.Không chỉnh sửa khai báo, thêm mô tả Pocket cho nhân vật, trong Pocket chứa 1 danh sách các vật dụng bao gồm MonsterDex và Flashlight
characterObject.Pocket = 'monsterDex' + ', ' + 'Flashlight'
for(let k in characterObject)
{
    console.log(k, characterObject[k])
}
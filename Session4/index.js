// // let person = {
// //     name: 'Tan',
// //     age: 24,
// //     hometown: 'Vinh'
// // }
// // console.log(person);
// //khai bao object


// let movie = {
//     name: 'Bac Kim Thang',
//     year: 2019,
//     type: 'horror',
//     director: 'Tran huu tan'
// }
// //read
// console.log(movie.name); //cach 1
// console.log(movie.director);
// console.log(movie['name']); // cach 2


// //create

// // let newKey = prompt('enter a new key')
// // let newValue = prompt('value of key')
// // movie[newKey] = newValue
// // movie.actor = 'trinh Tai'
// // movie['actor'] = 'trinh tai'

// // read all
// for(let k in movie){

// console.log(k, movie[k]);
// }

// // update

// movie.name = 've nha di con'
// movie.actor = 'ahaha'


// //delete

// delete movie.type
// console.log(movie);

let count = {
    HP: 20,
    DELL: 50,
    MACBOOK: 12,
    ASUS: 30,
    ACER: 20,
    TOSHIBA: 12
}
// console.log(count.MACBOOK);
// let userValue = prompt('enter value HP or DELL or MACBOOK or ASUS ')
// console.log(count[userValue]);
// count.TOSHIBA = 10
// let newValues = prompt('enter your value')
// let numberValue = Number(prompt('enter your number'))     //bai 4
// count[newValues] = numberValue
// count.DELL = count.DELL + 10
// count.MACBOOK = 2
// let sum = 0
// for(k in count){
//   sum = sum + count[k]
// }
// console.log(sum);

count.FUJITSU = 15
count.ALIENWARE = 5
// for(k in count){
//     console.log(k, ':', count[k]);  // bai 6  10l0
// }

let priceTable = {
  HP: 600,
  DELL: 650,
  MACBOOK: 12000,
  ASUS: 400,
  ACER: 350,
  TOSHIBA: 600,
  FUJITSU: 900,
  ALIENWARE: 1000
}
// console.log('price ASSUS: ', priceTable.ASUS);
// let nameTable = prompt('enter your name table')
// console.log(priceTable[nameTable]);
// let bill = 5 * priceTable.ASUS
// console.log('price bill 1: ', bill);
// let nameTableBill = prompt('enter your name table to print bill')
// let numberTable = Number(prompt('enter you numbert table to print bill'))
// let newNameBill = priceTable[nameTableBill] * numberTable
// console.log('price bill: ', newNameBill);
// count[nameTableBill] = count[nameTableBill] - numberTable 
// let invoice = prompt('enter you name and number table cach nhau bang dau :')
// let moi = invoice.split(':')
// console.log(moi);
// let nameTableBill = moi[0]
// let numberTable = moi[1]
// count[nameTableBill] = count[nameTableBill] - numberTable

// for(let k in count)
// {
//   console.log(k, count[k]);
// }
// let sumEveryTable = {}
// for( let k in priceTable)
// {
//   sumEveryTable[k] = count[k] * priceTable[k]
// }
// for(let k in sumEveryTable)
// {
//   console.log(k, sumEveryTable[k]);
// }
let sumTotalTable = 0
for( let k in sumEveryTable)
{
  sumTotalTable = sumTotalTable + sumEveryTable[k]
  
}
console.log(sumTotalTable);

// let objectPeople = {
//   Name: 'Light',
//   Age: 17,
//   Strength: 8,
//   Defense: 10,
//   HP: 100,
//   Backpack: 'Shield, Bread Loaf',
//   Gold: 100,
//   Level: 2
// }
// for(let k in objectPeople)
// {
//   console.log(k, objectPeople[k]);
  
// }
// objectPeople.Gold = objectPeople.Gold + 50
// console.log('new gold object: ', objectPeople.Gold);
// objectPeople.Backpack = objectPeople.Backpack + ',' + ' FlintStone'
// console.log('new backpack: ', objectPeople.Backpack);
// objectPeople.Pocket = 'MonsterDex, Flashlight'
// console.log('new pocket: ', objectPeople.Pocket);

let skillObject = [
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
// for(let k in skillObject)
// {
//   console.log(k, skillObject[k])
// }
for(let i = 0; i < skillObject.length; i++)
{
  console.log(i, skillObject[i]);
}

let skillUser = prompt('enter your number skill')
if(skillUser < skillUser.length)
{
  console.log('skill your is accept');
  let leverSkill = prompt('enter your level skill')
  if(leverSkill > skillObject[skillUser].Minimum_level)
  {
    console.log('damega your skill: ', skillObject[skillUser].Damage);
  }
  else
  {
    console.log('no comment');
    
  }
  
}
else
{
  console.log('no skill');
  
}




// let sumEveryTable = 0
// for(let k in )



// let quizzes = [
//     {
//     question: 'con nhen co may chan?',
//     choices: [
//         '1 chan',
//         '2 chan',
//         '3 chan',
//         '6 chan'
//     ],
//     answer: 3
//     },
//     {
//     question: 'con ga co may chan?',
//     choices: [
//          '10 chan',
//          '9 chan',
//          '2 chan',
//          '6 chan'
//         ],
//         answer: 2 
//     }
// ]
// for(let i = 0; i < quizzes.length; i++)
// {    
//  console.log(quizzes[i].choices);
//  let choices = quizzes[i].choices
//  for(let j = 0; j < choices.length; j++)
//  {
//      console.log(j + 1, choices[j]);
//  }
//   let userChoise = prompt('choose question : 1 or 2 or 3 or 4')
//   if(userChoise -1 == quizzes[i].answer)
// {
//     console.log('hurray');
    
// }
// else{
//     console.log('sai');
    
// }
// }


// console.log(quiz.question);
// for(let i = 0; i < quiz.choices.length; i+=1){

//     console.log(i + 1, quiz.choices[i]);
// }
// let userChoise = prompt('choose 1 or 2 or 3 or 4 ')   
// if(userChoise - 1 == quiz.answer)
// {
//     console.log('hurray');
    
// }
// else{
//     console.log('sai mat roi');
    
// }



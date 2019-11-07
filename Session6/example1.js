function checkAnwer(dice, anser, score){
    if(dice < 0.5){
        if(anser == "T"){
            //console.log("yes");
            return score + 1
        }else{
            //console.log("sai r");   
            return score -1
        }
    } else{
        if(anser == "T"){
            //console.log("sai r");
            return score - 1
        } else{
            //console.log("yes");
            return score + 1
        }
    }    
}
function generateQuiz(dice){
    let a = Math.floor(Math.random()*10)  //random number
    let b = Math.floor(Math.random()*10)
    let c = Math.floor((Math.random()+1)*2)
    let res = a + b
    // console.log(dice);
    if(dice < 0.5){
        console.log(`${a} + ${b} = ${res}`);    // show quiz
    } else{
        console.log(`${a} + ${b} = ${c + res}`);
    }    
}



let score = 0
let playing = true
for( let i = 0; playing; i+=1) {
    let dice = Math.random()
    generateQuiz(dice)
    let anser = prompt('T/F?')
    if(playing = "exit") {
        playing = false
    }
    score = checkAnwer(dice, anser, score)    
    console.log(score);
    
}



function removeSpace(text){
    let sentenceNoSpace = ''
    for (let index = 0; index < text.length; index++) {
        if (text[index] !== " ") {
            sentenceNoSpace += text[index];
        }     
    }
    return sentenceNoSpace      
    }
let sent = removeSpace('12 3 4 5 1')
let a = parseInt(sent)
console.log(sent);
console.log(a);


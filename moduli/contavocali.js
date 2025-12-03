function contavocali(word){
    const vocali = 'aeiou'
    let count = 0
    
    for(let i = 0; i <= word.length; i++){
        if(word.includes(vocali[i])){
        count++
        }
    }

    return count
}

module.exports = contavocali;
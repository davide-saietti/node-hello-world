function contavocali(word){
    const vocali = 'aeiouAEIOU'
    let count = 0
    
    for(let i = 0; i < word.length; i++){
        if(vocali.includes(word[i])){
        count++
        }
    }

    return count
}

module.exports = contavocali;
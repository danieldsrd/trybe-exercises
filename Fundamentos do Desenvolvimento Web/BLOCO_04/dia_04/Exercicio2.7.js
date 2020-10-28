function testingWord(stringWord, stringEnding) {
    let newWord;
    let newWord2;
    stringWord = stringWord.toLowerCase();
    stringEnding = stringEnding.toLowerCase();
    if (stringWord.length < stringEnding.length) {
        return("Final de palavra invalido! O final da palavra deve ser menor que a palavra");
    } else {
        for (let i = stringEnding.length-1; i >= 0; i--) {
            newWord += stringEnding[i];
        }
        for (let j = stringWord.length-1; j >= 0;j--) {
            newWord2 += stringWord[j];
        } 
        for (let n = newWord.length -1; n >= 0; n--){
            if(newWord[n] == newWord2[n]) {
                return true;
            } else {
                return false;    
            }
        }             
                 
    }        
}

console.log(testingWord("DANIEL", "iel"))
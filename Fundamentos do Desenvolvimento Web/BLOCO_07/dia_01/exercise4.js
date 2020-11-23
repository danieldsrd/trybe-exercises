const longestWord = (string) => { 
  let words = string.split(' ');
  let biggerWord = '';
  for (let index = 0; index < words.length; index +=1) {
    if (words[index].length > biggerWord.length) {
      biggerWord = words[index];
    }
  }
  return biggerWord;
}  

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'
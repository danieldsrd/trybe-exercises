const arraySkills = ['HTML', 'CSS', 'JavaScript', 'FlexBox', 'Git'];
const phrase = (string) => {  
  let phraseTryber = 'Tryber x aqui!';
  phraseTryber = phraseTryber.split(' ');  
  for (let index = 0; index < phraseTryber.length; index +=1) {
    if (phraseTryber[index] === 'x') {
      phraseTryber[index] = string;      
    }
  }
  return (`${phraseTryber.join(' ')}
`);
}

const message = (phrase, array) => {    
  const text = `Minhas cinco principais habilidades são: 
`;
  const finalText = `
#goTrybe` 
  array.sort();
  let textFull = phrase.concat(text, array.join('\n'), finalText);
  return textFull;
}

console.log(message(phrase('Daniel'), arraySkills));
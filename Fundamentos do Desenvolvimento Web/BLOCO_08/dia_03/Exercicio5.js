
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {  
  const value = names.reduce((acc, name) => acc + name.split('').reduce((accu, letter) => {
    if (letter === 'A' || letter === 'a') {
      return accu + 1;
    } else {
      return accu;
    }
  }, 0), 0);  
  return value;
}

console.log(containsA());

//assert.deepStrictEqual(containsA(), 20);
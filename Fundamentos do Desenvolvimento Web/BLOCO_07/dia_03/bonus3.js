const assert = require('assert');
function removeMiddle(array) {
  const arrayOutput = [];
  if (array.length % 2 !== 0) {
    let value = (array.length/2);
    value = (Math.round(value)-1);       
    arrayOutput.push(array[value]);
    array = array.splice(value,1);   
  }  
  return arrayOutput;
}


const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.strictEqual(typeof removeMiddle, 'function');
assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
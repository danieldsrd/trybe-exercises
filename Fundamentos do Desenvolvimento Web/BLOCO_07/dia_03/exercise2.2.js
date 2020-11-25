const assert = require('assert');

function wordLengths (array) {
  const newArray = [];
  for (let index = 0; index < array.length; index+=1) {
    newArray[index] = array[index].length;
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
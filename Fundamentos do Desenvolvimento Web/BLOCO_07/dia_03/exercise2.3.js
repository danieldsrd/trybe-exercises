const assert = require('assert');
function addAllnumbers(array) {
  let sum = 0;
  for(let index = 0; index < array.length; index+=1) {
    sum += array[index];
  }
  return sum;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
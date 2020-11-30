const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(myRemove([1, 2, 3, 4], 3));
const list = [4, 5, 6, 7];

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'Valor esperado é [1, 2, 4]')
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'Valor não esperado é [1, 2, 3, 4]')
assert.deepStrictEqual(list, [4, 5, 6, 7], 'Valor sofreu alteração');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'Valor esperado é [1, 2, 3, 4]');
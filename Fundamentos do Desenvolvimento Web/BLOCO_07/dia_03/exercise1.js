const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(4, 5);
const exepected2 = sum (0, 0);
const exepected3 = sum(4, '5')
assert.strictEqual(expected, 9, 'Soma de 4 + 5 = 9');
assert.strictEqual(exepected2, 0, 'Soma de 0 + 0 = 0');
assert.strictEqual(exepected3, 9, 'error');
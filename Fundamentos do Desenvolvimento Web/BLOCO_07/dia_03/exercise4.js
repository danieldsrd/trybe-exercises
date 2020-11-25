const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}


assert.strictEqual(typeof myFizzBuzz, 'function');
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Retorno esperado é fizzbuzz');
assert.strictEqual(myFizzBuzz(6), 'fizz', 'Retorno esperado é fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Retorno esperado é buzz');
assert.strictEqual(myFizzBuzz(11), 11, 'Valor esperado é 11');
assert.strictEqual(myFizzBuzz('AR'), false, 'Retorno esperado é false');
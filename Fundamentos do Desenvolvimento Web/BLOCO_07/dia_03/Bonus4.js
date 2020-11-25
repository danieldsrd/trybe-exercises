const assert = require('assert');

const getLargestNumber = (array) => {
  let largestNumber;
  array.sort(function (x, y) {
    return x - y;      
  });
  largestNumber = array[array.length - 1];  
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.strictEqual(typeof getLargestNumber, 'function');

const parameter2 = [200, 8, 2, 50, 1, 7, 99, 10001];
const result2 = 10001;
assert.strictEqual(getLargestNumber(parameter2), result2);

const parameter3 = [10, 2, 1];
const result3 = 10;
assert.strictEqual(getLargestNumber(parameter3), result3);

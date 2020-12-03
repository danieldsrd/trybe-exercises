const assert = require('assert')

const sum = (...args) => {
  if (args.length === 0) {
    return 0;
  } else {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
}

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)
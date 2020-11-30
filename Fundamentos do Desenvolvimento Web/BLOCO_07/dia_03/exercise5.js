const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'Deve retornar que são identicos');
assert.notDeepStrictEqual(obj1, obj3, 'Deve retornar que não sao identicos');
assert.notDeepStrictEqual(obj2, obj3, 'Deve retornar que não são identicos');
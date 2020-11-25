const assert = require('assert');
const greetPeople = (people) => {
  let greeting = 'Hello ';
  let arrayOut = [];
  for (const person in people) {
    arrayOut[person] = greeting + people[person];
  }
  return arrayOut;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeople(parameter);
assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(output, result);
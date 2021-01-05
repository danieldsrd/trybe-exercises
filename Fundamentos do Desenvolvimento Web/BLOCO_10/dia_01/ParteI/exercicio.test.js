const { test } = require('@jest/globals');
const sum = require('./Exercicio');

test('Somatorio', () => {
  expect(sum(4, 5)).toBe(9);
});

test('Somatorio', () => {
  expect(sum(0, 0)).toBe(0);
});

test('Error message', () => {
  expect(sum).toThrowError('parameters must be numbers');
});


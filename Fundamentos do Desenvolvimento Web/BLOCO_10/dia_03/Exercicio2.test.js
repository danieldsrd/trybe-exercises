const { expect } = require('@jest/globals');
const fun = require('./Exercicio1');

test('Testando função numero random', () => {
  fun.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
  expect(fun.randomNumber(4, 2)).toBe(2);
  expect(fun.randomNumber).toHaveBeenCalledTimes(1);
  expect(fun.randomNumber).toHaveBeenLastCalledWith(4, 2);
});
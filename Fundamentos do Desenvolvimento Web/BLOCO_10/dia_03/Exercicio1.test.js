const { test, expect } = require('@jest/globals');
const fun = require('./Exercicio1');

test('Testando função numero random', () => {
  fun.randomNumber = jest.fn().mockReturnValue(10);  
  expect(fun.randomNumber).toHaveBeenCalledTimes(0);
  expect(fun.randomNumber()).toBe(10);
  expect(fun.randomNumber).toHaveBeenCalled();
  expect(fun.randomNumber).toHaveBeenCalledTimes(1);
});
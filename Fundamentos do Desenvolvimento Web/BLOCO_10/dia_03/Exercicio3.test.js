const { expect } = require('@jest/globals');
const fun = require('./Exercicio1');

test('Testando funcão e fazendo implementação para que seja uma multiplição', () => {
  fun.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
  
  expect(fun.randomNumber(4, 2, 2)).toBe(16);
  expect(fun.randomNumber).toHaveBeenCalled();
  expect(fun.randomNumber).toHaveBeenCalledTimes(1);
  expect(fun.randomNumber).toHaveBeenLastCalledWith(4, 2, 2);

  fun.randomNumber.mockReset();
  fun.randomNumber = jest.fn().mockImplementation((a) => a * 2);

  expect(fun.randomNumber(4)).toBe(8);
  expect(fun.randomNumber).toHaveBeenCalled();
  expect(fun.randomNumber).toHaveBeenCalledTimes(1);
  expect(fun.randomNumber).toHaveBeenLastCalledWith(4);
});
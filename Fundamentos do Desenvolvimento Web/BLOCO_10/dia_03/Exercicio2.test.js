const fun = require('./Exercicio2');

test('Testando funcão e fazendo implementação para que seja uma divisão', () => {
  fun.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
  expect(fun.randomNumber(4, 2)).toBe(2);
  expect(fun.randomNumber).toHaveBeenCalledTimes(1);
  expect(fun.randomNumber).toHaveBeenLastCalledWith(4, 2);
});
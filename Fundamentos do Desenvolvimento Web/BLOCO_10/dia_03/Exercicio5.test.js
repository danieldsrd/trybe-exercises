const { expect } = require('@jest/globals');
const funcs = require('./Exercicio4');

test('Primeira função deve retornar a string em caixa baixa depois testa função original', () => {
  funcs.upper = jest
    .spyOn(funcs, 'upper')
    .mockImplementation((str) => str.toLowerCase());

  expect(funcs.upper('A')).toBe('a');
  expect(funcs.upper).toHaveBeenCalled();
  expect(funcs.upper).toHaveBeenCalledTimes(1);

  funcs.upper.mockRestore();
  
  expect(funcs.upper('a')).toBe('A');  
});
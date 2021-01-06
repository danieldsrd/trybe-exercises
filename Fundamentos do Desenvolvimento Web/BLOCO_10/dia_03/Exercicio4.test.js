const { expect } = require('@jest/globals');
const funcs = require('./Exercicio4');

jest.mock('./Exercicio4');

test('Primeira função deve retornar a string em caixa baixa', () => {
  funcs.upper.mockImplementation((str) => str.toLowerCase());

  expect(funcs.upper('a')).toBe('a');
  expect(funcs.upper).toHaveBeenCalled();
  expect(funcs.upper).toHaveBeenCalledTimes(1);
});

test('Segunda função deve retornar a última letra de uma string', () => {
  funcs.splitFun.mockImplementation((str) => {
    str = str.split("");
    return str[str.length - 1];
  });

  expect(funcs.splitFun('daniel')).toBe('l');
  expect(funcs.splitFun).toHaveBeenCalled();
  expect(funcs.splitFun).toHaveBeenCalledTimes(1);
});

test('Terceira função deve receber três strings e concatená-las', () => {
  funcs.concatFun.mockImplementation((a, b, c) => {
    let out = a.concat(b);
    out = out.concat(c);
    return out;
  });

  expect(funcs.concatFun('a', 'b', 'c')).toBe('abc');
  expect(funcs.concatFun).toHaveBeenCalled();
  expect(funcs.concatFun).toHaveBeenCalledTimes(1);
});



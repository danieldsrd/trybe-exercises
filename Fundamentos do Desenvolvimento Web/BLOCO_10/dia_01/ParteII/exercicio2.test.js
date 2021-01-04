const { expect, test } = require('@jest/globals');
const myFunction = require('./exercicio2');
const decode = myFunction.decode;
const encode = myFunction.encode;

test('Verifica se encode é uma função', () => {
  expect(typeof encode).toBe('function');
});

test('Verifica se decode é uma função', () => {
  expect(typeof decode).toBe('function');
});

describe('Testa se as vogais são transformadas em numeros', () => {
  test('Verifica de a é transformada em 1', () => {
    expect(encode('A')).toEqual('1');
  });
  test('Verifica de E é transformada em 2', () => {
    expect(encode('E')).toBe('2');
  });
  test('Verifica de I é transformada em 3', () => {
    expect(encode('I')).toBe('3');
  });
  test('Verifica de O é transformada em 4', () => {
    expect(encode('O')).toBe('4');
  });
  test('Verifica de U é transformada em 5', () => {
    expect(encode('U')).toBe('5');
  });
});

describe('Testando decode', () => {
  test('Verifica de a é transformada em 1', () => {
    expect(decode('1')).toBe('a');
  });
  test('Verifica de 2 é transformada em E', () => {
    expect(decode('2')).toBe('e');
  });
  test('Verifica de 3 é transformada em I', () => {
    expect(decode('3')).toBe('i');
  });
  test('Verifica de 4 é transformada em O', () => {
    expect(decode('4')).toBe('o');
  });
  test('Verifica de 5 é transformada em U', () => {
    expect(decode('5')).toBe('u');
  });
});
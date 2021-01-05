const getUserName = require('./Exercicio2')

describe('Teste para achar usuario por ID', () => {
  test('Retorna o nome do usuario', () => {
    expect.assertions(1);    
    return getUserName(4).then(user => {
      expect(user).toEqual('Mark');      
    });
  });
});

describe('Teste para achar usuario por ID', () => {
  test('Retorna o nome do usuario', () => {
    expect.assertions(1);    
    return getUserName(5).then(user => {
      expect(user).toEqual('Paul');      
    });
  });
});

describe('Teste para achar o erro', () => {
  test('Retorna o erro caso nao exista usuário', () => {
    expect.assertions(1);    
    return getUserName(1).catch(error => {
      expect(error).toEqual({ error: 'User with 1 not found.' });      
    });
  });
});

describe('Teste para achar o erro', () => {
  test('Retorna o erro caso nao exista usuário', () => {
    expect.assertions(1);    
    return getUserName(6).catch(error => {
      expect(error).toEqual({ error: 'User with 6 not found.' });      
    });
  });
});
const getUserName = require('./Exercicio2');

describe('Teste para achar usuario por ID', () => {
  test('Retorna o nome do usuario', async () => {      
    const user = await getUserName(4);    
    expect(user).toEqual('Mark');    
  });
});

describe('Teste para achar usuario por ID', () => {
  test('Retorna o nome do usuario', async () => {      
    const user = await getUserName(5);    
    expect(user).toEqual('Paul');    
  });
});

describe('Teste para achar o erro', () => {
  test('Retorna o erro caso nao exista usuário', async () => {
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }    
  });
});

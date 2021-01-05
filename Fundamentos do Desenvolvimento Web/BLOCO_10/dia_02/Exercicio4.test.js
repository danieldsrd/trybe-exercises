const { expect } = require('@jest/globals');
const getRepos = require('./Exercicio4');

describe('Teste para encontrar repositorios na API', () => {
  it('Teste assincrono de API', () => {
    const api = 'https://api.github.com/users/tryber/repos';
    expect.assertions(2);
    return getRepos(api).then(data => {
      expect(data).toContain('challenge-bug-hunting-youtrybe-squad-1');
      expect(data).toContain('lifecycle-clock');
    });
  });
});

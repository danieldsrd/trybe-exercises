const { expect } = require('@jest/globals');
const api = require('./Exercicio6');

describe('Testando requisição da API', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockRestore);

  test('Testando requisicao em caso de resolve', async () => {
    apiURL.mockResolvedValue('request sucess');

    expect(apiURL()).resolves.toBe('request sucess');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
  });

  test('Testando requisicao em caso de resolve', async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL()).rejects.toBe('request failed');
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
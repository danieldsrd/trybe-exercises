const { test, expect } = require('@jest/globals');
const api = require('./Bonus');

const requestReturn =  {
  id: '7h3oGtrOfxc',
  joke: 'Whiteboards ... are remarkable.',
  status: 200
};

test('Testando fetch', async () => {
  api.fetchJoke = jest.fn().mockResolvedValue(requestReturn.joke); 


  expect(api.fetchJoke()).resolves.toContain(requestReturn.joke);
  expect(api.fetchJoke).toHaveBeenCalled();
  expect(api.fetchJoke).toHaveBeenCalledTimes(1);
});
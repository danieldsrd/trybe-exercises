const uppercase = require('./Exercicio1');

it(`Teste da função uppercase`, done => {
  uppercase('daniel', (str) => {
    expect(str).toBe('DANIEL');    
  });
  done();
});
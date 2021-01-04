const myFunction = require('./exercicio2');
const decode = myFunction.decode;
const encode = myFunction.encode;
const techList = myFunction.techList;
const hydrate = myFunction.hydrate;

test('Verifica se encode é uma função', () => {
  expect(typeof encode).toBe('function');
});

test('Verifica se decode é uma função', () => {
  expect(typeof decode).toBe('function');
});


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



test('Verifica a função encode', () => {
  expect(encode('daniel')).toHaveLength(6);
});
test('Verifica a função encode', () => {
  expect(decode('d1n32l')).toHaveLength(6);
});



describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  })
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
const searchEmployee = require('./bonus');

test('Testando o id de Ana', () => {
  expect(searchEmployee('8579-6', 'firstName')).toEqual('Ana');
});

test('Testando o id de George', () => {
  expect(searchEmployee('5569-4', 'firstName')).toEqual('George');
});

test('Error message', () => {
  expect(searchEmployee).toThrowError('Informação indisponível');
});

test('Testando o id de George', () => {
  expect(searchEmployee('5569-4', 'specialities')).toEqual(['Frontend', 'Redux', 'React', 'CSS']);
});

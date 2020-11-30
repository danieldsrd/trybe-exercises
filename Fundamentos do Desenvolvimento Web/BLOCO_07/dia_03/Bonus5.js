function PasswordVerifier (password) {
  const regex = /[0-9]/
  const upper = /[A-Z]/
  const lower = /[a-z]/
  if (password == null) {
    throw new Error('Password should not be null');
  }
  if (password.length <= 8) {
    throw new Error('Password should be longer than 8 characters'); 
  }
  if (!upper.test(password)) {
    throw new Error('Password should have one uppercase letter at least');
  }
  if (!lower.test(password)) {
    throw new Error('Password should have one lowercase letter at least');
  }
  if (!regex.test(password)) {
    throw new Error('Password should have one number at least');
  }
  return ('Password valid!');
}

console.log(PasswordVerifier('DanielRodrigues1'));

const assert = require('assert');

assert.throws(() => {
  PasswordVerifier('Aaaaaaaaaaaaaa');
}, /^Error: Password should have one number at least$/);
assert.throws(() => {
  PasswordVerifier('aaa');
}, /^Error: Password should be longer than 8 characters$/);
assert.throws(() => {
  PasswordVerifier('aaaaaaaaa');
}, /^Error: Password should have one uppercase letter at least$/);
assert.throws(() => {
  PasswordVerifier('AAAAAAAAAAA');
}, /^Error: Password should have one lowercase letter at least$/);
assert.throws(() => {
  PasswordVerifier();
}, /^Error: Password should not be null$/);

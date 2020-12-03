const assert = require('assert')

// const greet = (string1, string2) => {
//   if (string2 === undefined) {
//     return `Hi ${string1}`;
//   } else {
//     return `${string2} ${string1}`;
//   }
// }
// OUTRA ALTERNATIVA MAIS SIMPLES
const greet = (string1, string2 = 'Hi') => `${string2} ${string1}`;

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")
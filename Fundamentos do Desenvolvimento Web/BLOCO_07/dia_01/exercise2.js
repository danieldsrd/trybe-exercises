const sortOdds = (a, b) => (a - b);
const oddsAndEvens = (array) => (`Os números ${array.sort(sortOdds)} se encontram ordenados de forma crescente!`);

console.log(oddsAndEvens([13, 3, 4, 10, 7, 2]));
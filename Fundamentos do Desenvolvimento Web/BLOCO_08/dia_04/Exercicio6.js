const assert = require('assert')

const palio = ["Palio", "Fiat", 2019]
const shelbyCobra = ["Shelby Cobra", "Ford", 1963]
const chiron = ["Chiron", "Bugatti", 2016]

const toObject = (obj) => {
  return { name:obj[0], brand:obj[1], year:obj[2]}
}

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 })
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 })
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 })
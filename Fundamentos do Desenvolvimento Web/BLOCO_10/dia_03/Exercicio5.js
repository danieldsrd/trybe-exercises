const upper = (str) => str.toUpperCase();

const splitFun = (string) => {
  string = string.split("");
  return string[0];
};

const concatFun = (a, b) => a.concat(b);

module.exports = { upper, splitFun, concatFun };
const randomArray = () => {
  const array = [...Array(10)].map(() => Math.floor(Math.random() * 50));
  return array.map(elem => elem * elem).reduce((acc, value) => acc + value, 0);
}

const division = (sum) => {
  const newArray = [];    
  [2, 3, 5, 10].forEach(elem => {
    let newValue = (sum / elem);
    newArray.push(newValue);
  });
  return newArray;
}


const promise = new Promise((resolve, reject) => {
  const sum = randomArray();
  const array = division(sum);     
  if (sum > 8000) {
    return reject();
  } else {
    resolve(array);    
  }  
})
.then(array => array)
.then(array => array.reduce((acc, value) => acc + value, 0))
.catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
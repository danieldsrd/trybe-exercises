const randomArray = () => {
  const array = [...Array(10)].map(() => Math.floor(Math.random() * 50));
  const sum = array.map(elem => elem * elem).reduce((acc, value) => acc + value, 0);
  if (sum > 8000) throw new Error();
  return sum;
}

const division = (sum) => [2, 3, 5, 10].map(elem => sum / elem);

async function promise() {
  try {
    const sum = await randomArray();
    const array = await division(sum);
    console.log(array);
    console.log(sum);     
  } catch (err) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

promise();
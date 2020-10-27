let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersCrescente = numbers;
let numbersDecrescente = numbers;
// ORDEM CRESCENTE

for (let i = 1; i <  numbersCrescente.length; i++) {
    for (let j = 0; j < i; j++) {        
      if (numbersCrescente[i] < numbersCrescente[j]) {
        let position = numbersCrescente[i];  
        numbersCrescente[i] = numbersCrescente[j];
        numbersCrescente[j] = position;
      }
    }
  }
  console.log(numbersCrescente)


// ORDEM DESCRESCENTE

for (let i = 1; i <  numbersDecrescente.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbersDecrescente[i] > numbersDecrescente[j]) {
        let position = numbersDecrescente[i];  
        numbersDecrescente[i] = numbersDecrescente[j];
        numbersDecrescente[j] = position;
      }
    }
  }
  console.log(numbersDecrescente)

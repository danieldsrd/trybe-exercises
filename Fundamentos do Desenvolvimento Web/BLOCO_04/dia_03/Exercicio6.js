let number = 23;
let divisao = 0;
let contador = 0;
let vetorDivisores = [];

for (let i = 1; i <= number; i +=1 ) {
    divisao = number%i;
    if (divisao == 0) {
        contador = contador + 1;
        vetorDivisores[contador] = i; 
    }
}
if (contador == 2) {
    console.log("Este numero é primo")
} else {
    console.log("Este numero não é primo! Possue " +contador+ " divisores, seus divisores são:"+vetorDivisores)
}
function indiceArray(array) {
    let maiorValor = array[0];
    let indice;    
    for (i=0; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indice = i; 
        }
    }
    return("O indice do maior valor do vetor é " + indice);
}

console.log(indiceArray([2, 3, 6, 7, 10, 1]))

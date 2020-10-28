function indiceArray(array) {
    let menorValor = array[0];
    let indice;    
    for (i=0; i < array.length; i++) {
        if (array[i] < menorValor) {
            maiorValor = array[i];
            indice = i; 
        }
    }
    return("O indice do menor valor do vetor é " + indice);
}

console.log(indiceArray([2, 4, 6, 7, 10, 0, -3]))

let array = [2, 3, 2, 5, 8, 2, 3];

function repeticaoArray(array) { 
    let contador = 0;
    let maiorRepeticao = 0;        
    for (i=0; i < array.length; i++) {
        contador = 0;   
        for (j=0; j < array.length; j++) {
            if (array[i] == array[j]) {
                contador = contador +1;
                if (contador > maiorRepeticao) {
                    numeroRepetido = array[i];
                    maiorRepeticao = contador;
                }
                
            }
        }        
    }
    return('O numero que se mais repete é ' + numeroRepetido + ' se repetiu ' + maiorRepeticao);
}

console.log(repeticaoArray(array))

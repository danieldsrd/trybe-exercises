function maiorNome(nome) {
    let maiorNome = nome[0];
    let indice;
    let contadorLetras = 0;    
    for (i=0; i < nome.length; i++) {
        let count=0;        
        for (j=0; j < nome[i].length; j++) {
            count=count +1;
            if (count > contadorLetras) {
                maiorNome = nome[i];
                contadorLetras = count;
            }        
        }       
    }
    return("O maior nome é " + maiorNome);
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))
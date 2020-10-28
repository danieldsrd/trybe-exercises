function somatorio(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma = soma + i;
    }
    return soma; 
}
console.log("O somatorio é " + somatorio(20));
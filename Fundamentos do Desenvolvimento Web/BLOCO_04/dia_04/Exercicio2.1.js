function verificaPalindrome(palavra) {
    palavra = palavra.toLowerCase();    
    let palindromo = "";
    for (let i = palavra.length - 1; i >= 0; i--) {
        palindromo += palavra[i]        
    }    
    if (palindromo === palavra) {
        return true;
    } else {
        return false;
    }
}
console.log(verificaPalindrome("barata"));



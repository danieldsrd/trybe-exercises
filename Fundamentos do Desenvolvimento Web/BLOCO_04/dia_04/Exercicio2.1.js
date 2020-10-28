let palavra = "arara";
let palindromo = "";

function verificaPalindrome(palavra) {
    for (let i = palavra.length - 1; i >= 0; i--) {
        palindromo += palavra[i]        
    }    
    if (palindromo === palavra) {
        console.log('true');
    } else {
        console.log('false');
    }
}

verificaPalindrome(palavra)



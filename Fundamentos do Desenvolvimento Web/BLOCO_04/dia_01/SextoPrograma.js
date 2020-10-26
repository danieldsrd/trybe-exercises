let pecaXadrez = "rei";
let lower = pecaXadrez.toLocaleLowerCase();
let upper = pecaXadrez.toLocaleUpperCase();

if (lower == "peao") {
    console.log("Movimenta uma casa para frente");
} else if (lower == "bispo") {
    console.log("Movimento qualquer casa apenas nas Diagonais");
} else if (lower == "cavalo") {
    console.log("Movimento em L");
} else if (lower == "torre") { 
    console.log("Movimenta para Frente, trás, direita, esquerda, para qualquer casa");
} else if (lower == "rainha") {
    console.log("Movimenta em todas direções para qualquer casa");
} else if (lower == "rei") {
    console.log("Movimenta apenas uma casa para todas direções")
} else {
    console.log("Essa peça não existe!!")
}
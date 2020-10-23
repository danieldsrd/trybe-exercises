let valorDoProduto =  500;
let valorDaVenda = 2000;

if ((valorDoProduto <= 0) || (valorDaVenda <= 0)) {
    console.log("Valor Invalido!!")
} else {
    custoDoProduto = valorDoProduto + (0.2*valorDoProduto);
    lucro = valorDaVenda - custoDoProduto
    console.log(lucro);
}


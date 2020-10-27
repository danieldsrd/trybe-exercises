let n = 10;
let sum = "";
let asterisco = "*";

if (n > 1) {
    for (i=0; i < n; i +=1) {
        sum += asterisco;
        console.log(sum);        
    }
} else {
    console.log("Valor inválido!");
}

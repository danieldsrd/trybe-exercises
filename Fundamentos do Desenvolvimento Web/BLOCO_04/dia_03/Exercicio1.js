let n = 5;
let sum = "";
let asterisco = "*";
if (n > 1) {
    for (i=0; i < n; i +=1) {
        for (let j=0; j < n; j +=1) {
            sum += asterisco;
        }
        console.log(sum);
        sum = "";
    }
} else {
    console.log("Valor inválido!");
}


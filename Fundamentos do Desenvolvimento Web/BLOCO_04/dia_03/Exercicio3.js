let n = 20;
let sum = "";
let asterisco = "*";
let espaco = " ";

if (n > 1) {
    for (i=0; i < n; i +=1) {
        for (let j=0; j < n; j +=1) {
            if ((j+1)<(n-i)) {
                sum += espaco;
            } else {    
                sum += asterisco;
            }            
        }
        console.log(sum);
        sum = "";
    }
} else {
    console.log("Valor inválido!");
}

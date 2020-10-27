let n = 11;
let sum = "";
let asterisco = "*";
let espaco = " ";

if ((n % 2) != 0) {
    for (i=0; i < n; i +=2) {
        for (let j=0; j < n; j +=1) {
            if ( (j == ((n-i-1)/2)) || (j == ((n+i-1)/2)) )  {
                sum += asterisco;
            } else if ((n-1) == i) {   
                sum += asterisco;
            } else {
                sum += espaco;                
            }          
        }   
        console.log(sum);
        sum = "";
    }
} else {
    console.log("Valor inválido!");
}
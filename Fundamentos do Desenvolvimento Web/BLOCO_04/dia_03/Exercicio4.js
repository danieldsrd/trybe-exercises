let n = 11;
let sum = "";
let asterisco = "*";
let espaco = " ";

if ((n > 1) && (n % 2 == 0)) {
    i = 2;
    for (i; i <= n; i +=2) {
        for (let j=0; j < n; j +=1) {
            if ((j >= ((n-i-1)/2)) && (j <= ((n+i-1)/2)))  {
                sum += asterisco;
            } else if (( (n % 2) == 0) && (n == i)) {   
                sum += asterisco;                     
            } else {
                sum += espaco;                
            }          
        }   
        console.log(sum);
        sum = "";
    }    
} else if ((n > 1) && (n % 2 != 0)) {
    i = 0;
    for (i; i < n; i +=2) {
        for (let j=0; j < n; j +=1) {
            if ((j >= ((n-i-1)/2)) && (j <= ((n+i-1)/2)))  {
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
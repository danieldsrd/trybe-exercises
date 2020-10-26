let salarioBruto =3000;

if (salarioBruto <= 0) {
    console.log ("Salario invalido!");
} else { 
    if (salarioBruto <= 1556.94) {
        salarioBase = salarioBruto - (salarioBruto * 0.08)
    } else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
        salarioBase = salarioBruto - (salarioBruto * 0.09)
    } else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82) {
        salarioBase = salarioBruto - (salarioBruto * 0.11)
    } else {
        salarioBase = salarioBruto - 570.88;
    }
    if (salarioBase < 1903.98) {
        console.log ("Isento de Imposto de Renda");
    } else if (salarioBase > 1903.99 && salarioBase <= 2826.55){
        salarioLiquido = salarioBase - ((salarioBase*0.075) - 142.80);
        console.log("Seu salario liquido é: " + salarioLiquido)
    } else if (salarioBase > 2826.66 && salarioBase <= 3751.05) {
        salarioLiquido = salarioBase - ((salarioBase*0.15)- 354.80);
        console.log("Seu salario liquido é: " + salarioLiquido)
    } else if (salarioBase > 3751.06 && salarioBase <= 4664.68) {
        salarioLiquido = salarioBase - ((salarioBase*0.225)- 636.13);
        console.log("Seu salario liquido é: " + salarioLiquido)
    } else {
        salarioLiquido = salarioBase - ((salarioBase*0.275)- 869.36);
        console.log("Seu salario liquido é: " + salarioLiquido)
    }
}







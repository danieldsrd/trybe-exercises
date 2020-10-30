function sumRoman(value) {
    let romanNumeral = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    value = value.toUpperCase();     
    let sum = 0; 
    let result = 0;
    let i = 0;    
        for (i = 0; i < value.length; i++) {
            result = romanNumeral[value[i]];        
            if ((i+1) == value.length) {
                sum = sum + result;
            } else if ((i < value.length) && (result >= romanNumeral[value[i+1]])) { 
                sum = sum + result;
            } else if ((i < value.length) && (result == romanNumeral[value[i+1]])) {
                sum = sum + result;
            } else if ((i < value.length) && (result <= romanNumeral[value[i+1]])) {
                sum = sum - result;
            }
        }
    return (sum);   
    
}
  
console.log(sumRoman('MLXXXVIII'));

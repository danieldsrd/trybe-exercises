let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let j = 0;
let MultiArray = [];

for (let i=0; i < numbers.length; i += 1) {
    j = i+1;    
    if ( j < numbers.length) {
        MultiArray[i]=numbers[i]*numbers[j];                       
    } else {
        MultiArray.push(numbers[i]*2);
    }   
}
console.log(MultiArray)
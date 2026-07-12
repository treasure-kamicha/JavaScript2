function factorial(number){
    let result =1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
console.log (factorial(6));


function isPrime(number){
 if (number <=1){
     return false;
 }
 for (let i = 2; i < number ; i++) {
     if (number % i === 0) {
         return false;
     }
 }
 return true;
}
console.log (isPrime(11));


function fibonacci(n) {
  let sequence = [0, 1]; 

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence.slice(0, n); 
}


console.log(fibonacci(10));


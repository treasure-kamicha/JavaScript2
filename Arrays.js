function findMaxTemp(temps) {
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
  }
  return max;
}

console.log(findMaxTemp([28, 32, 30, 35, 29]));


function findMinTemp(temps) {
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  return min;
}

// Example:
console.log(findMinTemp([28, 32, 30, 35, 29]));


function SumArray(numbers){
    let sum =0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(SumArray([5,15,25]));

function filterEvenNumbers(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 4 === 0) {   
      result.push(arr[i]);
    }
  }
  return result;
}
 const numbers = [5, 12, 8, 130, 44, 7, 9];
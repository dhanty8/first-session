/*
Lengkapi fungsi isPrime untuk menentukan bilangan prima.
Jika bilangan prima maka return true, jika bukan return false.
*/

function isPrime(num) {
  // Code here
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false

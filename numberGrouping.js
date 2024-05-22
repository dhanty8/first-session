/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  // Code here
  const genap = [];
  const ganjil = [];
  const bagiTiga = [];

  for (const number of numbers) {
    if (number % 2 === 0) {
      genap.push(number);
    }
    if (number % 2 !== 0) {
      ganjil.push(number);
    }
    if (number % 3 === 0) {
      bagiTiga.push(number);
    }
  }

  return [genap, ganjil, bagiTiga];
}

console.log(numberGrouping([1, 2, 4, 6, 8])); // Output: [[2, 4, 8], [1], [6]]

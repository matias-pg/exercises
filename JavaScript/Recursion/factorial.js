function factorial(n) {
  if (n <= 1) return n;
  return n * factorial(n - 1);
}

const expected = 5 * 4 * 3 * 2 * 1;
const result = factorial(5);

console.log(expected, result);

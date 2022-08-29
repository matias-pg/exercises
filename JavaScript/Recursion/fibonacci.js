let callCount = 0;

function fib(n) {
  ++callCount;

  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const expected = 165580141;
const result = fib(41); // Try increasing the number (and above)

console.log(expected, result, `${callCount} calls`);

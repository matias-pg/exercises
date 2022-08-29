let callCount = 0;

function doFib(n, a, b) {
  ++callCount;

  if (n === 0) return a;
  if (n === 1) return b;

  // "Move" to the next pair
  return doFib(n - 1, b, a + b);
}

// Could be done with one function only
// But this is so the function has the same signature as the others
function fib(n) {
  return doFib(n, 0, 1);
}

const expected = 165580141;
const result = fib(41); // Try increasing the number (and above)

console.log(expected, result, `${callCount} calls`);

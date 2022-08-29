let callCount = 0;

// Try adding items to the cache, e.g. 2: 1
const cache = {};

function fib(n) {
  ++callCount;

  if (n <= 1) return n;

  cache[n - 1] ??= fib(n - 1);
  cache[n - 2] ??= fib(n - 2);
  cache[n] ??= cache[n - 1] + cache[n - 2];

  return cache[n];
}

const expected = 165580141;
const result = fib(41); // Try increasing the number (and above)

console.log(expected, result, `${callCount} calls`);

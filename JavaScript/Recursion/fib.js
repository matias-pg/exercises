function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

const cache = { 2: 1 };
let calls = 0; // Check the diff. when adding or removing items from the cache

function cachedFib(n) {
  ++calls;
  if (n <= 1) return n;

  cache[n - 1] ??= cachedFib(n - 1);
  cache[n - 2] ??= cachedFib(n - 2);
  cache[n] ??= cache[n - 1] + cache[n - 2];

  return cache[n];
}

let expected = 165580141;
let result = fib(41);

console.log(expected, result);

expected = 165580141;
result = cachedFib(41);

console.log(expected, result, calls);

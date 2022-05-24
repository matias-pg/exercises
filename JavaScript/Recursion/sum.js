function sum(a, b, ...args) {
  const result = a + b;
  if (!args.length) return result;
  return sum(result, ...args);
}

const expected = 15;
const result = sum(1, 2, 3, 4, 5);

console.log(expected, result);

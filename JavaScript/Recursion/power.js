function power(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);
  return base * power(base, exp - 1);
}

let expected = 3 * 3 * 3 * 3;
let result = power(3, 4);

console.log(expected, result);

expected = 1 / (3 * 3);
result = power(3, -2);

console.log(expected, result);

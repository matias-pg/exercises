// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem

function minMaxSum(numbers) {
  const sum = numbers.reduce((acc, number) => acc + number);
  const minimum = Math.min(...numbers);
  const maximum = Math.max(...numbers);

  return [sum - maximum, sum - minimum];
}

const expected = [16, 24];
const result = minMaxSum([1, 3, 5, 7, 9]);

console.log(expected, result);

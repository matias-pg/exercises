// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem

function lonelyInteger2(numbers) {
  const uniques = new Set();

  numbers.forEach((number) => {
    if (uniques.has(number)) {
      uniques.delete(number);
    } else {
      uniques.add(number);
    }
  });

  // At this point it's guaranteed that the Set has the unique number
  return [...uniques.values()][0];
}

const expected = 4;
const result = lonelyInteger2([1, 2, 3, 4, 3, 2, 1]);

console.log(expected, result);

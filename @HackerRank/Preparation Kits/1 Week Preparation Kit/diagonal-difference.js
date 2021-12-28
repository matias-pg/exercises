// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem

function sumTLtoBR(rows) {
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    sum += rows[i][i];
  }
  return sum;
}

function sumTRtoBL(rows) {
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    const j = rows.length - 1 - i;
    sum += rows[i][j];
  }
  return sum;
}

function diagonalDifference(rows) {
  // TODO: Optimize, this could be done in only one iteration
  const topLeftToBottomRight = sumTLtoBR(rows);
  const topRightToBottomLeft = sumTRtoBL(rows);

  return Math.abs(topLeftToBottomRight - topRightToBottomLeft);
}

const expected = 15; // Math.abs(4 - 19)
const result = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

console.log(expected, result);

// Note: MAD = Minimum Absolute Difference

function pairsWithMinimumAbsoluteDifference(numbers) {
  // To guarantee that the adjacent difference is an absolute value
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  let minDiff = Infinity;
  let pairs = [];

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    const next = sortedNumbers[i + 1];
    const current = sortedNumbers[i];

    const diff = next - current;

    // If a new MAD is found, save it and reset the pairs
    if (diff < minDiff) {
      minDiff = diff;
      pairs = [];
    }

    // Add the pair only if their diff is the MAD
    if (diff === minDiff) pairs.push([current, next]);
  }

  return pairs;
}

const numbers = [16, 2, 22, 7, 23, 1, 24, 29, 11, 4, 17];

// MAD is 1
const expected = [
  [1, 2],
  [16, 17],
  [22, 23],
  [23, 24],
];
const result = pairsWithMinimumAbsoluteDifference(numbers);

console.log(expected);
console.log(result);

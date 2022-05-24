// https://adventjs.dev/challenges/06

/**
 * @param {Number[]} numbers
 * @param {Number} result
 */
export default function sumPairs(numbers, result) {
  for (let i = 0; i < numbers.length; i++) {
    const number1 = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const number2 = numbers[j];

      if (number1 + number2 === result) {
        return [number1, number2];
      }
    }
  }
  return null;
}

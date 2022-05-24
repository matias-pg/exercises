// https://adventjs.dev/challenges/10

const reversedCoins = [
  1,
  2,
  5,
  10,
  20,
  50,
].reverse();

/** @param {Number} change */
export default function getCoins(change) {
  const result = [];
  reversedCoins.forEach((coin, reverseIndex) => {
    const index = reversedCoins.length - 1 - reverseIndex;
    const times = Math.floor(change / coin);

    if (times === 0) {
      result[index] = 0;
      return;
    }

    result[index] = times;
    change -= coin * times;
  });
  return result;
}

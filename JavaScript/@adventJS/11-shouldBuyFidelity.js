// https://adventjs.dev/challenges/11

function getPriceWithFidelity(times) {
  if (times <= 1) return 12 * 0.75;
  return 12 * Math.pow(0.75, times) + getPriceWithFidelity(times - 1);
}

/** @param {Number} times */
export default function shouldBuyFidelity(times) {
  const priceWithoutFidelity = 12 * times;
  const priceWithFidelity = 250 + getPriceWithFidelity(times);

  return priceWithoutFidelity > priceWithFidelity;
}

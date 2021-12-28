// https://adventjs.dev/challenges/08

/**
 * @param {Number[]} prices
 */
export default function maxProfit(prices) {
  let maxProfit = -1;
  for (let i = 0; i < prices.length; i++) {
    const price1 = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      const price2 = prices[j];
      const profit = price2 - price1;

      if (profit > 0 && profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}

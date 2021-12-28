// https://adventjs.dev/challenges/09

/**
 * @param {Array} collection
 * @param {String|Function} it
 */
export default function groupBy(collection, it) {
  return collection.reduce((acc, item) => {
    const key = typeof it === "function" ? it(item) : item[it];

    if (!acc[key]) acc[key] = [];
    acc[key].push(item);

    return acc;
  }, {});
}

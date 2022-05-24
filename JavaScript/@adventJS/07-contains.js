// https://adventjs.dev/challenges/07

export default function contains(store, product) {
  return Object.values(store).some((value) => {
    if (typeof value === "object" && value) return contains(value, product);
    return value === product;
  });
}

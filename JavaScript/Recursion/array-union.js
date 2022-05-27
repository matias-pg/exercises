// Similar to sum.js

function arrayUnion(array1 = [], array2 = [], ...rest) {
  const result = [...array1, ...array2];
  if (!rest.length) return result;
  return arrayUnion(result, ...rest);
}

const expected = ["a", "b", "c", "a", "b", "d", "e", "z", "x", "w", "y"];

const result = arrayUnion(
  ["a", "b", "c"],
  ["a", "b", "d", "e"],
  ["z"],
  ["x"],
  ["w"],
  ["y"]
);

console.log(expected);
console.log(result);

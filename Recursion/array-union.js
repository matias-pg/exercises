// Similar to sum.js

function recursiveArrayUnion(array1 = [], array2 = [], ...rest) {
  const result = [...array1, ...array2];
  if (!rest.length) return result;
  return recursiveArrayUnion(result, ...rest);
}

const expected = ["a", "b", "c", "a", "b", "d", "e", "z", "x", "w", "y"];

const result = recursiveArrayUnion(
  ["a", "b", "c"],
  ["a", "b", "d", "e"],
  ["z"],
  ["x"],
  ["w"],
  ["y"]
);

console.log(expected);
console.log(result);

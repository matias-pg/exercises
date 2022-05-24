function findFirstUpperCase(str) {
  if (!str.length) return "";

  const firstChar = str.charAt(0);
  const isNumber = !isNaN(firstChar); // .toUpperCase() doesn't affect numbers

  if (!isNumber && firstChar === firstChar.toUpperCase()) return str.charAt(0);
  return findFirstUpperCase(str.substring(1));
}

const expected = "R";
const result = findFirstUpperCase("isaac0noRon0caasi");

console.log(expected, result);

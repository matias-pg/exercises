function isPalindrome(str) {
  if (str.length <= 1) return true;

  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);

  if (firstChar !== lastChar) return false;
  return isPalindrome(str.substring(1, str.length - 1));
}

const expected = true;
const result = isPalindrome("isaacnoRoncaasi");

console.log(expected, result);

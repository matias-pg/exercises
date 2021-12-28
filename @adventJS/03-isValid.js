// https://adventjs.dev/challenges/03

export default function isValid(letter) {
  const matches = letter.match(/\([^\)]+\)/g);
  if (!matches) return false;

  return matches.every((match) => !/\(.*[\(\[\]\{\}]+.*\)/.test(match));
}

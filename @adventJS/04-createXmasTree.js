// https://adventjs.dev/challenges/04

function createTreeCrown(width) {
  let result = "";
  for (let i = 1; i <= width; i += 2) {
    const asterisks = "*".repeat(i);
    const remaining = width - asterisks.length;
    const fill = "_".repeat(remaining / 2);
    const line = `${fill}${asterisks}${fill}`;

    result += `${line}\n`;
  }
  return result;
}

function createTreeBase(width) {
  const remainingBase = width - 1;
  const baseFill = "_".repeat(remainingBase / 2);
  const base = `${baseFill}#${baseFill}`;

  return `${base}\n${base}`;
}

export default function createXmasTree(height) {
  const width = height * 2 - 1;

  return createTreeCrown(width) + createTreeBase(width);
}

// https://adventjs.dev/challenges/05

/** @param {Date} date Para autocompletado */
export default function daysToXmas(date) {
  const xmasDate = new Date("2021-12-25");
  date.setHours(0, 0, 0, 0);
  const diff = (xmasDate - date) / (1000 * 60 * 60 * 24);
  return Math.round(diff);
}

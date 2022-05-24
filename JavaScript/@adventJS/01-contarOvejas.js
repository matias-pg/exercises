// https://adventjs.dev/challenges/01

export default function contarOvejas(ovejas) {
  return ovejas.filter(
    ({ name, color }) =>
      color === "rojo" &&
      name.toLowerCase().includes("a") &&
      name.toLowerCase().includes("n")
  );
}

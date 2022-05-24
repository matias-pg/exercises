// https://adventjs.dev/challenges/02

export default function listGifts(letter) {
  return (
    letter
      .split(" ")
      // Filtra cadenas vacías y regalos que empiezan con _
      .filter((gift) => gift && !gift.startsWith("_"))
      // Trackea las veces que se ha repetido un regalo
      .reduce(
        (acc, gift) => ({
          ...acc,
          [gift]: (acc[gift] ?? 0) + 1,
        }),
        {}
      )
  );
}

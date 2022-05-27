defmodule Exercise do
  def array_union([]), do: []

  def array_union([array1 | rest]) when is_list(array1) and rest == [],
    do: array1

  def array_union([array1 | [array2 | rest]]) when is_list(array1) and is_list(array2),
    do: array_union([array1 ++ array2] ++ rest)

  def run() do
    expected = ["a", "b", "c", "a", "b", "d", "e", "z", "x", "w", "y"]

    result =
      array_union([
        ["a", "b", "c"],
        ["a", "b", "d", "e"],
        ["z"],
        ["x"],
        ["w"],
        ["y"]
      ])

    IO.inspect(expected)
    IO.inspect(result)
  end
end

Exercise.run()

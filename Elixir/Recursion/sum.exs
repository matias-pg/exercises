defmodule Exercise do
  def sum([]), do: []

  def sum([a | rest]) when is_number(a) and rest == [],
    do: a

  def sum([a | [b | rest]]) when is_number(a) and is_number(b),
    do: sum([a + b] ++ rest)

  def run() do
    expected = 15
    result = sum([1, 2, 3, 4, 5])

    IO.inspect(expected)
    IO.inspect(result)
  end
end

Exercise.run()

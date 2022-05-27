defmodule Exercise do
  def power(base, 0) when is_number(base), do: 1

  def power(base, exp) when is_number(base) and is_number(exp) and exp < 0,
    do: 1 / power(base, -exp)

  def power(base, exp) when is_number(base) and is_number(exp),
    do: base * power(base, exp - 1)

  def run() do
    expected = 3 * 3 * 3 * 3
    result = power(3, 4)

    IO.inspect(expected)
    IO.inspect(result)

    expected = 1 / (3 * 3)
    result = power(3, -2)

    IO.inspect(expected)
    IO.inspect(result)
  end
end

Exercise.run()

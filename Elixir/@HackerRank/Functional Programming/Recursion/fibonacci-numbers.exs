defmodule Solution do
  def run() do
    n = IO.read(:stdio, :line) |> String.trim() |> String.to_integer()

    IO.puts(fib(n))
  end

  def fib(1), do: 0
  def fib(2), do: 1

  def fib(n) when is_integer(n), do: fib(n - 1) + fib(n - 2)
end

Solution.run()

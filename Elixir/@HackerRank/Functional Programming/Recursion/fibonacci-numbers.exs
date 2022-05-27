# https://www.hackerrank.com/challenges/functional-programming-warmups-in-recursion---fibonacci-numbers/problem

defmodule Solution do
  # In this exercise the count starts at 1
  def fib(1), do: 0
  def fib(2), do: 1

  def fib(n) when is_integer(n), do: fib(n - 1) + fib(n - 2)

  def run() do
    n = IO.read(:stdio, :line) |> String.trim() |> String.to_integer()

    IO.puts(fib(n))
  end
end

Solution.run()

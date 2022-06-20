package main

import (
	"fmt"
)

func main() {
	for i := 0; i <= 20; i++ {
		if i%15 == 0 {
			// If the number is divisible by both 3 and 5
			fmt.Println("FizzBuzz")
		} else if i%3 == 0 {
			// If the number is divisible by 3
			fmt.Println("Fizz")
		} else if i%5 == 0 {
			// If the number is divisible by 5
			fmt.Println("Buzz")
		} else {
			// Otherwise
			fmt.Println(i)
		}
	}
}

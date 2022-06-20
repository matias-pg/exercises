package main

import (
	"fmt"
)

func main() {
	nums := []int{16, 8, 42, 4, 23, 15}

	// use the first number by default
	max := nums[0]

	// loop starting from the second number
	for _, num := range nums[1:] {
		if num > max {
			max = num
		}
	}

	fmt.Println(max)
}

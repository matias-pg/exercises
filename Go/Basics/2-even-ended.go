package main

import (
	"fmt"
	"strconv"
)

func main() {
	count := 0

	// for every pair of 4 digit numbers
	for a := 1000; a <= 9999; a++ {
		for b := a; b <= 9999; b++ { // don't count twice
			n := a * b

			if isEvenEnded(n) {
				count++
			}
		}
	}

	fmt.Println(count)
}

// check if the first and last number are the same
func isEvenEnded(n int) bool {
	// convert the number to a string
	strN := strconv.Itoa(n)

	// check if the number is even ended
	return strN[0] == strN[len(strN)-1]
}

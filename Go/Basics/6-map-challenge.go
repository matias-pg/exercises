package main

import (
	"fmt"
	"strings"
)

func main() {
	text := `
	Needles and pins
	Needles and pins
	Sew me a sail
	To catch me the wind
	`

	words := strings.Fields(text) // split the string by continuous whitespace
	counts := map[string]int{}    // e.g. needles -> 2

	// loop over all words
	for _, word := range words {
		// lowercase them so the count is case insensitive
		lowerWord := strings.ToLower(word)

		// increase the count
		// if the word doesn't exist, the value is increased from 0 to 1
		counts[lowerWord]++
	}

	fmt.Println(counts)
}

package main

import (
	"fmt"
)

// different syntax to interact with slices
func main() {
	colors := []string{"red", "white", "blue"}

	fmt.Println(len(colors))

	separator()

	fmt.Println(colors[0])

	separator()

	fmt.Println(colors[1:])

	separator()

	for i := 0; i < len(colors); i++ {
		fmt.Println(colors[i])
	}

	separator()

	for i := range colors {
		fmt.Println(colors[i])
	}

	separator()

	for i, color := range colors {
		fmt.Printf("%s at %d\n", color, i)
	}

	separator()

	for _, color := range colors {
		fmt.Println(color)
	}

	separator()

	fmt.Println(append(colors, "green"))
	fmt.Println(colors) // original slice is unchanged
}

func separator() {
	fmt.Println("-----")
}

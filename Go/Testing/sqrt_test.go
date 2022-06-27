// check out the history of this file for other versions of this same test

package main

import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"os"
	"strconv"
	"testing"

	"github.com/stretchr/testify/require"
)

type testCase struct {
	value    float64
	expected float64
}

func TestMany(t *testing.T) {
	forEachCase(func(tc testCase) {
		t.Run(fmt.Sprintf("%f", tc.value), func(t *testing.T) {
			res, err := Sqrt(tc.value)
			require.NoError(t, err)
			require.InDelta(t, tc.expected, res, 0.001)
		})
	})
}

// Reads a CSV file containing the test cases for this function, and
// executes a callback for each test case that was found
func forEachCase(callback func(testCase)) {
	// File from where we will get the test cases
	f, err := os.Open("testdata/sqrt_cases.csv")
	if err != nil {
		fmt.Println(err)
	}
	defer f.Close()
	r := csv.NewReader(f)

	for {
		// Read a line from the CSV file
		// Note: this could've been shorter if I used ReadAll() to process all
		// lines at once, but I wanted to try passing a function as argument
		record, err := r.Read()

		// Stop reading if we reached the end of the file
		if err == io.EOF {
			break
		}

		// If there's an error, log it and stop the execution
		if err != nil {
			log.Fatal(err)
		}

		// Parse each column to a float64
		value, _ := strconv.ParseFloat(record[0], 64)
		expected, _ := strconv.ParseFloat(record[1], 64)

		// Call the callback function with the values of the current line
		callback(testCase{value, expected})
	}
}

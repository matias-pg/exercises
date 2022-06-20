// check out the history of this file for a raw test

package main

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestSimple(t *testing.T) {
	val, err := Sqrt(2)
	require.NoError(t, err)
	require.InDelta(t, 1.414214, val, 0.001)
}

type testCase struct {
	value    float64
	expected float64
}

func TestMany(t *testing.T) {
	testCases := []testCase{
		{0.0, 0.0},
		{2.0, 1.414214},
		{9.0, 3.0},
	}

	for _, tc := range testCases {
		t.Run(fmt.Sprintf("%f", tc.value), func(t *testing.T) {
			res, err := Sqrt(tc.value)
			require.NoError(t, err)
			require.InDelta(t, tc.expected, res, 0.001)
		})
	}
}

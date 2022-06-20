package main

import (
	"fmt"
)

func main() {
	stocks := map[string]float64{
		"AMZN": 2087.98,
		"GOOG": 2540.85,
		"MSFT": 287.70, // trailing comma
		// "TSLA": 822.12,
	}

	// number of values
	fmt.Println(len(stocks))

	// get one value
	fmt.Println(stocks["MSFT"])

	// get 0 if a key doesn't exist
	fmt.Println(stocks["TSLA"])

	// use the "comma ok" to check if a key is present
	value, ok := stocks["TSLA"]
	if !ok {
		fmt.Println("TSLA not found")
	} else {
		fmt.Println(value)
	}

	// put an item in the map
	stocks["TSLA"] = 822.12
	fmt.Println(stocks["TSLA"])

	// delete an item from the map
	delete(stocks, "AMZN")
	fmt.Println(stocks["AMZN"])

	// loop over the keys
	for key := range stocks {
		fmt.Println(key)
	}

	// loop over the keys and values
	for key, value := range stocks {
		fmt.Printf("%s -> %.2f\n", key, value)
	}
}

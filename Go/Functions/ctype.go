package main

import (
	"fmt"
	"net/http"
)

func main() {
	ctype, err := contentType("https://linkedin.com")
	if err != nil {
		fmt.Printf("ERROR: %s\n", err)
	} else {
		fmt.Println(ctype)
	}
}

// Returns the value of the Content-Type header from the response of an
// HTTP GET request to a url
func contentType(url string) (string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", err
	}

	// Close the resource containing the body. For more info check:
	// https://pkg.go.dev/net/http#Response
	// https://stackoverflow.com/q/33238518
	defer resp.Body.Close()

	ctype := resp.Header.Get("Content-Type")
	if ctype == "" { // Return an error if Content-Header is not found
		return "", fmt.Errorf("Couldn't find the Content-Type header")
	}

	return ctype, nil
}

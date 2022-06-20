package main

import (
	"fmt"
	"net/http"
)

func main() {
	urls := []string{
		"https://golang.org",
		"https://api.github.com",
		"https://httpbin.org/xml",
	}

	ch := make(chan string)
	for _, url := range urls {
		go returnType(url, ch)
	}

	for range urls {
		fmt.Println(<-ch)
	}
}

func returnType(url string, out chan string) {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("%s -> error: %s\n", url, err)
		return
	}

	defer resp.Body.Close()

	ctype := resp.Header.Get("Content-Type")
	out <- fmt.Sprintf("%s -> %s", url, ctype)
}

package main

import (
	"fmt"
	"log"
	"net/http"
	"strconv"
	"time"
)

var (
	urlTemplate = "https://s3.amazonaws.com/nyc-tlc/trip+data/%s_tripdata_2020-%02d.parquet"
	colors      = []string{"green", "yellow"}
)

// struct that holds the result for each url
type result struct {
	url  string
	size int
	err  error
}

func main() {
	start := time.Now()
	size := 0

	// the channel where the goroutines will send a result
	ch := make(chan result)

	for month := 1; month <= 12; month++ {
		for _, color := range colors {
			url := fmt.Sprintf(urlTemplate, color, month)
			// start goroutines to make the requests concurrently
			go sizeWorker(url, ch)
		}
	}

	// we know how many results to expect
	for i := 0; i < 12*len(colors); i++ {
		// receive a result
		r := <-ch
		if r.err != nil {
			log.Fatal(r.err)
		}
		size += r.size
	}

	duration := time.Since(start)
	fmt.Println(size, duration)
}

func downloadSize(url string) (int, error) {
	req, err := http.NewRequest(http.MethodHead, url, nil)
	if err != nil {
		return 0, err
	}

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return 0, err
	}

	if resp.StatusCode != http.StatusOK {
		return 0, fmt.Errorf(resp.Status)
	}

	return strconv.Atoi(resp.Header.Get("Content-Length"))
}

func sizeWorker(url string, ch chan result) {
	fmt.Println(url)
	// these two lines are cool, I like the syntax
	res := result{url: url}
	res.size, res.err = downloadSize(url)
	ch <- res
}

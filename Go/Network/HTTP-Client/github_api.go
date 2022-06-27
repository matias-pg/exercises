package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
)

type User struct {
	Login    string
	Name     string
	NumRepos int `json:"public_repos"`
}

// Gets information from a GitHub user
func userInfo(login string) (*User, error) {
	url := fmt.Sprintf("https://api.github.com/users/%s", url.PathEscape(login))

	res, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("HTTP status: %s", res.Status)
	}

	var user User

	// Populate the user with the data we got from the API
	dec := json.NewDecoder(res.Body)
	if err := dec.Decode(&user); err != nil {
		return nil, err
	}

	// Return a pointer to the user
	return &user, nil
}

func main() {
	user, err := userInfo("matias-pg")
	if err != nil {
		log.Fatalf("error: %s", err)
	}

	fmt.Printf("%#v\n", user)
}

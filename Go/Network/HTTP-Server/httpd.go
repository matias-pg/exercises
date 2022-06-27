/*
$ curl -d 'Hello world!' http://localhost:8080/key1
key1 set

$ curl http://localhost:8080/key1
Hello world!

$ curl -i http://localhost:8080/key2
HTTP/1.1 404 Not Found
...
Not found
*/
package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

type Server struct {
	db DB
}

// Performs routing by the HTTP method
// POST /{key} - Save the request body as the value of {key}
// GET /{key}  - Get the value of {key}, or 404 if {key} is not found
func (s *Server) Handler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodPost:
		s.postHandler(w, r)
		return
	case http.MethodGet:
		s.getHandler(w, r)
		return
	}
	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func (s *Server) postHandler(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	// Reads up to 1k from the body
	rdr := io.LimitReader(r.Body, 1<<10)

	value, err := io.ReadAll(rdr)
	if err != nil {
		http.Error(w, "Can't read", http.StatusBadRequest)
		return
	}

	key := r.URL.Path[1:] // Trim the leading /

	// Saves the value in the in-memory DB
	s.db.Set(key, value)

	// Writes a message to the response
	fmt.Fprintf(w, "%s set\n", key)
}

func (s *Server) getHandler(w http.ResponseWriter, r *http.Request) {
	key := r.URL.Path[1:] // Trim the leading /

	// Gets the value from the in-memory DB
	value := s.db.Get(key)
	if value == nil {
		http.Error(w, "Not found", http.StatusNotFound)
		return
	}

	// Write the value to the response
	w.Write(value)
}

func main() {
	var s Server

	http.HandleFunc("/", s.Handler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

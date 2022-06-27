package main

import "sync"

// In-memory key/value database
type DB struct {
	m sync.Map
}

// Gets the value of a key
func (db *DB) Get(key string) []byte {
	val, ok := db.m.Load(key)
	if !ok {
		return nil
	}

	return val.([]byte)
}

// Stores the value for a key
func (db *DB) Set(key string, value []byte) {
	db.m.Store(key, value)
}

package main

import (
	"fmt"
	"log"
	"os"
	"strconv"
)

func killServer(pidFile string) error {
	content, err := os.ReadFile(pidFile)
	if err != nil {
		return err
	}

	pid, err := strconv.ParseInt(string(content), 10, 0)
	if err != nil {
		return fmt.Errorf("bad process ID: %w", err)
	}

	fmt.Printf("killing server with pid=%d\n", pid)

	if err := os.Remove(pidFile); err != nil {
		log.Printf("warning: couldn't remove PID file - %s", err)
	}

	return nil
}

func main() {
	if err := killServer("server.pid"); err != nil {
		log.Fatalf("error: %s", err)
	}
}

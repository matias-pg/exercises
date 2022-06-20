package main

import (
	"bytes"
	"fmt"
	"io"
	"os"
)

type Capper struct {
	wtr io.Writer
}

func (c Capper) Write(b []byte) (n int, err error) {
	return c.wtr.Write(bytes.ToUpper(b))
}

func main() {
	c := &Capper{os.Stdout}
	fmt.Fprintln(c, "Hello there")
}

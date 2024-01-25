import { RawBlocks, metadata } from "./example-types";

// Validates that all field names start with `block`
export type HasBlocks<T> = keyof T extends `block${string | number}`
  ? T
  : { "The block names must start with `block`.": never };

type Blocks = HasBlocks<RawBlocks>;

// See the comment above RawBlocks, and come back here
const blocks: Blocks = {
  block1: { data: 1, metadata },
  block2: { data: "1", metadata },
  block3: { data: new Date(), metadata },
};

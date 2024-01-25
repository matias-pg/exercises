import { RawBlocks, metadata } from "./basic-example-types";

export type HasBlocks<T> = keyof T extends `block${number}`
  ? T
  : { "The block names must start with `block`.": never };

type Blocks = HasBlocks<RawBlocks>;

// See the comment above RawBlocks, and come back here
const blocks: Blocks = {
  block1: { data: 1, metadata },
  block2: { data: "1", metadata },
  block3: { data: new Date(), metadata },
};

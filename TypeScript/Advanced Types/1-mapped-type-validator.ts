import { Metadata, RawBlocks, metadata } from "./example-types";

// Validates that all object values are objects that have a `metadata` field
export type HasMetadata<T> = T[keyof T] extends { metadata?: Metadata }
  ? T
  : { "The values must have a `metadata` field.": never };

type Blocks = HasMetadata<RawBlocks>;

// See the comment above RawBlocks, and come back here
const blocks: Blocks = {
  block1: { data: 1, metadata },
  block2: { data: "1", metadata },
  block3: { data: new Date(), metadata },
};

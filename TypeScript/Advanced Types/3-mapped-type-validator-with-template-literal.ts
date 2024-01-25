import { RawBlocks, metadata } from "./example-types";
import { HasMetadata } from "./1-mapped-type-validator";
import { HasBlocks } from "./2-template-literal-validator";

// Validates that all field names start with `block`
// Validates that all object values are objects that have a `metadata` field
type Blocks = HasMetadata<HasBlocks<RawBlocks>>;

// See the comment above RawBlocks, and come back here
const blocks: Blocks = {
  block1: { data: 1, metadata },
  block2: { data: "1", metadata },
  block3: { data: new Date(), metadata },
};

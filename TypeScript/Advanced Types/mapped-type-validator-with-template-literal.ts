import { RawBlocks, metadata } from "./basic-example-types";
import { HasMetadata } from "./mapped-type-validator";
import { HasBlocks } from "./template-literal-validator";

type Blocks = HasMetadata<HasBlocks<RawBlocks>>;

// See the comment above RawBlocks, and come back here
const blocks: Blocks = {
  block1: { data: 1, metadata },
  block2: { data: "1", metadata },
  block3: { data: new Date(), metadata },
};

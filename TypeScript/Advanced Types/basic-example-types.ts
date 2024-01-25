export type Metadata = {
  page: 1;
  totalPages: 10;
  resultsCurrentPage: 10;
  totalResults: 100;
};

export type Block1 = {
  data: number;
  // Comment this field to see what happens
  metadata: Metadata;
};

export type Block2 = {
  data: string;
  // Comment this field to see what happens
  metadata?: Metadata;
};

export type Block3 = {
  data: Date;
  // Comment this field to see what happens
  metadata: Metadata;
};

// Make one of these start with anything other than `block`
// to see what happens in the other files
export type RawBlocks = {
  block1: Block1;
  block2: Block2;
  block3: Block3;
};

export const metadata: Metadata = {
  page: 1,
  totalPages: 10,
  resultsCurrentPage: 10,
  totalResults: 100,
};

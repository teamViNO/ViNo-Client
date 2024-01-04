export interface ExampleResponse {
  example1: number;
  example2: string;
  example3: boolean;
  example4: ExampleChild;
}

export interface ExampleChild {
  child1: string;
  child2: number;
  child3: null;
}

export interface Application {
  parameters: Node[];
  type: 'application';
}

export interface Literal {
  type: 'literal';
  value: string;
}

export type Node = Application | Literal;
export type Program = Node[];

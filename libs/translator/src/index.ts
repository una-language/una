import {
  BaseNodeWithoutComments as ESTreeNode,
  Literal as ESTreeLiteral,
  Program as ESTreeProgram,
} from 'estree';
import { Node, Program } from '@una/ast';

export const translateNode = (node: Node): ESTreeNode => {
  switch (node.type) {
    case 'application':
      return {} as any;

    case 'literal':
      return {
        type: 'Literal',
        value: node.value,
      } as ESTreeLiteral;

    default:
      throw new Error(`Unknown node: ${JSON.stringify(node)}`);
  }
};

export const translate = (program: Program): ESTreeProgram => {
  return {} as any;
};

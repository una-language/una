import { translateNode } from '../src';

describe('Node translator', () => {
  it('should translate a literal', () => {
    const node = { type: 'literal', value: 'x' };

    const result = translateNode(node);
    expect(result).toEqual({ type: 'Literal', value: 'x' });
  });
});

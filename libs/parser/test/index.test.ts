import { parse } from '../src';

describe('Parser', () => {
  it('should parse tokens', () => {
    const tokens = [];
    const ast = parse(tokens);
    expect(ast).toBe([]);
  });
});

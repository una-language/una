import { lex } from '../src';

describe('Lexer', () => {
  it('should lex code to tokens', () => {
    const code = '= a 1';
    const tokens = lex(code);
    expect(tokens).toBe([]);
  });
});

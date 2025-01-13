import { createTranspiler } from '../src';

describe('Transpiler', () => {
  it('should transpile code', () => {
    const transpiler = createTranspiler({ moduleImport: 'import' });
    const code = '= a 1';
    const transpiledCode = transpiler.transpile(code);
    expect(transpiledCode).toBe('');
  });
});

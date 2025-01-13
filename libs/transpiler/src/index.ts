import { Transpiler, TranspilerOptions } from './types';

export const createTranspiler = (options: TranspilerOptions): Transpiler => ({
  transpile: (code: string) => '',
});

import { lex } from '@una/lexer';
import { parse } from '@una/parser';
import { translate } from '@una/translator';
import { generate } from '@una/generator';
import { Transpiler, TranspilerOptions } from './types';

export const createTranspiler = (options: TranspilerOptions): Transpiler => ({
  transpile: (code: string) => {
    const tokens = lex(code);
    const ast = parse(tokens);
    const esAST = translate(ast);
    return generate(esAST);
  },
});

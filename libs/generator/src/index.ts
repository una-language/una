import escodegen from 'escodegen';
import { Program as ESTreeProgram } from 'estree';

export const generate = (program: ESTreeProgram): string =>
  escodegen.generate(program);

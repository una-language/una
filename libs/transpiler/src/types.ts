export type Transpiler = {
  transpile: (code: string) => string;
};

export interface TranspilerOptions {
  moduleImport: 'import' | 'require';
}

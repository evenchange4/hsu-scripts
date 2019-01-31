// @flow

export type BuildArguments = {
  pattern: string,
  esDir: string,
  cjsDir: string,
  ignore: Array<string>,
};

export type FlowArguments = {
  concurrentFiles: number,
  includeGlob: Array<string>,
  excludeGlob: Array<string>,
  type: Array<string>,
  threshold: number,
};

// Note: type for createCLI
export type Yargs = any;
export type Options = {
  [optionName: string]: {
    describe?: string,
    nargs?: number,
    type: 'array' | 'string' | 'number',
    default: any,
  },
};
export type Example = string | [string, string];
export type SingleConfig = {
  name: string,
  description: string,
  examples: Array<Example>,
  handler: any => Promise<void> | void,
  pattern?: boolean,
  version?: string,
  options?: Options,
  epilogue?: string,
};
export type Config =
  | SingleConfig
  | {
      version: string,
      epilogue: string,
      [subCommand: string]: SingleConfig,
    };

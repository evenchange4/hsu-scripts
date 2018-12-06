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

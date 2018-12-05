// @flow
import path from 'path';
import execa from 'execa';
import chalk from 'chalk';
import exec from './exec';
import { type CliArguments } from './type.flow';

const flowCJS = ({
  pattern,
  esDir,
  cjsDir,
  ignore,
}: CliArguments): Promise<void> => {
  const shell = `flow-copy-source ${ignore
    .map(i => `-i ${i}`)
    .join(' ')} ${pattern} ${cjsDir}`;

  return exec(shell);
};

export default flowCJS;

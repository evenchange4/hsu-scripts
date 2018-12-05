// @flow
import exec from './exec';
import { type CliArguments } from './type.flow';

const clean = ({ esDir, cjsDir }: CliArguments) => {
  const shell = `rimraf ${esDir} ${cjsDir}`;

  return exec(shell);
};

export default clean;

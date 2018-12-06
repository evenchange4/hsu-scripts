// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';

const clean = ({ esDir, cjsDir }: BuildArguments) => {
  const shell = `rimraf ${esDir} ${cjsDir}`;

  return exec(shell);
};

export default clean;

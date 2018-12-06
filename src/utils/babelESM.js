// @flow
import path from 'path';
import exec from './exec';
import { type BuildArguments } from './type.flow';

const babelrcPath = path.resolve(__dirname, '../../.babelrc');

const babelESM = ({
  pattern,
  esDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = `NODE_ENV='es' babel ${pattern} --no-babelrc --config-file ${babelrcPath} --out-dir ${esDir} --ignore ${ignore.join(
    ',',
  )}`;

  return exec(shell);
};

export default babelESM;

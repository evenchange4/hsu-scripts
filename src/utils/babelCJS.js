// @flow
import path from 'path';
import exec from './exec';
import { type CliArguments } from './type.flow';

const babelrcPath = path.resolve(__dirname, '../../.babelrc');

const babelCJS = ({ pattern, cjsDir, ignore }: CliArguments): Promise<void> => {
  const shell = `NODE_ENV='cjs' babel ${pattern} --no-babelrc --config-file ${babelrcPath} --out-dir ${cjsDir} --ignore ${ignore.join(
    ',',
  )}`;

  return exec(shell);
};

export default babelCJS;

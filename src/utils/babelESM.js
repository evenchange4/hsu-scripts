// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';
import { babelrcPath } from './constants';
import trimSpaces from './trimSpaces';

const babelESM = ({
  pattern,
  esDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = trimSpaces(
    `NODE_ENV='es' babel ${pattern} \
      --no-babelrc \
      --config-file ${babelrcPath} \
      --out-dir ${esDir} \
      --ignore ${ignore.join(',')}`,
  );

  return exec(shell);
};

export default babelESM;

// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';
import { babelrcPath } from './constants';
import trimSpaces from './trimSpaces';

const babelCJS = ({
  pattern,
  cjsDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = trimSpaces(
    `NODE_ENV='cjs' babel ${pattern} \
      --no-babelrc \
      --config-file ${babelrcPath} \
      --out-dir ${cjsDir} \
      --ignore ${ignore.join(',')}`,
  );

  return exec(shell);
};

export default babelCJS;

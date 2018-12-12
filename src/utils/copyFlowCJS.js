// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';
import trimSpaces from './trimSpaces';

const copyFlowCJS = ({
  pattern,
  cjsDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = trimSpaces(
    `flow-copy-source \
      ${ignore.map(i => `-i ${i}`).join(' ')} \
      ${pattern} ${cjsDir}`,
  );

  return exec(shell);
};

export default copyFlowCJS;

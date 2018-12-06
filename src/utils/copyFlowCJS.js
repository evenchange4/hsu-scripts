// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';

const copyFlowCJS = ({
  pattern,
  cjsDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = `flow-copy-source \
    ${ignore.map(i => `-i ${i}`).join(' ')} \
    ${pattern} ${cjsDir}`;

  return exec(shell);
};

export default copyFlowCJS;

// @flow
import exec from './exec';
import { type BuildArguments } from './type.flow';

const copyFlowESM = ({
  pattern,
  esDir,
  ignore,
}: BuildArguments): Promise<void> => {
  const shell = `flow-copy-source \
    ${ignore.map(i => `-i ${i}`).join(' ')} \
    ${pattern} ${esDir}`;

  return exec(shell);
};

export default copyFlowESM;

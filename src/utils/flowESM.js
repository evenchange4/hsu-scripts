// @flow
import exec from './exec';
import { type CliArguments } from './type.flow';

const flowESM = ({ pattern, esDir, ignore }: CliArguments): Promise<void> => {
  const shell = `flow-copy-source ${ignore
    .map(i => `-i ${i}`)
    .join(' ')} ${pattern} ${esDir}`;

  return exec(shell);
};

export default flowESM;

// @flow
import exec from './exec';
import { type CliArguments } from './type.flow';

const flowCJS = ({ pattern, cjsDir, ignore }: CliArguments): Promise<void> => {
  const shell = `flow-copy-source ${ignore
    .map(i => `-i ${i}`)
    .join(' ')} ${pattern} ${cjsDir}`;

  return exec(shell);
};

export default flowCJS;

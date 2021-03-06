// @flow
import execa from 'execa';
import chalk from 'chalk';
import log from './log';
import { type FlowArguments } from './type.flow';
import trimSpaces from './trimSpaces';

const flowCoverage = async ({
  concurrentFiles,
  includeGlob,
  excludeGlob,
  type,
  threshold,
}: FlowArguments): Promise<void> => {
  const shell = trimSpaces(
    `flow-coverage-report \
      --concurrent-files ${concurrentFiles} \
      ${includeGlob.map(i => `--include-glob '${i}'`).join(' ')} \
      ${excludeGlob.map(e => `--exclude-glob '${e}'`).join(' ')} \
      ${type.map(t => `--type ${t}`).join(' ')} \
      --threshold ${threshold}`,
  );

  try {
    log(`\n> ${shell}`);
    const { stdout } = await execa.shell(shell, { extendEnv: false });
    log(stdout);
    if (!stdout.includes('(0 errors)')) {
      throw new Error(chalk.red('There are flow errors.'));
    }
    if (stdout.includes('no flow')) {
      throw new Error(
        chalk.red('There are some files without @flow annotation.'),
      );
    }
  } catch (error) {
    throw error;
  }
};

export default flowCoverage;

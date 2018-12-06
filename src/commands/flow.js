// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import {
  DEFAULT_CONCURRENT_FILES,
  DEFAULT_INCLUDE_GLOB,
  DEFAULT_EXCLUDE_GLOB,
  DEFAULT_TYPE,
  DEFAULT_THRESHOLD,
} from '../utils/constants';
import { type FlowArguments } from '../utils/type.flow';
import { version } from '../../package.json';

const build = (): FlowArguments => {
  const { concurrentFiles, includeGlob, excludeGlob, type, threshold } = yargs
    .usage(`Usage: ${chalk.green('$0')} flow [options]\n`)
    .strict()
    .options({
      'concurrent-files': {
        nargs: 1,
        type: 'number',
        default: DEFAULT_CONCURRENT_FILES,
      },
      'include-glob': {
        type: 'array',
        default: DEFAULT_INCLUDE_GLOB,
      },
      'exclude-glob': {
        type: 'array',
        default: DEFAULT_EXCLUDE_GLOB,
      },
      type: {
        type: 'array',
        default: DEFAULT_TYPE,
      },
      threshold: {
        nargs: 1,
        type: 'number',
        default: DEFAULT_THRESHOLD,
      },
    })
    .example(`$0 flow`, 'Simple example')
    .example(`$0 flow --threshold 75`, 'Custom threshold value')
    .alias('h', 'help')
    .version(version)
    .alias('v', 'version')
    .locale('en')
    .epilogue(
      'For more information go to https://github.com/rpl/flow-coverage-report',
    )
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;

  return {
    concurrentFiles,
    includeGlob,
    excludeGlob,
    type,
    threshold,
  };
};

export default build;

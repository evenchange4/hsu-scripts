// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { DEFAULT_ES_DIR, DEFAULT_CJS_DIR, DEFAULT_IGNORE } from './constants';
import { type CliArguments } from './type.flow';
import { version } from '../../package.json';

const getCliArguments = (): CliArguments => {
  const {
    _: [pattern],
    esDir,
    cjsDir,
    ignore,
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(1, 1, 'Error: Missing <pattern>')
    .strict()
    .option('e', {
      alias: 'es-dir',
      describe: `Output es module directory.`,
      nargs: 1,
      type: 'string',
    })
    .default('e', DEFAULT_ES_DIR)
    .option('c', {
      alias: 'cjs-dir',
      describe: `Output commonjs module directory.`,
      nargs: 1,
      type: 'string',
    })
    .default('c', DEFAULT_CJS_DIR)
    .option('i', {
      alias: 'ignore',
      describe: `The list of glob paths to **not** compile`,
      nargs: 1,
      type: 'array',
    })
    .default('i', DEFAULT_IGNORE)
    .alias('h', 'help')
    .version(version)
    .alias('v', 'version')
    .locale('en')
    .example(`$0 src`, 'Simple example')
    .example(`$0 src -e 'esm'`, 'Specify es module directory')
    .example(`$0 src -e 'cjs'`, 'Specify commonjs module directory')
    .epilogue(
      'For more information go to https://github.com/evenchange4/hsu-scripts',
    )
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      process.exit(1);
    }).argv;

  return {
    pattern,
    esDir,
    cjsDir,
    ignore,
  };
};

export default getCliArguments;
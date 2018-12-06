// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import {
  DEFAULT_ES_DIR,
  DEFAULT_CJS_DIR,
  DEFAULT_IGNORE,
} from '../utils/constants';
import { type BuildArguments } from '../utils/type.flow';

const build = (): BuildArguments => {
  const {
    _: [, pattern],
    esDir,
    cjsDir,
    ignore,
  } = yargs
    .usage(
      `Usage: ${chalk.green(
        '$0',
      )} build <pattern> [options]\n<pattern>\t Glob pattern to specify files.`,
    )
    .demandCommand(2, 'Error: Missing <pattern>')
    .strict()
    .options({
      'es-dir': {
        describe: `Output es module directory.`,
        nargs: 1,
        type: 'string',
        default: DEFAULT_ES_DIR,
      },
      'cjs-dir': {
        describe: `Output commonjs module directory.`,
        nargs: 1,
        type: 'string',
        default: DEFAULT_CJS_DIR,
      },
      ignore: {
        describe: `The list of glob paths to **not** compile`,
        type: 'array',
        default: DEFAULT_IGNORE,
      },
    })
    .example(`$0 build src`, 'Simple example')
    .example(`$0 build src --es-dir esm`, 'Custom es module directory')
    .example(`$0 build src --cjs-dir 'cjs'`, 'Custom commonjs module directory')
    .example(`$0 build src -i '__specs__' '**/*.spec.js'`)
    .version(false)
    .alias('h', 'help')
    .locale('en')
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;

  return {
    pattern,
    esDir,
    cjsDir,
    ignore,
  };
};

export default build;

// @flow
/* eslint no-unused-expressions: 0, no-console: 0 */
import * as R from 'ramda';
import yargs from 'yargs';
import chalk from 'chalk';
import {
  genUsage,
  genDemandCommand,
  genStrict,
  genOptions,
  genExample,
  genVersion,
  genHelp,
  genLocale,
  genError,
  genCommand,
  genEpilogue,
} from './yargs-helper';
import { type Config } from './type.flow';

const createCLI = (config: Config) => async () => {
  const subcommand = process.argv[2];

  // Note: show help
  if (!config.handler && !config[subcommand]) {
    const pipeFixForFlowType = R.pipe(
      genDemandCommand(),
      genCommand(
        R.pipe(
          R.omit(['version', 'epilogue']),
          R.values,
        )(config),
      ),
      genEpilogue(config.epilogue),
      genVersion(config.version),
    );
    R.pipe(
      pipeFixForFlowType,
      genHelp(),
      genLocale(),
      genError(),
    )(yargs).argv;

    console.error(chalk.red(`${subcommand} not found.`));
    yargs.showHelp();
    process.exit(1);

    return;
  }

  if (subcommand) {
    const subcommandConfig = config[subcommand];
    const pipeFixForFlowType = R.pipe(
      genUsage(subcommandConfig.name, subcommandConfig.pattern),
      genDemandCommand(subcommandConfig.pattern),
      genOptions(subcommandConfig.options),
      genExample(subcommandConfig.examples),
      genVersion(subcommandConfig.version),
      genEpilogue(subcommandConfig.epilogue),
    );
    const { argv } = R.pipe(
      pipeFixForFlowType,
      genStrict(),
      genHelp(),
      genLocale(),
      genError(),
    )(yargs);

    await subcommandConfig.handler({
      ...argv,
      ...(subcommandConfig.pattern ? { pattern: argv._[1] } : {}),
    });
  }
};

export default createCLI;

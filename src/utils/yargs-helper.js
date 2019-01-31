// @flow
/* eslint no-console: 0 */
import chalk from 'chalk';
import { type Yargs, type Options, type Example } from './type.flow';

export const genUsage = (name: string, pattern?: boolean) => (
  y: Yargs,
): Yargs =>
  y.usage(
    `Usage: ${chalk.green('$0')} ${name} ${
      pattern
        ? `<pattern> [options]\n<pattern>\t Glob pattern to specify files.`
        : '[options]'
    }`,
  );
export const genDemandCommand = (pattern?: boolean) => (y: Yargs): Yargs =>
  pattern
    ? y.demandCommand(2, 'Error: Missing <pattern>')
    : y.demandCommand(1, 1, 'Error: Missing <command>');
export const genStrict = () => (y: Yargs): Yargs => y.strict();
export const genOptions = (options?: Options) => (y: Yargs): Yargs =>
  options ? y.options(options) : y;
export const genExample = (examples: Array<Example> = []) => (
  y: Yargs,
): Yargs => {
  examples.forEach(example =>
    typeof example === 'string' ? y.example(example) : y.example(...example),
  );
  return y;
};
export const genVersion = (version?: string) => (y: Yargs): Yargs =>
  version ? y.version(version).alias('v', 'version') : y.version(false);
export const genHelp = () => (y: Yargs): Yargs => y.alias('h', 'help');
export const genLocale = () => (y: Yargs): Yargs => y.locale('en');
export const genError = () => (y: Yargs): Yargs =>
  y.fail((msg, err) => {
    if (err) throw err; // preserve stack
    console.error(chalk.red(msg));
    y.showHelp();
    process.exit(1);
  });
export const genCommand = (
  commands: Array<{ name: string, description: string }>,
) => (y: Yargs): Yargs => {
  commands.forEach(({ name, description }) =>
    y.command({
      command: chalk.green(name),
      desc: description,
    }),
  );
  return y;
};
export const genEpilogue = (epilogue?: string) => (y: Yargs): Yargs =>
  epilogue ? y.epilogue(epilogue) : y;

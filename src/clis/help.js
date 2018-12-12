/* eslint no-unused-expressions: 0 */
// @flow
import yargs from 'yargs';
import chalk from 'chalk';
import { version } from '../../package.json';

const help = () => {
  yargs
    .demandCommand(1, 1, 'Error: Missing <command>')
    .command({
      command: chalk.green('build'),
      desc: 'The babel build command.',
    })
    .command({
      command: chalk.green('flow'),
      desc: 'The flow-coverage-report command.',
    })
    .alias('v', 'version')
    .alias('h', 'help')
    .version(version)
    .locale('en')
    .epilogue(
      'For more information go to https://github.com/evenchange4/hsu-scripts',
    )
    .fail((msg, err) => {
      if (err) throw err; // preserve stack
      console.error(chalk.red(msg)); // eslint-disable-line
      yargs.showHelp();
      process.exit(1);
    }).argv;
};

export default help;

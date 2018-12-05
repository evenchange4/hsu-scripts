// @flow
import execa from 'execa';
import chalk from 'chalk';

const exec = async (shell: string) => {
  try {
    console.log(`\n> ${shell}`); // eslint-disable-line
    const { stdout = 'done' } = await execa.shell(shell, { extendEnv: false });
    console.log(chalk.gray(stdout)); // eslint-disable-line
  } catch (error) {
    throw error;
  }
};

export default exec;

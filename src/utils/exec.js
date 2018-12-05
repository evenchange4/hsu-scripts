// @flow
import execa from 'execa';
import chalk from 'chalk';

const exec = async (shell: string) => {
  try {
    console.log(`\n> ${shell}`);
    const { stdout } = await execa.shell(shell, { extendEnv: false });
    if (stdout) console.log(chalk.gray(stdout));
  } catch (error) {
    throw error;
  }
};

export default exec;

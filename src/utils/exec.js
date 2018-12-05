// @flow
import execa from 'execa';
import chalk from 'chalk';

const exec = async (shell: string) => {
  try {
    const { stdout } = await execa.shell(shell, { extendEnv: false });
    console.log(`> ${shell}\n${chalk.gray(stdout)}\n`);
  } catch (error) {
    throw error;
  }
};

export default exec;

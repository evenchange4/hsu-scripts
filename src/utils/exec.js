// @flow
import execa from 'execa';
import log from './log';

const exec = async (shell: string) => {
  try {
    log(`\n> ${shell}`);
    const { stdout } = await execa.shell(shell, { extendEnv: false });
    if (stdout) {
      log(stdout);
    } else {
      log('Done');
    }
  } catch (error) {
    throw error;
  }
};

export default exec;

// @flow
import chalk from 'chalk';
import {
  babelCJS,
  babelESM,
  clean,
  flowCJS,
  flowESM,
  getCliArguments,
} from './index';

const run = async () => {
  const { pattern, esDir, cjsDir, ignore } = getCliArguments();

  try {
    await clean({ pattern, esDir, cjsDir, ignore });
    await babelCJS({ pattern, esDir, cjsDir, ignore });
    await babelESM({ pattern, esDir, cjsDir, ignore });
    await flowCJS({ pattern, esDir, cjsDir, ignore });
    await flowESM({ pattern, esDir, cjsDir, ignore });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default run;
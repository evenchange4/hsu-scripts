// @flow
import {
  babelCJS,
  babelESM,
  clean,
  flowCJS,
  flowESM,
  getCliArguments,
} from './index';

const { pattern, esDir, cjsDir, ignore } = getCliArguments();

const run = async () => {
  await clean({ pattern, esDir, cjsDir, ignore });
  await babelCJS({ pattern, esDir, cjsDir, ignore });
  await babelESM({ pattern, esDir, cjsDir, ignore });
  await flowCJS({ pattern, esDir, cjsDir, ignore });
  await flowESM({ pattern, esDir, cjsDir, ignore });
};

export default run;
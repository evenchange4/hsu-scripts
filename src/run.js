// @flow
import { build, flow, help } from './clis/index';
import {
  babelCJS,
  babelESM,
  clean,
  copyFlowCJS,
  copyFlowESM,
  flowCoverage,
} from './index';

const run = async () => {
  const subCommand: ?string = process.argv[2];

  try {
    switch (subCommand) {
      case 'build': {
        const cliArguments = build();
        await clean(cliArguments);
        await babelCJS(cliArguments);
        await babelESM(cliArguments);
        await copyFlowCJS(cliArguments);
        await copyFlowESM(cliArguments);
        break;
      }
      case 'flow': {
        const cliArguments = flow();
        await flowCoverage(cliArguments);
        break;
      }

      case 'help':
      default: {
        help();
        break;
      }
    }
  } catch (error) {
    console.error(error); // eslint-disable-line
    process.exit(1);
  }
};

export default run;

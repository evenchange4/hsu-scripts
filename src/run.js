// @flow
import { babelCJS, babelESM, clean, copyFlowCJS, copyFlowESM } from './index';
import { build, help } from './commands/index';

const run = async () => {
  const subCommand = process.argv[2];

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

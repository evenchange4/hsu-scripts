// @flow
import {
  babelCJS,
  babelESM,
  clean,
  copyFlowCJS,
  copyFlowESM,
  flowCoverage,
} from './index';
import {
  DEFAULT_ES_DIR,
  DEFAULT_CJS_DIR,
  DEFAULT_IGNORE,
  DEFAULT_CONCURRENT_FILES,
  DEFAULT_INCLUDE_GLOB,
  DEFAULT_EXCLUDE_GLOB,
  DEFAULT_TYPE,
  DEFAULT_THRESHOLD,
} from './utils/constants';
import createCLI from './utils/createCLI';
import {
  type SingleConfig,
  type Config,
  type BuildArguments,
  type FlowArguments,
} from './utils/type.flow';
import { version } from '../package.json';

const BUILD_CONFIG: SingleConfig = {
  name: 'build',
  description: 'The babel build command.',
  pattern: true,
  options: {
    'es-dir': {
      describe: `Output es module directory.`,
      nargs: 1,
      type: 'string',
      default: DEFAULT_ES_DIR,
    },
    'cjs-dir': {
      describe: `Output commonjs module directory.`,
      nargs: 1,
      type: 'string',
      default: DEFAULT_CJS_DIR,
    },
    ignore: {
      describe: `The list of glob paths to **not** compile`,
      type: 'array',
      default: DEFAULT_IGNORE,
    },
  },
  examples: [
    [`$0 build src`, 'Simple example'],
    [`$0 build src --es-dir esm`, 'Custom es module directory'],
    [`$0 build src --cjs-dir 'cjs'`, 'Custom commonjs module directory'],
    `$0 build src --ignore '__specs__' '**/*.spec.js'`,
  ],
  handler: async (argv: BuildArguments) => {
    await clean(argv);
    await babelCJS(argv);
    await babelESM(argv);
    await copyFlowCJS(argv);
    await copyFlowESM(argv);
  },
};

const FLOW_CONFIG: SingleConfig = {
  name: 'flow',
  description: 'The flow-coverage-report command.',
  pattern: false,
  options: {
    'concurrent-files': {
      nargs: 1,
      type: 'number',
      default: DEFAULT_CONCURRENT_FILES,
    },
    'include-glob': {
      type: 'array',
      default: DEFAULT_INCLUDE_GLOB,
    },
    'exclude-glob': {
      type: 'array',
      default: DEFAULT_EXCLUDE_GLOB,
    },
    type: {
      type: 'array',
      default: DEFAULT_TYPE,
    },
    threshold: {
      nargs: 1,
      type: 'number',
      default: DEFAULT_THRESHOLD,
    },
  },
  examples: [
    [`$0 flow`, 'Simple example'],
    [`$0 flow --threshold 75`, 'Custom threshold value'],
  ],
  epilogue:
    'For more information go to https://github.com/rpl/flow-coverage-report',
  handler: async (argv: FlowArguments) => {
    await flowCoverage(argv);
  },
};

const CONFIG: Config = {
  version,
  epilogue:
    'For more information go to https://github.com/evenchange4/hsu-scripts',
  build: BUILD_CONFIG,
  flow: FLOW_CONFIG,
};

export default createCLI(CONFIG);

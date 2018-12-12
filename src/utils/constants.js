// @flow
import path from 'path';

export const babelrcPath = path.resolve(__dirname, '../../.babelrc');

// Note: Build
export const DEFAULT_ES_DIR = 'es';
export const DEFAULT_CJS_DIR = 'lib';
export const DEFAULT_IGNORE = ['__tests__', '**/*.test.js', '**/*.example.js'];

// Note: flow
export const DEFAULT_CONCURRENT_FILES = 5;
export const DEFAULT_INCLUDE_GLOB = ['**/*.js'];
export const DEFAULT_EXCLUDE_GLOB = [
  'node_modules/**',
  'public/**',
  '.next/**',
  'coverage/**',
  'storybook-static/**',
  'flow-typed/**',
  'lib/**',
  'es/**',
];
export const DEFAULT_TYPE = ['text'];
export const DEFAULT_THRESHOLD = 90;

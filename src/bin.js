// @flow
/* eslint no-console: 0 */
import run from './cli';

(async () => {
  try {
    await run();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

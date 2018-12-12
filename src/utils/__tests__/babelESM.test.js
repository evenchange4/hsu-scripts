// @flow
import babelESM from '../babelESM';

const mockCliArguments = {
  pattern: 'pattern',
  cjsDir: 'cjsDir',
  esDir: 'esDir',
  ignore: ['ignore'],
};
const cli = `NODE_ENV='es' babel pattern --no-babelrc --config-file /__dirname/../../.babelrc --out-dir esDir --ignore ignore`;

it('should exec babelESM correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  await babelESM(mockCliArguments);
  expect(spy.mock.calls[0][0]).toContain(cli);
  spy.mockRestore();
});

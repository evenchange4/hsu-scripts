// @flow
import babelCJS from '../babelCJS';

const mockCliArguments = {
  pattern: 'pattern',
  cjsDir: 'cjsDir',
  esDir: 'esDir',
  ignore: ['ignore'],
};
const cli = `NODE_ENV='cjs' babel pattern --no-babelrc --config-file /__dirname/../../.babelrc --out-dir cjsDir --ignore ignore`;

it('should exec babelCJS correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  await babelCJS(mockCliArguments);
  expect(spy.mock.calls[0][0]).toContain(cli);
  spy.mockRestore();
});

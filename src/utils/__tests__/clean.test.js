// @flow
import clean from '../clean';

const mockCliArguments = {
  pattern: 'pattern',
  cjsDir: 'cjsDir',
  esDir: 'esDir',
  ignore: ['ignore'],
};
const cli = `rimraf esDir cjsDir`;

it('should exec clean correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  await clean(mockCliArguments);
  expect(spy.mock.calls[0][0]).toContain(cli);
  spy.mockRestore();
});

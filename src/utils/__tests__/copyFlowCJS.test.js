// @flow
import copyFlowCJS from '../copyFlowCJS';

const mockCliArguments = {
  pattern: 'pattern',
  cjsDir: 'cjsDir',
  esDir: 'esDir',
  ignore: ['ignore', 'ignore2'],
};
const cli = `flow-copy-source -i ignore -i ignore2 pattern cjsDir`;

it('should exec copyFlowCJS correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  await copyFlowCJS(mockCliArguments);
  expect(spy.mock.calls[0][0]).toContain(cli);
  spy.mockRestore();
});

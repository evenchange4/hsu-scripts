// @flow
import copyFlowESM from '../copyFlowESM';

const mockCliArguments = {
  pattern: 'pattern',
  cjsDir: 'cjsDir',
  esDir: 'esDir',
  ignore: ['ignore', 'ignore2'],
};
const cli = `flow-copy-source -i ignore -i ignore2 pattern esDir`;

it('should exec copyFlowESM correctly', async () => {
  expect.assertions(1);

  const spy = jest.spyOn(global.console, 'log');
  await copyFlowESM(mockCliArguments);
  expect(spy.mock.calls[0][0]).toContain(cli);
  spy.mockRestore();
});

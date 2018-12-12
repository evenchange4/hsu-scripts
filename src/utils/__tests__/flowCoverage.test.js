/* eslint global-require: 0 */
// @flow
const mockCliArguments = {
  concurrentFiles: 5,
  includeGlob: ['includeGlob'],
  excludeGlob: ['excludeGlob'],
  type: ['text'],
  threshold: 100,
};
const cli = `flow-coverage-report --concurrent-files 5 --include-glob 'includeGlob' --exclude-glob 'excludeGlob' --type text --threshold 100`;

it('should exec flowCoverage correctly', async () => {
  expect.assertions(1);
  // Note: Mock override
  const spy = jest.spyOn(global.console, 'log');
  jest.doMock('execa', () => ({
    shell: async () => ({ stdout: '(0 errors)' }),
  }));
  const flowCoverage = require('../flowCoverage').default;

  try {
    await flowCoverage(mockCliArguments);
  } catch (error) {
    expect(error.message).toBeUndefined();
  } finally {
    expect(spy.mock.calls[0][0]).toContain(cli);
    spy.mockRestore();
  }
});

it('should exec flowCoverage with flow erros', async () => {
  expect.assertions(2);
  // Note: Mock override
  const spy = jest.spyOn(global.console, 'log');
  jest.doMock('execa', () => ({
    shell: async () => ({ stdout: '(1 errors)' }),
  }));
  const flowCoverage = require('../flowCoverage').default;

  try {
    await flowCoverage(mockCliArguments);
  } catch (error) {
    expect(error.message).toContain(`There are flow errors.`);
  } finally {
    expect(spy.mock.calls[0][0]).toContain(cli);
    spy.mockRestore();
  }
});

it('should exec flowCoverage with no @flow annotation', async () => {
  expect.assertions(2);
  // Note: Mock override
  const spy = jest.spyOn(global.console, 'log');
  jest.doMock('execa', () => ({
    shell: async () => ({ stdout: '\n no flow \n (0 errors)' }),
  }));
  const flowCoverage = require('../flowCoverage').default;

  try {
    await flowCoverage(mockCliArguments);
  } catch (error) {
    expect(error.message).toContain(
      `There are some files without @flow annotation.`,
    );
  } finally {
    expect(spy.mock.calls[0][0]).toContain(cli);
    spy.mockRestore();
  }
});

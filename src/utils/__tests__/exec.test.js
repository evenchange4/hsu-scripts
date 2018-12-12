/* eslint global-require: 0 */
// @flow

const cli = 'shell';

it('should exec with empty stdout', async () => {
  expect.assertions(2);
  // Note: Mock override
  const spy = jest.spyOn(global.console, 'log');
  jest.doMock('execa', () => ({
    shell: async () => ({ stdout: '' }),
  }));
  const exec = require('../exec').default;

  try {
    await exec(cli);
  } catch (error) {
    expect(error.message).toBeUndefined();
  } finally {
    expect(spy.mock.calls[0][0]).toContain(cli);
    expect(spy.mock.calls[1][0]).toContain(`Done`);
    spy.mockRestore();
  }
});

it('should exec with error', async () => {
  expect.assertions(2);
  // Note: Mock override
  const spy = jest.spyOn(global.console, 'log');
  jest.doMock('execa', () => ({
    shell: async () => {
      throw new Error('error');
    },
  }));
  const exec = require('../exec').default;

  try {
    await exec(cli);
  } catch (error) {
    expect(error.message).toContain(`error`);
  } finally {
    expect(spy.mock.calls[0][0]).toContain(cli);
    spy.mockRestore();
  }
});

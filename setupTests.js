// @flow
jest.mock('execa', () => ({
  shell: async () => ({ stdout: 'mock-stdout' }),
}));
jest.mock('path', () => ({
  resolve: (_, b) => `/__dirname/${b}`,
}));
jest.mock('yargs', () => () => {});

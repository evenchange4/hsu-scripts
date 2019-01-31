// @flow
import * as Modules from '../index';

it('should expose utils functions', () => {
  expect(Modules).toHaveProperty('babelCJS');
  expect(Modules).toHaveProperty('babelESM');
  expect(Modules).toHaveProperty('clean');
  expect(Modules).toHaveProperty('copyFlowCJS');
  expect(Modules).toHaveProperty('copyFlowESM');
  expect(Modules).toHaveProperty('flowCoverage');
});

it('should expose clis functions', () => {
  expect(Modules).toHaveProperty('build');
  expect(Modules).toHaveProperty('flow');
  expect(Modules).toHaveProperty('help');
});

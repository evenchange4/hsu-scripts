// @flow
import * as Modules from '../index';

it('should expose utils functions', () => {
  expect(Modules).toMatchInlineSnapshot(`
Object {
  "__esModule": true,
  "babelCJS": [Function],
  "babelESM": [Function],
  "clean": [Function],
  "cli": [Function],
  "copyFlowCJS": [Function],
  "copyFlowESM": [Function],
  "createCLI": [Function],
  "flowCoverage": [Function],
  "genCommand": [Function],
  "genDemandCommand": [Function],
  "genEpilogue": [Function],
  "genError": [Function],
  "genExample": [Function],
  "genHelp": [Function],
  "genLocale": [Function],
  "genOptions": [Function],
  "genStrict": [Function],
  "genUsage": [Function],
  "genVersion": [Function],
}
`);
});

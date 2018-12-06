# Hsu-scripts

> CLI toolbox for common scripts for npm libraries.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Install

```bash
$ yarn install hsu-scripts flow eslint prettier --dev
```

## Setup configs

### Babel & Eslint

```json
// package.json
{
  "babel": {
    "presets": ["./node_modules/hsu-scripts/babel.js"]
  },
  "eslintConfig": {
    "extends": ["./node_modules/hsu-scripts/eslint.js"]
  }
}
```

### Prettier

```js
// .prettierrc.js
const config = require('hsu-scripts/prettier.config');
module.exports = config;
```

## Usage

```json
// package.json
{
  "scripts": {
    "build": "hsu-scripts build src",
    "test": "NODE_ENV='test' jest",
    "eslint": "eslint ./",
    "flow": "hsu-scripts flow --threshold 75",
    "format": "prettier --write '**/*.{js,json,md,css,yaml,yml}' '*.{js,json,md,css,yaml,yml}'"
  }
}
```

### Build

```bash
$ hsu-scripts build src
```

<details>
<summary>logs</summary>

```bash
$ npm run build

> hsu-scripts build src

> rimraf es lib
> Done

> NODE_ENV='cjs' babel src --no-babelrc --config-file /hsu-scripts/.babelrc --out-dir lib --ignore **tests**,**/\*.test.js,**/\*.example.js
> Successfully compiled 13 files with Babel.

> NODE_ENV='es' babel src --no-babelrc --config-file /hsu-scripts/.babelrc --out-dir es --ignore **tests**,**/\*.test.js,**/\*.example.js
> Successfully compiled 13 files with Babel.

> flow-copy-source -i **tests** -i **/\*.test.js -i **/\*.example.js src lib
> Done

> flow-copy-source -i **tests** -i **/\*.test.js -i **/\*.example.js src es
> Done
```

</details>

### Flow

```bash
$ npm run flow
```

## API

### `hsu-scripts -h`

```bash
hsu-scripts <command>

Commands:
  hsu-scripts build  The babel build command.
  hsu-scripts flow   The flow-coverage-report command.

Options:
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]

For more information go to https://github.com/evenchange4/hsu-scripts
```

### `hsu-scripts build -h`

```bash
Usage: hsu-scripts build <pattern> [options]
<pattern> Glob pattern to specify files.

Options:
  --version   Show version number                                      [boolean]
  --es-dir    Output es module directory.               [string] [default: "es"]
  --cjs-dir   Output commonjs module directory.        [string] [default: "lib"]
  --ignore    The list of glob paths to **not** compile
               [array] [default: ["__tests__","**/*.test.js","**/*.example.js"]]
  -h, --help  Show help                                                [boolean]

Examples:
  hsu-scripts build src                          Simple example
  hsu-scripts build src --es-dir esm             Custom es module directory
  hsu-scripts build src --cjs-dir 'cjs'          Custom commonjs module directory
  hsu-scripts build src -i '__specs__' '**/*.spec.js'
```

### `hsu-scripts flow -h`

```bash
Usage: hsu-scripts flow [options]

Options:
  --version           Show version number                              [boolean]
  --concurrent-files                                       [number] [default: 5]
  --include-glob                                  [array] [default: ["**/*.js"]]
  --exclude-glob                                               [array] [default:
  ["node_modules/**","public/**",".next/**","coverage/**","storybook-static/**",
                                              "flow-typed/**","lib/**","es/**"]]
  --type                                             [array] [default: ["text"]]
  --threshold                                             [number] [default: 90]
  -h, --help          Show help                                        [boolean]

Examples:
  hsu-scripts flow                 Simple example
  hsu-scripts flow --threshold 75  Custom threshold value

For more information go to https://github.com/rpl/flow-coverage-report
```

## Development

- node 11.3.0
- yarn 1.12.3
- react >= 16

```bash
$ yarn install --pure-lockfile
```

## Test

Use tools to build/flow itself.

```bash
$ yarn run build
$ yarn run flow
$ yarn run format
$ yarn run eslint
```

## Example library

- https://github.com/evenchange4/hsu-scripts
- https://github.com/evenchange4/react-overlay-pack
- https://github.com/Mediatek-Cloud/mcs-ui

## Publish

```bash
$ npm version patch
$ git push
$ npm run changelog
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

[build-badge]: https://travis-ci.com/evenchange4/hsu-scripts.svg?branch=master
[build]: https://travis-ci.com/evenchange4/hsu-scripts
[npm-badge]: https://img.shields.io/npm/v/hsu-scripts.svg?style=flat-square
[npm]: https://www.npmjs.org/package/hsu-scripts
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/hsu-scripts.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/hsu-scripts?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/hsu-scripts.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/hsu-scripts.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

// @flow
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
  ],
  plugins: ['prettier', 'jest', 'flowtype', 'react-hooks'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 'error',
    'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['route'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'react/default-props-match-prop-types': [
      'error',
      { allowRequiredDefaults: true },
    ],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
};

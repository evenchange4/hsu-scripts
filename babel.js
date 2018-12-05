// @flow
module.exports = function babelPreset() {
  return {
    presets: ['@babel/preset-react', '@babel/preset-flow'],
    plugins: [
      [
        '@babel/plugin-proposal-class-properties',
        {
          loose: true,
        },
      ],
      [
        'babel-plugin-transform-react-remove-prop-types',
        {
          mode: 'unsafe-wrap',
        },
      ],
    ],
    env: {
      es: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
              modules: false,
            },
          ],
        ],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: true,
            },
          ],
        ],
      },
      cjs: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
            },
          ],
        ],
        plugins: [
          'babel-plugin-add-module-exports',
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: false,
            },
          ],
        ],
      },
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              loose: true,
            },
          ],
        ],
        plugins: [
          'require-context-hook',
          [
            'styled-components',
            {
              ssr: true,
              displayName: true,
              preprocess: false,
              minify: false,
            },
          ],
          [
            '@babel/plugin-transform-runtime',
            {
              useESModules: false,
            },
          ],
        ],
      },
    },
  };
};

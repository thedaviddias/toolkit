const config = require('@thedaviddias/eslint-config/react.cjs')

const overrides = [
  {
    ...config.overrides[0],
    parserOptions: {
      ...config.overrides[0].parserOptions,
      tsconfigRootDir: __dirname,
      project: [
        './tsconfig.eslint.json',
        './config/*/tsconfig.json',
        './packages/*/tsconfig.json',
      ],
    },
  },
]

const eslint = {
  extends: '@thedaviddias/eslint-config/react.cjs',
  root: true,
  overrides,
}

module.exports = eslint

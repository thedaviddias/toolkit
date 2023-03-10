const config = require('./react.cjs')

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:@next/next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  plugins: [...config.plugins],
  rules: {
    ...config.rules,
    '@next/next/no-html-link-for-pages': 0,
  },
}

# @thedaviddias/eslint-config

Custom `eslint-config` configuration for my personal projects.

## Installation

```sh
npm install --save-dev @thedaviddias/eslint-config
```

## Usage

Then add the extends to your `.eslintrc.js`:

```js
module.exports = {
  extends: '@thedaviddias/eslint-config',
  rules: {
    // your overrides
  },
}
```

### Base

```js
{
    "extends": "@thedaviddias/eslint-config"
}
```

### Jest

```js
{
    "extends": "@thedaviddias/eslint-config/jest"
}
```

### Next

```js
{
    "extends": "@thedaviddias/eslint-config/next"
}
```

### React

```js
{
    "extends": "@thedaviddias/eslint-config/react"
}
```

### TypeScript

```js
{
    "extends": "@thedaviddias/eslint-config/typescript"
}
```

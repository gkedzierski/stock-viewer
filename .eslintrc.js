module.exports = {
  root: true,
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  plugins: [
    'react'
  ],
  parser: 'babel-eslint',
  rules: {
    'strict': 0,
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

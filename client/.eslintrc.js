module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['@react-native-community', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    ecmaVersion: 2021,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    quotes: ['error', 'double'],
  },
};

module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    commonjs: true,
    browser: true,
  },
  extends: ['prettier', 'eslint:recommended', 'airbnb-base'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 0,
  },
};

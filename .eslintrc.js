module.exports = {
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/strongly-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.json',
  },
  rules: {
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
  },
};

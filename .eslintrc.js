module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:vue/strongly-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
  },
  rules: {
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'max-len': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-object-spread': 'off',
  },
  ignorePatterns: ['!.*', 'src/vue-socials.d.ts'],
};

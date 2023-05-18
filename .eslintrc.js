module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    amd: true,
    es6: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx', '*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        'no-unused-vars': 'off',
      },
    },
  ],
}

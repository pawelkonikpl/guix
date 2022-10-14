/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true,
    commonjs: true,
  },
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    quotes: ['error', 'single'],
  },
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
}

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/require-default-prop': 'off',
  },

  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/test/*.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],

}

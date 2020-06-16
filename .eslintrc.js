const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: isProd ? [] : [
    'plugin:vue/recommended',
    '@vue/standard',
    '@vue/typescript',
  ],

  rules: {
    'no-console': isProd ? 'error' : 'off',
    'no-debugger': isProd ? 'error' : 'off',
    'vue/require-default-prop': 'off',
  },

  parserOptions: {
    parser: isProd ? '' : '@typescript-eslint/parser',
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

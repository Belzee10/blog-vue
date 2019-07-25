module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/strongly-recommended', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'vue/max-attributes-per-line': [
    //   2,
    //   {
    //     multiline: {
    //       allowFirstLine: true,
    //     },
    //   },
    // ],
    // 'max-len': ['error', { code: 140, ignoreStrings: true, ignoreUrls: true }],
    // 'object-curly-newline': ['error', { ObjectPattern: 'never' }],
    // 'vue/html-closing-bracket-newline': [
    //   'error',
    //   {
    //     singleline: 'never',
    //     multiline: 'always',
    //   },
    // ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential'
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    // 'semi': [2, "never"],
    // 'comma-dangle': ["off", "always-multiline"],
    // 'comma-dangle': ["error", "only-multiline"],
    // 'eol-last': ["error", "always"],
    // 'space-before-function-paren': ["error", "always"],
    // 'no-useless-return': ["off", "always"]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};

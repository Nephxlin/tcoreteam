module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'no-unused-vars': 'warn',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    semi: 2,
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': [
      'error', 'always',
    ],
    'arrow-spacing': [
      'error', {
        before: true,
        after: true,
      },
    ],
    'no-console': 0,
  },
};

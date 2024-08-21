const typescriptEslintPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactNativePlugin = require('eslint-plugin-react-native');
const prettierPlugin = require('eslint-plugin-prettier');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  {
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      react: reactPlugin,
      'react-native': reactNativePlugin,
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }],
      'react/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          multiline: 'ignore',
          ignoreCase: true,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
    },
    ignores: ['node_modules/', 'dist/', 'babel.config.js', 'eslint.config.js'],
  },
];

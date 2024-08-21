module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'prettier',
    'simple-import-sort',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React to be in scope
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'], // Bracket on new line for long props
    'simple-import-sort/imports': 'error', // Automatic import sorting
    'simple-import-sort/exports': 'error', // Automatic export sorting
    'sort-keys': ['error', 'asc', { caseSensitive: false, natural: true }], // Property sorting
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};

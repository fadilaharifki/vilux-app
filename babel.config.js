module.exports = {
  presets: ['@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@theme': './src/theme',
          '@screen': './src/screen',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};

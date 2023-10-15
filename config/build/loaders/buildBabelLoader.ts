export default function buildBabelLoader(isDev: boolean) {
  return {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          // [
          //   'i18next-extract',
          //   {
          //     locales: ['en', 'de'],
          //     keyAsDefaultValue: true
          //   }
          // ],
          isDev && require.resolve('react-refresh/babel')
        ].filter(Boolean)
      }
    },
  }
}

export default function buildTypescriptLoader() {
  return {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
}

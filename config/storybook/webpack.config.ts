import webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'

export default function ({ config }: { config: webpack.Configuration }) {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  if (config.resolve?.modules) {
    config.resolve.modules.push(paths.src)
  }

  if (config.resolve?.extensions) {
    config.resolve.extensions.push('ts', 'tsx')
  }

  if (config.plugins) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __DEV__: false
      })
    )
  }

  // if (config.module?.rules) {
  //   config.module.rules.push(buildTypescriptLoader());
  //   config.module.rules.push(buildCssLoader(true));
  // }

  // if (config.module?.rules) {
  //   config.module.rules.push({
  //     test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  //     use: ['file-loader'],
  //     include: path.resolve(__dirname, '../../../')
  //   })
  // }

  return config
}

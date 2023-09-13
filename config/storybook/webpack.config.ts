import webpack from 'webpack'
import path from 'path'
import buildSvgLoader from '../build/loaders/buildSvgLoader'

export default function ({ config }: { config: webpack.Configuration }) {
  if (config.resolve?.modules) {
    config.resolve.modules.push(path.resolve(__dirname, '..', '..', 'src'))
  }

  if (config.resolve?.extensions) {
    config.resolve.extensions.push('ts', 'tsx')
  }

  if (config.plugins) {
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify('')
      })
    )
  }

  if (config?.module?.rules) {
    config.module.rules.forEach(rule => {
      if (!rule || typeof rule !== 'object') return
      if (rule.test instanceof RegExp && rule.test.test('.svg')) {
        rule.exclude = /\.svg$/
      }
    })

    config.module.rules.push(buildSvgLoader())
  }

  return config
}

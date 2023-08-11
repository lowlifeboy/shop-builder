import type webpack from 'webpack'
import {type BuildOptions} from './types/config'
import buildCssLoader from "./loaders/buildCssLoader";
import buildTypescriptLoader from "./loaders/buildTypescriptLoader";
import buildSvgLoader from "./loaders/buildSvgLoader";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.[jt]sx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = buildTypescriptLoader();

  const svgLoader = buildSvgLoader();

  const urlLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 65536
        }
      }
    ]
  }

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    urlLoader
  ]
}

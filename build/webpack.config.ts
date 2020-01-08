import webpack from 'webpack';
import * as paths from './paths.config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsWebpackPlugin from 'tsconfig-paths-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyjsPligin from 'uglifyjs-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
const isDev = process.argv.includes('--dev');

const webpackConfig: webpack.Configuration = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev && 'inline-source-map',
  entry: {
    main: './src/index.tsx',
  },

  output: {
    path: paths.DIST_DIR,
    filename: isDev ? 'scripts/[name].js' : 'scripts/[name].[hash:8].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: paths.ROOT_DIR + '/tsconfig.json'
      })
    ]
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: [{
        loader: 'cache-loader'
      }, {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          babelrc: false,
          plugins: ['react-hot-loader/babel', '@babel/plugin-syntax-dynamic-import']
        }
      }, {
        loader: 'ts-loader',
        options: {}
      }],
      include: paths.SRC_DIR
    }, {
      test: /\.(css|scss)$/i,
      include: paths.SRC_DIR,
      use: [
        isDev ? 'style-loader' : {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '../'
          }
        },
        {
          loader: 'cache-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: isDev ? true : false,
            modules: true,
            importLoaders: 2
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [require('autoprefixer')]
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: isDev ? true : false,
            sassOptions: {
              includePaths: [paths.STYLE_DIR]
            }
          }
        }]
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
      use: ['file-loader?name=[name].[ext]']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style/[name].[hash:8].css'
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          filename: '[name].bundle.js',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new UglifyjsPligin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsPlugin()
    ],
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    publicPath: "/",
    contentBase: './src',
    historyApiFallback: true,
    open: false,
    hot: true
  }
}
export default webpackConfig;
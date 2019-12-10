const path = require('path')
const { h64 } = require('xxhashjs')
const webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

const root = path.resolve(__dirname)

const getLocalIdent = (context, localIdentName, localName) => {
  const generatedClassname =
    context.resource
      .split(path.join(root, 'src/components'))[1]
      .substr(1)
      .split('.scss')[0]
      .replace(/\//g, '-') +
    '-' +
    localName
  return generatedClassname + '_' + h64(generatedClassname, 0xabcd).toString(36)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|ts)x?$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { getLocalIdent },
              importLoaders: 3,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(svg|eot|otf|ttf|woff2?)$/,
        loader: 'file-loader',
      },
    ],
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}

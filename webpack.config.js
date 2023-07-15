// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodeExternals = require('webpack-node-externals');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/main.ts',
  target: 'node',
  externals: [nodeExternals()],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'runtime',
    },
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[id].[contenthash].js',
    filename: '[name].[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};

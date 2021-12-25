const path = require('path');
const { getLoader } = require('../scripts/utils');

const { loader } = getLoader();

/**
 * @type {(name: string) => import('webpack').Configuration}
 */
module.exports = function (name) {
  return {
    target: `electron-${name}`,
    /**
     * @note
     * mode 为 development 时生成带代码使用 eval 执行
     * 个人猜测这样做的好处是使得代码错误在运行时抛出，因为 eval(字符串) 能避开语法检测
     */
    mode: process.env.NODE_ENV,
    entry: {
      index: path.join(__dirname, `../src/${name}/index.ts`),
    },
    output: {
      // The output directory as **absolute path** (required).
      path: path.join(__dirname, `../dist/${name}`),
      chunkFilename: '[name]-[chunkhash:9].js',
    },
    module: {
      rules: [
        loader === 'babel'
          ? {
            // '.tsx' for Preload-script.
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          }
          : {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'swc-loader',
          },
      ],
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, '../src/renderer'),
        'src': path.join(__dirname, '../src'),
      },
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    optimization: {
      minimize: false,
    },
    node: {
      __dirname: false,
      __filename: false,
    },
  };
};

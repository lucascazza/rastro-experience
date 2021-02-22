const webpack = require('webpack')

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      })
    ]
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  }
}
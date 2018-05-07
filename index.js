module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        const scss = options.loaders.scss.pop()
        scss.options.includePaths = [
          api.resolve('node_modules')
        ]
        options.loaders.scss.push(scss)
        return options
      })

    webpackConfig.module
      .rule('scss')
      .use('sass-loader')
      .tap(options => {
        options.includePaths = [
          api.resolve('node_modules')
        ]
        return options
      })
  })
}

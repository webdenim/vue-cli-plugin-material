module.exports = (api, projectOptions) => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.module
      .rule('css')
        .test(/\.(s)css$/)
          .use('vue-style-loader')
            .loader('vue-style-loader')
            .end()
          .use('css-loader')
            .loader('css-loader')
            .end()
          .use('sass-loader')
            .loader('sass-loader')
            .options({
              includePaths: [
                api.resolve('node_modules')
              ]
            })
  })
}

module.exports = (api, projectOptions) => {
  api.configureWebpack(webpackConfig => {
    const scssRule = webpackConfig.module.rules.find(rule => {
      return rule.test.test('.scss')
    })

    const scssLoader = scssRule.oneOf[1].use.find(rule => {
      return rule.loader === 'sass-loader'
    })

    Object.assign(scssLoader.options, {includePaths: [api.resolve('node_modules')]})
  })
}

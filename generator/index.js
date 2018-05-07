const updateFiles = require('./files')

module.exports = (api, opts) => {
  api.extendPackage({
    dependencies: {
      'material-components-web': '^0.35.0',
      'vue-mdc-adapter': '^0.15.0'
    },
    devDependencies: {
      'node-sass': '^4.9.0',
      'sass-loader': '^7.0.1'
    }
  })

  api.render('./template')

  api.postProcessFiles(files => {
    updateFiles(api, opts, files)
  })
}

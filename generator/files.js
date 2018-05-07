const fs = require('fs')

module.exports = (api, opts, files) => {
  // Update src/main.js
  const mainJS = files['src/main.js']
  if (mainJS) {
    // inject import for registerServiceWorker script into mainJS.js
    let lines = mainJS.split(/\r?\n/g).reverse()
    let lastImportIndex = lines.findIndex(line => line.match(/^import/))

    lines[lastImportIndex] += `\nimport VueMDCAdapter from 'vue-mdc-adapter'`
    lines[lastImportIndex] += `\n`
    lines[lastImportIndex] += `\nVue.use(VueMDCAdapter)`

    files['src/main.js'] = lines.reverse().join('\n')
  }

  // Update public/index.html
  const indexHTML = files['public/index.html']
  if (indexHTML) {
    let lines = indexHTML.split(/\r?\n/g).reverse()
    let title = lines.findIndex((line) => line.match(/^\s*<title/))

    lines[title] += `\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700|Roboto+Mono:400,500|Material+Icons">`

    files['public/index.html'] = lines.reverse().join('\n')
  }
}

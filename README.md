# vue-cli-plugin-material

[vue-cli-plugin-material](https://github.com/webdenim/vue-cli-plugin-material) is a Vue CLI plugin
to help you get started with Material Design Components for Vue.js.

This plugin will:

- Add [Material Components Web](https://github.com/material-components/material-components-web)
and [Vue MDC Adapter](https://github.com/stasson/vue-mdc-adapter) to your project's `dependencies`
- Add node-sass and sass-loader to your project's `devDependencies`
- Configure Webpack for using Material Components Web's Sass (SCSS) files
- Add required import to your `main.js` file
- Add Roboto font and Material Icons to your `index.html`

## Prerequisites

This is a plugin for Vue CLI 3.x, so it's assumed you have [vue-cli](https://github.com/vuejs/vue-cli) installed:

```bash
npm i -g @vue/cli
```

## Installation

Create your new project with Vue CLI:

```bash
vue create my-project
```

Then, go into your project's folder and add the plugin:

```bash
cd my-project
vue add material
```

Finally, serve your project which will be available at http://localhost:8080:

```bash
npm run serve
```

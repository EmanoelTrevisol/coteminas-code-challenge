const path = require('path');

module.exports = {
  outputDir: '../server/dist/public',
  lintOnSave: true,
  runtimeCompiler: true,
  devServer: {
    port: 3000,
  },
  css: {
    loaderOptions: {
      stylus: {
        import: [
          path.resolve(__dirname, './src/assets/styles/variables.styl'),
          path.resolve(__dirname, './src/assets/fonts/fonts.styl'),
        ],
      },
    },
  },
};

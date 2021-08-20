const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: "http://localhost:5400/",
    uniqueName: "mf2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mf2",
      library: { type: "var", name: "mf2" },
      filename: "remoteEntry.js",
      exposes: {
        './Mf2Module': './src/app/mf2/mf2.module.ts',
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    })
  ],
};

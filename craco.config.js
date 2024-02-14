const { CracoAliasPlugin } = require("react-app-alias");

const options = {}; // default is empty for most cases

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "./src",
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
        are specified */
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};

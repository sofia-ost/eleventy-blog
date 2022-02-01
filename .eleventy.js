const { styles } = require("eleventy-plugin-styles");

module.exports = function (config) {
  config.addPlugin(styles, {
    publicDirectory: "styles",
  });

  return {
    dir: {
      input: "src",
      output: "build",
      layouts: "layouts",
    },
  };
};

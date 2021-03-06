const { styles } = require("eleventy-plugin-styles");
const { scripts } = require("eleventy-plugin-scripts");
const htmlmin = require("html-minifier");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt) {
  let metadata = await Image(src, {
    widths: [null],
    urlPath: "/images/",
    outputDir: "./build/images",
    formats: ["png", "avif", "jpeg", "webp"],
  });

  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (config) {
  config.addPlugin(styles, {
    publicDirectory: "styles",
  });

  config.addPlugin(scripts, {
    publicDirectory: "scripts",
  });

  // Minify HTML.
  config.addTransform("htmlmin", function (content, outputPath) {
    if (outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
      });
    }

    return content;
  });

  config.addJavaScriptFunction("image", imageShortcode);

  return {
    dir: {
      data: "data",
      input: "src",
      output: "build",
      layouts: "layouts",
      includes: "components",
    },
  };
};

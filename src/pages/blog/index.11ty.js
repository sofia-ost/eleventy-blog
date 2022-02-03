const header = require("../../components/header.11ty");
const postsPreview = require("../../components/posts_preview.11ty");

module.exports = class {
  data() {
    return {
      lang: "en",
      layout: "base",
      styles: "pages/blog/index.scss",
      scripts: "blog/index.js",
      permalink: "index.html",
    };
  }

  async render(data) {
    return /* html */ `
        ${await header.call(this)}
        <main>
            ${await postsPreview.call(this, data.posts)}
        </main>
    `;
  }
};

const header = require("../../components/header.11ty");
const postsPreview = require("../../components/posts_preview.11ty");
const pagination = require("./pagination");

module.exports = class {
  data() {
    return {
      lang: "en",
      layout: "base",
      styles: "pages/blog/index.scss",
      scripts: "blog/index.js",
      permalink: ({ pagination }) => {
        return pagination.pageNumber === 0
          ? "index.html"
          : `${pagination.pageNumber + 1}/index.html`;
      },
      pagination: {
        data: "posts",
        size: "12",
      },
    };
  }

  async render(data) {
    return /* html */ `
        ${await header.call(this)}
        <main>
          ${await postsPreview.call(this, data.pagination.items)}
          ${await pagination.call(this, data.pagination)}
        </main>
    `;
  }
};

const header = require("../../components/header.11ty");

module.exports = class {
  data() {
    return {
      lang: "en",
      layout: "base",
      styles: "pages/blog/index.scss",
      permalink: "index.html",
    };
  }

  async render() {
    return /* html */ `
        ${await header.call(this)}
        <main>

        </main>
    `;
  }
};

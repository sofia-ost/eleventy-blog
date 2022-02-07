const header = require("../components/header.11ty");

module.exports.data = {
  layout: "base",
};

module.exports.render = async function ({ content }) {
  return /* html */ `
    ${await header.call(this)}
        <main class="main">
            <section class="article">
                <div class="container">
                    ${content}
                </div>
            </section>
        </main>
    `;
};
